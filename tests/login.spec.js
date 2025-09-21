
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { validUser, emptyUser, invalidUser } = require('../fixtures/userData');
const { DashboardPage } = require('../pageObjects/DashboardPage');

test.describe('Testing Login Funcationality', ()=>{
  
  test.beforeEach(async ({page})=>{
    const loginPage = new LoginPage(page);    
    await loginPage.goto();
  });
test('Valid user should log in successfully', async ({ page }) => {  
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);  
  await loginPage.login(validUser.username, validUser.password);
  await expect(dashboard.title).toHaveText('Products');
})
test('Testing empty user', async ({page})=>{
  const loginPage = new LoginPage(page); 
  await loginPage.login(emptyUser.username, emptyUser.password);
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
})
test('Invalid Login', async ({page})=>{  
  const loginPage = new LoginPage(page);
  await loginPage.login(invalidUser.username, invalidUser.password);
  await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
})
})