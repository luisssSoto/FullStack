Feature: Add Element Button Test
    Testing the Element Add Button web page

Example: Adding Element and then delete it
    Given I am on the Main Page
    When I click on 'Add/Remove Elements' link
    Then I am on the "Add Remove Elements" page
    When I click on "Add Element"
    Then Element "Delete Button" appears
    When I click on "Delete Button"
    Then "Delete Button" element disappears
