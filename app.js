const Koa = require('koa');
const static = require('koa-static');
const co = require('co');
const path = require('path');
const render = require('koa-swig');
const log4js = require('log4js');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config');

const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(static(config.staticDir));//设置静态资源根目录
app.use(bodyParser());
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
   // cache: 'memory', // disable, set to false
   cache: false, 
    ext: 'html',
    writeBody: false
  }));

log4js.configure({
  appenders:{
    router:{
      type:'file',
      filename:'logs/router.log'
    }
  },
  categories:{
    default:{
      appenders:['router'],
      level:'error'
    }
  }
});

const logger = log4js.getLogger('router');
//容错写在路由的上方，根据koa的机制，会在返回的时候执行
errorHandler.error(app,logger);
//注册路由
require('./controllers/index')(app);
app.listen(config.port,()=>{
    console.log('server start');
});

module.exports = app;