const mongoose = require("mongoose");
const connectDatabase = require("../database/db");
const Employee = require("../models/employee");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const { id } = event.pathParameters;

    await Employee.findOneAndDelete(id);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `employee ${id} has been deleted` }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
