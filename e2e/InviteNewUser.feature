Feature: companycam - New User Invitation Page


    Scenario: Invite A New User Successfully
        Given I am logged into my account
        When I click on the hamburger menu
        And I click on the Users button
        And I click on the Invite New Users button 
        And I type a first name 
        And I type a last name 
        And I type an email address
        And I click on the Send Invite button 
        Then I should see the new user's invite has been created on the Users page 