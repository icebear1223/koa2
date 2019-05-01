const request = require('request');
const rp = require('request-promise');
const fetch = require('node-fetch');
const Index = require('../models/index');

class Controllers {
    constructor(){}
    actionIndex(){
        return async (ctx,next)=>{
            const index = new Index();
            const res = await index.getData();
            ctx.body = await ctx.render('index.html',{
              res:res.data
            });
        }
    }

    //新增页
    actionCreatePage(){
        return async(ctx,next)=>{
            ctx.body = await ctx.render('form.html');
          }
    }

    //新增提交方法
    actionCreate(){
        return async(ctx, next) => {
            let postParams = await ctx.request.body;

            let body = await request.post('http://localhost/books/web/index.php?r=site%2Fentryform',{form:{EntryForm:{name:postParams.bookname,writer:postParams.writer}}},function(err,res,body){
              return body;
            })
            ctx.body = body
          }
    }

    //删除方法
    actionDelete(){
        return async(ctx,next)=>{
            const id = ctx.params.id;
            // const index = new Index();
            // const res = await index.deleteData(id);
            // console.log(res);
            let res = await fetch('http://localhost/books/web/index.php?r=site%2Fdelete&id=' + id).then(res=>res.json());
            ctx.body = res;
          }
    }

    //更新页面
    actionUpdatePage(){
        return async(ctx,next)=>{
            const id = ctx.params.id;
            let res = await fetch('http://localhost/books/web/index.php?r=site%2Fupdate&id=' + id).then(res=>res.json());
            ctx.body = await ctx.render('update.html',{
              res:res
            });
          }
    }

    //更新方法
    actionUpdate(){
        return async(ctx,next)=>{
            let postParams = await ctx.request.body;
            let body = await request.post('http://localhost/books/web/index.php?r=site%2Fupdate&id=' + postParams.id,{form:{EntryForm:{name:postParams.bookname,writer:postParams.writer,id:postParams.id}}},function(err,res,body){
              return body;
            })
            ctx.body = body
          }
    }
}

module.exports = Controllers;