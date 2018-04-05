package StepFiles;


import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.number.OrderingComparison.lessThanOrEqualTo;

public class StepDefs10DayForecast {

    WebDriver driverchrome = null;
    List<Integer> maxTemp = null;
    List<Integer> minTemp = null;
    List<Integer> humid = null;
    int max;
    int min;
    int var;
    int locHumid;
    String state;
    String city;

    Response response;

    public void getApiData(String state, String city) {
        response = given().get("http://api.wunderground.com/api/99a8db9a0f3c2e31/forecast10day/q/" + state + "/" + city + ".json");
        this.maxTemp = response.jsonPath().get("forecast.simpleforecast.forecastday.high.fahrenheit");
        this.minTemp = response.jsonPath().get("forecast.simpleforecast.forecastday.low.fahrenheit");
        this.humid = response.jsonPath().get("forecast.simpleforecast.forecastday.avehumidity");

    }

    public void getMaxAndMinTemp(String arg0) {
        WebElement table = (new WebDriverWait(driverchrome, 25))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(" + arg0 + ") > td.temp")).getText();
        String temps[] = temp.split("\\u00b0");
        this.max = Integer.parseInt(temps[0]);
        this.min = Integer.parseInt(temps[1]);
        this.var = max - min;

    }

    public void getHumidity(String arg0) {
        WebElement table = (new WebDriverWait(driverchrome, 25))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String humid = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(" + arg0 + ") > td.humidity")).getText();
        String humidSplit[] = humid.split("\\%");
        this.locHumid = Integer.parseInt(humidSplit[0]);
    }

    @Before
    public void prepTest() {
        System.setProperty("webdriver.chrome.driver", "/Users/williambigno/projectJavaSeleniumCucumber/src/resources/chromedriver");
        driverchrome = new ChromeDriver();
        driverchrome.get("https://weather.com");
        driverchrome.manage().window().maximize();
        driverchrome.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

    }

    @After
    public void testClean(Scenario scenario) throws InterruptedException {
        if (scenario.isFailed()) {
            try {
                byte[] screenshot = ((TakesScreenshot) driverchrome).getScreenshotAs(OutputType.BYTES);
                String testName = scenario.getName();
                scenario.embed(screenshot, "image/png");
                scenario.write(testName);
            } catch (WebDriverException wde) {
                System.err.println(wde.getMessage());
            }
        }
        Thread.sleep(5000);

        driverchrome.close();

    }

    @Given("^Chrome browser launches, and I land on the weatherdotcom main page$")
    public void chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage() {
        String actual = driverchrome.getTitle();
        String expected = "National and Local Weather Radar, Daily Forecast, Hurricane and information from The Weather Channel and weather.com";
        assertThat(actual, equalTo(expected));

    }

    @When("^I am on the main page I will click on the ten day forecast$")
    public void iAmOnTheMainPageIWillClickOnTheTenDayForecast() {
        driverchrome.findElement(By.xpath("//*[text() = 'Find me']")).click();
        WebElement elem = (new WebDriverWait(driverchrome, 25))
                .until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[text() = 'Do you want to save this location?']")));
        if (elem.isDisplayed()) {
            driverchrome.findElement(By.xpath("//button[text() = 'Yes']")).click();
            driverchrome.findElement(By.xpath("//span[text() = '10 Day']")).click();
        } else {
            driverchrome.findElement(By.xpath("//span[text() = '10 Day']")).click();
        }
    }

    @And("^I will confirm I land on the ten day forecast for the local area$")
    public void iWillConfirmILandOnTheTenDayForecastForTheLocalArea() {
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
            if (title1.equalsIgnoreCase("10-Day")) {
                String actual = title1;
                String expected = "10-Day";
                assertThat(actual, equalTo(expected));
                break;
            }
        }

    }

    @And("^I will check day \"([^\"]*)\" and get the max and min temp to confirm its within the expected range$")
    public void iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String arg0) {
        this.getMaxAndMinTemp(arg0);
        assertThat(var, lessThanOrEqualTo(10));
    }

    @Then("^I will get the same days data from the api node \"([^\"]*)\" response to compare that they match$")
    public void iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String arg0) {
        this.getApiData(state, city);

        try {
            int index = Integer.valueOf(arg0);

            int apiMax = maxTemp.get(index);
            int webMax = this.max;
            assertThat(apiMax, equalTo(webMax));


            int apiMin = minTemp.get(index);
            int webMin = this.min;
            assertThat(apiMin, equalTo(webMin));

        }catch (ClassCastException cce) {
            cce.printStackTrace();

        }
    }

    @And("^I will check day \"([^\"]*)\" and get the humidity for each day$")
    public void iWillCheckDayAndGetTheHumidityForEachDay(String arg0) {
        this.getHumidity(arg0);
        Assert.assertNotNull(this.locHumid);
    }

    @Then("^I will get the same days data from the api node \"([^\"]*)\" response to compare that the humidity data matches$")
    public void iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String arg0) {
        this.getApiData(state, city);

        try {
            int index = Integer.valueOf(arg0);

            int apiHumid = this.humid.get(index);
            assertThat(apiHumid, equalTo(this.locHumid));
        }catch (ClassCastException cce) {
            cce.printStackTrace();

        }

    }
}


