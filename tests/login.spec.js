
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { validUser, emptyUser, invalidUser, emptyPassword, lockedUser } = require('../fixtures/userData');
const { DashboardPage } = require('../pageObjects/DashboardPage');
const  {LOGIN, INVENTORY}  = require('../fixtures/errors');
const { loginAs } = require('../utils/helpers');
test.describe('Login Functionality Tests', ()=>{
  let loginPage,dashboard

  test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);
    dashboard = new DashboardPage(page);
  });
test('Valid user should log in successfully', async ({ page }) => {   
  await loginAs(page,validUser.username, validUser.password);
  await expect(page).toHaveURL(/inventory.html/);
  await expect(dashboard.title).toHaveText(INVENTORY.TITLE_VALIDATION);
})
test('Empty username should show required error', async ({page})=>{
  await loginAs(page,emptyUser.username, emptyUser.password);
  await expect(loginPage.errorMessage).toHaveText(LOGIN.EMPTY_USER);
})
test('Invalid Login should show error message', async ({page})=>{  
  await loginAs(page,invalidUser.username, invalidUser.password);
  await expect(loginPage.errorMessage).toHaveText(LOGIN.INVALID_LOGIN);
})
test('Empty Password should show required error',async({page})=>{
  await loginAs(page,emptyPassword.username,emptyPassword.password)
  await expect(loginPage.errorMessage).toHaveText(LOGIN.EMPTY_PASSWORD);
})
test('Locked out user shouldnt log in',async({page})=>{
 await loginAs(page,lockedUser.username,lockedUser.password)
 await expect(loginPage.errorMessage).toHaveText(LOGIN.LOCKED_USER)
})
})