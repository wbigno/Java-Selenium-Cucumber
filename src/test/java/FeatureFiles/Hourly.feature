
Feature: Using weather.com I want to use the hourly forecast to compare the daily temp variance, and validate it to their api

  Background:
    Given Chrome browser launches, and I land on the weatherdotcom main page
  @wip
    Scenario Outline: For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day
      When I am on the main page I will click on the hourly forecast
      And I will confirm I land on the hourly forecast for the local area
      And I will check day "<day>" and get the temp and feels like to confirm its within the expected range
      Then I will get the temp and feels like data from the api node "<api>" response to compare that they match the website

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
    |11 |10 |
    |12 |11 |
    |13 |12 |
    |14 |13 |
    |15 |14 |