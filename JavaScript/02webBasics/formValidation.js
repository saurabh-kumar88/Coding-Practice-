
function advance_form_validation(){
    
    

    document.querySelector('.myForm').addEventListener('submit', (event)=>{
        
        event.preventDefault();
        
        let first_name = event.target.fName.value;
        event.target.fName.value = '';
        let last_name = event.target.lName.value;
        event.target.lName.value = '';
        let email = event.target.email.value;
        event.target.email.value = '';

        check_first_name();
        check_last_name();
        check_password();
        //verify_email();
        // console.log(first_name)
        // console.log(last_name)
        // console.log(email)

        

    }, false)
    
}

function check_first_name(){
    document.querySelector('#fName').addEventListener('input', (event)=>{
    const input_data = (event.target.value).trim(); 
    if ( check_for_special_chars(input_data)) {
        window.alert("Special characters are not allowed")}
    
    },false)
}

function check_last_name(){
    document.querySelector('#lName').addEventListener('input', (event)=>{
    const input_data = (event.target.value).trim(); 
    if ( check_for_special_chars(input_data)) {
        window.alert("Special characters are not allowed")}
    },false)
}

function check_password(){
    const special_chars = /^[!@#\$%\^\&*\)\(+=._-]+$/g 
    const alphabets_and_numbers = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/g
    
    document.querySelector('#passw').addEventListener('input', (event)=>{
        const passwd = event.target.value;
        if ( (special_chars.test(passwd) && alphabets_and_numbers.test(passwd) && passwd.length > 8 )  ) {
            console.log("")
        }else{
            window.alert("Invalid password")
        }
    // check re-type password
    document.querySelector('#re-passw').addEventListener('input', (event)=>{
        const re_passwd = event.target.value;
        if (re_passwd != passwd) {
            window.alert("password does not match!")
        }
    })       
})
    

     
        
    
};

function check_for_special_chars(input_string){
    const special_chars = /^[!@#\$%\^\&*\)\(+=._-]+$/g 
    const alphabets_and_numbers = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/g
    const square_brackets = ['[', ']']
    if ( input_string.match(special_chars) || input_string == square_brackets[0] || input_string == square_brackets[1]  ) {
        return true
    }
    else if(input_string.match( Numbers ) ){
        window.alert("Numbers are not allowed")
    }
    else{
        return false
    }
};

function verify_email(email){
    const sub_domain = '.com'
    if ( email.slice(email.length - 4) !== ".com" ) {
        //        
    }

    // send mail to verify the email address


};
 