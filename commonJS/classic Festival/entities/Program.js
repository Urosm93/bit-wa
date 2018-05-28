class Program {
    constructor(date) {
      this.date = new Date(date);
      this.listOfMovies = [];
    }
    numberOfMovies() {
      return this.listOfMovies.length;
    };
    addMovie(movie) {
      this.listOfMovies.push(movie);
      return this.listOfMovies;
    };
    totalMoviesLength() {
      let sumLength = 0;
      for (let i = 0; i < this.listOfMovies.length; i++) {
        sumLength += this.listOfMovies[i].length;
      };
      return sumLength;
    };
    getData() {
      const date = this.date;
      let programData = `${this.date.getDate()}.${(this.date.getMonth() + 1)}.${this.date.getFullYear()}, Program duration: ${this.totalMoviesLength()} min \n`
      for (let i = 0; i < this.listOfMovies.length; i++) {
        programData += `         ${this.listOfMovies[i].getData()} \n`;
      };
      return programData;
    };
  }

  module.exports = Program;