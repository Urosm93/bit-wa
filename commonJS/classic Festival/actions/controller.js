const Genre = require("../entities/Genre.js");
const Movie = require("../entities/Movie.js");
const Program = require("../entities/Program.js");

createMovie = (titleStr, genreStr, length) => {
  let genre = new Genre(genreStr);
  return new Movie(titleStr, genre, length);
};

createProgram = date => {
  return new Program(date);
};

module.exports = {
  createMovie,
  createProgram
};
