var express=require('express');
var app=express();
var path=require('path');
var mongoose=require('mongoose');

//set app enviroment
app.set('port',process.env.PORT || 80);
//server u
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use( express.static(__dirname + '/Public'));

//DB connection
mongoose.connect('mongodb+srv://sebas:sebas@cluster0.wh1fi.mongodb.net/veterinaria')
.then(db=>{console.log('db connected')})
.catch(err=>{console.log(err)})
//pruebas
// routes
var indexRoute=require('./routes/index');

app.use('/',indexRoute);

app.listen(app.get('port'),()=>{
    console.log('server on port 80')
})