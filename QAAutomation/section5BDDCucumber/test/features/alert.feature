Feature: Alert Tests

Scenario: Java Script Alert handling
    Given I am on the main page
    When I click 'JavaScript Alerts' page
    And I Am on the 'JavaScript Alerts' page
    When I open a js alert
    And I accept the js alert
    Then I should see a success message 'You successfully clicked an alert'