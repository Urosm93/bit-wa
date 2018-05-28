const controller = require("./actions/controller.js")
const Festival = require("./entities/Festival.js")


const lesi = controller.createMovie("Lesi", "comedy", 111);
const program2 = controller.createProgram("12/12/2022");
program2.addMovie(lesi);

console.log(program2.getData());
