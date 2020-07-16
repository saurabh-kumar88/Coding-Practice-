/**Map() data structure and its iteration using forofloop and some other techniques */

var user1 = {
    name: 'sam fisher',
    age: 26,
    isActive: true 

}


var user2 = {
    name: 'prashant verma',
    age: 32,
    isActive: true 

}

var user3 = {
    name: 'anikeit rohtagi',
    age: 29,
    isActive: false 

}

/** Map() function allows you to map an object with some key and returns a iterable*/
var users  = new Map()

users.set('sam', user1)
users.set('prashant', user2)
users.set('anikeit', user3)

console.log(users.keys());

//console.log(users.size);

//console.log(users.get('sam').isActive);
//console.log(users.keys());

// iterating using forofloop or iterators

// for (const [key, value] of users.entries()) {
//     console.log("name ==> " + value.name + " " + typeof(value) );
    
// }


// iterating using forEach() method
//users.forEach(elem => console.log(elem.name + " " + elem.age));


// array of arrays
var arrOfArr = [['one', '1'], ['two', '2'], ['three', '3']]
var newmap = new Map(arrOfArr)
//console.log(newmap);


// for (const [key, value] of newmap.entries()) {
//     console.log(key);
// }

//newmap.forEach(element => console.log(element.entries() ));

//1.Map does not contain any key by default
var testMap = new Map()
//console.log(testMap.keys());

var test = {
    "name" : "saurabh kumar",
    "age" : 31,
    "isActive" : true

    
}

//console.log(test.isActive)

// var func_as_key = function(){
//     console.log('Hello world')
// };

// // we can assign anything to key in Map, even a function
// testMap.set(func_as_key , test )

// console.log(testMap.keys());

















