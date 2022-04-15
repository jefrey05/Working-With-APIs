//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  let choice = document.querySelector("input").value;
  let url = `https://www.dnd5eapi.co/api/spells/${choice}`;
  //document.querySelector('ul').removeChild('li')
  let element= document.querySelector('ul');
  while(element.firstChild){
      element.removeChild(element.firstChild)
  }
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    
      console.log(data.subclasses);
      document.querySelector("h2").innerText = data.name;
      document.querySelector("h3").innerText = data.classes[0].name;
      document.querySelector('p').innerText = data.desc[0];
      data.subclasses.forEach((obj) => {
        console.log(obj.name);
        //create an li
        const li = document.createElement("li");
        //add text to li
        li.textContent = obj.name;
        //append the li to the ul
        document.querySelector("ul").appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
      alert("Enter a correct spell");
      
    });
}
