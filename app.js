const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path')

//import Router
const homeRouter = require('./src/routes/home')
const memRouter = require('./src/routes/mem')

//ejs
app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb');

app.use('/' , homeRouter)
app.use('/index' , homeRouter)
app.use('/mem' , memRouter)

const PORT = process.env.PORT || 3000 ;
app.listen(PORT , ()=>console.log(`Server is running on port: ${PORT}`))