class Festival {
    constructor(name) {
      this.name = name;
      this.listOfPrograms = [];
    }
    totalNumberOfMovies() {
      let sum = 0;
      for (let i = 0; i < this.listOfPrograms.length; i++) {
        sum += `${this.listOfPrograms[i].numberOfMovies()}`
      }
      return sum;
    }
    addProgram(program) {
      this.listOfPrograms.push(program);
      return this.listOfPrograms;
    };
    getData() {
      let festData = `${this.name} has ${this.totalNumberOfMovies()}  movie titles \n`;
      for (let i = 0; i < this.listOfPrograms.length; i++) {
        festData += `     ${this.listOfPrograms[i].getData()} \n`;
      }
      return festData;
    }
  }

  module.exports = Festival