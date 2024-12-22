class User{
  constructor(name,mail){
    this.name=name;
    this.mail=mail;
    this.getDetails=function(){
      console.log(`Name:${this.name},Email:${this.mail}`);
    }
   }
 }
 class Student extends User {
  constructor(name,mail,studentid){
       super (name,mail);
        this.studentid=studentid;
    this.enroll=function(){
      console.log(`Student ${this.name} has enrolled`);
    }
  }
 }
 class Instructor extends User {
  constructor(name,mail,instructorid){
        super (name,mail);
        this.instructorid=instructorid;
        
    this.assigngrade=function(){
      console.log(`Instructor ${this.name} assigned a grade`);
    }
  }
 }
 let u1=new User("Saran","ssaran3091998@gmail.com");
 u1.getDetails();
 let u2=new Student("Saran","ssaran3091998@gmail.com","fsc105165");
 u2.getDetails();
 u2.enroll();
let u3=new Instructor("Saran","ssaran3091998@gmail.com","fsc105165");
 u3.getDetails();
 u3.assigngrade();
