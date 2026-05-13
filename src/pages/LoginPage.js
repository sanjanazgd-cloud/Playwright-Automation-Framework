const { HomePage } = require('./HomePage');

class LoginPage {
    static usernameSelector = '#username';
    static passwordSelector = '#password';
    static loginButtonSelector = '#Login';
    static appURL = "https://login.salesforce.com/";

    constructor(page) {
        this.page = page;  // Store the Playwright page instance for use in methods
    }

    async navigateToLoginPage() {
        await this.page.goto(LoginPage.appURL);
    }

    async fillUsername(username) {
        await this.page.locator(LoginPage.usernameSelector).fill(username);
    }

    async fillPassword(password) {
        await this.page.locator(LoginPage.passwordSelector).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(LoginPage.loginButtonSelector).click().catch((error) => {
            console.error(`Error clicking the login button: ${error}`);
            throw error;  // Re-throw the error after logging it
        });
        const homePage = new HomePage(this.page);
        return homePage;
    }
}
module.exports = { LoginPage };