const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
test('Login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("sanjanazgd.916129194954@agentforce.com");  
    await loginPage.fillPassword("Sanjana@09");

    const homePage = await loginPage.clickLoginButton();
    await page.pause();
    await homePage.expectWelcomeTitleTobeVisible();
});