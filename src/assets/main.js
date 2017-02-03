let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer == "" && attempt == "") {
        setHiddenFields();
    }

    if(!validateInput(input.value))
    {
        return;
    }
    else
    {
        attempt = 1;
    }
}

//implement new functions here
function setHiddenFields() {

    answer = Math.floor(Math.random() * 10000).toString();
    while(answer.length < 4)
    {
        answer = "0"+answer;
    }
    document.getElementById('answer').value = answer;

    attempt = 0;   
    document.getElementById('attempt').value = attempt;  
}

function setMessage(message){
    document.getElementById('message').innerHTML = message;
}

function validateInput(input){
    if (input.length == 4)
    {
        return true;
    }
    else
    {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}