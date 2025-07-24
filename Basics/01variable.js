const accountID = 1234; // This is a constant variable, its value cannot be changed
let accountEmail = "prajwaldeotare@673"; // Better
var accountPassword = "1234"; //not use
accountCity = "Pune"; // This will create a global variable if not declared with var, let, or const
//const accountID = 1;    this will cont change the value of accountID
let accountState;
console.log(accountID);
console.table([accountID,accountEmail, accountPassword, accountCity, accountState]);
