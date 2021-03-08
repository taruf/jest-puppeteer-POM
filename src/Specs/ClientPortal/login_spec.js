const Automan = require('../../../spec_helper')
const DashboardPage = require('../../pages/ResultPage')

describe(
  'Login page',
   () => {
     let page
   
    beforeAll(async () => {
       page = await Automan.loginClient()
     })

    test ('Title matches', async ()=> {
        let page2 = await new DashboardPage(page);
        await page.waitFor(3000);
        const title = await page2.getTitle();
        expect(title).toBe('DuckDuckGo — Privacy, simplified.')
    })
  }
)