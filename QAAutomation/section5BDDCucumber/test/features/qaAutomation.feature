Feature: Working with Frames
    In order to visualize the Frames
    As a user
    I can interact with Frames and see any particular element inside of it

    Scenario: Checking what is inside different Frames
        Given The user is on QA Automation Home page
        Then QA Automation Home page is displayed
        When The user clicks on Alerts, Frame & Windows link
        Then Alerts, Frame & Windows page is displayed
        When The user clicks on Nested Frames
        Then Nested Frames title is displayed
        When The user switch to Parent Frame
        Then The text 'Parent frame' is in the parent Frame
        When The user switch to Child Frame
        Then The text 'Child Iframe' is in the child Frame

    @forms
    Scenario: Checking the forms
        Given The user is on QA Automation Home page
        Then QA Automation Home page is displayed
        When The user clicks on Forms link
        Then Practice Form is displayed
        When The user clicks on Practice Form Button
        Then A form is displayed
        When The user fills out the first name
        * the last name
        * the radio input male
        * the phone number field
        And clicks on submit button
        Then A Success modal is displayed
        
