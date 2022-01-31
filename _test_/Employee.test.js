const Employee = require('../lib/Employee');

test("creates a employee object", () => {
     const employee = new Employee ('Kris','15', 'krislopez68@yahoo.com');
     expect(typeof(employee)).toEqual('object');
});

test("gets employee name" , () => {
    const employee = new Employee('Kris', '15', 'krislopez68@yahoo.com');
    expect(employee.getName).toEqual(employee);
});
test("gets ID", () => {
    const employee = new Employee('Kris', '15', 'krislopez68@yahoo.com');
    expect(employee.getId).toEqual(Employee);

});
test("gets role", () => {
    const employee = new Employee('Kris', '15', 'krislopez68@yahoo.com');
    expect(employee.getRole).toEqual(Employee);
});
test("get email", () => {
    const employee =    new Employee('Kris', '15', 'krislopez68@yahoo.com');
    expect(emplyee.getEmail).toEqual(Employee);
});