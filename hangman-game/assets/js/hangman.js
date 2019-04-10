// create an array of words
const words = ["eagles", "rams", "broncos", "saints", "chargers", "raiders", "49ers"];
// choose word randomly 
let randomNumber = math.floor(math.random() *words.length);
let choosenWord = word[randomNumber];
let rightWord = [];
let wrongWord = [];
let underScores = [];

//dom manipulation
let docUnderscore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("RightGuess");
let docWrongGuess = document.getElementsByClassName("WrongGuess");


//Main
//====================================================

// create underScores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i< choosenWord.length; i++){
        underScores.push("_");
    
    }
    return underScores;
}

console.log(generateUnderscore());
// get users guess
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// if users guess is right    
    if(choosenWord.indexOf(keyword) > -1){
    //add to right word array
         rightWord.push(keyword);
         
    //replace underscore with right letter
        underScores[choosenWord.indexOf(keyword)] = keyword;
        docUnderscore[0].innerHTML = underScores.join("");
        docRightGuess[0].innerHTML = rightWord.join("");
    //check to see if user word matches guess
        if(underScores.join("") === choosenWord){
            alert("You Win!");
        }
    //add to wrong word array
    else {
        wrongWord.push(keyword);
    }
});
// check if guess is right
// if right push to right array
// if wrong to push wrong array
