const Automan = require('../../spec_helper')
const Search = require('../pages/ResultPage')

describe(
  'Login page',
   () => {
     let page
   
    beforeAll(async () => {
       page = await Automan.searchString("Automan")
     })

    test ('duckduckgo page title updated', async ()=> {
      expect(await page.title()).toBe('Automan at DuckDuckGo')
    })
  }
)