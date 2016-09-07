function countLetters(string) {
  var characters = {
  };
  var splitter = string.split(" ");
  var joinedLower = splitter.join("").toLowerCase();
  var splitter2 = joinedLower.split("");

  for (var i = 0; i < splitter2.length; i++) {
    if(characters.hasOwnProperty(splitter2[i])) {
      characters[splitter2[i]].push(i);
    }
    else {
      characters[splitter2[i]] = [i];
    }
  }
  return characters;
}

console.log(countLetters("LIGHT HOUSE"));
