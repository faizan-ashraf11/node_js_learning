// Path Modules
const path = require('path');

// To Get path seperator currently used by our path modules of js
console.log(path.sep);

// path.join method joins a sequence of path segments using path seperator used above
const filePath = path.join('/content' , 'test.txt');
console.log(filePath);

// Basename returns the normalized path or file which is being pointed
const base = path.basename(filePath);
console.log(base);

// To get Absolute path
const absolute = path.resolve(__dirname , 'content' , 'test.txt');
console.log(absolute);