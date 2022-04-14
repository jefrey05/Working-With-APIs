
document.querySelector('button').addEventListener('click',getMeme);

function getMeme(){
  
  fetch("https://api.imgflip.com/get_memes")
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data.data.memes);
  let rand = Math.floor(Math.random()*100);
  document.querySelector('img').src = data.data.memes[rand].url
  document.querySelector('img').width = "400";
  document.querySelector('img').height = '400';
  document.querySelector('h2').classList.remove('hidden')
  document.querySelector('h2').innerText = data.data.memes[rand].name;
  localStorage.setItem('current',data.data.memes[rand].url)
  
  
})
.catch(err => {
    console.log(`error ${err}`)
});

}

