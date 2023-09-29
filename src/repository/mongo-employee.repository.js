const Employee = require("../models/employee");

module.exports = class MongoEmployeeRepository {
  async list() {
    await connectDatabase();
    const employees = await Employee.find();
    return employees;
  }
  async retrieve(id) {
    await connectDatabase();
    const employee = await Employee.findById(id);
    return employee;
  }
  async create(name, age, office) {
    await connectDatabase();

    const employee = await Employee.create({
      name,
      age,
      office,
    });

    return employee;
  }
  async update(id, name, age, office) {
    await connectDatabase();
    const employeeUpdate = await Employee.findByIdAndUpdate(id, {
      name,
      age,
      office,
    });
    return employeeUpdate;
  }
  async delete(id) {
    await connectDatabase();
    await Employee.findOneAndDelete(id);
  }
};
