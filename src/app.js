const express = require("express");
const app = express();
const path = require("path");
const port = 3030;
const methodOverride =  require('method-override');
;

// CONFIG

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))


// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(methodOverride('_method'))





// ROUTES

const otherRoutes = require('./routes/other.routes');

// ROUTERS
app.use('/', otherRoutes);




app.listen(port, () => console.log(`http://localhost:${port}`))