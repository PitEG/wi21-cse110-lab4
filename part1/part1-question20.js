function tick() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

let d = new Date();
var timeoutID = setInterval(tick, 1000);