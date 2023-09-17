Feature: See list of restaurants
    As a customer, I press the terms of service link to see what the company's Terms of Service are.

Scenario: User is on the home page
    Given I just visited the home page
    When the home page is loaded
    Then I should see a list of restaurants with its name and description