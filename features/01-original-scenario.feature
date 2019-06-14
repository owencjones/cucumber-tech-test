Feature: Ingredients tab

    Given the user is logged in

        Scenario: The user can see a specific ingredient in the ingredients detail card
            Given the user can see the ingredients tab
            And the user clicks on the ingredients tab
            Then the user can see the ingredients list
            And the user can see cinnamon in the ingredients list items
            And the user clicks on the cinnamon item from the ingredients list
            Then the user can see cinnamon in the ingredients detail card