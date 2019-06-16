/**
 * Mock module.exports to simulate actions that a headless test harness would make.
 * 
 * Copied from the example in point 4 of the test, but could reflect usage of WebDriver, Protractor, Puppeteer etc.
 */

module.exports = {};

 /**
  * Check an element exists
  * 
  * @param {string} query      A string of css-syntax selectors to find an object
  * @returns {boolean}
  */
module.exports.checkElementExists = async function(query) {
    return true
};

/**
 * Check an element can be seen
 * 
 * @param {string} query    A string of css-syntac selectors to find an object
 * @returns {boolean}
 */
module.exports.isVisible = async function(query) {
    return true
};

/**
 * Click an element
 * 
 * @param {string} query       A string of css-syntax selectors to find an object
 * @returns {boolean}
 */
module.exports.clickElement =  async function(query) {
    return true;
};

/**
 * Get array of elements by query
 * 
 * @param {string} query        A string of css-syntax selectors to find an object
 * @returns {Array}
 */
module.exports.getElements = async function(query) {
    return [
        {'innerText': 'cinnamon', click: async function () {}},
        {'innerText': 'apples', click: async function () {}},
        {'innerText': 'sugar', click: async function () {}}
    ]
};

/**
 * Check if an element contains specific text
 * 
 * @param {string} query        A string of css-syntax selectors to find an object
 * @param {string} text         String to find within element
 * @returns {Boolean}
 */
module.exports.elementContainsText = async function(query, text) {
    return true
};
