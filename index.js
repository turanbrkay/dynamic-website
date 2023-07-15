// Gerekli modüller yüklendi.
const express   = require("express"),
      indexRoutes = require("./routes/indexRoutes"),
      morgan = require('morgan'),
      mongoose = require('mongoose'),
      MoviesDB = require('./models/movies'),
      SeriesDB = require('./models/series'),
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

app.post('/admin/movie/add',(req,res) => {
  const movie = new MoviesDB(req.body)

  movie.save()
    .then((result) => {
      res.redirect('/admin');
    })
    .catch((err) => {
      console.log(err);
    })
})

app.post('/admin/series/add',(req,res) => {
  const series = new SeriesDB(req.body)

  series.save()
    .then((result) => {
      res.redirect('/admin');
    })
    .catch((err) => {
      console.log(err);
    })
})



//Routes using
app.use(indexRoutes);



const server = app.listen(3000, (error)=> {
              if(error){
                console.log(error);
              }
              console.log('App started. Port number %d : ',server.address().port);

})