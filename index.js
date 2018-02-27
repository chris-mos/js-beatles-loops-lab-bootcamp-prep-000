function theBeatlesPlay(musicians,instruments){
  var word = [];
  for (var i = 0; i < musicians.length; i++){
    word.push(musicians[i] + ' plays ' + instruments[i])
  }
  return word
}
