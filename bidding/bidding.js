async function randomNames() {
  try {
    return await fetch(`https://random-names-api.herokuapp.com/random`).then(
      (res) => res.json()
    );
  } catch (error) {}
}

async function randomUsers() {
  try {
    return await fetch(
      `https://my-json-server.typicode.com/Jeck99/fake-server/users`
    )
      .then((res) => res.json())
      // .then((result) => console.log(result));
  } catch (error) {}
}
function theSpecialDouner() {
  randomUsers().then((res) => {
      specialDounerName = `${res[Math.floor(Math.random() * 10)].name.first} ${res[Math.floor(Math.random() * 10)].name.last}`;
      let counter = Math.floor(Math.random() * 75);
      let randomGender=['fimale','male']
    let gender = randomGender[Math.floor(Math.random() * 2)];
      specialDounerPic = `"https://randomuser.me/api/portraits/med/men/${counter}.jpg"`;
      document.getElementById("specialDouner").innerHTML += `<div>
        <img src="https://randomuser.me/api/portraits/med/men/${counter}.jpg"class="rounded-circle img-fluid" />
        <h1>${specialDounerName}</h1><h3>gender:${gender} blood-type:O negative</h3></div><br/>`;
    });
}
let specialDounerName;
let specialDounerPic;
let winnerPic;
let winnerName;
let biddingMoney = 0;
let timerSeconds = 40;
let addingBidd;
// let stoper=`00:${timerSeconds}s`

function bidders() {
  let timeoutid = null;
  let fakeUsers = setInterval(() => {
    if (timerSeconds > 14) {
    }

    timeoutid = setTimeout(() => {
      randomUsers().then((res) => {
          addingBidd = Math.floor(Math.random() * 90001) + 10000;
          let alertSound = new Audio("../sounds/alert_sound.wav");
          let genderOfDoun = ["men", "women"];
          let counter = Math.floor(Math.random() * 75);
          winnerName = `${res[Math.floor(Math.random() * 10)].name.first} ${res[Math.floor(Math.random() * 10)].name.last}`;
          winnerPic = `"https://randomuser.me/api/portraits/med/${
            genderOfDoun[Math.floor(Math.random() * 2)]
          }/${counter}.jpg"`;
          document.getElementById("theBidders").innerHTML = `<div>
            <h1>${riseBidding(addingBidd)}$</h1>
            <br/>
            <img src=${winnerPic}class="rounded-circle img-fluid" />
            <h6><p>${winnerName}</p> ${addingBidd}$</h6></div><br/>`;
          alertSound.play();
        });
    }, randomTimeOutNum());
  }, 1500);

  let stoperInterval = setInterval(() => {
    document.getElementById("biddingTimer").innerHTML = `00:${timerSeconds}s`;
    timerSeconds--;
    let clapingSound=new Audio('../sounds/clapping_sound.wav')
    if (timerSeconds < 0) {
      console.log(winnerName,specialDounerName);
      document.getElementById(
        "biddingMain"
        ).innerHTML = `<div style='display:flex;align-items: center'><div><img src=${winnerPic} class="rounded-circle img-fluid"/><h1>${winnerName}</h1></div>
        <div><img src="../pics/shaking_hands.png"/><h1>${addingBidd}$</h1></div>
        <div><img src=${specialDounerPic} class="rounded-circle img-fluid"/><h1>${specialDounerName}</h1></div></div>`;
        stopInterval(stoperInterval, fakeUsers, timeoutid);
        clapingSound.play()
    }
  }, 1000);
}
function randomTimeOutNum() {
  let num = Math.floor(Math.random() * 1500) + 500;
  return num;
}
function stopInterval(interval, secondInterval, timeoutid) {
  clearInterval(interval);
  clearInterval(secondInterval);
  clearTimeout(timeoutid);
}

// function timerForBiddingStoper(){
// }

theSpecialDouner();

bidders();

function riseBidding(addBidd) {
  let newBidding = biddingMoney + addingBidd;
  biddingMoney += addBidd;
  return newBidding;
}

function biddingBtn() {
  document.getElementById("theBidders").innerHTML = `<div>
    <h1>${riseBidding(
      +document.getElementById("amoutOfRisingBidding").value
    )}$</h1>
    <br/>
    <i class="bi bi-person"></i>
    <h6> YOU ${+document.getElementById("amoutOfRisingBidding")
      .value}$</h6></div><br/>`;
  alertSound.play();
}
sendBidd.addEventListener("click", () => {
  biddingBtn();
});
