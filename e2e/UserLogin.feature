Feature: companycam - User Login 

    Scenario: Login to CompanyCam Account Successfully 
        Given I navigate to companycam user login page 
        When I enter an email address
        And I type a password 
        And I click the Sign In button
        # Then I should be logged in to my account and land on the Project Feed page

    # # Scenario: Invite A New User Successfully
    # #     Given I am logged into my account
    #     When I click on the hamburger menu
    #     And I click on the Users button
    #     And I click on the Invite New Users button 
    #     And I type a first name 
    #     And I type a last name 
    #     And I type an email address
    #     And I click on the Send Invite button 
    #     Then I should see the new user's invite has been created on the Users page 