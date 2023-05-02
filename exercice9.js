var monParagraphe = document.getElementById("monParagraphe");

var styleInitial = monParagraphe.getAttribute("style");

monParagraphe.addEventListener("click", function() {
  monParagraphe.style.textAlign = "center";
  monParagraphe.style.width = "100%";
});

monParagraphe.addEventListener("dblclick", function() {
  monParagraphe.setAttribute("style", styleInitial);
});