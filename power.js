function pow(n,p)
{
    let result=1;

    for(let i=0;i<p;i++)
    {
        result *=n;
    }
    return result;
}
console.log(pow(2,3));
