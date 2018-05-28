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

  module.exports = Genre;