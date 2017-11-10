let express = require('express'),
    app = express(),
    serveIndex = require('serve-index');

app.use(express.static(__dirname + "/"));
app.use('/', serveIndex(__dirname + '/'));

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});
