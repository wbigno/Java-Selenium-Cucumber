@10day
Feature: Using weather.com I want to use the 10 day forecast to compare the daily temp variance

  Background:
    Given Chrome browser launches, and I land on the weatherdotcom main page


  Scenario Outline: For the 10 day forecast, verify temp is within 10 degrees of the min and max temps each day and compare it to the api response
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    And I will check day "<day>" and get the max and min temp to confirm its within the expected range
    Then I will get the same days data from the api node "<api>" response to compare that they match

    Examples:
      |day|api|
      | 1 | 0 |
      | 2 | 1 |
      | 3 | 2 |
      | 4 | 3 |
      | 5 | 4 |
      | 6 | 5 |
      | 7 | 6 |
      | 8 | 7 |
      | 9 | 8 |
      |10 | 9 |

  Scenario Outline: For the 10 day forecast, I want to get the chance or percip and compare it to the api response
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    And I will check day "<day>" and get the humidity for each day
    Then I will get the same days data from the api node "<api>" response to compare that the humidity data matches

    Examples:
      |day|api|
      | 1 | 0 |
      | 2 | 1 |
      | 3 | 2 |
      | 4 | 3 |
      | 5 | 4 |
      | 6 | 5 |
      | 7 | 6 |
      | 8 | 7 |
      | 9 | 8 |
      |10 | 9 |
