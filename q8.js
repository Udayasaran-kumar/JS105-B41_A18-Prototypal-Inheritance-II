class Book{
  constructor(title,author,isAvailable){
    this.title=title;
    this.author=author;
    this.isAvailable=isAvailable;
  }
 }
 class Member {
  constructor(name){
    this.name=name;
    this.borrowedbooks=[];
    
  }
 }
Member.prototype.borrowBook= function(Book){
    if(Book.isAvailable==true){
      Book.isAvailable=false;
      this.borrowedbooks.push(Book);
    }else if(Book.isAvailable==false){
      console.log("Book is already borrowed");
    }else if(this.borrowedbooks.length>3){
      console.log("Borrower can borrow no more than 3 Books at a time");
    }
    
  }
  Member.prototype.borrowBook= function(Book,type){
    if(type=="premium"){
      console.log("Premium Books Available")
    }
  }
