const btn = document.getElementById("btn");

function bgcolor() {
  let change = "#";
  const color = change+Math.floor(Math.random()*1000000);
  document.body.style.backgroundColor = color;
  btn.innerHTML = color;
}