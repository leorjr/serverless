const mongoose = require("mongoose");
const connectDatabase = require("../database/db");
const Employee = require("../models/employee");
const EmployeeService = require("../services/employee.service");
const EmployeeRepository = require("../repository/mongo-employee.repository");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const { id } = event.pathParameters;

    const { name, age, office } = JSON.parse(event.body);

    const employeeRepository = new EmployeeRepository();
    const employeeService = new EmployeeService(employeeRepository);

    const employeeUpdated = await employeeService.update(id, name, age, office);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeUpdated),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
