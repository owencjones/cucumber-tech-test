# Commentary

The tech test at hand requested that I make commentary on a set of step implementations provided.  

## Code on which to comment
```javascript
import { Given, When, Then, And, But } from 'cucumber'
Given(/^that the user can see the Justification card link$/,
    () => {
        checkElementExists('/html/body/app-root/ion-app/ion-router-outlet/app-work-list-router/ion-content/iongrid/ion-row/ion-col[2]/app-work-list-detail/ion-grid/ion-row/ion-col[1]/vmd-justification-card')
    }
)

When(/^they select the Justification card link$/,
    () => {
        clickElement('click', 'selector', '/html/body/app-root/ion-app/ion-router-outlet/app-work-list-router/ion-content/ion-grid/ion-row/ion-col[2]/app-work-list-detail/ion-grid/ion-row/ion-col[1]/vmd-justification-card')

        waitForVisible('/html/body/app-root/ion-app/ion-router-outlet/app-work-list-router/ion-content/ion-grid/ion-row/ion-col[2]/app-work-list-detail/ion-grid/ion-row/ion-col[1]/vmd-justification-card')
    }
)

Then(/^they will see the Justification card showing the justification text for the application$/,
    () => {
        checkElementExists('//vmd-justification-card')
        checkContainsText('element', '//*[@class="vmd-card-content"]', false, 'Lorem Ipsum is simply dummy text')
    }
)

And(/^they will see a Message Applicant Option$/,
    () => {
        checkElementExists('.vmd-card-actions')
        checkContainsText('element', '//*[@class="vmd-card-actions"]/ion-button[text()="Message applicant"]', false, 'MESSAGE APPLICANT')
    }
)

And(/^they will see a Pass option$/,
    () => {
        checkElementExists('.vmd-card-actions')
        checkContainsText('element', '//*[@class="vmd-card-actions"]/ion-button[text()="Pass"]', false, 'PASS')
    }
)
```

Initially, what I have to say about this is that the step definitions _all_ use `Regex`, but none of them would match anything but the exact expressed string, so they are not regular expressions.  It's a small overhead, but passing strings would be moderately more performant to parse, and somewhat easier to write.

The next point to make is that, whilst `And` is valid in Cucumber syntax overall, and works in the Java version; in Cucumber.js, it's not a valid step definition. so `import { And } from 'cucumber'}` would return `And` as `undefined`.

Similar to `And`, `But` is also not a function in Cucumber.js, and it is also imported but not used in the code given.

The only Step definitions in Cucumber.js are `Given`, `When`, and `Then`. _I'm not sure why And and But are not valid in cucumber.js, to be quite honest, as they are valid in Cucumber syntax._

(Cucumber.js Step definition syntax)[https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md]

Many of the functions being called are using XPath identifiers to find the elements needed.  Whilst this can be useful in some cases, they're also longwinded, and could be replaced in some cases with CSS-style selectors, such as those used in `document.getQuerySelector` functions.

This XPath:

```xpath
/html/body/app-root/ion-app/ion-router-outlet/app-work-list-router/ion-content/iongrid/ion-row/ion-col[2]/app-work-list-detail/ion-grid/ion-row/ion-col[1]/vmd-justification-card
```

Could be written in shorter form (`//vmd-justification-card`) or as a CSS selector - other uses in the code make use of things like XPath's `text()` function, which are not accessible in CSS selectors.

Checks that the user can see elements actually only check that the element exists in the DOM, rather than it being actually visible.  DOM elements can exist without being visible, either by being rendered invisible by layout or styling, or by being outside of the viewport.

The line:
```javascript
checkContainsText('element', '//*[@class="vmd-card-actions"]/ion-button[text()="Message applicant"]', false, 'MESSAGE APPLICANT')
```
and:
```javascript
checkContainsText('element', '//*[@class="vmd-card-actions"]/ion-button[text()="Pass"]', false, 'PASS')
```
identifies the element by an XPath looking for text content of `Message applicant` or `Pass` and then asserts that it should contain `MESSAGE APPLICANT` or `PASS` respectively.  Unless `<ion-button>` has a child element containing the uppercase version of the text, or the `checkContainsText` function is case-insensitive, these steps may not pass.

Tests that identify the existence of the `<vmd-justification-card>` element use a full XPath, but in other scenarios use a shorter XPath of `//vmd-justification-card` - suggesting that both of these could find the element using the shorter path, or a css selector.
