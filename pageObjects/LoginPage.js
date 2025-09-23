class LoginPage{
    constructor (page){
        this.page = page;
        this.usernameInput = 'input[name="user-name"]';
        this.passwordInput = 'input[name="password"]';
        this.submitButton = '[data-test="login-button"]';
        this.errorMessage = page.locator('[data-test="error"]');        
    }

    async goto(){
        await this.page.goto('/'); 
    }
     
    async login(username,password){
        await this.page.fill(this.usernameInput,username);
        await this.page.fill(this.passwordInput,password);
        await this.page.click(this.submitButton);
    }
}

module.exports ={ LoginPage};