const { User } = require('../models');

const userData = [
  {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: 'password123'
  },
  {
    username: 'JaneDoe',
    email: 'janedoe@example.com',
    password: 'password456'
  },
  // Add more user data here...
];

for(let i = 3; i <= 30; i++) {
  userData.push({
    username: `User${i}`,
    email: `user${i}@example.com`,
    password: `password${i}${i}${i}`
  });
}

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
