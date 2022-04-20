document.querySelector('button').addEventListener('click',getPlayer);

function getPlayer(){

    fetch("https://api-football-standings.azharimm.site/leagues")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      data.data.forEach(el=>{
        createRow(el.id,el.name)
        document.getElementById(el.id).addEventListener('click',getStandings)
      })
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  

}

function createRow(choice, dataTitle) {
  console.log(choice);
  console.log(dataTitle);
  var newRow = document.querySelector("table").insertRow();
  newRow.innerHTML = `<td id="${choice}">${choice}</td><td>${dataTitle}</td>`;
}

function getStandings(){
  let id = this.id;
  fetch(`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=2020&sort=asc`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
     console.log(data.data.standings[0].team.name);
     let ul = document.querySelector('ul');
     let li = document.createElement('li');
     li.textContent = data.data.standings[0].team.name;
     ul.appendChild(li)
      
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

}
