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

    await employeeService.delete(id);

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
