class DashboardPage{
    constructor(page){
        this.page = page
        this.title = page.locator('[data-test="title"]');
    }
}
module.exports= {DashboardPage};