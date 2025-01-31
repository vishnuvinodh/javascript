function anagram(w1,w2)
{
  let a= w1.toLowerCase().split('').sort().join('');
  let b=w2.toLowerCase().split('').sort().join('');
  if(a==b)
  {
  return true;
    
  }
  else{
    return false;
    
  }
}
console.log(anagram("help","plhelll"));
