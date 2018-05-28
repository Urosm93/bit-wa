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

  module.exports = Movie;