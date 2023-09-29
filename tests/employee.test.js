const InMemoryEmployeeRepository = require("../src/repository/in-memory-employee.repository");

describe("Employee Service", () => {
  const employeeRepository = new InMemoryEmployeeRepository();

  const employee = {
    id: 1,
    name: "teste",
    age: 18,
    office: "software engineer",
  };

  it("should get a list of employees", async () => {
    const response = await employeeRepository.list();
    expect(response).toEqual([]);
  });

  it("should be abble to create a employee", async () => {
    const response = await employeeRepository.create(
      employee.name,
      employee.age,
      employee.office
    );

    expect(response).toEqual(employee);
  });

  it("should get a employee by id", async () => {
    const response = await employeeRepository.retrieve(employee.id);

    expect(response).toEqual(employee);
  });

  it(`should be abble to update a employee`, async () => {
    const updatedEmployee = {
      id: 1,
      name: "teste atualizado",
      age: 19,
      office: "developer",
    };

    const response = await employeeRepository.update(
      1,
      updatedEmployee.name,
      updatedEmployee.age,
      updatedEmployee.office
    );

    expect(response).toEqual(updatedEmployee);
  });

  it(`should be abble to delete a employee`, async () => {
    const response = await employeeRepository.delete(employee.id);

    expect(response).toEqual([]);
  });
});
