Feature: Testing the dynamic controls Elements

Scenario: Click on buttons and wait for response
When I am on the main page.
And I click on 'Dynamic Controls' page
Then I am on the 'Dynamic Controls' page
When I click on 'Enabled' button
Then Input field should be 'enabled'
And 'It's enabled!' message should be displayed
When I click on input field
And I type a random text
Then The random text should be equal to the text on input field
When I click on 'Disabled' button
Then Input field should be 'disabled'
But 'It's disabled!' message should be displayed