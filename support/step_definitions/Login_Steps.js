import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://app.companycam.com/users/sign_in";

Given(`I navigate to companycam user login page`, () => {
    cy.visit(url);
});

When(`I enter an email address`, () => {
    cy.get('#user_email_address').type("pcoop1212@gmail.com");
});

When(`I type a password`, () => {
    cy.get('#user_password').type("Lkab1rd11!");
});

When(`I click the Sign In button`, () => {
    cy.get('[type="submit"]').click();
});

Then(`I am logged in successfully`, () => {
    cy.get('[data-testid="projects__main-page-title"]').should('have.text', 'Project Feed');
});

Given("I am logged into my account", function () {
    cy.visit(url);
    cy.get('#user_email_address').type("pcoop1212@gmail.com");
    cy.get('#user_password').type("Lkab1rd11!");
    cy.get('[type="submit"]').click();
    cy.contains("Project Feed").should('be.visible');
});


When("I click on the hamburger menu", function () {
    cy.get('.hamburger-box').click();
});

When("I click on the Users button", function () {
    cy.get('[href="/users"]').click();
});

When("I click on the Invite New Users button", function () {
    cy.get('.ccb-blue > span').click();
});

// When("I type a first name", function () {
//     cy.get('.sc-bkzrtC > :nth-child(1) > input').type('John');
// });

// When("I type a last name", function () {
//     cy.get('.sc-bkzrtC > :nth-child(2) > input').type('Doe');
// });

When("I type an {string} and tap enter", (email) => {
    cy.get('[data-testid="user-invite-email-field"]')
    .type(email)
    .type('{enter}');
})

When('I click the Review Invite button', function ()  { 
    cy.get('.sc-LzLsD').click();
});


When("I click on the Send Invite button", function () {
    cy.get('[data-testid="user-invite-review-send"] > .sc-LzLsD').click();
});

// Then("I should see a {string}", (message) => {
//     cy.get('*[class^="sc-Lz0ms gyHDcw').contains(message);
// });

When(`I type an invalid password`, () => {
    cy.get('#user_password').type("Lkab1rd1");
});

Then(`I should be presented with a signon error message`, () => {
    cy.get('.errors > p').should('have.text', 'Invalid Email address or password.');
});

Then(`I should see that the new email address was invited successfully`, () => {
    cy.get(':nth-child(1) > .jAWvFF > .sc-LzOGD').contains
});








