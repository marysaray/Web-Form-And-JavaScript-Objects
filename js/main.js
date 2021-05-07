var MovieList = (function () {
    function MovieList() {
    }
    return MovieList;
}());
window.onload = function () {
    var buyButton = document.querySelector("input[type=button]");
    buyButton.onclick = buyMovie;
};
function clearAllErrors() {
    var errorSummary = getById("validation-summary");
    errorSummary.innerText = "";
}
function buyMovie() {
    console.log("Buy button was clicked.");
    clearAllErrors();
    if (isAllDataValid()) {
        var movie = purchaseMovie();
        displayMovie(movie);
    }
}
function purchaseMovie() {
    var movie = new MovieList();
    var titleInput = getById("title");
    movie.title = titleInput.value;
    var priceInput = getById("price");
    movie.price = parseFloat(priceInput.value);
    var genreInput = getById("genre");
    movie.genre = genreInput.value;
    var addMovie = getById("add-movie");
    movie.isAddMovie = addMovie.checked;
    console.log(movie);
    return movie;
}
function displayMovie(myMovie) {
    var displayDiv = getById("display");
    var movieHeading = document.createElement("h2");
    movieHeading.innerText = myMovie.title;
    var movieInfo = document.createElement("p");
    var movieResult = "";
    if (myMovie.isAddMovie) {
        movieResult = "Movie was successfully purchased.";
    }
    else {
        movieResult = "Please check the box to purchase the movie.";
    }
    movieInfo.innerText = "Description:  " + myMovie.title + " \n                           Genre: " + myMovie.genre + "\n                           It costs: " + myMovie.price + "\n                           " + movieResult;
    displayDiv.appendChild(movieHeading);
    displayDiv.appendChild(movieInfo);
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required!");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number.");
    }
    var genre = getById("genre").value;
    if (genre == "") {
        isValid = false;
        addErrorMessage("Please pick a genre.");
    }
    return isValid;
}
function addErrorMessage(errorMessage) {
    var errorSummary = getById("validation-summary");
    var errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}
function getById(id) {
    return document.getElementById(id);
}
