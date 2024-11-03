Feature: Add Element Button Test
    Testing the Element Add Button web page

  Background:
    Given I am on the main page

  Example: Adding Element and then delete it
    When I click on 'Add/Remove Elements' page
    Then I am on the Add Remove Elements page
    When I click on "Add Element"
    Then Element "Delete Button" appears
    When I click on "Delete Button"
    Then "Delete Button" element disappears

  Scenario: Handling JavaScript Alerts
    When I click on 'JavaScript Alerts' page,
    And I am on the JavaScript Alerts page
    When I open a js alert
    And I accept the js alert
    Then I should see a success message 'You successfully clicked an alert'

  Scenario Outline: As a user, I can download file
    When I click on 'File Download' page
    And I download <file> file
    Then I should see <file> file in downloads folder

    Examples:
      | file           |
      | LambdaTest.txt |

  Scenario: Count sum of Due column
    When I click on 'Sortable Data Tables' page
    And I am on the "Data Tables" page
    Then Sum of Due column values should be 251

  Scenario: Click on buttons and wait for response
    When I am on the main page
    And I click on 'Dynamic Controls' page
    Then I am on the Dynamic Controls page
    When I click on 'Enable' button
    Then Input field should be 'enabled'
    And 'It's enabled!' message should be displayed
    When I click on input field
    And I type a random text
    Then The random text should be equal to the text on input field
    When I click on 'Disabled' button
    Then Input field should be 'disabled'
    But 'It's disabled!' message should be displayed
