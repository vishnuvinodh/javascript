let n=7;
let line="";
for(let i=0;i<n;i++)
{
    for(let j=0;j<=i;j++)
    {
        line+=" ";
    }
    for(let k=0;k<(n-i)*2-1;k++)
    {
        line+="*";
    }
    line+="\n";
}
for(let i=n-1;i>=0;i--)
{
    for(let j=0;j<=i;j++)
    {
        line+=" ";
    }
    for(let k=0;k<(n-i)*2-1;k++)
    {
        line+="*";
    }
    line+="\n";
}
console.log(line);
