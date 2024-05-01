const accountId = 90039795
let accountEmail = "abhi.anand987@gmail.com"
var accountPassword = "yoyobhai"
accountCity = "Hyderabad"
// accountId = 76 not allowed to change const variable

accountEmail = "abc@xyz.com"
accountPassword = "12345"
accountCity = "Ranchi"

let accountState;

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])


/*
Prefer not to use var because of issue in block scope and functional scope
*/