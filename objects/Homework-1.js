console.log("1-Zadaca=================================");
let Animal = {
    name: '',
    kind: '',
    speak: function(message) {
      console.log(`${this.kind} ${this.name} speaks: '${message}'`);
    }
  };
  
 
  Animal.name = prompt(' Name of The Person:');
  Animal.kind = prompt(' Kind of job he works:');
  

  Animal.speak('Hey There'); 




