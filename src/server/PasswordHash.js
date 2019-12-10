//Run ```npm install password-hash``` before using this script if MODULE_NOT_FOUND error.
var passwordHash = require('password-hash');
const salt = 
var hashedPassword = passwordHash.generate('password123');

console.log(hashedPassword);

var verification = passwordHash.verify('password123', hashedPassword);
var verification2 = passwordHash.verify('password123', 'sha1$b27d0b45$1$0f8323d3e1d64232f34db99855c0c6f12af83a1d');
console.log(verification);
console.log(verification2);
