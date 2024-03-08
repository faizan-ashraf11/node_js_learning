// 1st Method to export Items from modules
module.exports.items = ['Bags' , 'Bullets'];

// 2nd Method is to use seperate varible to export 
const person = {
    name: 'Faizan',
    university: 'UCP',
    age: 18
}

module.exports.singlePerson = person;

// 3rd Methos is using module.export to export entire object which has values and variable;

// module.exports= {
//     person , 
//     items,
// }