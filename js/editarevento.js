console.log ("hello world")

const inputNome = document.querySelector('#nome');
const inputbanner = document.querySelector('#banner');
const inputAtracoes = document.querySelector('#atracoes');
const inputDescricao = document.querySelector('#descricao');
const inputData = document.querySelector('#data');
const inputLotacao = document.querySelector('#lotacao')

const id = location.search.substring(4);
console.log(id);

const localizaURL = async () => {
    const resposta = await fetch (`https://xp41-soundgarden-api.herokuapp.com/events/${id}`) 
    const dadosEvento = await resposta.json();

    inputNome.value = dadosEvento.name;
    inputbanner.value = dadosEvento.poster;
    inputAtracoes.value = dadosEvento.attractions;
    inputDescricao.value = dadosEvento.description;
    inputData.value = dadosEvento.scheduled;
    inputLotacao.value = dadosEvento.number_tickets;
}

localizaURL();



const btnEnviar = document.querySelector('#enviar')

const editarEvento = async (evento) => {

    evento.preventDefault();
    const EventName = document.querySelector("#nome");
    const EventPoster= document.querySelector("#banner");
    const EventAttractions = document.querySelector('#atracoes')
    const EventDescription = document.querySelector('#descricao')
    const EventScheduled = document.querySelector('#data')
    const EventNumber_tickets = document.querySelector('#lotacao')

    const eventObject = {
        "name": EventName.value,
        "poster": EventPoster.value ,
        "attractions":EventAttractions.value.split(",") ,
        "description":EventDescription.value ,
        "scheduled": new Date (EventScheduled.value) ,
        "number_tickets": Number(EventNumber_tickets.value)
    }
 
    const init = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventObject),
        redirect: 'follow'
    }
    
    const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, init )
    const dados = resposta.json()
        
}

btnEnviar.onclick = editarEvento;