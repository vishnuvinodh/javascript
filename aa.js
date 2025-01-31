let sr=[6,0,7,1,0,9,4];
console.log(sr);
let conut=0;
for(let i=0;i<sr.length;i++)
{
    if(sr[i]===0)
    {
        sr.splice(i,1);
        conut+=1;
    }
    
    

}
console.log(sr);
sr.push(0,0);
console.log(sr);


