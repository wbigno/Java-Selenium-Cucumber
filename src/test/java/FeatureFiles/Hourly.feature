@hourly
Feature: Using weather.com I want to use the hourly forecast to compare the daily temp variance, and validate it to their api

  Background:
    Given Chrome browser launches, and I land on the weatherdotcom main page

    Scenario: For the hourly forecast, verify temp is within 10 degrees of the min and max temps each day