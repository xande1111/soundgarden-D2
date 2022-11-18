const URL = 'https://xp41-soundgarden-api.herokuapp.com'
const section = document.querySelector('.container')


async function eventList() {
  try{
    const data = await fetch(`${URL}/events`)
    const newData = await data.json()

  newData.forEach((event) => {
    const html = `
      <div style="display: inline-grid;"> 
        <article class="evento card p-5 m-3">
          <h2>${event.name}</h2>
          <h4>${event.attractions}</h4>
          <p>${event.description}</p>
          <button ${event._id} class="btn btn-primary" onclick = "openModal()">reservar ingresso</button>
        </article>
      </div>
    `
    section.innerHTML += html
  })    
  } catch (error){
    console.log(`[ERROR: ${error}!]`)
  }
}

eventList()

//Modal

const modal = document.querySelector('#modal')
const form = document.querySelector('#modal form')

function openModal(){
  event.preventDefault()
  modal.style.display = "block"
}

form.addEventListener('submit', send)
async function send(){
  event.preventDefault()
  const eventName = document.querySelector('#name').value
  const eventEmail = document.querySelector('#email').value
  const eventTickets = document.querySelector('#tickets').value
  const eventId = modal.getAttribute('id_evento')

  const URL_RESERVA = `${URL}/bookings`

  const reserve = {
    owner_name: eventName,
    owner_email: eventEmail,
    number_tickets: eventTickets,
    event_id: eventId
  }

  try {
    const response = await fetch(URL_RESERVA, {
      method: "POST",
      body: JSON.stringify(res),
      headers: {
        "Content-type": "Application/json"
      }
    })

    if (response.ok) {
      alert('reservado')
      redirecionar()
    } else {
      console.log(response)
      throw new Error(`${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (err) {
    if (err.message === '400') alert('erro')
    console.log(err)
  } 
}
function redirecionar() {
  window.location.href = 'admin.html'
}