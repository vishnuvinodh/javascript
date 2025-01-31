function plim(word)
{
  let ab=word.split('').reverse().join('');
  if(ab==word)
  {
    return true;
  }
  return false;
}
console.log(plim("abbagg"));
