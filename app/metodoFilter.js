const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elemtnoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}