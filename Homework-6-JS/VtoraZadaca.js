 
 let niza = [2, 7, 12, 21, 29];

 
 let List = document.getElementById("List");


 let sum = 0;
 let listHTML = ''; //Tuka neznam zosto ima brisenje so pomos go resiv ako moze nekoe objasnuvanje...

 
 for (let i = 0; i < niza.length; i++) {
   let number = niza[i];

   
   listHTML += `<li>${number}</li>`;

  
   sum += number;
 }

 
 List.innerHTML = listHTML;

 
 let sumP = document.getElementById("sum");
 sumP.textContent = "Sum of all numbers: " + sum;