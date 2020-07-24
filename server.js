const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const port = process.env.PORT || 3001;
const app = express();


app.use(express.static(__dirname))

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

const options = {
    target: 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: {
        '/common': '/', // remove base path
    },
    // router: {
    //     'dev.localhost:3000': 'http://localhost:8000',
    // },
}
const filter = function (pathname, req) {
    var result;
    result = (pathname.match('/common') ||
        pathname.match('/*.css') ||
        pathname.match('/*.js')) && req.method === 'GET';
    return result;
}
app.use(createProxyMiddleware(filter, options));


app.listen(port, function () {
    console.log("server started on port " + port)
})