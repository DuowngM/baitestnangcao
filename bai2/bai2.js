let listPlayer = JSON.parse(localStorage.getItem("listPlayer"));
function addButton() {
  console.log("11111");
  let namePlayer = document.getElementById("name").value;
  let sc = 0;
  let player = {
    name: namePlayer,
    score: sc,
  };
  if (listPlayer == null) {
    listPlayer = [];
    listPlayer.push(player);
    localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
  } else {
    listPlayer.push(player);
    localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
  }
  namePlayer = document.getElementById("name").value = "";
  renderPlayer();
  renderCount();
}
function renderPlayer() {
  let result = "";
  for (i = 0; i < listPlayer.length; i++) {
    result += `
                <tr>
                    <td><button class="hehe" onclick="del(${i})">xóa</button></td>
                    <td>${listPlayer[i].name}</td>
                    <td><button class="hehe" onclick="downSC(${i})">-</button></td>
                    <td class="haha">${listPlayer[i].score}</td>
                    <td><button class="hehe" onclick="upSC(${i})">+</button></td>
                </tr>
                `;
  }
  document.getElementById("tableName").innerHTML = result;
}
function del(index) {
  listPlayer.splice(index, 1);
  localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
  renderPlayer();
  renderCount();
}
function upSC(index) {
  listPlayer[index].score++;
  localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
  renderPlayer();
  renderCount();
}

function downSC(index) {
  listPlayer[index].score--;
  localStorage.setItem("listPlayer", JSON.stringify(listPlayer));
  renderPlayer();
  renderCount();
}
function renderCount() {
  let a = 0;
  for (i = 0; i < listPlayer.length; i++) {
    a += listPlayer[i].score;
    sum = a;
  }
  let result = `
            <div class ="playAndPoint">
                <div>Player:${listPlayer.length}</div>
                <div>Total Points:${sum}</div>
           </div>      
            `;
  console.log("111111111111");
  document.getElementById("headerInput").innerHTML = result;
}
renderPlayer();
renderCount();

let timeElapsed = 0;
let timerId;
let count = 0;
function start() {
  count++;
  if (count % 2 == 0) {
    clearInterval(timerId);
    document.getElementById("start-stop").innerText = "START";
  } else {
    timeElapsed = 0;
    document.getElementById("timer").innerText = timeElapsed + " giây";
    document.getElementById("start-stop").innerText = "STOP";
    timerId = setInterval(function () {
      timeElapsed++;
      document.getElementById("timer").innerText = timeElapsed + " giây";
    }, 1000);
  }
}

function reset() {
  clearInterval(timerId);
  timeElapsed = 0;
  document.getElementById("start-stop").innerText = "START";
  document.getElementById("timer").innerText = timeElapsed + " giây";
}
