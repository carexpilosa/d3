let express = require('express'),
    app = express(),
    serveIndex = require('serve-index');




app.use(express.static(__dirname + "/"));
app.use('/', serveIndex(__dirname + '/'));

/*app.get('/test.txt', function (req, res) {
  req.accepts('text/html');
  let filepath = `${__dirname}/test.txt`;
  res.status(200)
     .sendFile(filepath);
});*/

app.listen(3030, function () {
  console.log('http://localhost:3030/');
  console.log('Example app listening on port 3030!');
});
