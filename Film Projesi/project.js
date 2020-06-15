const form = document.querySelector("#film-form");

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

const ui = new UI();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
}

const title = titleElement.value;
const director = directorElement.value;
const url = urlElement.value;

function addFilm(e) {




    if (title === "" || director === "" || url === "") {

    }
    else {
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm);
    }
    ui.cleraInputs(titleElement,directorElement,urlElement);
    e.preventDefault();

}

