// filter 'b' from arr
var arr = ['a', 'b', 'c', 'a', 'b']
var arr2 = [12,23,65,48,94,3,-95,64,53,-18]

let brr = arr.filter(removeThis)

let brr2 = arr2.filter(function(x,index,arr2){
  return x > 0;
});


function removeThis(item){
    if (item=='b'){
      return false
    }
    else{
      return true
    }
}


// console.log( brr )
console.log(brr2)