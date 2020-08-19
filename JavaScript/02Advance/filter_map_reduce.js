


// create filtered array of non-zero numeric id's

let json_arr = [

  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }

]

function filterIds(item){

	if( Number.isFinite(item.id) && item.id !== 0){
		return true;
	}

}


console.log(json_arr.filter(filterIds))



function isEven(num)
{
	if(num % 2 == 0)
	{
		return true;
	}
	else{
		return false;
	}
}

const arr = [45, 100, 50, -9]
let arr2 = arr.filter(isEven);

// console.log(arr2) 