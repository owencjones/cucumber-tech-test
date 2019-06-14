const {
    Then,
    And,
    Given
} = require('cucumber');
const{ assert } = require('chai');

const { checkElementExists, clickElement, getElements } = require('./browser-functions');

/*
    For verbosity and terseness, all steps in the same file - in a large test pack, I'd separate these.
*/

Given('the user is logged in', await function () {
    // No obvious way to see logged in version, so I'm checking for existence of the ingredients tab
    const elementExists = await checkElementExists('.ingredients-tab-class');
    assert(elementExists, 'User was not logged in');
});

Given('the user can see the {string} tab', await function (name) {
    const elementExists = await checkElementExists(`.${name}-tab-class`);
    assert(elementExists, `User could not see ${name} tab`);
});

And('the user clicks on the {string} tab', await function () {
    return await clickElement(`.${name}-tab-class button`);
});

Then('the user can see the ingredients list', await function () {
    const elementIsVisible = await isVisible('vmd-ingredient-list');
    assert(elementIsVisible, `User could not see the ingredients list`);
});

And('the user can see {string} in the ingredients list items', await function (ingredient) {
    const elementIsVisible = await isVisible('vmd-ingredient-list');
    assert(elementIsVisible, `User could not see the ${ingredient} list item`);
});

And('the user clicks on the {string} item from the ingredients list', await function (ingredient) {
    const listElements = await getElements('vmd-ingredients-list-item h3');
    const listElementsText = listElements.map(el => el.innerText);
    const ingredientIndex = listElementsText.indexOf(ingredient);

    if (ingredientIndex !== -1) {
        return await listElements[ingredientIndex].click();
    }

    // Throwing error helps identify problems if test fails - fail fast.
    throw(`could not find ingredient ${ingredient} to click`);
});

Then('Then the user can see {string} in the ingredients detail card', await function (ingredient) {
    const textIsPresent = elementContainsText('vmd-ingredients-card', ingredient);
    assert(textIsPresent, `Could not find the ingredient ${ingredient} in the ingredients details element`)
});
