let a=3;
let b=6;
try{
    if(typeof a!== "number" || typeof b!=="number")
        {
            throw new Error("not a number");
        }
        let sub=b-a;
        console.log(sub);
    }
catch(err)
{
    console.log(err.message);
    
}