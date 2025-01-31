const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];
let abv = students.filter((item)=>{
    return(item.score>70)
})
console.log(abv);
let av = students.map((item)=>{
    let grade;
    if(item.score>=90){
        grade="A";
    }
else if(item.score>=80){
    grade="B";
   }
else if(item.score>=70){
    grade="C";
}   
else if(item.score>=60){
    grade="D";
}
else if(item.score>=50){
    grade="E";
}
return{
    grade
}
})
console.log(av);
let sco = students.reduce((num1,num2)=>{
    return num1+num2.score;
},0)
console.log(sco);
let avg = sco/students.length;
console.log(avg);
let avsc = students.filter((item)=>{
    return(item.score>avg)
})
console.log(avsc);



