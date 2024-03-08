// Operating Systme Modules (OS modules)
const os = require('os'); // To use OS modules commands and functions

// To get User Info
const user = os.userInfo();
console.log(user);

// To get system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`); 

// To Extract Data of Current Operating System
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);