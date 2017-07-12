const express    = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* Rotas */
app.use(routes);
app.get('/', function(req, res) {
  res.send('ta funcionando');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})

module.exports = app;
exports.default = module.exports;