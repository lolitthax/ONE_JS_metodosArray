const elementoParaInserirLivros = document.getElementById('livros')
const elemtnoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros) {
  elemtnoComValorTotalDeLivrosDisponiveis.innerHTML = '';
  elementoParaInserirLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {
    // let disponibilidade = verficarDisponibilidadedoLivro(livro);
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'; //usando operador para verificar disponibilidade com apenas uma linha com operador ternário
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
  })
}

//Função para verficar disponibilidade
// function verficarDisponibilidadedoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens';
//   } else {
//     return 'livros__imagens indisponivel';
//   }
// }