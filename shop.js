function Show() {
  let Snickers = document.getElementById("SnickersId").value;
  let MilkyWay = document.getElementById("MilkyWayId").value;
  let Mars = document.getElementById("MarsId").value;
  let Twixx = document.getElementById("TwixxsId").value;
  let cost = 0;
  cost = Snickers * 1700 + MilkyWay * 1800 + Mars * 1900 + Twixx * 2000;
  document.getElementById("result").innerHTML = cost;
}
