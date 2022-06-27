
function redBg(element){
  var colorValue = document.querySelector('#color').value;
  console.log(colorValue);
  element.style.backgroundColor = colorValue;
  element.style.color = 'white';
}

function hide(element) {
  element.remove();
}

function spideyChange(element) {
  element.src = './images/spidey.webp';
}