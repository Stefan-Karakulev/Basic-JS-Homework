console.log("2-Zadaca=================================");

let title = prompt("Enter the title of the book:");
let author = prompt("Enter the author of the book:");
let readingStatus = prompt("Have you read the book? (Enter 'true' or 'false')");


let reading = readingStatus === 'true';


let book = {
  title: title,
  author: author,
  reading: reading,


  readingInfo: function() {
    if (this.reading) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `Still need to read '${this.title}' by ${this.author}.`;
    }
  }
};


console.log(book.readingInfo());