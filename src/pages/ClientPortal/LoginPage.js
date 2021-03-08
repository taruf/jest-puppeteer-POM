class LoginPage{

    constructor(page) {
        this.page = page
    }

    async getTitle() {
        return this.page.title();
    }

    // TODO locators
    async userSignin(user,pass){
        await this.page.type('input[id=UserName]', user); 
        await this.page.type('input[id=Password]', pass); 
        await this.page.click('button[id=next1]'); 
        return this.page
    }
}

module.exports = LoginPage;