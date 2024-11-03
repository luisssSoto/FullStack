Feature: Test Case AccuWeather
    Testing different functionalities which should work correctly
    in AccuWeather web page

    Background:
        Given The user is on the Main Page Accuweather
        Then A banner is displayed

    Scenario: Test Case Search city
        When The user inputs 'New York' in the search field
        Then Search results list is displayed
        When The user clicks on the first search result
        Then The City weather page header contains 'New York' from the search

    Scenario: Test Case Recent locations
        When The user inputs 'London' in the search field
        Then Search results list is displayed
        When The user clicks on the first search result
        And The user goes back to the main page
        Then The web page is opened
        When The user chooses the first city in recent locations
        Then The City weather page header contains 'London' from the search

    Scenario: The user can type their own location
        When The user click on input field
        Then Your current location from user is displayed

# baseUrl: "https://www.accuweather.com/"
