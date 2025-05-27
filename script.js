function diceChange(){
    let a = Math.floor(Math.random()*6) + 1;
    let b = Math.floor(Math.random()*6) + 1;

  document.getElementsByTagName('img')[0].src = "images/dice" + a + ".png";
  document.getElementsByTagName('img')[1].src = "images/dice" + b + ".png";

    // let e = document.querySelector('h1');
    // if(a > b) e.innerText = "Player 1 has Won !";
    // else if(a < b) e.innerText = "Player 2 has Won !";
    // else e.innerText = "Draw !!";

    document.getElementById('h1').innerText = a > b ? "Player 1 has Won !" : a < b ? "Player 2 has Won !" : "Draw !!";
}
window.onload = function() {
  if (sessionStorage.getItem('alreadyLoaded')) {
    diceChange(); 
  } else {
    sessionStorage.setItem('alreadyLoaded', 'true');
    // Do nothing on the first load
  }
}
