package StepFiles;

import Resource.Driver;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Hooks extends Driver {

    boolean initialized = false;
    private Driver driver;

    public Hooks (Driver driver) {
        this.driver = driver;
    }

    private WebDriver driverchrome = null;

    @Before
    public void setUp() {
        if (!initialized) {
            System.setProperty("webdriver.chrome.driver", "/Users/williambigno/projectJavaSeleniumCucumber/src/resources/chromedriver");

            driverchrome = new ChromeDriver();
            driverchrome.get("https://weather.com");
            driverchrome.manage().window().maximize();
            driverchrome.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            driver.driverchrome = driverchrome;
            initialized = true;

        }
    }

    @After
    public void tearDown(Scenario scenario) throws InterruptedException {
        if (scenario.isFailed()) {
            driverchrome = driver.driverchrome;
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
}
