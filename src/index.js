var HTTPSnippet = require('httpsnippet-fsless');
var express = require('express')
var app = express()

app.get('/', function(req, res) {
  var snippet = new HTTPSnippet({method: req.query.method, url: req.query.url});

  res.send({
    java: snippet.convert('java', 'okhttp'),
    curl: snippet.convert('shell', 'curl'),
    node: snippet.convert('node', 'request')
  });
})

app.listen(3001)
