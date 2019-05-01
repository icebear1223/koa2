const _ = require('lodash');
const { join } = require('path');
console.log(join(__dirname , "..","views"))
// let config = {
//     "viewDir":join(__dirname , "..","views"),
//     "staticDir" : join(__dirname , ".." , "public"),
// };
let config = {
    "viewDir":"./web/views",
    "staticDir" :"./web/public"
};

if(process.env.NODE_ENV == "development"){
    const localConfig = {
        port : 3000,
        baseUrl:"http://localhost/books/web/index.php?r="
    };
    config = _.extend(config,localConfig);
}

if(process.env.NODE_ENV == "production"){
    const prodConfig = {
        port : 8080
    }
    config = _.extend(config,prodConfig);
}

module.exports = config;