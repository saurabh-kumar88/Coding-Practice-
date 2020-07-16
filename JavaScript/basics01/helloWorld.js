let string = "todo 7";

// if ( string.slice(0,4) == "todo" ) {
//     console.log(true);
//     console.log(string.fontcolor('red'))
// }


// let s = ("Pleas#e yes\nmake my day@").trim()
// let arr = []
// const pattern  = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_']
// for (let index = 0; index < s.length; index++) {
//     arr.unshift(s[index]);
// }
//     for (let index = 0; index < pattern.length; index++) {
        
//         if (arr.includes(pattern[index]) ) {
//             console.log(`match found ${pattern[index]}`)
//             break
//         }
        
//     }


// let string2 = "Pleas#e yes\nmake my day@";
// const pattern  = /[ ! @ # $ % ^ & * ) ( _ + = } / { | ? > < . , ~ ` ]/g;
// if (string2.match(pattern)) {
//     console.log("match found")
// }else{
//     console.log('No match found')
// }


// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
//   {
//     return (true)
//   }
//     console.log("You have entered an invalid email address!")
//     return (false)
// }


// console.log(  ValidateEmail("ykings.saurabh@gmail.com")  )

/** JS Regexp */

var testString = "Learning regexp in javascript"
var patt = /javascript/i
var patt2 = /(red|green|blue)/g
var patt3 = /\d/g
// if (testString.match(patt)) {
//     console.log(true)
// }

// const res = testString.replace(patt, "python")
// console.log(res)

// at least one upper case --> (?=.*[A-Z])
// at least one lower case --> (?=.*[a-z])
// at least one numbers --> (?.=*\d)
// at least one special symbol -->
// minimum length = 8

/** syntax for regexp : /^ write pattern here +$/g */
var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g



const special_chars = /^[!@#\$%\^\&*\)\(+=._-]+$/g 
const alphabates_and_numbers = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/g
string = "EO@4da"

if ( regex.test(string) && number_alphabates.test(string) && string.length > 8 )  {
    console.log(string.length)    
}



