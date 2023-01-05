class HomePage{

    async userIsLoggedInPage(){
        await page.waitForSelector('.inventory_list')
    }
}

module.exports = { HomePage }