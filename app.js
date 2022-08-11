const express=require('express')
const path = require('path');
let port=process.env.PORT || 80;



const app=express();

app.use('/static', express.static('static'));

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    res.status(200).render('home');
})

app.get('/resume',(req,res)=>{
    res.status(200).render('resume');
})

app.get('/project',(req,res)=>{
    res.status(200).render('project');
})

app.get('/contact',(req,res)=>{
    res.status(200).render('contact');
})

app.listen(port)