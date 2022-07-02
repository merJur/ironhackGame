const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);
const startBtn = document.querySelector(".startbtn");
const enterName = document.querySelector('input');
const nameArray = [];


function addName(name){
  nameArray.push.call(name);
  }


enterName = addName()
console.log(enterName)




//this.sound = new Audio();
//this.sound.src="/sounds/go,mp3";
// 116 REFRESH


window.onload = () => {
  startBtn.onclick = () => {
    startBtn.textContent = "PUSH AFTER ENTER NAME"
    inputName();
    console.log(enterName)
    startGame();
  //  this.sound.play();
    disablebtn(startBtn);
    startBtn.textContent = "REFRESH  TO  PLAY  AGAIN  !!!";
  };startBtn.classList.remove('start');
  startBtn.classList.add('refresh');


  function disablebtn(startBtn) {
    startBtn.disabled = "true";
  }

  function startGame() {
    if (game.intervalId === null) {
      game.start();

    } else {
      game.score();
      // game.stop();
    }
  }
};

/*
miStorage = window.localStorage;
localStorage.setItem('name' + this.score); añade y ver el storage


*/
