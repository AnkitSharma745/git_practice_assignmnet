let number =23
let count=0
for(let i=1;i<=number;i){
  if(number%i=0){
    count++
  }
}
if(count==0){
  console.log("It is a prime")
}
else{
  console.log("It is not a prime")
}