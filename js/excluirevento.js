const delForm = document.querySelector('.col-6');
const delName = document.querySelector('#nome');
const delBanner = document.querySelector('#banner');
const delAttractions = document.querySelector('#atracoes');
const delDescription = document.querySelector('#descricao');
const delDate = document.querySelector('#data');
const delCapacity = document.querySelector('#lotacao');

const id = location.href.split('=')[1];

fetch('https://xp41-soundgarden-api.herokuapp.com/events')
    .then(res => res.json())
    .then(arr => {
        const displEvents = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]]
        displEvents.forEach((displEvent, index) => {
            if(displEvent._id === id){
                delName.value = displEvent.name
                delBanner.value = displEvent.banner
                delAttractions.value = displEvent.attraction
                delDescription.value = displEvent.description
                delDate.value = new Date(displEvent.date).toISOString().substring().replace('T', '').slice(0, 16);
                delCapacity.value = displEvent.tickets 
            }
        })
});

function del(){
    delName.value = ""
    delBanner.value = ""
    delAttractions.value = ""
    delDescription.value = ""
    delDate.value = ""
    delCapacity.value = ""
};

delForm.addEventListener('submit', delDatas);

function delDatas(event){
    event.preventDefault()
    const URL_DELETE = `https://xp41-soundgarden-api.herokuapp.com/events/${id}`
    fetch(URL_DELETE, {
        method: "DELETE",
        headders: {"Content-Type": "application/json"}, 
    })
    .then(res => {
        setTimeout(function(){
            document.querySelector('h2').classList.add('active')
        }, 500)
        setTimeout(function(){
            document.querySelector('h2').classList.remove('active')
        }, 500)
        del()
    })
};



