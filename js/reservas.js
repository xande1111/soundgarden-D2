console.log("hello, world")
const tbody = document.querySelector('#tbody')

const id = location.search.substring(4);
console.log(id)
const URL = `https://xp41-soundgarden-api.herokuapp.com/bookings/event/${id}`

async function verEventos() {
  try {
    const response = await fetch(URL)
    const listaEventos = await response.json()

    listaEventos.forEach((evento, index) => {
      let nomeDono = (evento.owner_name)
      let tickets = evento.number_tickets
      
      let html = `
<tr>
  <th scope="row">${index + 1}</th>
  <td>${nomeDono}</td>
  <td>${evento.event.name}</td>
  <td>${tickets}</td>
  <td>
  <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
  
  </td>
</tr>
      `
      tbody.innerHTML += html
    })

    console.log(listaEventos)
  } catch (error) {
    console.log(error)
  }
}
verEventos()