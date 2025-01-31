function sum(arr)
{
    if(arr.length==0)
    {
        return null;
    }
    let val=0;
    for(let i=0;i<arr.length;i++)
    {
        val=val+arr[i];
    }
    return val;
}
console.log(sum([4,6,3,7,2]));
