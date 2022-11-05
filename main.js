let delay = -0.4;

function createCard(date, day, games) {
  delay = delay + 0.4;
  return `  
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
`
}

function createGame(player1, hour, player2, group1, group2) {
  return `
  <li>
    <img src="./assets/icons/group-${group1}/icon-${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icons/group-${group2}/icon-${player2}.svg" alt="${player2}" />
  </li>
`
}

document.querySelector("#cards").innerHTML =
    createCard(
      "20/11", "domingo", 
      createGame("qatar", "13:00","ecuador", "A", "A")
    ) +
    createCard(
      "21/11", "segunda", 
      createGame("england", "10:00","iran", "B", "B") +
      createGame("senegal", "13:00","netherlands", "A", "A")+
      createGame("unitedstates", "16:00","waves", "B", "B")
    ) +
    createCard(
      "22/11", "terça", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "23/11", "quarta", 
      createGame("marocco", "07:00","croatia", "F", "F") +
      createGame("germany", "10:00","japan", "E", "E") +
      createGame("spain", "13:00","costarica", "E", "E") +
      createGame("belgium", "16:00","canada", "F", "F")
    ) +
    createCard(
      "24/11", "quinta", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "25/11", "sexta", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "26/11", "sábado", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "27/11", "domingo", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "28/11", "segunda", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "29/11", "terça", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "30/11", "quarta", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "01/12", "quinta", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) +
    createCard(
      "02/12", "sexta", 
      createGame("argentina", "07:00","saudiarabia", "C", "C") +
      createGame("denmark", "10:00","tunisia", "D", "D") +
      createGame("mexico", "13:00","poland", "C", "C") +
      createGame("france", "16:00","australia", "D", "D")
    ) 

