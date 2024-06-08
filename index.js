var express = require('express');
var app = express();

const session = require('express-session');
const formidable = require('formidable');
const fs = require('fs');
const ejs = require('ejs');


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: false,
}));

function verifica (username, pass) {
    if (fs.existsSync("users.json")){
      var date = fs.readFileSync("users.json");
      ob = JSON.parse(date);
     
      for (i in ob) {
      console.log(ob[i]);
      if (ob[i].username == username)
         if (ob[i].parola == pass) 
         return username;
      }
    }
return false;
}

app.get('/', function(req, res) {
    res.render('Landing_Page/landing.ejs')
});

app.get('/hiphop', function(req, res) {
    res.render('Hip-Hop/hiphop.ejs')
});

app.get('/rock', function(req, res) {
    res.render('Rock/rock.ejs')
});

app.get('/trap', function(req, res) {
    res.render('Trap/trap.ejs')
});
 
app.get('/about', function(req, res) {
    res.render('About/about.ejs')
});
 
app.get('/work', function(req, res) {
    res.render('Work/work.ejs')
});
 
app.get('/workflow', function(req, res) {
    res.render('Workflow/workflow.ejs')
});
 
app.get('/loginpage', function (req, res) {
    if (req.session.username != false) {
        res.redirect('/logat')
    }
    else {
        res.render('Login/login.ejs')
    }
    
});

app.post('/login', function(req, res) {
   var form = new formidable.IncomingForm();
   form.parse(req, function(err, fields, files) {
       let user = verifica(fields.username, fields.password);

      if(user){
        req.session.username = user; 
        console.log('logged in ' + user);
        res.redirect('/logat'); 
     }
   else
       req.session.username = false;  
   });
});

app.get('/logat', function(req, res) {
   res.render('studio');
});

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })

app.get('/logout', function(req, res) {
   req.session.username = false;
   console.log('logged out');
   res.redirect('/');
});

app.listen(5000); 
