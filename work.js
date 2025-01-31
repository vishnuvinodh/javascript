function  numb(a,b)
{
   while(b)
   {
    temb=b;
    b=a%temb;
    a=temb;
   }
   return a;
}
console.log(numb(10,6));
