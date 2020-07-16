// Durations are in minutes
 
var tasks = [
 
    {
   
      'name'     : 'Write for Envato Tuts+',
   
      'duration' : 120
   
    },
   
    {
   
      'name'     : 'Work out',
   
      'duration' : 60
   
    },
   
    {
   
      'name'     : 'Procrastinate on Duolingo',
   
      'duration' : 240
   
    }
   
  ];


  var Names = [];

  var marks = [45,121,46,179,63,12,31];

  // for (let index = 0; index < tasks.length; index++) {
  //     Names.push(tasks[index].name)
      
  // }

  tasks.forEach(element => {
    Names.push(element.name)
  });

  // console.log( Names )

  // using map() function

//  var task_names = tasks.map(function(task){
//     return task.name;
//  });

 var task_names = tasks.map((task)=>task.name);


//  console.log( task_names )

function cal_square(num){
  return (num * num)
};


var total_marks = marks.map( function(n, index, marks) {
  return n * n;
})

// console.log( total_marks )


/** reduce() */

var Sum = marks.reduce( function(previous, current){
    return previous + current;
}, 1)

// console.log( Sum )


/** filter() */


var Filter_marks = marks.filter( function(x, index, marks){
  return x >= 100; //filter marks greater then, equal to 100
});

console.log( Filter_marks )









































