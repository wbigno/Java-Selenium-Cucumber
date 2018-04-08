package StepFiles;

import Resource.Driver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.lessThanOrEqualTo;

public class StepdefsHourlyForecast extends Driver{

    private Driver driver;

    public StepdefsHourlyForecast (Driver driver) {
        this.driver = driver;
    }

    private WebDriver driverchrome = null;

    List<Integer> temp = null;
    List<Integer> feelsLike = null;

    int hourlyTemp;
    int hourlyFeelsLike;
    int var;
    String state;
    String city;

    Response response;

    public void getApiData(String state, String city) {
        response = given().get("http://api.wunderground.com/api/99a8db9a0f3c2e31/hourly/q/" + state + "/" + city + ".json");
        this.temp = response.jsonPath().get("hourly_forecast.temp.english");
        this.feelsLike = response.jsonPath().get("hourly_forecast.feelslike.english");
    }

    public void getTemp(String arg0) {
        WebElement table = (new WebDriverWait(driverchrome, 25))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp1 = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(" + arg0 + ") > td.temp")).getText();
        String temp2[] = temp1.split("\\u00b0");
        this.hourlyTemp = Integer.parseInt(temp2[0]);
    }

    public void getFeelsLike(String arg0) {

        WebElement table = (new WebDriverWait(driverchrome, 25))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String feelslike1 = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(" + arg0 + ") > td.feels")).getText();
        String feelslike2[] = feelslike1.split("\\u00b0");
        this.hourlyFeelsLike = Integer.parseInt(feelslike2[0]);
    }

    @When("^I am on the main page I will click on the hourly forecast$")
    public void iAmOnTheMainPageIWillClickOnTheHourlyForecast() {
        driverchrome = driver.driverchrome;
        driverchrome.findElement(By.xpath("//*[text() = 'Find me']")).click();
        WebElement elem = (new WebDriverWait(driverchrome, 25))
            .until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[text() = 'Do you want to save this location?']")));
        if (elem.isDisplayed()) {
            driverchrome.findElement(By.xpath("//button[text() = 'Yes']")).click();
            driverchrome.findElement(By.xpath("//span[text() = 'Hourly']")).click();
        } else {
            driverchrome.findElement(By.xpath("//span[text() = 'Hourly']")).click();
        }
    }

    @And("^I will confirm I land on the hourly forecast for the local area$")
    public void iWillConfirmILandOnTheHourlyForecastForTheLocalArea() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        String location = driverchrome.findElement(By.xpath("//span[@class='styles-xz0ANuUJ__locationName__1t7rO']")).getText();
        String locsplit[] = location.split("\\,");
        city = locsplit[0];
        state = locsplit[1];

        String title = driverchrome.getTitle();
        String titles[] = title.split("\\ ");
        for (String title1 : titles) {
            if (title1.equalsIgnoreCase("Hourly")) {
                String actual = title1;
                String expected = "Hourly";
                assertThat(actual, equalTo(expected));
                break;
            }
        }
    }

    @And("^I will check day \"([^\"]*)\" and get the temp and feels like to confirm its within the expected range$")
    public void iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String arg0) {
        this.getTemp(arg0);
        this.getFeelsLike(arg0);
        var = this.hourlyTemp - this.hourlyFeelsLike;
        assertThat(var, lessThanOrEqualTo(10));
    }

    @Then("^I will get the temp and feels like data from the api node \"([^\"]*)\" response to compare that they match the website$")
    public void iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String arg0) {
        this.getApiData(state, city);

        try {
            int index = Integer.parseInt(arg0);

            int apiTemp = temp.indexOf(index);
            int webTemp = this.hourlyTemp;
            assertThat(apiTemp, equalTo(webTemp));

            int apiFeelsLike = feelsLike.get(index);
            int webFeelsLike = this.hourlyFeelsLike;
            assertThat(apiFeelsLike, equalTo(webFeelsLike));

        }catch (ClassCastException cce) {
            cce.printStackTrace();
        }
    }
}
