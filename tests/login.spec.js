
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { validUser, emptyUser, invalidUser } = require('../fixtures/userData');
const { DashboardPage } = require('../pageObjects/DashboardPage');

test('Valid user should log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);
  const actualText = await dashboard.getTitle();
  expect(actualText).toBe('Products');
})
test('Testing empty user', async ({page})=>{
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(emptyUser.username, emptyUser.password);
  const emptyValidation = await loginPage.getValidationMessage();
  expect(emptyValidation).toBe('Epic sadface: Username is required');
})
test('Invalid Login', async ({page})=>{
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(invalidUser.username, invalidUser.password);
  const errorMessage = await loginPage.getValidationMessage();
  expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
})