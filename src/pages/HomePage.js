const { page, expect } = require('@playwright/test');
const { time } = require('node:console');

class HomePage {
    static welcomeTitleLocator = 'Welcome';

    constructor(page) {
        this.page = page;  // Store the Playwright page instance for use in methods
    }

    async expectWelcomeTitleTobeVisible() {
        await expect(this.page.getByTitle(HomePage.welcomeTitleLocator)).toBeVisible({timeout: 10000});
    }
}
module.exports = { HomePage };