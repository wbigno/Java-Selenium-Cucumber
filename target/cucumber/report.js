$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("10DayForecast.feature");
formatter.feature({
  "line": 2,
  "name": "Using weather.com I want to use the 10 day forecast to compare the daily temp variance",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"\u003cday\u003e\" and get the max and min temp to confirm its within the expected range",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"\u003capi\u003e\" response to compare that they match",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;",
  "rows": [
    {
      "cells": [
        "day",
        "api"
      ],
      "line": 15,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;1"
    },
    {
      "cells": [
        "1",
        "0"
      ],
      "line": 16,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;2"
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 17,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;3"
    },
    {
      "cells": [
        "3",
        "2"
      ],
      "line": 18,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;4"
    },
    {
      "cells": [
        "4",
        "3"
      ],
      "line": 19,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;5"
    },
    {
      "cells": [
        "5",
        "4"
      ],
      "line": 20,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;6"
    },
    {
      "cells": [
        "6",
        "5"
      ],
      "line": 21,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;7"
    },
    {
      "cells": [
        "7",
        "6"
      ],
      "line": 22,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;8"
    },
    {
      "cells": [
        "8",
        "7"
      ],
      "line": 23,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;9"
    },
    {
      "cells": [
        "9",
        "8"
      ],
      "line": 24,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;10"
    },
    {
      "cells": [
        "10",
        "9"
      ],
      "line": 25,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5918799102,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 498161388,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"1\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"0\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 13633247986,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3532002409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 103796966,
  "error_message": "java.lang.NumberFormatException: For input string: \"--36\"\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\n\tat java.lang.Integer.parseInt(Integer.java:580)\n\tat java.lang.Integer.parseInt(Integer.java:615)\n\tat StepFiles.StepDefs10DayForecast.getMaxAndMinTemp(StepDefs10DayForecast.java:55)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:146)\n\tat ✽.And I will check day \"1\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6291687921,
  "status": "passed"
});
formatter.before({
  "duration": 3618861845,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 9206980,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"2\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"1\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 18012117628,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2200773087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 512217463,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c21\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:147)\n\tat ✽.And I will check day \"2\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6527597190,
  "status": "passed"
});
formatter.before({
  "duration": 4976793644,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 8649350,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"3\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"2\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 5064779538,
  "error_message": "java.lang.NullPointerException\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:446)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:513)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\n\tat StepFiles.StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast(StepDefs10DayForecast.java:109)\n\tat ✽.When I am on the main page I will click on the ten day forecast(10DayForecast.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5061552350,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 7 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u00272604:2000:81c3:bc00:0:0:0:1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.IKGViP}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 14771d65354832c7950041608c0548a4\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:523)\n\tat StepFiles.StepDefs10DayForecast.testClean(StepDefs10DayForecast.java:93)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.before({
  "duration": 20508872485,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 16245581,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"4\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"3\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 1504460888,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2802633263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 468747448,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c13\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:147)\n\tat ✽.And I will check day \"4\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6809408432,
  "status": "passed"
});
formatter.before({
  "duration": 5407366673,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 370598513,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"5\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"4\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 17981904989,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2364050075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 203283000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "duration": 3178944523,
  "status": "passed"
});
formatter.after({
  "duration": 5185255555,
  "status": "passed"
});
formatter.before({
  "duration": 4230460221,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 12190629,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"6\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"5\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 13382314467,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2904100905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 180156475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "duration": 449483894,
  "status": "passed"
});
formatter.after({
  "duration": 5243744611,
  "status": "passed"
});
formatter.before({
  "duration": 5031501987,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 31036764,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"7\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"6\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 10871551454,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2406717919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 103302779,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c13\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:147)\n\tat ✽.And I will check day \"7\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6113916154,
  "status": "passed"
});
formatter.before({
  "duration": 21667045015,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 13025335,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"8\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"7\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 1418021673,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2408041253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 373306205,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c14\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:147)\n\tat ✽.And I will check day \"8\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6159268683,
  "status": "passed"
});
formatter.before({
  "duration": 5736410904,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 518767874,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"9\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"8\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 13730741269,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2232067843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 450844209,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c15\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:147)\n\tat ✽.And I will check day \"9\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6365431560,
  "status": "passed"
});
formatter.before({
  "duration": 21869188449,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 8853613,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will check day \"10\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will get the same days data from the api node \"9\" response to compare that they match",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 979988850,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2563492142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 152880714,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c11\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:147)\n\tat ✽.And I will check day \"10\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6319033644,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"\u003cday\u003e\" and get the humidity for each day",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"\u003capi\u003e\" response to compare that the humidity data matches",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;",
  "rows": [
    {
      "cells": [
        "day",
        "api"
      ],
      "line": 34,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;1"
    },
    {
      "cells": [
        "1",
        "0"
      ],
      "line": 35,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;2"
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 36,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;3"
    },
    {
      "cells": [
        "3",
        "2"
      ],
      "line": 37,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;4"
    },
    {
      "cells": [
        "4",
        "3"
      ],
      "line": 38,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;5"
    },
    {
      "cells": [
        "5",
        "4"
      ],
      "line": 39,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;6"
    },
    {
      "cells": [
        "6",
        "5"
      ],
      "line": 40,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;7"
    },
    {
      "cells": [
        "7",
        "6"
      ],
      "line": 41,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;8"
    },
    {
      "cells": [
        "8",
        "7"
      ],
      "line": 42,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;9"
    },
    {
      "cells": [
        "9",
        "8"
      ],
      "line": 43,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;10"
    },
    {
      "cells": [
        "10",
        "9"
      ],
      "line": 44,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31211650181,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 7288785,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"1\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"0\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 859994368,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2170265516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 93556599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 505849078,
  "status": "passed"
});
formatter.after({
  "duration": 5360612432,
  "status": "passed"
});
formatter.before({
  "duration": 22736403898,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 40705406,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"2\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"1\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 1090569796,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2495457188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 93804849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 780529470,
  "status": "passed"
});
formatter.after({
  "duration": 5165701959,
  "status": "passed"
});
formatter.before({
  "duration": 5739639329,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 627535924,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"3\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"2\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 10305773579,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2079524453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 73793585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 1362568562,
  "status": "passed"
});
formatter.after({
  "duration": 5183997318,
  "status": "passed"
});
formatter.before({
  "duration": 4906501605,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 7502374,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"4\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"3\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 13908348995,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2082030483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 77652469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 6363712167,
  "status": "passed"
});
formatter.after({
  "duration": 5187513944,
  "status": "passed"
});
formatter.before({
  "duration": 5565408428,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 26750984,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"5\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"4\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 25924140539,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[text() \u003d \u0027Do you want to save this location?\u0027] (tried for 25 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u00272604:2000:81c3:bc00:0:0:0:1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.VRjzCA}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: a7e7f40028abaa9f5ebff8f11ca5d780\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast(StepDefs10DayForecast.java:109)\n\tat ✽.When I am on the main page I will click on the ten day forecast(10DayForecast.feature:28)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 7223462021,
  "status": "passed"
});
formatter.before({
  "duration": 8046182916,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 95467569,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"6\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"5\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 7350207448,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3633556820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 221265108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 295553049,
  "status": "passed"
});
formatter.after({
  "duration": 5249928029,
  "status": "passed"
});
formatter.before({
  "duration": 5721678591,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 45180636,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"7\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"6\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 7042475331,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2458616932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 92546691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 243746972,
  "status": "passed"
});
formatter.after({
  "duration": 5181561451,
  "status": "passed"
});
formatter.before({
  "duration": 4943752186,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 7244212,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"8\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"7\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 8781423244,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2159436439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 74830396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 259565579,
  "status": "passed"
});
formatter.after({
  "duration": 5165398343,
  "status": "passed"
});
formatter.before({
  "duration": 24705580531,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 105204287,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"9\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"8\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 971133079,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2482524528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 119820282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 320669974,
  "status": "passed"
});
formatter.after({
  "duration": 5273865534,
  "status": "passed"
});
formatter.before({
  "duration": 21431554690,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 19776545,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@10day"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will check day \"10\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will get the same days data from the api node \"9\" response to compare that the humidity data matches",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 1055611676,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2355688541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
});
formatter.result({
  "duration": 152531331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "duration": 287452441,
  "status": "passed"
});
formatter.after({
  "duration": 5205984293,
  "status": "passed"
});
formatter.uri("Hourly.feature");
formatter.feature({
  "line": 2,
  "name": "Using weather.com I want to use the hourly forecast to compare the daily temp variance, and validate it to their api",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@hourly"
    }
  ]
});
formatter.before({
  "duration": 19187756659,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 25843690,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.after({
  "duration": 5174195592,
  "status": "passed"
});
});