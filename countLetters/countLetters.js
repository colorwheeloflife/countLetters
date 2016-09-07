// takes input string √
// all lower case, and take away spaces √
// split all the characters into array √

// if/else: if exists, add ++1; else, create new key:value.
//



function countLetters(string) {
  var splitter = string.split(" ");
  var joinedLower = splitter.join("").toLowerCase();
  var splitter2 = joinedLower.split("");

  for (var i = 0; i < splitter2.length; i++) {
    if(characters.hasOwnProperty(splitter2[i]) == true) {
      characters[splitter2[i]] += 1;
    }
    else {
      characters[splitter2[i]] = 1;
    }
  }
}

var characters = {
};

countLetters("LIGHT HOUSE");
countLetters("BANANA");

console.log(characters);



