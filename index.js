var flag = false;
var arr = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

var names = ["PlayerA", "PlayerB"];

let element = document.querySelector("#ctn");
element.addEventListener("click", function (event) {
  let targetBtn = document.getElementById(event.target.id);
  let target = event.target.id;
  let f = Math.floor(target / 10);
  let l = target % 10;
  console.log(arr[f][l]);
  //   console.log(l);
  console.log(arr[f][l]);
  if (arr[f][l] === -1) {
    if (flag) {
      targetBtn.innerText = "X";
      arr[f][l] = 1;
      checkWinner(1);
    } else {
      targetBtn.innerText = "0";
      arr[f][l] = 0;
      checkWinner(0);
    }
    flag = !flag;
  }
});

function checkWinner(num) {
  let neg = 0;
  for (let i = 0; i < 3; i++) {
    let cnt1 = 0;
    let cnt2 = 0;
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] == num) cnt1++;
      if (arr[j][i] == num) cnt2++;
      if (arr[i][j] == -1) neg++;
    }
    if (cnt1 == 3 || cnt2 == 3) alert(" Winner " + names[num]);
  }
  if (neg == 0) {
    alert("Match Tie Ho Gya Yaar");
    location.reload(true);
  } else {
    if (arr[0][0] == num && arr[1][1] == num && arr[2][2] == num) {
      alert(" Winner" + names[num]);
      location.reload(true);
    }

    if (arr[0][2] == num && arr[1][1] == num && arr[2][0] == num) {
      alert(" Winner" + names[num]);
      location.reload(true);
    }
  }
}
