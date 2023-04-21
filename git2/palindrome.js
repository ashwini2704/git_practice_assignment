let a="namana" 
let b=""

for(let i=a.length-1; i>=0; i--) {
  b+= a[i];
}
if(b == a){
  console.log("Palindrome");
}else{
  console.log("Not Palindrome");
}