let a = 0;
let BtnArr = document.querySelectorAll(".myButton");
let winScreen = document.getElementById("winScreen");
let winnerName = document.getElementById("winner");

function NumRand() {
  let max = 1,
    min = 0;
  x = Math.random() * (max - min) + min;
  x > 0.5 ? (x = 1) : (x = 0);
  return x;
}

function SetColor(id) {
  BtnArr[id].setAttribute("data-index", "1");
  BtnArr[id].classList.add("ColorButton");
}

function ResetColor(id) {
  BtnArr[id].setAttribute("data-index", "0");
  BtnArr[id].classList.remove("ColorButton");
}

function govno(id) {
  BtnArr[id].getAttribute("data-index") === "0" ? SetColor(id) : ResetColor(id);
}

for (let r = 0; r < 9; r++) {
  BtnArr[r].setAttribute("data-index", NumRand());
  if (BtnArr[r].getAttribute("data-index") == 1)
    BtnArr[r].classList.add("ColorButton");
}

function click(event) {
  console.log(
    `ID: ${event.target.id}  DATA-${event.target.getAttribute("data-index")}`
  );
  let id = parseInt(event.target.id);
  if (BtnArr[id].getAttribute("data-index") === "0") {
    SetColor(id);
  } else if (BtnArr[id].getAttribute("data-index") === "1") {
    ResetColor(id);
  }

  switch (id) {
    case 0:
      govno(1);
      govno(3);
      break;
    case 1:
      govno(0);
      govno(2);
      govno(4);
      break;
    case 2:
      govno(1);
      govno(5);
      break;
    case 3:
      govno(0);
      govno(4);
      govno(6);
      break;
    case 4:
      govno(1);
      govno(3);
      govno(5);
      govno(7);
      break;
    case 5:
      govno(2);
      govno(4);
      govno(8);
      break;
    case 6:
      govno(3);
      govno(7);
      break;
    case 7:
      govno(4);
      govno(6);
      govno(8);
      break;
    case 8:
      govno(7);
      govno(5);
      break;
  }
  if (
    BtnArr[0].getAttribute("data-index") == "1" &&
    BtnArr[1].getAttribute("data-index") == "1" &&
    BtnArr[2].getAttribute("data-index") == "1" &&
    BtnArr[3].getAttribute("data-index") == "1" &&
    BtnArr[4].getAttribute("data-index") == "1" &&
    BtnArr[5].getAttribute("data-index") == "1" &&
    BtnArr[6].getAttribute("data-index") == "1" &&
    BtnArr[7].getAttribute("data-index") == "1" &&
    BtnArr[8].getAttribute("data-index") == "1"
  ) {
    winnerName.innerText = "WIN!!!!!!!";
    winScreen.classList.add("active");

    setTimeout(() => {
      location.reload();
    }, 5000);
  }
}

for (let i = 0; i < BtnArr.length; i++) {
  BtnArr[i].addEventListener("click", click);
}
