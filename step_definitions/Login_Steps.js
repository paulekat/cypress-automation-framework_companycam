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

// Then(`Then I should be logged in to my account and land on the Project Feed page`, () => {
//     cy.contains("Project Feed").should('be.visible');
// });

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
    cy.get('.ccb-blue').click();
});

When("I type a first name", function () {
    cy.get('.sc-bkzrtC > :nth-child(1) > input').type('John');
});

When("I type a last name", function () {
    cy.get('.sc-bkzrtC > :nth-child(2) > input').type('Doe');
});

When("I type an email address", function () {
    cy.get(':nth-child(3) > input').type('johndoe+65@example.com');
});

When("I click on the Send Invite button", function () {
    cy.get('.ccb-blue').click();
});

Then("I should see the new user's invite has been created on the Users page", function () {
    cy.contains('johndoe+65@example.com').should('be.visible');
});





