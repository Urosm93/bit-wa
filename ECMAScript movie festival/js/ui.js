

export const collectMovieData = () => {
  const inputTitleElement = document.querySelector("#title"),
    inputLengthElement = document.querySelector("#length"),
    selectGenreElement = document.querySelector("#genre");


  const titleValue = inputTitleElement.value;
  const lengthValue = inputLengthElement.value;
  const genreValue = selectGenreElement.value;

  return {
    title: titleValue,
    genre: genreValue,
    length: lengthValue
  };
}



export const updateMovieList = (movie, index) => {
  const ulMovieListElement = document.querySelector("#movie-list"),
    movieSelectElement = document.querySelector("#movie-select");

  const movieDataLi = document.createElement("li");
  movieDataLi.textContent = movie.getData();
  ulMovieListElement.appendChild(movieDataLi);

  const movieOption = document.createElement("option");
  movieOption.textContent = movie.title;
  movieOption.setAttribute("value", index);
  movieSelectElement.appendChild(movieOption);
}



export const clearInputs = () => {
  const movieErrorElement = document.querySelector("#movie-error"),
    inputTitleElement = document.querySelector("#title"),
    inputLengthElement = document.querySelector("#length"),
    selectGenreElement = document.querySelector("#genre");


  movieErrorElement.textContent = "";
  inputTitleElement.value = "";
  inputLengthElement.value = "";
  selectGenreElement.value = "";

}



export const collectProgramData = () => {
  const inputDateElement = document.querySelector("#date");
  return {
    date: inputDateElement.value
  };
}



export const updateProgramList = (program, index) => {
  const programErrorElement = document.querySelector("#program-error"),
    ulProgramListElement = document.querySelector("#program-list"),
    programSelectElement = document.querySelector("#program-select");

  const li = document.createElement("li");
  li.textContent = program.getData();
  ulProgramListElement.appendChild(li);

  const option = document.createElement("option");
  option.setAttribute("value", index);
  option.textContent = program.getData();
  programSelectElement.appendChild(option);

  programErrorElement.textContent = "";
}



export const collectAddMovieFormData = () => {
  const programSelectElement = document.querySelector("#program-select"),
    movieSelectElement = document.querySelector("#movie-select");
  const movieValue = movieSelectElement.value,
    programValue = programSelectElement.value;

  return {
    movieIndex: movieValue,
    programIndex: programValue
  };
}



export const updateProgramData = (program, oldProgramData) => {
  const programListElements = document.querySelectorAll("#program-list li");
  const programSelectOptions = document.querySelectorAll("#program-select option");

  programListElements.forEach(function (li) {
    if (li.textContent === oldProgramData) {
      li.textContent = program.getData();
    }
  });

  programSelectOptions.forEach(function (option) {
    if (option.textContent === oldProgramData) {
      option.textContent = program.getData();
    }
  });
}




