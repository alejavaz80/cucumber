const { Given, When, Then } = require("@cucumber/cucumber")
const { LoginPage } = require("../page-objects/loginPage")
const { HomePage } = require("../page-objects/homePage")

const loginPage = new LoginPage()
const homePage = new HomePage()

Given("I visit a login page", async function(){
    await loginPage.navigateToLoginPage()
})

//When("I fill the login form with valid credentials", async function(){

When(/I fill the login form user "([^"]*)" and password "([^"]*)"/, async function(user, pass){
    await loginPage.enterLoginCredentials(user, pass)
})

When(/I incorrectly fill the login form user "([^"]*)" and password "([^"]*)"/, async function(user, pass){
    await loginPage.enterLoginCredentials(user, pass)
})

Then("I should see the home page", async function(){
    await homePage.userIsLoggedInPage()
})

Then("I should see a error message", async function(){
    await loginPage.assertErrorMessage()
})