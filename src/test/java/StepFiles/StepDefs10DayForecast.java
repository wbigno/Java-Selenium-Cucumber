package StepFiles;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.util.concurrent.TimeUnit;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.number.OrderingComparison.lessThanOrEqualTo;

public class StepDefs10DayForecast {

    WebDriver driverchrome = null;

    @Before
    public void prepTest() {
        System.setProperty("webdriver.chrome.driver", "/Users/williambigno/projectJavaSeleniumCucumber/src/resources/chromedriver");
        driverchrome = new ChromeDriver();
        driverchrome.get("https://weather.com");
        driverchrome.manage().window().maximize();
        driverchrome.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

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
            } catch (ClassCastException cce) {
                cce.printStackTrace();}
        }
        Thread.sleep(5000);

        driverchrome.close();

    }

    @Given("^Chrome browser launches, and I land on the weatherdotcom main page$")
    public void chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()  {
        String actual = driverchrome.getTitle();
        String expected = "National and Local Weather Radar, Daily Forecast, Hurricane and information from The Weather Channel and weather.com";
        assertThat(actual, equalTo(expected));
        driverchrome.findElement(By.xpath("//*[@id='APP']/div/div[6]/div[1]/div/div[1]/button/span/span[2]")).click();

    }

    @When("^I am on the main page I will click on the ten day forecast$")
    public void iAmOnTheMainPageIWillClickOnTheTenDayForecast(){
            WebElement elem = (new WebDriverWait(driverchrome, 20))
                    .until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='APP']/div/div[6]/div[2]/div/div/div[1]/div[1]/div/div[3]")));
            if (elem.isDisplayed()) {
            driverchrome.findElement(By.xpath("//*[@id='APP']/div/div[6]/div[2]/div/div/div[1]/div[1]/div/div[3]/div/div/button[1]")).click();
             driverchrome.findElement(By.xpath("//*[@id='APP']/div/div[6]/div[3]/div/ul/li[4]/a")).click();
        } else {
            driverchrome.findElement(By.xpath("//*[@id='APP']/div/div[6]/div[3]/div/ul/li[4]/a")).click();
        }
    }

    @And("^I will confirm I land on the ten day forecast for the local area$")
    public void iWillConfirmILandOnTheTenDayForecastForTheLocalArea(){
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String title = driverchrome.getTitle();
        String titles [] = title.split("\\ ");
        for(int i=0; i<titles.length; i++){
            if(titles[i] == "10-Day"){
                String actual = titles[i];
                String expected = "10-Day";
                assertThat(actual, equalTo(expected));
            }
            else assertThat("did not land on 10 day forecast page", true);
        }

    }

    @Then("^I will compare the temp for the current day to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForTheCurrentDayToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(1) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));

    }

    @Then("^I will compare the temp for day two to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDayTwoToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(2) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }

    @Then("^I will compare the temp for day three to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDayThreeToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(3) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }

    @Then("^I will compare the temp for day four to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDayFourToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(4) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }

    @Then("^I will compare the temp for day five to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDayFiveToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(5) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }

    @Then("^I will compare the temp for day six to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDayToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp() {
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(6) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }

    @Then("^I will compare the temp for day seven to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDaySevenToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(7) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }

    @Then("^I will compare the temp for day eight to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDayEightToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(8) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }

    @Then("^I will compare the temp for day nine to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDayNineToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(9) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }

    @Then("^I will compare the temp for day ten to assure its within the desired range of twenty degrees between the min and max temp$")
    public void iWillCompareTheTempForDayTenToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(){
        WebElement table = (new WebDriverWait(driverchrome, 20))
                .until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#twc-scrollabe > table")));
        String temp = table.findElement(By.cssSelector("#twc-scrollabe > table > tbody > tr:nth-child(10) > td.temp")).getText();
        String temps [] = temp.split("\\u00b0");
        int max = Integer.parseInt(temps[0]);
        int min = Integer.parseInt(temps[1]);
        int var = max - min;
        assertThat(var,lessThanOrEqualTo(20));
    }
}
