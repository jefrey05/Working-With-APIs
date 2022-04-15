//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);
//document.querySelector("h2").innerText = localStorage.getItem("books");
for (const [key, value] of Object.entries(localStorage)) {
  createRow(key,value)
}
function getFetch() {
  const choice = document.querySelector("input").value;
  //console.log(choice);
  const url = `https://openlibrary.org/isbn/${choice}.json`;
  
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
     // console.log(data.title);
      //put title into localStorage
      if (!localStorage.getItem(choice)) {
        localStorage.setItem(choice, data.title);
        createRow(choice,localStorage.getItem(choice));
        console.log(`${choice} ${data.title}`)
      } else {
        alert("You have read this book already,Please enter another")
        //createRow(choice,localStorage.getItem(choice));
      }
      //document.querySelector("h2").innerText = localStorage.getItem(choice);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function createRow(choice,dataTitle){
  console.log(choice);
  console.log(dataTitle)
  var newRow=document.querySelector('table').insertRow();
  newRow.innerHTML = `<td>${choice}</td><td>${dataTitle}</td>`;
}