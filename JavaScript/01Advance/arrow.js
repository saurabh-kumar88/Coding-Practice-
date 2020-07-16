/*Arrow keyword reduces the lenth of code*/ 

// simple function hello greeting functio

const sayHello = function(name){
    return `Hello Mr. ${name} !`
};

//console.log(sayHello("Rahul") );

const sayHello2 = (name) => `Hello Mr. ${name} !`

//console.log(sayHello2("Deepak"));

// const todos = [{
//     title : "Buy Milk and bread",
//     isDone : true,
//     },
//     {
//         title: "Go to gym",
//         isDone : false,
//     },
//      {
//          title : "Get ready for office",
//          isDone : false,
//      }]

//      const dailyTasks = todos.filter( (todo) => todo.isDone === true );

//      console.log(dailyTasks);


// 1.todo with six elements(or objects)
// 2.create a function which return title of tasks only which are not done


const system_design = [
    {
        title : "prepare list of specs",
        isDone : true,
    },
    {
        title : "prepare functional block diagram",
        isDone : true,
    },
    {
        title : "start code block-wise",
        isDone : false,
    },
    {
        title : "Integrate all blocks",
        isDone : false,
    },
    {
        title : "initial testing",
        isDone : true,
    },
    {
        title : "deploy",
        isDone : false,
    },
]


const title_done = system_design.filter( todo => todo.isDone === false)

title_done.forEach(element => console.log(element.title))


let re = new RegExp("/+c/");
let data = 'sdasds+csas';

if (re.test(data)) {
    console.log("Match found");
}









