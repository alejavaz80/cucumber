class LoginPage{

    async navigateToLoginPage(){
        await page.goto("https://saucedemo.com");
    }

    async enterCorrectLoginCredentials(){
        await page.locator("#user-name").type("standard_user")
        await page.locator("#password").type("secret_sauce")
        await page.locator("#login-button").click()
    }
}

module.exports = { LoginPage }