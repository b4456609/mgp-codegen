var HTTPSnippet = require('httpsnippet-fsless');
var express = require('express')
var app = express()

app.get('/', function(req, res) {
  var snippet = new HTTPSnippet({method: req.query.method, url: req.query.url});

  res.send({
    java: {
      okhttp: snippet.convert('java', 'okhttp'),
      unirest: snippet.convert('java', 'unirest')
    },
    curl: snippet.convert('shell', 'curl'),
    js: snippet.convert('js', 'jquery'),
    node: {
      request: snippet.convert('node', 'request'),
      unirest: snippet.convert('node', 'unirest'),
    }
  });
})

app.listen(3000)
