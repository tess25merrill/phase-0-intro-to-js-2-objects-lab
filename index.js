// Write your solution in this file!
const employee = {
    name: "Ginger Rodgers", 
    streetAddress: "123 Hollywood Blvd",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee["name"] = "Sam";
    employee["streetAddress"] = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey(obj, key, value) {
    const lessEmployee = {...obj};
    delete lessEmployee.name;
    return lessEmployee;
}; 
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    delete employee.streetAddress;
    return employee;
};
/*
deleteFromEmployeeByKey(): this function should take in a 
employee Object and a key. It should delete the property 
with that key from the employee Object. This should not 
mutate the original employee Object; it should return a new 
Object that doesn't include the identified key-value pair. 
Hint: use the spread operator!*/