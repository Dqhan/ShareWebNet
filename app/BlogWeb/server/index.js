const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

var app = new Koa();

app.use(static(path.join(__dirname, '../www/dist/')));

app.listen(3003, ()=>{
    console.log(`blog server listen: 3003`)
});