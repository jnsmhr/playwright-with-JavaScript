// const { test, expect} = require('@playwright/test');
// const { LoginPage } = require('../pageObjects/LoginPage');
// const { validuser } = require('../fixtures/userData');

// test('valid user should log in successfully', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.login(validuser.username, validuser.password);
//     await expect(page).toHaveURL(/dashboard/)
// });
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { validUser } = require('../fixtures/userData');

test('Valid user should log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  await expect(page).toHaveURL(/inventory/);
});
