const mongoose = require("mongoose");
const connectDatabase = require("../database/db");
const Employee = require("../models/employee");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const employees = await Employee.find();

    return {
      statusCode: 200,
      body: JSON.stringify(employees),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
