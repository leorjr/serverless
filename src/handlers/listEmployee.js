const mongoose = require("mongoose");
const connectDatabase = require("../database/db");
const Employee = require("../models/employee");
const EmployeeService = require("../services/employee.service");
const EmployeeRepository = require("../repository/mongo-employee.repository");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectDatabase();

    const employeeRepository = new EmployeeRepository();
    const employeeService = new EmployeeService(employeeRepository);
    const employees = await employeeService.list();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
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
