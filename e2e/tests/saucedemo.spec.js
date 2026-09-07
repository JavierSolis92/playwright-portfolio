const { test, expect } = require('@playwright/test');
const {SaucePage} = require('../pages/SaucePage');

test.describe('Suite E2E - Swag Labs (SauceDemo) ', () => {
    let saucePage;

    test.beforeEach(async ({page}) => {
        saucePage = new SaucePage(page);
        await page.goto('https://www.saucedemo.com/');
    })

    test('Debe realizar una compra de producto punta a punta', async () => {
        await saucePage.login('standard_user', 'secret_sauce');

        await saucePage.completeCheckout('javier', 'solis', '1234');

        await expect(saucePage.completeHeader).toBeVisible();
        await expect(saucePage.completeHeader).toHaveText('Thank you for your order!');


    })
})