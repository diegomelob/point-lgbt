
require('dotenv').config();

var loopback  = require('loopback');
var boot      = require('loopback-boot');
var app       = module.exports = loopback();
var explorer  = require('loopback-component-explorer');
var path      = require('path');

if(process.env.SWAGGER == "true"){
  app.use('/swagger/ABC', explorer.routes(app, {
    basePath: '/api',
    uiDirs: [
      path.resolve(__dirname, 'swagger')
    ],
    apiInfo: {
      'title': 'Point LGBT',
      'description': 'RestFul API'
    }
  }));
}

app.start = function() {
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
  });
};

boot(app, __dirname, function(err) {
  if (err) throw err;

  if (require.main === module)
    app.start();
});

process.on('uncaughtException', function(err) {
    console.log(">> Exception")
    console.log(err);
})
