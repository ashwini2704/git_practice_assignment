let a="character";
let b=""
for(let i=0; i<(a.length-1); i++) {
  if(a[i+1]=="a" || a[i+1]=="e" || a[i+1]=="i" || a[i+1]=="o" || a[i+1]=="u") {
    b=b+a[i]
  }
}
console.log(b)