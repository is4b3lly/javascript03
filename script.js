let valorContador = 0;

function incrementar() {
    valorContador++;
document.getElementById(`contador`).innerText = valorContador;
}

function diminuir() {
    valorContador--;
    document.getElementById(`contador`).innerText = valorContador;
}