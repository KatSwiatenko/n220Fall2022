let cards = document.getElementById("cards");
cards.addEventListener("click", clicked);

function clicked(event) {
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;
}