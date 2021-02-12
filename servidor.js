const path = require('path');    //Oque? como? Porque?
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const templatePath = path.join(__dirname,'view');

const env = nunjucks.configure([templatePath],{
    watch:true,
    autoescape:true,
    express: app
});


app.use(express.static('public'));


app.get('/bemvindo.html',(request,response)=>{

    const {name} = request.query;
    response.render('hello.html',{name});
})

router.configureRoutes(app);


app.listen(3000,()=>console.log('Servidor rodando na porta 3000 http://localhost:3000'));

