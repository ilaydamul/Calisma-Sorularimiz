const form = document.querySelector("#film-form");

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
const ui = new UI();

const storage = new Storage();
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

//let title = titleElement.value;
//const director = directorElement.value;
//const url = urlElement.value;

function addFilm(e) {

    if (titleElement.value === "" || directorElement.value === "" || urlElement.value === "") {
        ui.displayMessages("Tüm alanları doldurun...", "danger")
    }
    else {

        const newFilm = new Film(titleElement.value, directorElement.value, urlElement.value);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film başarıyla eklendi...", "success");
    }

    ui.cleraInputs(titleElement, directorElement, urlElement);
    e.preventDefault();

}
function deleteFilm(e) {

    if (e.target.id === "delete-film") {

        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//a nın parentine gidiyor daha sonra 2 önceki kardeşine gidiyor.
        ui.displayMessages("Silme işlemi başarılı...", "success");

    }
}
function clearAllFilms() {
    if (confirm("Emin misiniz?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }

}

