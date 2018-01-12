const express = require('express'),
bodyparser = require('body-parser'),
passport = require('passport'),
mongoose = require('mongoose'),
bcrypt = require('bcryptjs'),
exphbs = require('express-handlebars');
const keys = require('./config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI,{useMongoClient:true})
.then(() => {
    console.log('mongodb connected.......')
}).catch(()=> {
    console.log('mongodb error')
})
require('./config/passport')(passport);
const app = express(),
auth = require('./route/auth');

// handlebars middlewares
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  }));
app.set('view engine', 'handlebars');

// all routes here
app.get('/',(req,res) => {
	res.render('index');
})
app.get('/about',(req,res) => {
    res.send('well! we are on the about page');
})

app.use('/auth',auth);
var x = 3==4 ? 3000 : 4000;
var port = process.env.PORT || 3000;
app.listen(port,()=> {
console.log(`listening to the port : ${port} and x is ${x}`);
})
