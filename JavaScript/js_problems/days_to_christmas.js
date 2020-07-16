// Calculate days left for christmas

function days_to_christmas(){

	today = new Date()

	christmas = new Date(`${today.getFullYear()}-12-25`)
	current_date = new Date(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`)
	
	return Math.round( (christmas - current_date) / (1000 * 3600 * 24))

}

console.log( days_to_christmas() )