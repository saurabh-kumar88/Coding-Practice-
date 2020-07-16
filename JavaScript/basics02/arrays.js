const superHeros_DC = ['Superman', 'Batman', 'Wonder woman', 'Green lantern']
//console.log(superHeros_DC[0])
//console.log(" last super hero : " + superHeros_DC[superHeros_DC.length - 1])
//console.log(`we have total of ${superHeros_DC.length} super heroes!`)


//shift() method --> pop top value

//console.log(superHeros_DC[0]);
superHeros_DC.shift();
//console.log(superHeros_DC);

//unshift() method --> push some value at top

superHeros_DC.unshift('Header');
//console.log(superHeros_DC)

// pop() method --> remove last element
superHeros_DC.pop();
//console.log(superHeros_DC);

//push() method --> add element at last
superHeros_DC.push('something');
//console.log(superHeros_DC);

//splice method
console.log(superHeros_DC)
superHeros_DC.splice(2,1, 'Wonder woman');
console.log(superHeros_DC);

