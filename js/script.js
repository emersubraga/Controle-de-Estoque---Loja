// Pegue o modal
var modal = document.getElementById("myModal");

// Pegue o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Pegue o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//-------------------------------------------------------------------//


 // Função para calcular o valor total
 function calcularValorTotal() {
    let tabela = document.querySelector('.tabela-modal tbody');
    let linhas = tabela.querySelectorAll('tr');
    let total = 0;

    linhas.forEach(linha => {
        let valorTotal = linha.cells[5].innerText.replace('R$', '').replace('.', '').replace(',', '.');
        total += parseFloat(valorTotal);
    });

    document.getElementById('valor-total').innerText = 'R$ ' + total.toFixed(2).replace('.', ',');
}

// Calcular o valor total ao carregar a página
document.addEventListener('DOMContentLoaded', calcularValorTotal);