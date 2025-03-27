function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openSourcesPopup() {
  document.getElementById("sources-popup").style.display = "block";
}

function closeSourcesPopup() {
  document.getElementById("sources-popup").style.display = "none";
}

window.onclick = function(event) {
  var popup = document.getElementById("popup");
  var sourcesPopup = document.getElementById("sources-popup");
  
  if (event.target == popup) {
    popup.style.display = "none";
  }
  
  if (event.target == sourcesPopup) {
    sourcesPopup.style.display = "none";
  }
}