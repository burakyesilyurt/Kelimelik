const word = document.getElementById("word");
const translation = document.getElementById("translation");
const btn = document.getElementById("btn");


let words = [
  {
    english: "Hi",
    turkish: "Merhaba"
  },{
    english: "Ready",
    turkish: "Hazır"
  },{
    english: "Join",
    turkish: "Katılmak"
  }
]

let randomGet;

const wordRandomize = function(){
  let giveNumber = Math.floor((Math.random() * words.length));
  while(giveNumber === randomGet){
     giveNumber = Math.floor((Math.random() * words.length));
     if(giveNumber !== randomGet){
       break
     }
  } return giveNumber
}


btn.addEventListener("click",function(){
  randomGet = wordRandomize()
  word.innerHTML = "<p>" + words[randomGet].turkish + "</p>";
  translation.innerHTML = "<p>" + words[randomGet].english + "</p>";
})

