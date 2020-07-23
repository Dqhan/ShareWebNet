const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

app.use(express.static(__dirname))

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('')

app.listen(port, function () {
    console.log("server started on port " + port)
})