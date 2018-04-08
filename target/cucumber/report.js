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
  "line": 7,
  "name": "For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;",
  "rows": [
    {
      "cells": [
        "day",
        "api"
      ],
      "line": 14,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;1"
    },
    {
      "cells": [
        "1",
        "0"
      ],
      "line": 15,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;2"
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 16,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;3"
    },
    {
      "cells": [
        "3",
        "2"
      ],
      "line": 17,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;4"
    },
    {
      "cells": [
        "4",
        "3"
      ],
      "line": 18,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;5"
    },
    {
      "cells": [
        "5",
        "4"
      ],
      "line": 19,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;6"
    },
    {
      "cells": [
        "6",
        "5"
      ],
      "line": 20,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;7"
    },
    {
      "cells": [
        "7",
        "6"
      ],
      "line": 21,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;8"
    },
    {
      "cells": [
        "8",
        "7"
      ],
      "line": 22,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;9"
    },
    {
      "cells": [
        "9",
        "8"
      ],
      "line": 23,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;10"
    },
    {
      "cells": [
        "10",
        "9"
      ],
      "line": 24,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day-and-compare-it-to-the-api-response;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4049132918,
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
  "duration": 170931987,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "duration": 11264960038,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3289998270,
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
  "duration": 114117366,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c15\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:118)\n\tat ✽.And I will check day \"1\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:10)\n",
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
  "duration": 5945303682,
  "status": "passed"
});
formatter.before({
  "duration": 3350444767,
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
  "duration": 62103988,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "duration": 11338914112,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2945740571,
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
  "duration": 102100091,
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
  "duration": 3184547482,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c46\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(StepDefs10DayForecast.java:130)\n\tat ✽.Then I will get the same days data from the api node \"1\" response to compare that they match(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 8265794794,
  "status": "passed"
});
formatter.before({
  "duration": 3652932371,
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
  "duration": 7299338,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
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
  "name": "I will check day \"3\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 16734459616,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2406996725,
  "status": "passed"
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
  "duration": 159220137,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c13\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:118)\n\tat ✽.And I will check day \"3\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:10)\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded2.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6297058255,
  "status": "passed"
});
formatter.before({
  "duration": 5246196056,
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
  "duration": 146836676,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
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
  "name": "I will check day \"4\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 10770219310,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3426407483,
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
  "duration": 97261939,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c12\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:118)\n\tat ✽.And I will check day \"4\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:10)\n",
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
formatter.embedding("image/png", "embedded3.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6326504969,
  "status": "passed"
});
formatter.before({
  "duration": 3234115473,
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
  "duration": 6539004,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
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
  "name": "I will check day \"5\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 11822462720,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3218732268,
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
  "duration": 87945293,
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
  "duration": 1480167909,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c57\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(StepDefs10DayForecast.java:130)\n\tat ✽.Then I will get the same days data from the api node \"4\" response to compare that they match(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 7809216655,
  "status": "passed"
});
formatter.before({
  "duration": 3489442171,
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
  "duration": 8542784,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
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
  "name": "I will check day \"6\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 12551767721,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2688928463,
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
  "duration": 324256839,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c21\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:118)\n\tat ✽.And I will check day \"6\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:10)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6492712968,
  "status": "passed"
});
formatter.before({
  "duration": 4270138842,
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
  "duration": 30730220,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
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
  "name": "I will check day \"7\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 17007951353,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2106164561,
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
  "duration": 353634986,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c18\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:118)\n\tat ✽.And I will check day \"7\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:10)\n",
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
formatter.embedding("image/png", "embedded6.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6503400546,
  "status": "passed"
});
formatter.before({
  "duration": 2936573472,
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
  "duration": 37391341,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
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
  "name": "I will check day \"8\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 10994622795,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2407927925,
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
  "duration": 357219533,
  "status": "passed"
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
  "duration": 531669052,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c58\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheyMatch(StepDefs10DayForecast.java:130)\n\tat ✽.Then I will get the same days data from the api node \"7\" response to compare that they match(10DayForecast.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 8345791415,
  "status": "passed"
});
formatter.before({
  "duration": 3076724619,
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
  "duration": 66279162,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
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
  "name": "I will check day \"9\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 10225675494,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3072496299,
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
  "duration": 224333759,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c14\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:118)\n\tat ✽.And I will check day \"9\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:10)\n",
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
formatter.embedding("image/png", "embedded8.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6443073647,
  "status": "passed"
});
formatter.before({
  "duration": 3041021652,
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
  "duration": 76453757,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
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
  "name": "I will check day \"10\" and get the max and min temp to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 10015496212,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2297215557,
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
  "duration": 109050064,
  "error_message": "java.lang.AssertionError: \nExpected: a value less than or equal to \u003c10\u003e\n     but: \u003c12\u003e was greater than \u003c10\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillCheckDayAndGetTheMaxAndMinTempToConfirmItsWithinTheExpectedRange(StepDefs10DayForecast.java:118)\n\tat ✽.And I will check day \"10\" and get the max and min temp to confirm its within the expected range(10DayForecast.feature:10)\n",
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
formatter.embedding("image/png", "embedded9.png");
formatter.write("For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response");
formatter.after({
  "duration": 6201895542,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "For the 10 day forecast, I want to get the chance or percip and compare it to the api response",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"\u003cday\u003e\" and get the humidity for each day",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will get the same days data from the api node \"\u003capi\u003e\" response to compare that the humidity data matches",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;",
  "rows": [
    {
      "cells": [
        "day",
        "api"
      ],
      "line": 33,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;1"
    },
    {
      "cells": [
        "1",
        "0"
      ],
      "line": 34,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;2"
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 35,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;3"
    },
    {
      "cells": [
        "3",
        "2"
      ],
      "line": 36,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;4"
    },
    {
      "cells": [
        "4",
        "3"
      ],
      "line": 37,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;5"
    },
    {
      "cells": [
        "5",
        "4"
      ],
      "line": 38,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;6"
    },
    {
      "cells": [
        "6",
        "5"
      ],
      "line": 39,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;7"
    },
    {
      "cells": [
        "7",
        "6"
      ],
      "line": 40,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;8"
    },
    {
      "cells": [
        "8",
        "7"
      ],
      "line": 41,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;9"
    },
    {
      "cells": [
        "9",
        "8"
      ],
      "line": 42,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;10"
    },
    {
      "cells": [
        "10",
        "9"
      ],
      "line": 43,
      "id": "using-weather.com-i-want-to-use-the-10-day-forecast-to-compare-the-daily-temp-variance;for-the-10-day-forecast,-i-want-to-get-the-chance-or-percip-and-compare-it-to-the-api-response;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3882845282,
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
  "duration": 507284558,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"1\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 23074930875,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2060569741,
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
  "duration": 301487959,
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
  "duration": 459107255,
  "status": "passed"
});
formatter.after({
  "duration": 5257834114,
  "status": "passed"
});
formatter.before({
  "duration": 3040981495,
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
  "duration": 48882412,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"2\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 15894054303,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2441276903,
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
  "duration": 433799939,
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
  "duration": 366942589,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c37\u003e\n     but: was \u003c38\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(StepDefs10DayForecast.java:158)\n\tat ✽.Then I will get the same days data from the api node \"1\" response to compare that the humidity data matches(10DayForecast.feature:30)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 9382853851,
  "status": "passed"
});
formatter.before({
  "duration": 3577047546,
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
  "duration": 101132440,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"3\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 30882221582,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[text() \u003d \u0027Do you want to save this location?\u0027] (tried for 25 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c91:22ca:d8b0:3056%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.jfJk9y}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: dc24bc5972a605c274edc3c4a8d44d3c\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast(StepDefs10DayForecast.java:81)\n\tat ✽.When I am on the main page I will click on the ten day forecast(10DayForecast.feature:27)\n",
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
  "location": "StepDefs10DayForecast.iWillCheckDayAndGetTheHumidityForEachDay(String)"
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
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 7241158402,
  "status": "passed"
});
formatter.before({
  "duration": 3971749057,
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
  "duration": 11681294,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"4\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 30305884450,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[text() \u003d \u0027Do you want to save this location?\u0027] (tried for 25 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c91:22ca:d8b0:3056%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.QeYlMF}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: e464802298a60a84746ec68dfb7f6266\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepDefs10DayForecast.iAmOnTheMainPageIWillClickOnTheTenDayForecast(StepDefs10DayForecast.java:81)\n\tat ✽.When I am on the main page I will click on the ten day forecast(10DayForecast.feature:27)\n",
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
      "val": "4",
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
      "val": "3",
      "offset": 49
    }
  ],
  "location": "StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded12.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 7608415402,
  "status": "passed"
});
formatter.before({
  "duration": 2775332299,
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
  "duration": 63191724,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"5\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 7159584851,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2942004873,
  "status": "passed"
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
  "duration": 200415947,
  "status": "passed"
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
  "duration": 435429996,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c57\u003e\n     but: was \u003c58\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(StepDefs10DayForecast.java:158)\n\tat ✽.Then I will get the same days data from the api node \"4\" response to compare that the humidity data matches(10DayForecast.feature:30)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 9242686726,
  "status": "passed"
});
formatter.before({
  "duration": 2762132436,
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
  "duration": 81307854,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"6\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 9607826854,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2726484777,
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
  "duration": 126348614,
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
  "duration": 487747854,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c47\u003e\n     but: was \u003c48\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(StepDefs10DayForecast.java:158)\n\tat ✽.Then I will get the same days data from the api node \"5\" response to compare that the humidity data matches(10DayForecast.feature:30)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 7384196218,
  "status": "passed"
});
formatter.before({
  "duration": 2627027844,
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
  "duration": 59113387,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"7\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 8242259156,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2154478162,
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
  "duration": 380439010,
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
  "duration": 336731582,
  "status": "passed"
});
formatter.after({
  "duration": 5315638685,
  "status": "passed"
});
formatter.before({
  "duration": 2903742162,
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
  "duration": 24620397,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"8\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 9167440780,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2928741211,
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
  "duration": 95848851,
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
  "duration": 12403077542,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 7, Size: 7\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:653)\n\tat java.util.ArrayList.get(ArrayList.java:429)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(StepDefs10DayForecast.java:157)\n\tat ✽.Then I will get the same days data from the api node \"7\" response to compare that the humidity data matches(10DayForecast.feature:30)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 6460971138,
  "status": "passed"
});
formatter.before({
  "duration": 2778067858,
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
  "duration": 65067527,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"9\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 9425329122,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2161179424,
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
  "duration": 105991700,
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
  "duration": 2387684821,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c71\u003e\n     but: was \u003c72\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(StepDefs10DayForecast.java:158)\n\tat ✽.Then I will get the same days data from the api node \"8\" response to compare that the humidity data matches(10DayForecast.feature:30)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded16.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 6626072969,
  "status": "passed"
});
formatter.before({
  "duration": 3267061827,
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
  "duration": 66691914,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
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
  "line": 27,
  "name": "I am on the main page I will click on the ten day forecast",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I will confirm I land on the ten day forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will check day \"10\" and get the humidity for each day",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
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
  "duration": 13886696490,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs10DayForecast.iWillConfirmILandOnTheTenDayForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2321218076,
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
  "duration": 79450566,
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
  "duration": 294860691,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 9, Size: 7\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:653)\n\tat java.util.ArrayList.get(ArrayList.java:429)\n\tat StepFiles.StepDefs10DayForecast.iWillGetTheSameDaysDataFromTheApiNodeResponseToCompareThatTheHumidityDataMatches(StepDefs10DayForecast.java:157)\n\tat ✽.Then I will get the same days data from the api node \"9\" response to compare that the humidity data matches(10DayForecast.feature:30)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.write("For the 10 day forecast, I want to get the chance or percip and compare it to the api response");
formatter.after({
  "duration": 6469155313,
  "status": "passed"
});
formatter.uri("Hourly.feature");
formatter.feature({
  "line": 2,
  "name": "Using weather.com I want to use the hourly forecast to compare the daily temp variance, and validate it to their api",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"\u003cday\u003e\" and get the temp and feels like to confirm its within the expected range",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"\u003capi\u003e\" response to compare that they match the website",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;",
  "rows": [
    {
      "cells": [
        "day",
        "api"
      ],
      "line": 14,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;1"
    },
    {
      "cells": [
        "1",
        "0"
      ],
      "line": 15,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;2"
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 16,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;3"
    },
    {
      "cells": [
        "3",
        "2"
      ],
      "line": 17,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;4"
    },
    {
      "cells": [
        "4",
        "3"
      ],
      "line": 18,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;5"
    },
    {
      "cells": [
        "5",
        "4"
      ],
      "line": 19,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;6"
    },
    {
      "cells": [
        "6",
        "5"
      ],
      "line": 20,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;7"
    },
    {
      "cells": [
        "7",
        "6"
      ],
      "line": 21,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;8"
    },
    {
      "cells": [
        "8",
        "7"
      ],
      "line": 22,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;9"
    },
    {
      "cells": [
        "9",
        "8"
      ],
      "line": 23,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;10"
    },
    {
      "cells": [
        "10",
        "9"
      ],
      "line": 24,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;11"
    },
    {
      "cells": [
        "11",
        "10"
      ],
      "line": 25,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;12"
    },
    {
      "cells": [
        "12",
        "11"
      ],
      "line": 26,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;13"
    },
    {
      "cells": [
        "13",
        "12"
      ],
      "line": 27,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;14"
    },
    {
      "cells": [
        "14",
        "13"
      ],
      "line": 28,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;15"
    },
    {
      "cells": [
        "15",
        "14"
      ],
      "line": 29,
      "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;16"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3133949813,
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
  "duration": 59104780,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;2",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"1\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"0\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 16115869292,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2192015110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 174634484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 12479071744,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c38\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"0\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded18.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 6289236734,
  "status": "passed"
});
formatter.before({
  "duration": 3551110883,
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
  "duration": 85231858,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;3",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"2\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"1\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 25668932179,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[text() \u003d \u0027Do you want to save this location?\u0027] (tried for 25 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c91:22ca:d8b0:3056%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.kp9GJ5}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 2bbe06eeb471f0fdfff0d793065e278d\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast(StepdefsHourlyForecast.java:70)\n\tat ✽.When I am on the main page I will click on the hourly forecast(Hourly.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded19.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 7045948056,
  "status": "passed"
});
formatter.before({
  "duration": 4964087925,
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
  "duration": 205566332,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;4",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"3\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"2\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 13829227458,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3632658448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 262483097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 488151473,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c42\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"2\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded20.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 12349502390,
  "status": "passed"
});
formatter.before({
  "duration": 2902959155,
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
  "duration": 93609221,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;5",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"4\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"3\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 15448549163,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2302531140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 149064130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 480655856,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c43\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"3\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 8632762519,
  "status": "passed"
});
formatter.before({
  "duration": 3128536420,
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
  "duration": 35213179,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;6",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"5\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"4\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 20158996471,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2117291404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 444646610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 376383147,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c45\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"4\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded22.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 7392591620,
  "status": "passed"
});
formatter.before({
  "duration": 2989982580,
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
  "duration": 59910722,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;7",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"6\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"5\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 10874657186,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3303370189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 533273831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 639437297,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c45\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"5\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 14375636969,
  "status": "passed"
});
formatter.before({
  "duration": 3158388771,
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
  "duration": 13210530,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;8",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"7\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"6\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 30301613357,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[text() \u003d \u0027Do you want to save this location?\u0027] (tried for 25 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c91:22ca:d8b0:3056%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.005OMQ}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ceddeb781d079cef619851aee1284ef9\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast(StepdefsHourlyForecast.java:70)\n\tat ✽.When I am on the main page I will click on the hourly forecast(Hourly.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded24.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 7505577883,
  "status": "passed"
});
formatter.before({
  "duration": 4581549636,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to maximized, current state is normal\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85),platform\u003dMac OS X 10.13.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 476 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c91:22ca:d8b0:3056%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.Z1BKnE}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 24f53e4ad730e3530c3a7316d18d2432\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:925)\n\tat StepFiles.Hooks.setUp(Hooks.java:33)\n\tat sun.reflect.GeneratedMethodAccessor56.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;9",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"8\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"7\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 226234,
  "error_message": "java.lang.NullPointerException\n\tat StepFiles.Hooks.tearDown(Hooks.java:46)\n\tat sun.reflect.GeneratedMethodAccessor60.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.before({
  "duration": 7330339520,
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
  "duration": 73788561,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;10",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"9\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"8\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 29172730544,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2316413049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 170141618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 553430309,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c43\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"8\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded25.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 7105659823,
  "status": "passed"
});
formatter.before({
  "duration": 3714493958,
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
  "duration": 412932204,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;11",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"10\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"9\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 19445117586,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2631947479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 344849626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 1347014863,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c42\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"9\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded26.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 9063698757,
  "status": "passed"
});
formatter.before({
  "duration": 3311460856,
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
  "duration": 454585994,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;12",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"11\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"10\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 11792215482,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2161724769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 362063434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 513506469,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c40\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"10\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded27.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 11968138089,
  "status": "passed"
});
formatter.before({
  "duration": 3607928482,
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
  "duration": 455869172,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;13",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"12\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"11\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 26032060833,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[text() \u003d \u0027Do you want to save this location?\u0027] (tried for 25 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c91:22ca:d8b0:3056%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.8Tu4aJ}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 789b64f10048714f040e2cc4a47e381f\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast(StepdefsHourlyForecast.java:70)\n\tat ✽.When I am on the main page I will click on the hourly forecast(Hourly.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded28.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 6249404476,
  "status": "passed"
});
formatter.before({
  "duration": 3623046873,
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
  "duration": 17214636,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;14",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"13\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"12\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 17029427684,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 2268517284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 159561193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 473693418,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c38\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"12\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded29.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 10488337475,
  "status": "passed"
});
formatter.before({
  "duration": 5468265835,
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
  "duration": 371740461,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;15",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"14\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"13\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 25736865183,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[text() \u003d \u0027Do you want to save this location?\u0027] (tried for 25 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Williams-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c91:22ca:d8b0:3056%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.4\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85), userDataDir\u003d/var/folders/3s/skfr_gh54pg6_7ymsj2g39gr0000gn/T/.org.chromium.Chromium.NDjtHn}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 7e0fb185e4f0865d6a188f423d2d6ea8\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat StepFiles.StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast(StepdefsHourlyForecast.java:70)\n\tat ✽.When I am on the main page I will click on the hourly forecast(Hourly.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded30.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 7158751786,
  "status": "passed"
});
formatter.before({
  "duration": 4124388205,
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
  "duration": 60347534,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day",
  "description": "",
  "id": "using-weather.com-i-want-to-use-the-hourly-forecast-to-compare-the-daily-temp-variance,-and-validate-it-to-their-api;for-the-hourly-forecast,-verify-temp-is-within-10-degrees-of-the-min-and-max-temps-each-day;;16",
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
  "name": "I am on the main page I will click on the hourly forecast",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will confirm I land on the hourly forecast for the local area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I will check day \"15\" and get the temp and feels like to confirm its within the expected range",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will get the temp and feels like data from the api node \"14\" response to compare that they match the website",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefsHourlyForecast.iAmOnTheMainPageIWillClickOnTheHourlyForecast()"
});
formatter.result({
  "duration": 13918478500,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsHourlyForecast.iWillConfirmILandOnTheHourlyForecastForTheLocalArea()"
});
formatter.result({
  "duration": 3037012515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 18
    }
  ],
  "location": "StepdefsHourlyForecast.iWillCheckDayAndGetTheTempAndFeelsLikeToConfirmItsWithinTheExpectedRange(String)"
});
formatter.result({
  "duration": 640897251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 59
    }
  ],
  "location": "StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(String)"
});
formatter.result({
  "duration": 509260957,
  "error_message": "java.lang.AssertionError: \nExpected: \u003c36\u003e\n     but: was \u003c-1\u003e\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat StepFiles.StepdefsHourlyForecast.iWillGetTheTempAndFeelsLikeDataFromTheApiNodeResponseToCompareThatTheyMatchTheWebsite(StepdefsHourlyForecast.java:121)\n\tat ✽.Then I will get the temp and feels like data from the api node \"14\" response to compare that they match the website(Hourly.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded31.png");
formatter.write("For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day");
formatter.after({
  "duration": 12374507707,
  "status": "passed"
});
});