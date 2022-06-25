const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);
const startBtn = document.querySelector(".startbtn");

window.onload = () => {
  document.querySelector(".startbtn").onclick = () => {
    startGame();
  };

  function startGame() {
    if (game.intervalId === null) {
      game.start();
    } else {
     game.score();
    // game.stop();
    }
  }
};
