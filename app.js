// npm loca; command comes with node
// To check node version write npm --version

// local dependencies - use it onlu=y in this particular project
// npm install <packageName>

// Global dependencies - use it in the project
// npm install -g <packageName>
// sudo npm install -g <packageName> (for mac)

// package.json = manifest file (Stores important info about project or package)
// Manual Approach ( create package.json in the root, create properties stc)
// npm init ( step by step press enter to skip)
// npm init -y (Everything by default)

const lodAsh = require('lodash')

const items = [ 1 , [2 , [3 , [4]]]];
const newItems = lodAsh.flattenDeep(items);
console.log(newItems);