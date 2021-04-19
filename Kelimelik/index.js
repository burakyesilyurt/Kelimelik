const words = document.getElementById("words");
const translation = document.getElementById("translation");

let usedWords =["Hi","Ready","Join"];
let turkishWord = ["Merhaba","Hazır","Katılmak"]

function wordRandomize(wordCard){
  return Math.floor((Math.random() * wordCard));
}

function wordSelector(){

let pickWord = wordRandomize(usedWords.length)

let english = usedWords[pickWord];
let turkish = turkishWord[pickWord];

words.innerHTML="<p>" + english + "</p>";
translation.innerHTML="<p>" + turkish + "</p>";

}




