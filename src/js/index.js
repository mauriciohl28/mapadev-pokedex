/* 
quando clicar no pokemon da listagem temos que escorder o cartão do pokemon aberto e mostra o cartão coreespondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos 
1 - listagem
2 - cartão do pokemon
*/

// precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')



listaSelecaoPokemon.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons
    pokemon.addEventListener('click', () => {
        // - remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // - ao clacar em  um pokemon da listagem pega o id desse pokemon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // -remover a classe ativo que marca o pokemon selecionado 
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // -adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})