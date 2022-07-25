let arr = [11,1,1,1,1];
let element = arr[0];
for (item of arr){
  if(item !== element){
    console.log("false");
  }else{
    console.log("true");
  }
}