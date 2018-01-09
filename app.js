const express = require('express');
const app = express();
app.get('/',(req,res) => {
	res.send('hello');
})
var port = process.env.PORT || 3000;
app.listen(port,()=> {
    console.log(`listening to the port : ${port}`);
})
