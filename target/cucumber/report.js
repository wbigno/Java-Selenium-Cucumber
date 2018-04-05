$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("10DayForecast.feature");
formatter.feature({
  "line": 1,
  "name": "Using weather.com I want to use the 10 day forecast to compare the daily temp variance",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "For the current day, verify temp is within 10 degrees of the min and max temps",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@wip"
    }
  ]
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
  "name": "I will check day \"\u003cday\u003e\" and get the max and min temp to confirm its within the expected range",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the same days data from the api node \"\u003capi\u003e\" response to compare that they match",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;",
  "rows": [
    {
      "cells": [
        "day",
        "api"
      ],
      "line": 14,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;1"
    },
    {
      "cells": [
        "1",
        "0"
      ],
      "line": 15,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;2"
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 16,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;3"
    },
    {
      "cells": [
        "3",
        "2"
      ],
      "line": 17,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;4"
    },
    {
      "cells": [
        "4",
        "3"
      ],
      "line": 18,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;5"
    },
    {
      "cells": [
        "5",
        "4"
      ],
      "line": 19,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;6"
    },
    {
      "cells": [
        "6",
        "5"
      ],
      "line": 20,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;7"
    },
    {
      "cells": [
        "7",
        "6"
      ],
      "line": 21,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;8"
    },
    {
      "cells": [
        "8",
        "7"
      ],
      "line": 22,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;9"
    },
    {
      "cells": [
        "9",
        "8"
      ],
      "line": 23,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;10"
    },
    {
      "cells": [
        "10",
        "9"
      ],
      "line": 24,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5347286693,
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
  "duration": 282194695,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "For the current day, verify temp is within 10 degrees of the min and max temps",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@wip"
    }
  ]
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
  "name": "I will check day \"1\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 11702811869,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 4135320269,
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
  "duration": 535350261,
  "error_message": "java.lang.NumberFormatException: For input string: \"--36\"\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\n\tat java.lang.Integer.parseInt(Integer.java:580)\n\tat java.lang.Integer.parseInt(Integer.java:615)\n\tat StepFiles.StepDefs10DayForecast.getMaxAndMinTemp(StepDefs10DayForecast.java:49)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:132)\n\tat ✽.And I will check day \"1\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:10)\n",
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
formatter.write("For the current day, verify temp is within 10 degrees of the min and max temps");
formatter.after({
  "duration": 7042930094,
  "status": "passed"
});
formatter.before({
  "duration": 5277210610,
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
  "duration": 45214396,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "For the current day, verify temp is within 10 degrees of the min and max temps",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-current-day,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@wip"
    }
  ]
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
  "name": "I will check day \"2\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 7326872404,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3342708469,
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
  "duration": 1336591174,
  "status": "passed"
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
  "duration": 3523108278,
  "status": "passed"
});
