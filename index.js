function theBeatlesPlay(musicians,instruments){
  var word = [];
  for (var i = 0; i < musicians.length; i++){
    word.push(musicians[i] + ' plays ' + instruments[i])
  }
  return word
}
function johnLennonFacts(){
  facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var newFacts = []
var i = 0 
while( i<facts.length){
newFacts.push(facts[i]+'!!!')
i++
}
return newFacts
}

