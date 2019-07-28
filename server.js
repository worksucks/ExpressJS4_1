var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('views','./views')

app.use('/store', function(req,res,next){
  console.log('Jestem pośrednikiem przy rządaniu do /store');
  next();
});

app.get('/store', function (req,res){
  res.send('To jest sklep');
});

app.get('/index', function(req,res){
  res.render('index');
});


app.listen(3000);
app.use(function(req,res,next){
  res.status(404).send('Nie mogliśmy odnaleźć tego czego żądasz');
});
