const car={type:"bmw",model:"x5", color:"blue"};
console.log(car);
console.log(car.type);
console.log(car.model);
car.type="mm"
console.log(car);
car.price=150000;
console.log(car);
delete car.type;
console.log(car);
let myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(myObj);

  console.log(myObj.myCars.car1);
  myObj.myCars.car1="s";
  console.log(myObj);
  
  
  