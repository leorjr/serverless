module.exports = class InMemoryEmployeeRepository {
  employees;
  id = 0;

  constructor() {
    this.employees = [];
  }

  async list() {
    return this.employees;
  }

  async retrieve(id) {
    const employee = this.employees.find((employee) => employee.id == id);
    return employee;
  }

  async create(name, age, office) {
    this.id += 1;
    const newEmployee = { id: this.id, name, age, office };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  async update(id, name, age, office) {
    const employeesFiltered = this.employees.filter((item) => item.id != id);
    const employeeUpdated = { id, name, age, office };
    employeesFiltered.push(employeeUpdated);
    this.employees = employeesFiltered;
    return employeeUpdated;
  }

  async delete(id) {
    const indexElement = this.employees.findIndex(
      (employee) => employee.id == id
    );

    if (indexElement !== -1) {
      this.employees = this.employees.splice(indexElement, 1);
    }

    return [];
  }
};
