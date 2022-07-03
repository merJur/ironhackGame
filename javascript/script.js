const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);
const startBtn = document.querySelector(".startbtn");
const enterNameBtn = document.querySelector("#add-name-btn");
const enterNameInput = document.querySelector("input");
const nameArray = [];

window.onload = () => {
  printResults();

  startBtn.onclick = () => {
    startGame();
   // disablebtn(startBtn);
     };
  function disablebtn(startBtn) {
    startBtn.disabled = "true";
  }

  function startGame() {
    if (game.intervalId === null) {
      game.start();
    } else {
      game.score();
     
    }
  }

  enterNameBtn.onclick = () => {
    window.localStorage.setItem(enterNameInput.value, game.points);
    readStorageAndUpdate();
  };
};

function printResults() {
  const theList = [];
  storage = JSON.parse(JSON.stringify(window.localStorage));
  const list = document.querySelector("ol");
  Object.keys(storage).forEach((player, index) => {
    const points = storage[player];
    const theItem = {
      player: player,
      points: parseInt(points, 10),
    };
    theList.push(theItem);
  });
  theList.sort((a, b) => b.points - a.points);
  theList.map((e, i) => {
    const liNode = document.createElement("li");
    liNode.innerText = `${e.player}: ${e.points}`;
    if (i <= 9) return list.appendChild(liNode);
  });
}

function readStorageAndUpdate() {
  const theList = [];
  storage = JSON.parse(JSON.stringify(window.localStorage));
  const list = document.querySelector("ol");
  restart();
  Object.keys(storage).forEach((player, index) => {
    const points = storage[player];
    const theItem = {
      player: player,
      points: parseInt(points, 10),
    };
    theList.push(theItem);
  });
  theList.sort((a, b) => b.points - a.points);
  theList.map((e, i) => {
    const liNode = document.createElement("li");
    liNode.innerText = `${e.player}: ${e.points}`;
    if (i <= 9) {
      return list.appendChild(liNode)
    }
  });
}

function restart() {
  window.location.reload();
}
