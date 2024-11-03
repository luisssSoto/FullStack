Feature: Testing Wikipedia web page
        Input search field and play around this field
    
    Background: 
        Given The Main page is displayed

    Scenario: Test case Download PDF
    When I input 'Albert Einstein' text in the search field
    And I click on submit button
    Then A second page 'Albert Einstein' is displayed
    When I click on tool menu button 
    And I click on 'Download as PDF' link.
    Then Information page for 'Download as a PDF' is displayed
    When I click on Download button
    Then A file with 'Albert_Einstein.pdf' name as PDF is downloaded

    Scenario: Test case Page Information 
    When I input 'Bengal tiger' text in the search field
    And I click on submit button
    Then A second page 'Bengal tiger' is displayed
    When I click on tool menu button 
    And I click on 'Page information' link.
    Then Information page for 'Bengal tiger' is displayed
    And The title 'Information for "Bengal tiger"' is displayed

    @gabriel
    Scenario: Test case Search Language
    When I input 'Gabriel García Márquez' text in the search field
    And I change search language to Español 'es'
    * I click on submit button
    Then Information page for 'Gabriel García Márquez' is displayed
    And Article page for'Gabriel García Márquez' is open

    # baseUrl: "https://www.wikipedia.org/"