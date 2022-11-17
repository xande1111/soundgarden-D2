const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

async function verEventos() {
  try {
    const response = await fetch(URL)
    const listaEventos = await response.json()

    listaEventos.forEach((evento, index) => {
      let dataEvento = new Date(evento.scheduled).toLocaleString()
      let atracoes = evento.attractions.toString()
      let tbody = document.querySelector('#tbody')
      let html = `
<tr>
  <th scope="row">${index + 1}</th>
  <td>${dataEvento}</td>
  <td>${evento.name}</td>
  <td>${atracoes}</td>
  <td>
  <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
  <a href="editar-evento.html?id=${evento._id}" 
  id="editar-evento" class="btn btn-secondary">editar</a>
  <a href="excluir-evento.html?id=${evento._id}"
  class="btn btn-danger">excluir</a>
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