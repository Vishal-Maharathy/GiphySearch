const express = require('express');
const app = express();
const sassMiddleware = require('node-sass-middleware')
const path = require('path')


app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/', require('./routes')); 

app.use(sassMiddleware({
    src: path.join(__dirname, '/assets', 'scss'),
    dest: path.join(__dirname, '/assets', 'css'),
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}))
app.use(express.static('assets'));

let port = process.env.PORT;
if(!port){port=8000}
var server = app.listen(port, function(err){
    if(err){
        console.log("Error running the server-> ", err);
    }
    console.log("Server is running on port-> ", port);
})