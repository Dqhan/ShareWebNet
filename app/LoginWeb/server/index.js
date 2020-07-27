const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

var app = new Koa();

app.use(static(path.join(__dirname, '../www/dist/')));

app.listen(3005, () => {
    console.log(`login server listen: 3005`)
});