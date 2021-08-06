const port = process.env.PORT || 5000;
var express=require("express");
const app = express()
var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token,Authorization');
  res.header('Access-Control-Allow-Credentials',true);
  next();
});

const dotenv = require('dotenv');
dotenv.config();

app.use('/movie', require('./routes/movie_route'));
app.use('/article', require('./routes/article_route'));
app.use('/forum', require('./routes/forum_route'));
app.use('/auth', require('./routes/auth_route'));



data = {
    success:true,
    msg: process.env.GREET,
};
  
app.route("/").get((req, res) => res.json(data));  
app.listen(port, "0.0.0.0", () =>
   console.log(`welcome your listening at port ${port}`)
);