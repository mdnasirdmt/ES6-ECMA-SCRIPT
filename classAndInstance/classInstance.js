class Student{
constructor(name,roll,marks,add){

    this.name=name;
    this.roll=roll;
    this.marks=marks;
    this.add=add;
}

    details(){
        console.log(`my is ${this.name} , roll ${this.roll} , marks ${this.marks} , address ${this.add}`)
    }

}

class MbaStudent extends Student{

    constructor(name, roll, marks, add, batch){
        super(name, roll, marks, add);
        this.batch=batch;
    }

    details(){
        console.log(`my is ${this.name} , roll ${this.roll} , marks ${this.marks} , address ${this.add} , batch ${this.batch}`)
    }

}


let ob= new Student("Nasir", 33, 80, "Saharsa");
ob.details();



let mbaob= new MbaStudent("Hussain", 30, 86, "Patna", "2018-2022");
mbaob.details()

