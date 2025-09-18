class LoginPage{
    constructor (page){
        this.page = page;
        this.usernameInput = 'input[name="user-name"]';
        this.passwordInput = 'input[name="password"]';
        this.submitButton = '[data-test="login-button"]';
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/'); 
    }

    async login(username,password){
        await this.page.fill(this.usernameInput,username);
        await this.page.fill(this.passwordInput,password);
        await this.page.click(this.submitButton);
    }
}

module.exports ={ LoginPage};