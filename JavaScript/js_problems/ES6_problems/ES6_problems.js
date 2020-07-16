

/** Note: Javascript converts elements into UTF-16 chars and sorting is performed on UTF-16 values */
/** so it may produce incorrect values for array of number --- thats why we use comparators */ 


var points = [40, 100, 1, 5, 25, 10];
// ascending order
points.sort(function(a, b){return a - b});
// console.log(points)

//descending order
points.sort( (a,b)=>{return b-a} )
// console.log(points)

var cooridnates = [[1,3],[-2,2]];

function min_distance(a){
  return (a[0]*a[0] + a[1]*a[1]);
}

cooridnates.sort((x,y)=> ( min_distance(x) - min_distance(y) )).slice(0,1);

console.log(cooridnates)