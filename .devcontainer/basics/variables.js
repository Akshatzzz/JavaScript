const accountId = 144233
let accountEmail = "akshat@1293y2.com"
var accountPassword = "1234"
accountCity = "Jaipur" // can be declared this way, but not a great practice.
let accountState // will be undefined by default

// accountId = 12 //not allowed
// console.log(accountId);
/**
 * Prefer not to use var, it doesn't know what scope is.
 */



accountEmail = "akki@gmail.com"
accountPassword = "321"
accountCity = "Mumbai"

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);