
const eventosMuralIndex = document.querySelector('#eventosIndex')
const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

async function mostrarEventos() {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    const primeirosEventos = data.slice(0, 3)

    primeirosEventos.forEach(evento => {

      let dataEvento = new Date(evento.scheduled).toLocaleString()

      let html = `
      <article class="evento card p-5 m-3">
        <h2>${evento.name} - ${dataEvento}</h2>
        <h4>${evento.attractions}</h4>
        <p>
          ${evento.description}
        </p>
        <button class="btn btn-primary" id=${evento._id} onclick='abrirModalIndex()'>Reservar Ingresso</button>
      </article>
      `

      eventosMuralIndex.innerHTML += html
    })

    console.log(data.slice(0, 3))
  } catch (error) {
    console.log(error)
  }
}
mostrarEventos()


function redirecionar() {
  window.location.href = 'index.html'
}

const modal = document.querySelector('#telaModalIndex')

function abrirModalIndex() {
  event.preventDefault()
  modal.style.display = 'block'
  modal.setAttribute('id_evento', event.target.id)
}

// reserva onsubmit

const form = document.querySelector('#telaModalIndex form')
form.addEventListener('submit', fazerReservaIngresso)

async function fazerReservaIngresso() {
  event.preventDefault()
  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value
  const ingressos = document.getElementById('qtdIngresso').value
  const id = modal.getAttribute('id_evento')

  const URL_RESERVA = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

  const reserva = {
    owner_name: nome,
    owner_email: email,
    number_tickets: ingressos,
    event_id: id
  }

  try {
    const response = await fetch(URL_RESERVA, {
      method: 'POST',
      body: JSON.stringify(reserva),
      headers: { 'Content-type': 'application/json' }
    })

    if (response.ok) {
      alert('Reservado')
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

// fecha o modal ao clicar

const closeBtn = document.querySelector('#closeBtn')
closeBtn.onclick = function () {
  modal.style.display = 'none'
}
