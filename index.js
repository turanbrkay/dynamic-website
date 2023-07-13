// Gerekli modüller yüklendi.
const express   = require("express"),
      app       = express();


//Routes
const indexRoutes = require("./routes/indexRoutes");


// App config
app.set('view engine','ejs');
app.use(express.static('public')); // public directory kullanıma hazır hale getirildi.


//Routes using
app.use(indexRoutes);


const server = app.listen(3000, (error)=> {
              if(error){
                console.log(error);
              }
              console.log('App started. Port number %d : ',server.address().port);

})