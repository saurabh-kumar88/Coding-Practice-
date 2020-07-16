class User{
    constructor(first_name, last_name, number, isActive){
        this.first_name = first_name
        this.last_name = last_name
        this.number = number
        this.isActive = isActive

        if (this.first_name == undefined || this.last_name == undefined || this.number == undefined || this.isActive == undefined ) {
            throw "parameters missing!"; 
        }
        
    }

    getFullName(){
        return(`full name : ${this.first_name} ${this.last_name}`)

    }

    editName(newName){
        // Updating user name
        const New_name = newName.split(' ');
        console.log(New_name)
        if (New_name.length < 2 || New_name.length > 2 ) {
            throw "Either space is missing between first name and last name  or full name is too long";
        }else{
            this.first_name = New_name[0]
            this.last_name =  New_name[1]

            // Assignment : take middle name
            
            // console.log("First Name : ", New_name[0]);
            // const lastName = " ";
            // for (let index = 1; index < New_name.length; index++) {
            //     console.log(lastName[index])
            //     //lastName.concat(New_name[index]);
            // }
            // console.log(lastName)    
        }
        

    }
    
}

const jhon = new User(45, 'smith', 45, true )
//const sam = new User()

//console.log(jhon);
//console.log(jhon.getFullName() )
// jhon.editName("Ram prakash")
// console.log(jhon.getFullName() )


/** Class inheritance */
class teacher extends User{
    
    constructor(first_name, last_name, number, isActive, subject){
        super(first_name, last_name, number, isActive)
        this.subject = subject
    }
    // method overloading
    getFullName(){
        return `my full name is : ${(this.first_name).toUpperCase()} ${(this.last_name).toUpperCase()}`

    }
}

const Jack = new teacher('Samuel', 'Jackson', 52, true, 'python')
//console.log(Jack.getFullName() )
console.log(Jack.getFullName() )


