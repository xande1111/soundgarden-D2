console.log ("hello world")

const inputNome = document.querySelector('#nome');
const inputbanner = document.querySelector('#banner');
const inputAtracoes = document.querySelector('#atracoes');
const inputDescricao = document.querySelector('#descricao');
const inputData = document.querySelector('#data');
const inputLotacao = document.querySelector('#lotacao')

const editarEvento = async () => {
    const resposta = await fetch (`https://xp41-soundgarden-api.herokuapp.com/events,)
    const dadosEvento = await resposta.json();

    inputNome.value = dadosEvento.name;
    inputbanner.value = dadosEvento.poster;
    inputAtracoes.value = dadosEvento.attractions;
    inputDescricao.value = dadosEvento.description;
    inputData.value = dadosEvento.scheduled;
    inputLotacao.value = dadosEvento.number_tickets;
}

editarEvento();