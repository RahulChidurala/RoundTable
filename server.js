const express = require('express');
const reload = require('reload');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');    //This sets up which kind of view engine to use
app.set('views', './src/views');    //This tells node where the views are.

app.locals.siteTitle = 'RoundTable';

//Public folder
app.use(express.static('./src/public'));

//Routes
app.use(require('./src/routes/index'));
app.use(require('./src/routes/contact'));

const server = app.listen(port, () => {
  console.log('Listening on port ' + port + '.');
});

reload(server, app);
