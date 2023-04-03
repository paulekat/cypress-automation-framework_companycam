Feature: companycam - New User Invitation Page


    # Scenario: Invite A New User Successfully
    #     Given I am logged into my account
    #     When I click on the hamburger menu
    #     And I click on the Users button
    #     And I click on the Invite New Users button
    #     And I type an email address
    #     And I click on the Send Invite button
    #     Then I should see the new user's invite has been created on the Users page

    # Scenario: Unsuccessfully Invite A User
    #     Given I am logged into my account
    #     When I click on the hamburger menu
    #     And I click on the Users button
    #     And I click on the Invite New Users button
    #     And I type an existing email address
    #     And I click on the Send Invite button
    #     Then I should be presented with header text '<message>'

    Scenario Outline: Validate successful and unsuccessful account invites
        Given I am logged into my account
        When I click on the hamburger menu
        And I click on the Users button
        And I click on the Invite New Users button
        And I type an '<emailAddress>' and tap enter
        And I click the Review Invite button
        And I click on the Send Invite button
        Then I should see that the new email address was invited successfully

        Examples:
            | emailAddress        |
            | tester77@email.com  |
            | tester146@email.com |
            | tester11@email.com  |

