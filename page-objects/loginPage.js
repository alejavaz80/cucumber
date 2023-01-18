const { expect, request } = require('@playwright/test')
class LoginPage{

    async navigateToLoginPage() {
        await page.goto("https://saucedemo.com");
    }

    async enterLoginCredentials(user, pass) {
        await page.fill("#user-name", user)
        await page.fill("#password", pass)
        await page.click("#login-button")
        await page.waitForLoadState('networkidle')
    }

    async assertErrorMessage(){
        const message = await page.locator(".error-message-container")
        await expect(message).toBeVisible()
    }

    async loginApi(){
        const apiContext = await request.newContext();

        const loginResponse = await apiContext.post('https://mipaginanueva/api/respuestaecibido',
        {
            data: loginPayload
        })
        expect((await loginResponse).ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        const nombrePaciente = loginResponseJson.nombre;
    
    }
}

module.exports = { LoginPage }