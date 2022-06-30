const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);
const startBtn = document.querySelector(".startbtn");
//this.sound = new Audio();
//this.sound.src="/sounds/go,mp3";
window.onload = () => {
  startBtn.onclick = () => {
    startGame();
  //  this.sound.play();
    disablebtn(startBtn);
    startBtn.textContent = "REFRESH  TO  PLAY  AGAIN  !!!";
  };startBtn.classList.remove('start');
  startBtn.classList.add('refresh');

// 116 REFRESH

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
