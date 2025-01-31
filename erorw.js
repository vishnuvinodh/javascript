let a=10;
let b=5;
try{
    if(typeof a!== "number" || typeof b!=="number")
        {
            throw new Error("not a number");
        }
        if(b===0)
        {
            throw new Error("Please enter a none zero number ");
           
        }
        let sub=b/a;
        console.log(sub);
        
    }

    catch(err)
    {
        console.log(err.message);
        
    }