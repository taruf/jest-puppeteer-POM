const Automan = require('../../../spec_helper')

describe(
  'Login page',
  () => {
    let page

    beforeAll(async () => { 
      page = await Automan.loginAdmin()
    })

    it('should sign in Admin', async () => {
        expect(await page.evaluate(() => document.body.textContent)).toContain('Yahoo')
    })
  }
)