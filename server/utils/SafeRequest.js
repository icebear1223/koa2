//为了浏览器端的代码可以和后台代码合并
const fetch = require('node-fetch');
const config = require('../config');
class SafeRequest {
    constructor(url){
        this.url = url;
        this.baseUrl = config.baseUrl;
    }

    fetch(option){
        //产生一个完整的连接 发起一个promise的结果，可以延迟then
        let myfetch = fetch(this.baseUrl + this.url);
        console.log(this.baseUrl + this.url);
        if(option){
            console.log('post');
            myfetch = fetch(this.baseUrl + this.url , {
                method : option.method,
                body : option.params
            });
        }
        //在fetch外作一层业务的promise封装，确保在后台出问题的情况下，前台业务不会出异常
        return new Promise((resolve,reject) => {
            let result = {
                code:0,
                message:"",
                data:[]
            };
            myfetch
                .then((res)=>{
                    let _json = {};
                    try{
                        _json = res.json()
                    }catch(err){

                    }
                    return _json
                })
                .then((json) => {
                    result.data = json;
                    resolve(result);
                }).catch((error) => {
                    result.code = 1;
                    result.message = "node-fetch和php通讯异常"
                })
        })
    }
}
module.exports = SafeRequest;