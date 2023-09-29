export class EmployeeService {
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
    return employee;
  }

  async create(name, age, office) {
    const employee = await this.employeeRepository.create(name, age, office);
    return employee;
  }

  async update(id, name, age, office) {
    const employeeUpdated = {
      name,
      age,
      office,
      id,
    };

    await this.employeeRepository.update(id, name, age, office);
    return employeeUpdated;
  }

  async delete(id) {
    await this.employeeRepository.delete(id);
  }
}
