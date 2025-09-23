//** HELPERS FILE IS USED TO CARRY OUT SHARED STEP */

const urls = require("../fixtures/urls");
const { LoginPage } = require("../pageObjects/LoginPage");

async function loginAs(page,username, password) {
    const loginPage= new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username,password);
}
module.exports = {loginAs};