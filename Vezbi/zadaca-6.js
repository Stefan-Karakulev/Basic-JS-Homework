function Average(niza) {
    let sum = 0;
  
    
    for (let i = 0; i < niza.length; i++) {
      sum += niza[i];
     }
  
    
 let average = sum / niza.length;
  

     if (average >= 8) {
       return "You have passed the semester.";
    } else {
       return "Sorry, you have not passed the semester.";
     }
  }
  
  
   let Grades = [10, 6, 10, 9, 6];

  
   result = Average(Grades);
  console.log(result);

