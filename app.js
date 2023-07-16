// Gerekli modüller yüklendi.
const express   = require("express"),
      indexRoutes = require("./routes/indexRoutes"),
      adminRoutes = require("./routes/adminRoutes"),
      filterRoutes = require("./routes/filterRoutes"),
      morgan = require('morgan'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app       = express();

const dbURL = 'mongodb+srv://firmino:2pp3k8STA9z3pRne@firmino.b75xdip.mongodb.net/pubMovie?retryWrites=true&w=majority';
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// App config
app.set('view engine','ejs');
app.use(express.static('public')); // public directory kullanıma hazır hale getirildi.
app.use(morgan('tiny'));
app.use(express.urlencoded({extended:true}));

//Routes using
app.use(indexRoutes);
app.use(adminRoutes);
app.use(filterRoutes);



const server = app.listen(2000, (error)=> {
              if(error){
                console.log(error);
              }
              console.log('App started. Port number %d : ',server.address().port);

})