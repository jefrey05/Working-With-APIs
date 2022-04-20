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
     data.data.standings.forEach(el=>{
      let ol = document.querySelector('ol');
      let li = document.createElement('li');
      li.textContent = el.team.name;
      li.setAttribute('id',el.team.name)
      ol.appendChild(li)
      document.getElementById(el.team.name).addEventListener('click',getTeamStats)
     })
    
      
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

}

function getTeamStats(){
  alert(this.id)
}