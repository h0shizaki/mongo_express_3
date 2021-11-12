const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path')

//import Router
const homeRouter = require('./src/routes/home')

//ejs
app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb');

app.use('/' , homeRouter)


const PORT = process.env.PORT || 3000 ;
app.listen(PORT , ()=>console.log(`Server is running on port: ${PORT}`))