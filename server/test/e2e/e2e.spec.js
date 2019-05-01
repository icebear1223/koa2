const superagent = require("supertest");
const app = require("../../app");

function request(){
    return superagent(app.listen());
}
const Rize = require("rize");
const rize = new Rize();

// rize
// .goto("http://localhost:3000/")
// .click("#create")
// .waitForNavigation()
// .assertUrlIs("http://localhost:3000/create")
// .saveScreenshot("pic.png")
// .end()

describe('测试页面功能',()=>{
    it('github的测试',async done => {
        rize
        .goto('https://github.com/')
        .type('input.header-search-input', 'node')
        .press('Enter')
        .waitForNavigation()
        .assertSee('Node.js')
        .end()
    })
})

