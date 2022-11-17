const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const app = express();
const routes = require('./routes');
//make the port variable dynamic
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use(routes);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookies: {},
  resaved: false,
  savedUinitialize:true

};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended : true}));




sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});