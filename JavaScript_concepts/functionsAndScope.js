
function addNumbers(num1, num2){

    let sum=num1 + num2;
    return sum
}
console.log(addNumbers(3,4))

//scope

let globalVariable = 'i am a global variable';

function printBothVariables(){
    let localVariable = " i am a local variable";

    console.log(globalVariable);
    console.log(localVariable);
}

printBothVariables()
console.log(globalVariable);
console.log(localVariable); //this variable cant be accessed outside of the scope 