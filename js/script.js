function autoResizeDiv() {
  document.getElementById('wrapper').style.height = window.innerHeight + 'px';
}
window.onresize = autoResizeDiv;
autoResizeDiv();
