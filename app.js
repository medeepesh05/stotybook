const express = require('express'),
bodyparser = require('body-parser'),
passport = require('passport'),
mongoose = require('mongoose'),
bcrypt = require('bcryptjs'),
exphbs = require('express-handlebars');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dipu:dipu@ds249737.mlab.com:49737/storybooks_prod',{useMongoClient:true})
.then(() => {
    console.log('mongodb connected.......')
}).catch(()=> {
    console.log('mongodb error')
})
const app = express();
app.get('/',(req,res) => {
	res.send(45 == 45 ? 'condition is true' : 'condition is not true');
})
var x = 3==4 ? 3000 : 4000;
var port = process.env.PORT || 3000;
app.listen(port,()=> {
console.log(`listening to the port : ${port} and x is ${x}`);
})
