// my Todo function using object

let myTodos = {
    day : "Monday",
    meetings: 0,
    meetDone: 0,

    addMeeting : function(meet=0) {
        this.meetings = this.meetings + meet
       
        //return `You have ${this.meetings} meetings left`
    },

    meetDone : function(meet=0) {
        // check if no meetings left
        if (this.meetings !=0 && this.meetings > meet) {
            this.meetDone = this.meetDone - meet    
        }
        //return `You have completed ${this.meetDone} meetings!`
        
    },

    getSummary : function(){
    
        let meetLeft = this.meetings - this.meetDone;
        return `You have ${this.meetLeft} meetings left`
    },



};



 

 

/*
let resetDay = function(todo){
    todo.meetings = 0;
    todo.meetDone = 0;
}
*/



myTodos.addMeeting(3)
myTodos.meetDone(1)
console.log(myTodos.getSummary())

//console.log(getSummary(myTodos))


/*Methods and this keyword*/



let mycal = {
    add : function(num1, num2){
        return `sum of ${num1} and ${num2} is = ` + (num1 + num2)
    },

    sub : function(num1, num2){
        return `sum of ${num1} and ${num2} is = `+ (num1 - num2)
    },

    this_kw : function(){
        console.log(this);
    }

}

//console.log(mycal.add(10, 10))
//console.log(mycal.sub(25, 15))
//mycal.this_kw()





