// get movie off of the form.
class MovieList{
    title:string;
    price:number;
    genre:string;
    isAddMovie:boolean;

}

// create a button click even handler
window.onload = function(){
    let buyButton = <HTMLElement>document.querySelector("input[type=button]");
    buyButton.onclick = buyMovie;
}

function clearAllErrors(){
    let errorSummary = getById("validation-summary");
    errorSummary.innerText = "";
}

/**
 * movie data from the form
 * and returns the MovieList object.
 */
function buyMovie(){
    console.log("Buy button was clicked.");
    clearAllErrors();
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

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}
// add validation code
function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required!");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
       addErrorMessage("Price is required and must be a number.");
    }

    let genre = (<HTMLOptionElement>getById("genre")).value;
    if(genre == ""){
        isValid = false;
        addErrorMsgWithCustomClass("Please pick a genre.", "genre-error")
    }
    return isValid;
}

function addErrorMessage(errorMessage:string) {
    let errorSummary = getById("validation-summary");
    let errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}

function addErrorMsgWithCustomClass(errorMessage:string, cssClass:string){
    let errorSummary = getById("validation-summary");
    let errorItem = document.createElement("li");
    errorItem.classList.add(cssClass);
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}

function getById(id:string){
    return document.getElementById(id);
}

