Feature: Incorrect login

    As a user
    If i enter incorrect credentials i will not be able to login

    Scenario: Incorrect credentials to login
    Given I visit a login page
    When I incorrectly fill the login form user "<user>" and password "<password>"
    Then I should see a error message

    Examples:
        | user              | password           |
        | incorrect_user1   | incorrect_password1|
        | incorrect_user2   | incorrect_password2|
