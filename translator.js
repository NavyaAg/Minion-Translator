var translate = document.querySelector("button");
var inputText = document.querySelector("textarea");
var outputText = document.querySelector("#outputText");
translate.addEventListener("click", function() {
  var translated = doFetch(inputText.value);
  console.log(inputText.value);
  // outputText.innerText = (translated);
})

// var inputText=document.body.querySelector("textarea");
// console.log(inputText);

function urlGenerator(text) {
  return ("		https://api.funtranslations.com/translate/minion.json" + "?text=" + text);
}

function doFetch(Text) {
  fetch(urlGenerator(Text))
    .then(response => response.json())
    .then(json =>  outputText.innerText= (json.contents.translated))
}
