function larg(ar)
{
    if(ar.length==0)
    {
        return null;
    }

    let largest=ar[0];
    
    for(let i=1;i<ar.length;i++)
    {
        if(ar[i]>largest)
        {
            largest=ar[i];
        }
    }
    return largest;
}
console.log(larg([5,6,7,9,1,3]));
