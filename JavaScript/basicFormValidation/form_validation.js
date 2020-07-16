function formValidation() {
    
  /** first name and last name validation */
    
    document.querySelector('.myForm').addEventListener('submit', (event)=>{
        
    
    
    let first_name = event.target.fName.value;
    // event.target.fName.value = '';
    let last_name = event.target.lName.value;
    // event.target.lName.value = '';
   
    if (check_for_special_chars(first_name)==true ){
      window.alert("invalid first name")
    } else if( check_for_special_chars(first_name) ){
      window.alert("invalid last name")  
    } else{
      event.preventDefault();
      event.target.fName.value = '';
      event.target.lName.value = '';
    }

    console.log(first_name.trim())
    console.log(last_name.trim())
   
  }, false)

}; 

/** check special symbols and numerical inputs */
  function check_for_special_chars(input_string){
    const special_chars = /^[!@#\$%\^\&*\)\(+=._-]+$/g 
    const alphabets_and_numbers = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/g
    const numericals = /^[0-9]+$/g
    const square_brackets = ['[', ']']
    if ( input_string.match(special_chars) || input_string == square_brackets[0] || input_string == square_brackets[1] || input_string.match(numericals) ) {
        return true
    }
    
};