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

const deleteWord = "Please click the Add Word for adding a new word"
if(words.length === 3 && words[1].english.includes(deleteWord)){
  words.splice(1,1)
}


document.querySelector("#inputSelector").addEventListener("submit", function(e){
  e.preventDefault()
  words.push({
    english:e.target.elements.english.value,
    turkish:e.target.elements.turkish.value
  })
  localStorage.setItem("words", JSON.stringify(words))
  e.target.elements.english.value = ""
  e.target.elements.turkish.value = ""
})
