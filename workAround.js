const employee = require('./employee.js');

function getEmployeeInformation(inputSalary) {
  employee.getEmployeeInformation(inputSalary);
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
