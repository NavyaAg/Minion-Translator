var translateButton = document.querySelector("button");
var inputText = document.querySelector("textarea");
var outputText = document.querySelector("#outputText");
// making button respond to click
translateButton.addEventListener("click", function() {
   minionTranslator(inputText.value);
})
// url generation
function urlGenerator(text) {
  return ("	https://api.funtranslations.com/translate/minion.json" + "?text=" + text);
}
// fetching api and displaying the result
function minionTranslator(Text) {
  fetch(urlGenerator(Text))
    .then(response => response.json())
    .then(json => outputText.innerText = (json.contents.translated))
}
