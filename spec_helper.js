const LoginPage = require('./src/pages/ClientPortal/LoginPage')
const AdminLoginPage = require('./src/pages/AdminPortal/LoginPage')

class spec_helper{

    static async loginClient(){
        var page = await this.initBrowser()
        await page.goto('https://duckduckgo.com/') // TODO: replace <Client Portal url>
       // await new LoginPage(page).userSignin('userid', 'password') // TODO: Provide login credentials 'userid' & 'password'
        await page.waitFor(1000);
        return page
    }

    static async loginAdmin(){
        var page = await this.initBrowser()
        await page.goto('https://www.yahoo.com/') // TODO: replace <Admin Portal url>
        //await new AdminLoginPage(page).userSignin('userid', 'password') // TODO: Provide login credentials 'userid' & 'password'
        await page.waitFor(5000);
        return page
    }

    static async initBrowser(){
        var page = await global.__BROWSER__.newPage()
        page.emulate({
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36',
            viewport: {
              width : 1920, height: 1080 
           },
        });  
        return page 
    }

    // Example search method
    static async searchString(search){
        var page = await this.initBrowser()
        await page.goto('https://duckduckgo.com/') 
        await page.type('input[id=search_form_input_homepage]', search); 
        await page.waitFor(3000)
        await page.keyboard.press('Enter');
        await page.waitFor(3000)
        return page 
    }
}

module.exports = spec_helper;