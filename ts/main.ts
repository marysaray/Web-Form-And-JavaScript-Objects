// get movie off of the form.
class MovieList{
    title:string;
    price:number;
    genre:string;
    isAddMovie:boolean;

}

// test code
/*
let myMovie = new MovieList();
myMovie.title = "Raya And The Last Dragon";
myMovie.genre = "Action";
myMovie.addMovie = true;
*/

// create a button click even handler
window.onload = function(){
    let buyButton = <HTMLElement>document.querySelector("input[type=button]");
    buyButton.onclick = buyMovie;
}

/**
 * movie data from the form
 * and returns the MovieList object.
 */
function buyMovie(){
    console.log("Buy button was clicked.");
    // check if everything is valid.
    if(isAllDataValid()){
        // get movie off the form
        let movie = purchaseMovie();  
        // if valid display output.  
        displayMovie(movie);
    }
}

function purchaseMovie():MovieList{

    // create movie
    let movie = new MovieList();

    // populate with dat from the form
    let titleInput = <HTMLInputElement>getById("title");
    movie.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    movie.price = parseFloat(priceInput.value);

    let genreInput = <HTMLSelectElement>getById("genre");
    movie.genre = genreInput.value;
    
    let addMovie = <HTMLInputElement>getById("add-movie");
    movie.isAddMovie = addMovie.checked;

    // retrun movie
    console.log(movie);
    return movie;
}

function displayMovie(myMovie:MovieList):void{
    // Display video game below the form.
    let displayDiv = getById("display");
    // Create <h2> with movie title.
    let movieHeading = document.createElement("h2");
    movieHeading.innerText = myMovie.title

    // Create paragrah with movie details
    let movieInfo = document.createElement("p");
    let movieResult = "";
    if(myMovie.isAddMovie){
        movieResult = "Movie was successfully purchased.";
    }
    else{
        movieResult = "Please check the box to purchase the movie.";
    }
    // movieInfo.innerText = myMovie.title + ". \n Genre: " 
    //                     + myMovie.genre + ". \n It costs: " 
    //                     + myMovie.price + ". \n It has been purchased.";
    movieInfo.innerText = `Description:  ${myMovie.title} 
                           Genre: ${myMovie.genre}
                           It costs: ${myMovie.price}
                           ${movieResult}`;

    // Add <h2> int the <div id="display">
    displayDiv.appendChild(movieHeading);
    // Add <p> movie details
    displayDiv.appendChild(movieInfo);
}

// add validation code
function isAllDataValid(){
    return true;
}

function getById(id:string){
    return document.getElementById(id);
}

