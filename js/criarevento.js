const btnEnviar = document.getElementById('btnSubmit')
const popup = document.querySelector('.popup-wrapper')


const novoEvento = async (evento) => {

    evento.preventDefault();
    const EventName = document.querySelector("#name");
    const EventPoster= "link da imagem"
    const EventAttractions = document.querySelector('#atracoes')
    const EventDescription = document.querySelector('#descricao')
    const EventScheduled = document.querySelector('#date')
    const EventNumber_tickets = document.querySelector('#lotacao')

    const eventObject = {
        "name": EventName.value,
        "poster": EventPoster ,
        "attractions":EventAttractions.value.split(",") ,
        "description":EventDescription.value ,
        "scheduled": new Date (EventScheduled.value) ,
        "number_tickets": Number(EventNumber_tickets.value)
    }
 
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventObject),
        redirect: 'follow'
    }
    
    const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events`, init )
    const dados = resposta.json()
    
    popup.style.display = 'block';

}

btnEnviar.onsubmit = novoEvento;

popup.addEventListener ('click', event => {
    const classOfClickedElement = event.target.classList[0];
    const classNames = ['popup-close', 'popup-wrapper'];
    const shouldClosePopup = classNames.some(className => className === classOfClickedElement);

    if (shouldClosePopup){
        popup.style.display = 'none';

    }

    
})