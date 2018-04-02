Feature: Using weather.com I want to use the 10 day forecast to compare the daily temp variance

  Background:
    Given Chrome browser launches, and I land on the weatherdotcom main page


  Scenario: For the current day
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for the current day to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 2
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day two to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 3
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day three to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 4
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day four to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 5
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day five to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 6
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day six to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 7
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day seven to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 8
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day eight to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 9
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day nine to assure its within the desired range of twenty degrees between the min and max temp

  Scenario: For day 10
    When I am on the main page I will click on the ten day forecast
    And I will confirm I land on the ten day forecast for the local area
    Then I will compare the temp for day ten to assure its within the desired range of twenty degrees between the min and max temp
