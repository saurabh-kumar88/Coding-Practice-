/*  Search from array of objects in javascript  */

//const myTodos = ['Go to bank', 'pay bills', 'bought some groceries', 'prepare dinner'];

//console.log(myTodos.indexOf('ryan'));
//console.log(myTodos[myTodos.length - 1]);

let newTodos = [{
    title : "Go to bank",
    isDone : true,
    },

    {
    title : "pay bills",
    isDone : false,
    },

    {
    title : "bought some groceries",
    isDone : false,
    },

    {
        title : "prepare dinner",
        isDone : false,
    }]

// const index = newTodos.findIndex(function(todo, index){
//     return todo.title === "pay bills";
// })

//console.log(index);

// // Method 1 : using Array.findIndex()
 
// const findTod = function(todoName, title){
//     const index = todoName.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase();
//     })
//     return todoName[index].isDone
// }

//  console.log(findTod(newTodos, "prepare dinner"));


// Method 2 using Array.find()

const findTod2 = function(todoName, title){
        const titleReturned = todoName.find(function(todo, index){
            return todo.title.toLowerCase() === title.toLowerCase();
        })
        return titleReturned.isDone
    };

console.log(findTod2(newTodos, "pay bills"));

















