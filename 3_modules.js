// Common JS , every file is a module (by default)
// Modules , Enapsulated code (only share minimum)

//Imports of Modules
const names = require('./4_names'); // Or we do in a way const {faizan , faiq } = require('./4_names');
const sayHi = require('./5_Utils');
const data = require('./6_alternative_syntax');
require('./7_mind_grenade');

sayHi("Zain Jutt ");
sayHi(names.faizan);
sayHi(names.faiq);
