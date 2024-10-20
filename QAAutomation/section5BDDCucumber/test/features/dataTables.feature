Feature: Data Table Tests

Scenario: Count sum of Due column
    Given The user is on the Main page
    When The user select 'Sortable Data Tables' page
    And The user is on the 'Data Tables' page
    Then Sum of Due column values should be 251