let cell = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset-btn");
let win_msgX = document.querySelector(".win_msgX");
let draw_msg = document.querySelector(".draw_msg");
let win_msgO = document.querySelector(".win_msgO");
let onMusic = new Audio("Music/onMusic.wav");
let turnAudio = new Audio("Music/turnAudio.wav");
let reset_tone = new Audio("Music/reset_tone.wav");
let winTone = new Audio("Music/winner.wav");
let drawTone = new Audio("Music/draw_tone.wav");
let musicBtn = document.querySelector(".music_Btn");
let music_off = document.querySelector(".music_off");
let music_on = document.querySelector(".music_on");

winCells = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let audioElements = [turnAudio, reset_tone, winTone, drawTone];

let count = 0;
let countX = 0;
let countO = 0;
let countDraw = 0;
let turn = true;
let musicTurn = true;

// Initialize the UI elements to match the initial state of musicTurn
const initializeMusicState = () => {
  if (musicTurn) {
    music_off.classList.remove("music_icon_show");
    music_on.classList.add("music_icon_show");
    music_on.classList.add("txt-glow");
    onMusic.pause();
    audioElements.forEach((audio) => {
      audio.volume = 0;
    });
  } else {
    music_off.classList.add("music_icon_show");
    music_on.classList.remove("music_icon_show");
    music_on.classList.remove("txt-glow");
    onMusic.play();
    audioElements.forEach((audio) => {
      audio.volume = 1;
    });
  }
};

const musicSystem = () => {
  musicBtn.addEventListener("click", () => {
    musicTurn = !musicTurn; // Toggle musicTurn
    initializeMusicState();
  });
};

initializeMusicState();
musicSystem();

cell.forEach((box) => {  // Logic for turn
  box.addEventListener("click", () => {
    if (turn === true) {
      box.innerText = "O";
      turn = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      turn = true;
      box.disabled = true;
      box.classList.add("txt-glow-x");
    }
    count++;

    turnAudio.play();

    let isWinner = winner();
    if (!isWinner && count === 9) {
      draw();
    }
  });
});

let winner = () => {
  for (let cells of winCells) {
    let cell1 = cell[cells[0]].innerText;
    let cell2 = cell[cells[1]].innerText;
    let cell3 = cell[cells[2]].innerText;

    if (cell1 != "" && cell2 != "" && cell3 != "") {
      if (cell1 === cell2 && cell2 === cell3) {
        wincount(cell1);
        winTone.play();
        cell.forEach((box) => {
          box.disabled = true;
        });
        return true;
      }
    }
  }
  return false;
};

let wincount = (winner) => {  // To track number of wins and draws.
  if (winner === "X") {
    countX++;
    win_msgX.innerText = `${countX}`;
    win_msgX.classList.add("txt-glow-vs");
    win_msgO.classList.remove("txt-glow-vs");
    draw_msg.classList.remove("txt-glow-vs");
  } else {
    countO++;
    win_msgO.innerText = `${countO}`;
    win_msgO.classList.add("txt-glow-vs");
    win_msgX.classList.remove("txt-glow-vs");
    draw_msg.classList.remove("txt-glow-vs");
  }
};

const draw = () => {
  countDraw++;
  drawTone.play();
  draw_msg.innerText = `${countDraw}`;
  draw_msg.classList.add("txt-glow-vs");
  win_msgO.classList.remove("txt-glow-vs");
  win_msgX.classList.remove("txt-glow-vs");
};

reset_btn.addEventListener("click", () => {
  reset_tone.play();
  alert("Do you want to restart the game?");
  cell.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.remove("txt-glow-x");
    turn = true;
  });
  count = 0;
});
