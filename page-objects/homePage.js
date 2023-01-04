class HomePage{

    async userIsLoggedInPage(){
        await expect(page.locator(".title")).toContainText("Products")
    }
}

module.exports = { HomePage }