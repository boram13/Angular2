//condition statemnets allows us to perform different actions based on different conditions

// if/else condition

let age = 18;

if(age >= 18) {
    console.log('You are an adult');
}else{
    console.log('You are not yet an adult');
}

//switch statement - The switch statement in JavaScript is another type of conditional 
//statement that allows you to test a variable against a series of values and execute 
//different blocks of code depending upon the match.

let day = 6;
 
switch (day) {
    case 1:
        console.log("Monday");
    break;

    case 2:
        console.log("Twesday");
    break;

    case 3:
        console.log("Next days");
    break;

    default:
        console.log('Invalid day');
    break;

}