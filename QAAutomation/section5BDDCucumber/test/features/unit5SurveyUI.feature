Feature: Sample app
    In order to see a successfull message
    As a user of Sample app web page    
    I need to see a successfull message once a set up credentials

  Scenario: Validations of credentials
    Given The user is on the home page
    Then Home page should be open
    When The user click on Sample app
    Then Sample app page should be open
    When The user fill the name field: 'alex'
    And The user fill the password field: 'pwd'
    When The user click on Log in button
    Then This message should contain 'alex'
