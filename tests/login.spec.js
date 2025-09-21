
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { validUser, emptyUser, invalidUser, emptyPassword } = require('../fixtures/userData');
const { DashboardPage } = require('../pageObjects/DashboardPage');
const { TITLE_VALIDATON, EMPTY_USER, INVALID_LOGIN, EMPTY_PASSWORD, TITLE_VALIDATION } = require('../fixtures/errors');

test.describe('Login Functionality Tests', ()=>{
  let loginPage,dashboard

  test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    dashboard = new DashboardPage(page);      
    await loginPage.goto();
  });
test('Valid user should log in successfully', async ({ page }) => {   
  await loginPage.login(validUser.username, validUser.password);
  await expect(dashboard.title).toHaveText(TITLE_VALIDATION);
})
test('Empty username should show required error', async ({page})=>{
  await loginPage.login(emptyUser.username, emptyUser.password);
  await expect(loginPage.errorMessage).toHaveText(EMPTY_USER);
})
test('Invalid Login should show error message', async ({page})=>{  
  await loginPage.login(invalidUser.username, invalidUser.password);
  await expect(loginPage.errorMessage).toHaveText(INVALID_LOGIN);
})
test('Empty Password should show required error',async({page})=>{
  await loginPage.login(emptyPassword.username,emptyPassword.password)
  await expect(loginPage.errorMessage).toHaveText(EMPTY_PASSWORD);
})
})