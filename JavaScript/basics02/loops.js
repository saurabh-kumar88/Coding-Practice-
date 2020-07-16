const days = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'];


for (let index = 0; index < days.length; index++) {
    var element = days[index];
    console.log(`Day ${index + 1} of week is --- ${element}`)
    
}


console.log(`------reverse week------`)

for (let index = days.length - 1; index >= 0; index--) {
    var element = days[index];
    //console.log(`Day ${index + 1} of week is --- ${element}`)
    
}

