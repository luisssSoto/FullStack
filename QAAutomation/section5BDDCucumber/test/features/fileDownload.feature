Feature: File Download
    Scenario Outline: As a user, I can download file
    Given I am on the Main page
    When I select 'File Download' page
    And I download <file> file
    Then I should see <file> file in downloads folder

    Examples:
        | file           |
        | LambdaTest.txt |