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

    const employeeRepository = new EmployeeRepository();
    const employeeService = new EmployeeService(employeeRepository);
    const employee = await employeeService.retrieve(id);

    return {
      statusCode: 200,
      body: JSON.stringify(employee),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
