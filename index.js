// classes and constructors 

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayDetails(){
        console.log(`name=`+this.name+" Price="+this.price);
    }
}


const p1=new Product("bag",35);
p1.displayDetails();

const p2= new Product("pen",5);
p2.displayDetails();

