Feature: Login Action

    As a user
    I want to login into application

    Scenario: Login with valid credentials
        Given I visit a login page
        When I fill the login form user "standard_user" and password "secret_sauce"
        Then I should see the home page

    Scenario Outline: Incorrect credentials to login
        Given I visit a login page
        When I incorrectly fill the login form user "<user>" and password "<password>"
        Then I should see a error message

        Examples:
            | user              | password           |
            | incorrect_user1   | incorrect_password1|
            | incorrect_user2   | incorrect_password2|
