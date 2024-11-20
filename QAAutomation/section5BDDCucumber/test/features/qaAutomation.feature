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
