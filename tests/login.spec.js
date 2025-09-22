
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { validUser, emptyUser, invalidUser, emptyPassword, lockedUser } = require('../fixtures/userData');
const { DashboardPage } = require('../pageObjects/DashboardPage');
const  {LOGIN, INVENTORY}  = require('../fixtures/errors');
test.describe('Login Functionality Tests', ()=>{
  let loginPage,dashboard

  test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    dashboard = new DashboardPage(page);      
    await loginPage.goto();
  });
test('Valid user should log in successfully', async ({ page }) => {   
  await loginPage.login(validUser.username, validUser.password);
  await expect(page).toHaveURL(/inventory.html/);
  await expect(dashboard.title).toHaveText(INVENTORY.TITLE_VALIDATION);
})
test('Empty username should show required error', async ({page})=>{
  await loginPage.login(emptyUser.username, emptyUser.password);
  await expect(loginPage.errorMessage).toHaveText(LOGIN.EMPTY_USER);
})
test('Invalid Login should show error message', async ({page})=>{  
  await loginPage.login(invalidUser.username, invalidUser.password);
  await expect(loginPage.errorMessage).toHaveText(LOGIN.INVALID_LOGIN);
})
test('Empty Password should show required error',async({page})=>{
  await loginPage.login(emptyPassword.username,emptyPassword.password)
  await expect(loginPage.errorMessage).toHaveText(LOGIN.EMPTY_PASSWORD);
})
test('Locked out user shouldnt log in',async({page})=>{
 await loginPage.login(lockedUser.username,lockedUser.password)
 await expect(loginPage.errorMessage).toHaveText(LOGIN.LOCKED_USER)
})
})