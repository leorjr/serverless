const mongoose = require("mongoose");
const connectDatabase = require("../database/db");
const Employee = require("../models/employee");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, age, office } = JSON.parse(event.body);

    const newEmployee = {
      name,
      age,
      office,
    };

    await Employee.create(newEmployee);

    return {
      statusCode: 201,
      body: JSON.stringify(newEmployee),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
