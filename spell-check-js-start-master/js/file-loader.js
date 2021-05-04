// File Loader Functions

function loadDictionary() {
  fetch("data-files/dictionary.txt")
    .then((rawData) => rawData.text())
    .then((textData) => {
      dictionary = textData.match(/[\w]+/ig);

      // Output to console to confirm file load
      console.log("dictionary:");
      console.log(dictionary);
    })
}

function loadAliceText() {
  fetch("data-files/AliceInWonderLand.txt")
    .then((rawData) => rawData.text())
    .then((textData) => {
      aliceWords = textData.match(/[\w]+/ig);

      // Output to console to confirm file load
      console.log("aliceWords:")
      console.log(aliceWords);
    })
}