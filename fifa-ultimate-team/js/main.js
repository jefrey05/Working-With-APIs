document.querySelector('button').addEventListener('click',getPlayer);

function getPlayer(){

    fetch("https://api-football-standings.azharimm.site/leagues")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      data.data.forEach(el=>{
        createRow(el.id,el.name)
        document.querySelector('#' + el.id).addEventListener('click',getStandings)
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
  console.log('this works')
}
