
class Genre {
  constructor(name) {
    this.name = name;
  }
  getData() {
    const firstNameChar = this.name.charAt(0).toUpperCase();
    const lastNameChar = this.name.charAt(this.name.length - 1).toUpperCase();
    return `${firstNameChar}${lastNameChar}`
  };
}
class Movie {
  constructor(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
  }
  getData() {
    let movieData =
      `${this.title} ${this.length} min ${this.genre.getData()}`
    return movieData;
  };
}

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

createMovie = (titleStr, genreStr, length) => {
  let genre = new Genre(genreStr)
  return new Movie(titleStr, genre, length);
}

createProgram = (date) => {
  return new Program(date);
}

const lesi = createMovie("Lesi", "comedy", 111);

const maratonci = createMovie("Maratonci", "comedi", 166);

const scarface = createMovie("Scarface", "crimi", 150);

const tockovi = createMovie("Tockovi", "drama", 202);

const kum = createMovie("Kum", "drama", 252);


const program1 = createProgram("10/10/2019");
const program2 = createProgram("12/12/2022");
program2.addMovie(scarface);
program2.addMovie(maratonci);
program1.addMovie(lesi);
program1.addMovie(tockovi);
const fest = new Festival('Beofest');
fest.addProgram(program1);
fest.addProgram(program2);

console.log(fest.getData());





//   var drama = new Genre("drama");
//   //   console.log(drama.getData());

//   var tockovi = new Movie("Tockovi", drama, 113);
//   var kum = new Movie("Kum", drama, 202);
//   var scarface = new Movie ('Scarface' , drama , 150);
//   var maratonci = new Movie ('Maratonci' , drama , 166);

//   var program1 = new Program("10/10/2019");
//   program1.addMovie(tockovi)
//   program1.addMovie(maratonci)

// //   console.log(program1.getData());

//   var program2 = new Program('9/3/2022');
//   program2.addMovie(scarface);
//   program2.addMovie(maratonci);

//   var summerFest = new Festival ('Summer-Fest');
//   summerFest.addProgram(program1)
//   summerFest.addProgram(program2)

//   console.log(summerFest.getData());


