//importing a node module (inbuilt)
const os = require("os");
console.log(os.type());
//creating own module

const nmodule = {
    name:"pratibha",
    age:"20",
    roll:"40"
}

//module.exports = nmodule
exports.nmodule=nmodule //does not show the classname

