function hide(element) {
  element.remove();
}

function toggleImage(element) {
  var temp = element.src
  element.src = element.getAttribute('alt-src');
  element.setAttribute('alt-src', temp);
}