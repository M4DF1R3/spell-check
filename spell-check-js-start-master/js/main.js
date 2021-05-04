// Spell Check Start Code

// Global Variables
let dictionary = [];
let aliceWords = [];


// Load Data Files into Global Variables
loadDictionary();
loadAliceText();

// HTML Elements


// Event Listeners
document.getElementById("submit-dict").addEventListener("click", searchDict);
document.getElementById("submit-alice").addEventListener("click", searchAlice);



function searchDict() {
    let startTime = performance.now();

    let userWord = document.getElementById("word").value;
    userWord = userWord.toLowerCase();
    // Get user Search Input
    let type = document.getElementById("algorithm-search").value;

    if (type == "linearSearch") {
        arrayIndex  = linearSearch(dictionary, userWord);
        if (arrayIndex == -1) {
            document.getElementById("resultsdict").innerHTML = "Linear Search: " + userWord + " is not in the dictionary."
        } else {
            document.getElementById("resultsdict").innerHTML = "Linear Search: " + userWord + " is in the dictionary at " + arrayIndex + ".";
        }
    } else {
        arrayIndex = binarySearch(dictionary, userWord);
        console.log(arrayIndex)
        if (arrayIndex == -1) {
            document.getElementById("resultsdict").innerHTML = "Binary Search: " + userWord + " is not in the dictionary.";
        } else {
            document.getElementById("resultsdict").innerHTML = "Binary Search: " + userWord + " is in the dictionary at position " + arrayIndex + ".";
        }
    }
    let endTime = performance.now();
    document.getElementById("timedict").innerHTML = endTime - startTime +" ms";
}

function searchAlice() {
    let startTime = performance.now();
    let type = document.getElementById("algorithm-check").value;
    if (type == "linearCheck") {
        let matches = 0;
        for (let x = 0; x < aliceWords.length; x++) {
            if (linearSearch(dictionary, aliceWords[x].toLowerCase()) == -1) {
                matches++;
                console.log(`${aliceWords[x].toLowerCase()} is NOT in the dictionary.`);
            }
        }
        document.getElementById("resultsalice").innerHTML = matches + " words not found in the dictionary.";
    } else {
        let matches = 0;
        for (let x = 0; x < aliceWords.length; x++) {
            if (binarySearch(dictionary, aliceWords[x].toLowerCase()) == -1) {
                matches++;
                console.log(`${aliceWords[x].toLowerCase()} is NOT in the dictionary.`);
            }
        }
        document.getElementById("resultsalice").innerHTML = matches + " words not found in the dictionary.";
    }
    let endTime = performance.now();
    document.getElementById("timealice").innerHTML = endTime - startTime +" ms";
}

function linearSearch(anArray, item) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            return i;
        }
    }
    // Without Finding an Item
    return -1;
}

function binarySearch(anArray, item) {
    let upperindex = anArray.length - 1;
    let lowerindex = 0;
    while (upperindex >= lowerindex) {
        let middleindex = Math.floor((lowerindex + upperindex)/2)
        if (anArray[middleindex] === item) {
            return middleindex;
        } else if (item > anArray[middleindex]) {
            lowerindex = middleindex + 1;
        } else if(item < anArray[middleindex]) {
            upperindex = middleindex - 1;
        }
    }
    // Without Finding an Item
    return -1;
}





// NOTE: Remember that the dictionary is all lowercase words
// So when checking if a word is in the dictionary, convert the word to lowercase
// Example: let index = linearSearch(dictionary, word.toLowerCase())