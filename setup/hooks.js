const playwright = require("playwright")
const { Before, After, BeforeAll, AfterAll } = require("@cucumber/cucumber")

BeforeAll( async() => {
    global.browser = await playwright['chromium'].launch({headless: false})
    
})

AfterAll( async()=>{
    global.browser.close()
})

Before( async()=>{
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
})

After( async()=>{
    global.page.close()
    global.context.close()
})
