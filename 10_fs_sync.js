// File System module (fs module) for Syncronous file management
const {readFileSync , writeFileSync} = require('fs');  // Its is similar like file handling in C++

// const fs = require('fs'); We also write in this way

// To Read File 
const first = readFileSync('./content/first.txt' , 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first , second);

// To Create or write in a file similar to C++
// Similarly it has done in C++ it finds that if given file is avialaible or not if not then it creates a new file if yes then it writes this into that file.
writeFileSync('./content/result-combination.txt' , `The Result of files are: : ${ first} , ${second}` );

// To add data in a availaible file we add a flag at the end
writeFileSync(
    './content/result-combination.txt' ,
     `The Result of files are: : ${ first} , ${second}`,
     {flag: 'a'}
    );
