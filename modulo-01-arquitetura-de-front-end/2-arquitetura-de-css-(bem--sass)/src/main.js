import './style.scss'

/**
 * Bloco: classe (O componente principal)
 * Filho/Elemento: classe__filho (Parte que depende do bloco)
 * Modificador: classe--modificador (Mudança de estado ou visual do bloco)
 * Modificador do Filho: classe__filho--modificador (Mudança de estado ou visual do filho)
 */

document.querySelector('#app').innerHTML = `
  <div class="card card--red">
    <h1 class="card__titulo">Título card 1</h1>
    <button class="card__button" onclick="alert('Você apertou o Card 1')">Card 1</button>
  </div>
  <div class="card card--blue">
    <h1 class="card__titulo">Título card 2</h1>
    <button class="card__button" onclick="alert('Você apertou o Card 2')">Card 2</button>
  </div>
  <div class="card card--green">
    <h1 class="card__titulo">Título card 3</h1>
    <button class="card__button" onclick="alert('Você apertou o Card 3')">Card 3</button>
  </div>
`
