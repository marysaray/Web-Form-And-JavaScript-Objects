var MovieList = (function () {
    function MovieList() {
    }
    return MovieList;
}());
window.onload = function () {
    var buyButton = document.querySelector("input[type=button]");
    buyButton.onclick = buyMovie;
};
function buyMovie() {
    console.log("Buy button was clicked.");
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
function isAllDataValid() {
    return true;
}
function getById(id) {
    return document.getElementById(id);
}
