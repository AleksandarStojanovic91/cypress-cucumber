Feature: Search for a job on Hello World and validate search results

  Background:
    Given you navigate to 'https://www.helloworld.rs/'

  Scenario: Search for a job on Hello World and validate the results
    When I select 'QA' from menu
    And I search by IT technology 'Cypress'
    And I set 'intermediate' seniority
    And I sort by 'Najnovije'
    Then I verify search criteria 'QA' 'Cypress' 'Intermediate'
    When I open first search result
    Then I verify result content