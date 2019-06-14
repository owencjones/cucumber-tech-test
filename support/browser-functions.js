/**
 * Mock functions to simulate actions that a headless test system would make.
 * 
 * Copied from the example in point 4 of the test, but could reflect usage of WebDriver, Protractor, Puppeteer etc.
 */

 /**
  * Check an element exists
  * @param {string} query      A string of css-syntax selectors to find an object
  */
export function checkElementExists(query) {
    return true
};

/**
 * 
 * @param {string} query       A string of css-syntax selectors to find an object
 */
export function clickElement(query) {
    return true;
}