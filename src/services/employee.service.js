module.exports = class EmployeeService {
  employeeRepository;
  constructor(employeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async list() {
    const employees = await this.employeeRepository.list();
    return employees;
  }

  async retrieve(id) {
    const employee = await this.employeeRepository.retrieve(id);

    if (employee) {
      return employee;
    }

    throw new Error("User not found!");
  }

  async create(name, age, office) {
    const employee = await this.employeeRepository.create(name, age, office);
    return employee;
  }

  async update(id, name, age, office) {
    if (!name || !age || !office) {
      throw new Error("You need to send a name, a age and a office!");
    }

    await this.employeeRepository.update(id, name, age, office);

    return { id, name, age, office };
  }

  async delete(id) {
    await this.employeeRepository.delete(id);
  }
};
