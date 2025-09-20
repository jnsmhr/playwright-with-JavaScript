class DashboardPage{
    constructor(page){
        this.page = page
        this.title = '[data-test="title"]';
    }

    async getTitle(){
        return await this.page.locator(this.title).textContent();
    }
}
module.exports= {DashboardPage};