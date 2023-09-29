const mongoose = require("mongoose");
const connectDatabase = require("../database/db");
const Employee = require("../models/employee");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const { id } = event.pathParameters;

    const { name, age, office } = JSON.parse(event.body);

    const updatedEmployee = {
      id,
      name,
      age,
      office,
    };

    await Employee.findByIdAndUpdate(id, {
      name,
      age,
      office,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(updatedEmployee),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
