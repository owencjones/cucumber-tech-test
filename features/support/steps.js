const {
    Then,
    When,
    Given
} = require('cucumber');
const{ assert } = require('chai');

const { checkElementExists, clickElement, getElements, isVisible, elementContainsText } = require('./browser-functions');

/*
    For verbosity and terseness, all steps in the same file - in a large test pack, I'd separate these.
*/

Given('the user is logged in', async function () {
    // No obvious way to see logged in version, so I'm checking for existence of the ingredients tab
    const elementExists = await checkElementExists('.ingredients-tab-class');
    assert(elementExists, 'User was not logged in');
});

Given('the user can see the {string} tab', async function (name) {
    const elementExists = await checkElementExists(`.${name}-tab-class`);
    assert(elementExists, `User could not see ${name} tab`);
});

When('the user clicks on the {string} tab', async function (name) {
    return await clickElement(`.${name}-tab-class button`);
});

Then('the user can see the ingredients list', async function () {
    const elementIsVisible = await isVisible('vmd-ingredient-list');
    assert(elementIsVisible, `User could not see the ingredients list`);
});

When('the user can see {string} in the ingredients list items', async function (ingredient) {
    const elementIsVisible = await isVisible('vmd-ingredient-list');
    assert(elementIsVisible, `User could not see the ${ingredient} list item`);
});

When('the user clicks on the {string} item from the ingredients list', async function (ingredient) {
    const listElements = await getElements('vmd-ingredients-list-item h3');
    const listElementsText = listElements.map(el => el.innerText);
    const ingredientIndex = listElementsText.indexOf(ingredient);

    if (ingredientIndex !== -1) {
        return await listElements[ingredientIndex].click();
    }

    // Throwing error helps identify problems if test fails - fail fast.
    throw(`could not find ingredient ${ingredient} to click`);
});

Then('the user can see {string} in the ingredients detail card', async function (ingredient) {
    const textIsPresent = elementContainsText('vmd-ingredients-card', ingredient);
    assert(textIsPresent, `Could not find the ingredient ${ingredient} in the ingredients details element`)
});
