// Simple function which takes marks as input and calculate percentage
// and based on the percentage it will assign grade
//1. input number is a integer and should be in a range of 0-100
//2. calculate percentage and round-off it to zero significant figure
//3. If percentage is between 80 to 100 ---> A+
//4. If percentage is between 70 tp 80  ---> A
//5. If percentage is between 60 to 70  ---> B+
//6. If percentage is between 50 to 60  ---> B
//7. If percentage is between 33 to 50  ---> C
//8  If percentage is between is less then 33 ---> F(Fail)


let gradeGenerator = function(marks, name){
    const totalMarks = 500;
    
    
    if ( Number(marks) === marks && marks % 1 === 0 ) {
        if (marks <=500 && marks > 0){
            //console.log(marks/totalMarks)
           var percentage = ((marks/totalMarks) * 100);
           
           // Assign grades
           if (percentage >= 80 && percentage >=100 ){
               console.log(`${name} got grade -- A+`)
           }else if(percentage >=70 && percentage>=80){
            console.log(`${name} got grade -- A`)
    
           }else if(percentage >=60 && percentage <= 70){
            console.log(`${name} got grade -- B+`)
    
           }else if(percentage >=50 && percentage <=60){
            console.log(`${name} got grade -- B`)
    
           }else if(percentage >=33 && percentage <=50){
            console.log(`${name} got grade -- C`)
    
           }else if(percentage < 33){
            console.log(`${name} got grade -- F`)
    
           }
    
        }else{
            console.log(`Invalid marks ${marks}`);
        }
        
    } else { console.log(`Input error ${marks}, marks should be integer`);
        
    }
    // check if marks are valid
   
    

};

//gradeGenerator(338, 'saurabh');
gradeGenerator(450, 'rahul');
//gradeGenerator(435.5, 'Anikeit');


//console.log(isInt(data));

