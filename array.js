let sr=["song1","song2","song3","song4"];
sr.push("song5")
console.log(sr);
sr.pop();
console.log(sr);
let size = sr.length;
console.log(size);

let ar = sr[0];
let br = sr[3];
console.log(ar);
console.log(br);
let st=sr.toString()
console.log(st);
let pr =["song5","song6","song7"]
let main=sr.concat(pr);
console.log(main);
let nx =[[1,2],[3,4],[4,5]];
let fla=nx.flat();
console.log(fla);
console.log(sr);
sr.splice(2,2, "song8","song9");
console.log(sr);
let arr=["orenge","apple","kivi","banana"];
arr.sort();
console.log(arr);
sr.copyWithin(2,0);
console.log(sr);



