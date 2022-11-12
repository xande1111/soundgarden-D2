
const eventosMuralIndex = document.querySelector('#eventosIndex')
const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

async function mostrarEventos() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        const primeirosEventos = data.slice(0, 3)

        primeirosEventos.forEach(evento => {
            // formato local 
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
// listar eventos DOM
mostrarEventos()

