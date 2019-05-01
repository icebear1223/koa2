//页面容错机制，在错误路由和服务器错误时的操作

const errorHandler = {
    error (app,logger) {
        //优先级越低的写在越上方
        app.use(async (ctx,next) => {
            try {
                await next();
            }catch(e){
                logger.error(e);
                ctx.status = 500;
                ctx.body = '页面出错---500';
            }
        });

        app.use(async (ctx,next) => {
            await next();
            if(404 != ctx.status){
                return;
            }
            logger.error('页面失败404');
            ctx.status = 404;
            ctx.body = '页面找不到了----404';
        })
    }
}

module.exports = errorHandler;