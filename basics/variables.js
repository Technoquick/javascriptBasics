const accountId = 1402;

let accountEmail = "Ankit@gmail.com";

var accountPassword ="12345";

accountCity = "Bihar";

// accountId = 2;  not allowed to change const variable.

accountEmail = "aks@gmail.com"
accountPassword = "5342";
accountCity ="jaipur";
let accountState;


console.log(accountId);
/* 
prefer not to use var 
because of  block scope issue and functional issue.
*/ 
console.table([accountId, accountEmail, accountState, accountPassword, accountCity]);


