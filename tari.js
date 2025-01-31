let n=7;
let line='';
 
for(let i=1;i<n;i++)
{
    for(let j=1;j<(n-i);j++)
    {
        line+="  ";
    }
    for(let k=0;k<=(n-i)*2-1;k++){
          line+="* ";
    }
    line+="\n";
  
}
console.log(line);
