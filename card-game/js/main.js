
if(!localStorage.getItem("deckId")){
  updateDeckID();
}
if(!localStorage.getItem("Player1wins")){
  localStorage.setItem("Player1wins",0);
  document.querySelector("#player1score").innerText = localStorage.getItem("Player1wins");
  let player1 = prompt("Player 1 enter name");
  document.querySelector("#player1name").innerText = player1;

}
if(!localStorage.getItem("Player2wins")){
  localStorage.setItem("Player2wins",0);
  document.querySelector("#player2score").innerText = localStorage.getItem("Player2wins");
  let player2 = prompt("Player 2 enter name");
  document.querySelector("#player2name").innerText = player2;
}
    document.querySelector('button').addEventListener('click', drawTwo)
function drawTwo(){
  let deckId = localStorage.getItem("deckId");
  fetch(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image;
        document.querySelector("#player2").src = data.cards[1].image;
        
        let player1Val = convertToNum(data.cards[0].value);
        let player2Val = convertToNum(data.cards[1].value);
        if(player1Val > player2Val){
          document.querySelector("h3").innerText = 'Player 1 wins'
          let value = Number(localStorage.getItem("Player1wins"));
          value++;
          localStorage.setItem("Player1wins",value);
          document.querySelector("#player1score").innerText = localStorage.getItem("Player1wins");
        }else if(player2Val > player1Val){
          document.querySelector('h3').innerText = 'Player 2 wins'
          let value = Number(localStorage.getItem("Player2wins"));
          value++;
          localStorage.setItem("Player2wins",value)
          document.querySelector("#player2score").innerText = localStorage.getItem("Player2wins")
        }else{
          document.querySelector('h3').innerText = 'Time for war!'
        }
        console.log(`remaining cards ${data.remaining}`);
        if(data.remaining == 0){
          document.querySelector("h3").innerText = 'Opps no cards left : New game with new deck will begin'
          if(Number(localStorage.getItem("Player1wins")> Number(localStorage.getItem("Player2wins")))){
            alert('Player1 has won this game good luck next time')
          }else if(Number(localStorage.getItem("Player1wins")< Number(localStorage.getItem("Player2wins")))){
            alert('Player2 has won this game good luck next time')}
            else{"Its a draw"}
          localStorage.removeItem("Player1wins");
          localStorage.removeItem("Player2wins")
          
          updateDeckID();
          
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function convertToNum(val){
  if(val === 'ACE'){
    return 14;
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else{return Number(val)}

}

function updateDeckID(){
fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
.then(res => res.json()) // parse response as JSON
.then(data => {
  localStorage.setItem("deckId",data.deck_id)
})
.catch(err => {
    console.log(`error ${err}`)
});

}