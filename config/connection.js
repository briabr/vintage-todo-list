require('dotenv').config();
//importing the sequelize instructor
const Sequelize = require('sequelize');
//usse this as our connection object 

let sequelize;
// eslint-disable-next-line no-empty
if (process.env.JAWSDB_URL){
  sequelize = new sequelize (process.env.JAWSDB_URL);

} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}