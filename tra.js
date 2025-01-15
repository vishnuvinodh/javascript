let a=5;
let b=5;
let c=5;
if(a==b && b==c){
    console.log("Equilateral (all sides are equal)");
}
else if(a==b || b==c || a==c){
    console.log(" Isosceles (two sides are equal)");
}
else{
    console.log("Scalene (all sides are different)");
}