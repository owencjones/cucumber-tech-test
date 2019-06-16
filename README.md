# An example of cucumber.js usage for a technical test

## Introduction
Cucumber.js is an implementation of the `gherkin` syntax for Behaviour-Driven-Development, a system for testing your applications, based on similar language to that used by business staff such as Business Analysts.  Broadly, the intention is to allow tests to be written in plain language after some setup.

Because of the requirement to parse real language, the setup of cucumber.js needs careful consider to make it as reusable as possible, so that when new scenarios are introduced, as much code can be reused as possible, and as little alteration to step-definitions is necessary.

## Approach
For this tech test, I've written feature files, and the step definitions needed for them, but instead of linking it to a real headless browser, I've created mock functions similar to those used by Selenium, Cypress, or Puppeteer.  I didn't have the actual example application to use, so this seemed like a decent approach.

## Commentary
See the (commentary.md)[commentary.md] for the commentary requested in the test on example BDD code provided.