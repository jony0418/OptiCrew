const { Department } = require('../models');

const departmentData = [
  {
    name: 'Marketing',
    manager: 'John Doe',
  },
  {
    name: 'Sales',
    manager: 'Jane Smith',
  },
  {
    name: 'Human Resources',
    manager: 'Steve Johnson',
  },
  {
    name: 'Research and Development',
    manager: 'Diane Green',
  },
  {
    name: 'Information Technology',
    manager: 'Tom Moore',
  },
  {
    name: 'Customer Support',
    manager: 'Susan Thompson',
  },
  {
    name: 'Finance',
    manager: 'Robert White',
  },
  {
    name: 'Operations',
    manager: 'Mary Brown',
  },
  {
    name: 'Engineering',
    manager: 'James Wilson',
  },
  {
    name: 'Product Management',
    manager: 'Patricia Taylor',
  },
];

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
