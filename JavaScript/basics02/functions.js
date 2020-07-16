let greeting_message = function(name){
    console.log(`Greeting massage for ${name}`)
    console.log(`Good morning ${name}`);
}


let full_name = function(first_name, last_name){
    console.log(`Welcome to my website`)
    console.log(`Happy to have you, ${first_name} ${last_name}`);
}

//greeting_message(name="saurabh")
//full_name("saurabh","kumar")

/* return a value */

let myadder = function(a, b){
    Sum = a + b;
    return Sum
}

let result  = myadder(10, 23)
//console.log(result)
//console.log(myadder(10,56))


let myMultiplier = function(num1, num2) {
    return (num1 * num2 );

};
//console.log(myMultiplier(10, 10));

//default valuse in js is 'undefined'

let guestUser = function(name='user', courseCount){
    return `Hello ${name}, name of your course  count is ${courseCount}`;

}
console.log( guestUser(name='saurabh') )






