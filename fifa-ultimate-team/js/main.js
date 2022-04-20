document.querySelector('button').addEventListener('click',getPlayer);

function getPlayer(){

    fetch("https://www.easports.com/fifa/ultimate-team/api/fut/item")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  

}
