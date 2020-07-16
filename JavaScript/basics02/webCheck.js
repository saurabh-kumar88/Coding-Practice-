// Check new creation rules

let userEmail = 'ykings.saurabh@gmail.com';
let password = '464754045';




let newUser_rulesChecker = function(email, passwd){

    if (email.includes('@') ) {
        //check password rules
        if (passwd.length >=8) {
            console.log("Congratulations");
            console.log("You are registered successfully");
            
        } else {
            console.log(`Error: password must contain at least 8 character!`);
            
        }
        
    } else {
        console.log(`Error: Invalid email ${email}`);
        
    }

}


newUser_rulesChecker(userEmail, password)







