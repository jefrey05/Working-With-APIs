document.querySelector("button").addEventListener("click", getMeme);
document.querySelector("#getUrl").addEventListener("click", showMeURL);
if (!localStorage.getItem("current")) {
  localStorage.setItem("current", "");
}
document.querySelector("img").src = localStorage.getItem("current");
function getMeme() {
  document.querySelector("h3").style.display = "none";
  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.data.memes);
      let rand = Math.floor(Math.random() * 100);
      document.querySelector("img").src = data.data.memes[rand].url;
      document.querySelector("img").height = "400";
      document.querySelector("h2").classList.remove("hidden");
      document.querySelector("h2").innerText = data.data.memes[rand].name;
      localStorage.setItem("current", data.data.memes[rand].url);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function showMeURL() {
  document.querySelector("h3").innerText = localStorage.getItem("current");
  document.querySelector("h3").style.display = "block";
}
