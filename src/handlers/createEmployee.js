const mongoose = require("mongoose");
const connectDatabase = require("../database/db");
const Employee = require("../models/employee");
const EmployeeService = require("../services/employee.service");
const EmployeeRepository = require("../repository/mongo-employee.repository");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();
    const { name, age, office } = JSON.parse(event.body);

    const employeeRepository = new EmployeeRepository();
    const employeeService = new EmployeeService(employeeRepository);

    const employee = await employeeService.create(name, age, office);

    return {
      statusCode: 201,
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
