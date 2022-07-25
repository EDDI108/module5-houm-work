let nomer = +prompt("Введите число");
if(typeof nomer === "number" && !Number.isNaN(nomer)) {
  if ( nomer %2 === 0) {
    console.log("это четное число");
  }  else {
   console.log("Это нечетное число"); } 
}
else  {
  console.log ("Ууууууупс, кажется, вы ошиблись");
}