$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("10DayForecast.feature");
formatter.feature({
  "line": 1,
  "name": "Using weather.com I want to use the 10 day forecast to compare the daily temp variance",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4242532545,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 1548066004,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "For the current day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will compare the temp for the current day to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 11157308903,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2070032528,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForTheCurrentDayToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "duration": 577351305,
  "error_message": "java.lang.NumberFormatException: For input string: \"--34\"\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\n\tat java.lang.Integer.parseInt(Integer.java:580)\n\tat java.lang.Integer.parseInt(Integer.java:615)\n\tat StepFiles.StepDefs10DayForecast.iWillCompareTheTempForTheCurrentDayToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(StepDefs10DayForecast.java:102)\n\tat ✽.Then I will compare the temp for the current day to assure its within the desired range of twenty degrees between the min and max temp(10DayForecast.feature:10)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("For the current day");
formatter.after({
  "duration": 6667152492,
  "status": "passed"
});
formatter.before({
  "duration": 3009661932,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 197505748,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "For day 2",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I will compare the temp for day two to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 11690063719,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2132005966,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDayTwoToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "duration": 182140034,
  "status": "passed"
});
formatter.after({
  "duration": 5211984791,
  "status": "passed"
});
formatter.before({
  "duration": 3212627993,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 636338292,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "For day 3",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I will compare the temp for day three to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 20240917080,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[@id\u003d\u0027APP\u0027]/div/div[6]/div[2]/div/div/div[1]/div[1]/div/div[3] (tried for 20 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c37:971f:e1e9:c242%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.cby2Ai}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c308362e6f69aeff99747479e1af0503\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast(StepDefs10DayForecast.java:67)\n\tat ✽.When I am on the main page I will click on the ten day forecast(10DayForecast.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDayThreeToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("For day 3");
formatter.after({
  "duration": 6716316442,
  "status": "passed"
});
formatter.before({
  "duration": 2964947170,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 159529726,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "For day 4",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I will compare the temp for day four to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 9912470411,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2371643706,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDayFourToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "duration": 398218424,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c20\u003e\n     but: \u003c31\u003e was greater than \u003c20\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCompareTheTempForDayFourToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp(StepDefs10DayForecast.java:142)\n\tat ✽.Then I will compare the temp for day four to assure its within the desired range of twenty degrees between the min and max temp(10DayForecast.feature:25)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("For day 4");
formatter.after({
  "duration": 5956776926,
  "status": "passed"
});
formatter.before({
  "duration": 3166947159,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 684813748,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "For day 5",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-5",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "I will compare the temp for day five to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 15530520936,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2267434002,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDayFiveToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "duration": 555420375,
  "status": "passed"
});
formatter.after({
  "duration": 5181024245,
  "status": "passed"
});
formatter.before({
  "duration": 2806820309,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 192097005,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "For day 6",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-6",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I will compare the temp for day six to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 9762567152,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2461214313,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDayToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "duration": 156465024,
  "status": "passed"
});
formatter.after({
  "duration": 5448854688,
  "status": "passed"
});
formatter.before({
  "duration": 3014431418,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 282931225,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "For day 7",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-7",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I will compare the temp for day seven to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 10029549283,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2304715526,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDaySevenToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "duration": 255874332,
  "status": "passed"
});
formatter.after({
  "duration": 5157810442,
  "status": "passed"
});
formatter.before({
  "duration": 3204520720,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 98390113,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "For day 8",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-8",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I will compare the temp for day eight to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 20145467027,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[@id\u003d\u0027APP\u0027]/div/div[6]/div[2]/div/div/div[1]/div[1]/div/div[3] (tried for 20 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:c37:971f:e1e9:c242%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.8CLDXE}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: e378075c5dd1d25bff5d579bb5ff5f1a\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast(StepDefs10DayForecast.java:67)\n\tat ✽.When I am on the main page I will click on the ten day forecast(10DayForecast.feature:43)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDayEightToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.write("For day 8");
formatter.after({
  "duration": 6824669796,
  "status": "passed"
});
formatter.before({
  "duration": 3360438284,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 479031226,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "For day 9",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-9",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I will compare the temp for day nine to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 10574700946,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2639653159,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDayNineToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "duration": 293419569,
  "status": "passed"
});
formatter.after({
  "duration": 5187855034,
  "status": "passed"
});
formatter.before({
  "duration": 3333216928,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser launches, and I land on the weatherdotcom main page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs10DayForecast.chromeBrowserLaunchesAndILandOnTheWeatherdotcomMainPage()"
});
formatter.result({
  "duration": 81380561,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "For day 10",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-day-10",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I will compare the temp for day ten to assure its within the desired range of twenty degrees between the min and max temp",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast()"
});
formatter.result({
  "duration": 10057772026,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2316767240,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillCompareTheTempForDayTenToAssureItsWithinTheDesiredRangeOfTwentyDegreesBetweenTheMinAndMaxTemp()"
});
formatter.result({
  "duration": 576176414,
  "status": "passed"
});
formatter.after({
  "duration": 5262882373,
  "status": "passed"
});
});