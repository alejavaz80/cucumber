const { Given, When, Then } = require("@cucumber/cucumber")

Given("I visit a login page", async function ()  {
    await page.goto("https://www.saucedemo.com/")
})

When("I fill the login form with valid credentials", async function () {
    await page.locator("#user-name").type("standard_user")
    await page.locator("#password").type("secret_sauce")
    await page.locator("#login-button").click()
    await page.waitForLoadState('networkidle')
})

Then("I should see the home page", async function () {
    await page.waitForSelector('.inventory_list')
})