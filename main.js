const y = document.getElementById("btn");
function bgcolor() {
  let c= "#";
  const color = c+Math.floor(Math.random()*1000000);
  document.body.style.backgroundColor = color;
  y.innerHTML = color;
}