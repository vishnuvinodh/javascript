let n=7;
result="";
for(let i=1;i<n;i++)
{
    result +="*".repeat(i)+"\n";
}
for (let i = n - 1; i >= 1; i--) 
{
    result += "*".repeat(i) + "\n";
}
console.log(result);
