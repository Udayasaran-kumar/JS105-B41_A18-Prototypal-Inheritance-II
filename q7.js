class Book{
  constructor(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
  }
 }
Book.prototype.getSummary= function(){
    return(`${this.title} by ${this.author}, published in ${this.year}`);
  }
  let p1= new Book("Prabhakaran","Saran",2024);
console.log(p1.getsummary());
  export {Book};//This in one file1.js


export let bookarr=[new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
  new Book("Moby Wick", "Herman Melville", 1851)];
  //this in one file2.js
 
 
 import * as methods from "./file1.js";
 import * as methods from "./file2.js";
const bookSummaries = bookarr.map(book => book.getSummary());
console.log(bookSummaries);
