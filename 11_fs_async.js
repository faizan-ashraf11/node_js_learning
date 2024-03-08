// File System module (fs module) for Asyncronous file management
const {readFile , writeFile} = require('fs');  // Its is similar like file handling in C++

// The call Backfunction is used in this to chcek if error occurs in this or not
readFile('./content/first.txt' , 'utf8',  (err , result)=>{
    if(err){
        console.log('Error Occurs!');
        return null;
    }
    const first = result;
    readFile('./content/second.txt' , 'utf8' , (err,result)=>{
        if(err){
            console.log('Error Occurs!');
            return null;
        }
        const second = result;
        writeFile( 
            './content/reult-async.txt' , 
            `The Result of files are: : ${ first} , ${second}`,
            {flag : 'a'},
            (err , result)=>{
                if(err){
                    console.log('Error Occurs!');
                    return null;
                }
                console.log(` The Result is : ${result}`);
            }
        );
    });
});

// These are the ways to use aysnc file managemnet in node js backend