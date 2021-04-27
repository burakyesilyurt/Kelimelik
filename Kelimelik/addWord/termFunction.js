let words = []
words.push({
  english:"Hi",
  turkish:"Merhaba"
},
{
  english:"Please click the Add Word for adding a new word",
  turkish:"Lütfen yeni kelime eklemek için Add Word'e basın "
})

let termJSON = localStorage.getItem("words")
if(termJSON !== null){
  words = JSON.parse(termJSON)
}


document.querySelector("#inputSelector").addEventListener("submit", function(e){
  e.preventDefault()
  console.log(e.target.elements.turkish.value)
  words.push({
    english:e.target.elements.english.value,
    turkish:e.target.elements.turkish.value
  })
  localStorage.setItem("words", JSON.stringify(words))
  e.target.elements.english.value = ""
  e.target.elements.turkish.value = ""
})
