//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  let pokeStore = []
  let pokeImg = []
  let poke1Abilities = [];
  let poke2Abilities = [];
  let count = 0;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        data.abilities.forEach(data=>{
         poke1Abilities.push(data.ability.name);
        });
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)
          data.abilities.forEach(data=>{
            poke2Abilities.push(data.ability.name)
          })
          console.log(poke1Abilities);
          console.log(poke2Abilities)
          createRow(poke1,poke2)
          let max = Math.max(poke1Abilities.length,poke2Abilities.length);
          for(let i = 0;i<max;i++){
            !poke1Abilities[i]?createRow(" "):createRow(poke1Abilities[i])
          }


      

          execute(poke2Abilities);
          let pikachu = document.getElementById('0');
          let td = document.createElement('td');
          td.textContent = poke2;
          pikachu.parentNode.insertBefore(td,td.nextSibling)
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            
          
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      function createRow(poke1) {
        //console.log(choice);
        //console.log(dataTitle);
        var newRow = document.querySelector("table").insertRow();
        newRow.innerHTML = `<td id="${count}" >${poke1}</td>`;
        count++;
      }

       
      function execute(poke2){
        let element = document.querySelector('thead');
        let children = element.children;
        let index = 0;
        for(let i = 2;i<children.length;i++){
          let child = children[i];
          let td = document.createElement('td');
          td.textContent = poke2[index];
          child.appendChild(td)
          index++;
        }
    
      }
      

      
}