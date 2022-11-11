const sequelize = require('../config/connection');
const User = require('../models/user');
const userSeeds = require('./user-seeds.json');

const seedUsers = async () => {
  await sequelize.sync({ force: true });
  // eslint-disable-next-line no-trailing-spaces
  
  const users = await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedUsers();
