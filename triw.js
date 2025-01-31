let n=10;
let result="";
for(let i=0;i<n;i++)
{
    result += " ".repeat(n - i) + "*".repeat(2 * i + 1) + "\n";
}
for(let i=n-2;i>=0;i--)
{
    result +=" ".repeat(n-i)+"*".repeat(2*i+1)+"\n";
}
console.log(result);
