//全局帮助库

function my(){ }

my._version = 0.1;

my.throttle = function(fn,wait){
    //wait为等待时间，在wait时间内点击无效
    var timer;
    return function(...args){
        //第一次点击，timer为空，则返回方法
        //第二次点击，timer在wait时间内是有值的直接判断出去
        //wait时间过后，timer赋值为null，可以再次点击
        if(!timer){
            timer = setTimeout(() => timer = null ,wait);
            return fn.apply(this,args);
        }
    }
}