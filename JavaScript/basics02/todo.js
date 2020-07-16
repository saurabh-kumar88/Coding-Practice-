// simple Todo application

const myTasks = []
myTasks.push('Prepare for interview questions')
myTasks.push('Learn and practice more algorithms')
myTasks.push('Start new projects')
myTasks.push('Learn javascript as second language')
myTasks.push('Learn machine learning and data science')
//console.log(myTasks)

myTasks.forEach(function(todo, i){
    console.log(`Your task number------> ${i + 1} is ${todo}`);

})
