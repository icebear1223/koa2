const superagent = require("supertest");
const app = require("../../../app");
const Rize = require("rize");
const rize = new Rize();

function request(){
    return superagent(app.listen());
}

describe("node接口测试",function(){
    it("获取所有数据的接口测试",function(done){
        request()
        .get("/delete/20")
        .expect(200)
        .set("Accept","aplication/json")
        .expect("Content-Type",/json/)
        .end(function(err,res){
            console.log(res.body)
            if(err){
                done(err)
            }
            if(res.body.code == 0){
                done();
            }else{
                done(new Error("接口数据异常"))
            }
        })
    })
});

describe('测试页面功能',()=>{
    it('测试新增功能的页面调转',() => {
        rize
        .goto('http://localhost:3000/')
        .click('#create')
        .waitForNavigation()
        .assertUrlIs('http://localhost:3000/create')
        .end()
    })
})
