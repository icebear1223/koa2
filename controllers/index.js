//路由相关
const router = require('koa-simple-router');
const Controllers = require('./Controllers');
const controllers = new Controllers();

//路由注册注册路由

module.exports = (app) => {
    app.use(router(_ => {
        //首页
        _.get('/',controllers.actionIndex());
        //新增表单
        _.get('/form',controllers.actionCreatePage());
        //新增提交方法
        _.post('/create', controllers.actionCreate());
        //删除方法
          _.get('/delete/:id',controllers.actionDelete());
        //更新页面
          _.get('/update/:id',controllers.actionUpdatePage());
        //更新方法
          _.post('/update',controllers.actionUpdate());
        //测试
          _.get('/test',async(ctx,next)=>{
            ctx.body={data:123}
          })
        }));
}