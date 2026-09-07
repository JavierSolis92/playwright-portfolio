exports.SaucePage = class SaucePage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page){
        this.page = page;

        this.userInput = page.locator('#user-name');
        this.passInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');

        this.firstAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartLink = page.locator('.shopping_cart_link');
        this.checkoutBtn = page.locator('#checkout');

        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
        this.finishBtn = page.locator('#finish');
        this.completeHeader = page.locator('.complete-header');
    }

    async login(username, password){
        await this.userInput.fill(username);
        await this.passInput.fill(password);
        await this.loginButton.click();
    }

    async completeCheckout(firstName, lastName, postalCode){
        await this.firstAddBtn.click();
        await this.cartLink.click();
        await this.checkoutBtn.click();

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueBtn.click();
        await this.finishBtn.click();

    }
}