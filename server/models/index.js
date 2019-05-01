/**
 *
 * @fileoverview 实现index的数据模型
 * @author icebear
 */
const SafeRequest = require("../utils/SafeRequest");

/**
 * index类 获取图书数据
 * 
 *
 * @class Index
 */
class Index{
    /**
     *Creates an instance of Index.
     * @param {*} app koa2的上下文
     * @memberof Index
     */
    constructor(app){

    }
    /**
     * @param {*} option对象
     * @example
     * return new Promise
     * @returns new Promise
     * @memberof Index
     */
    getData(){
        const safeRequest = new SafeRequest("books/index");
        return safeRequest.fetch({});
    }

    ceateData(options){
        const safeRequest = new SafeRequest("books/create");
        return safeRequest.fetch({
            method:"POST",
            params:options.params
        })
    }

    deleteData(id){
        console.log(id);
        const safeRequest = new SafeRequest("books/delete&id=" + id);
        return safeRequest.fetch({params:{id}});
    }
}

module.exports = Index;