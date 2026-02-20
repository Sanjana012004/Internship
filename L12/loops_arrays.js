//for loop
for(i=10;i>0;i--)
{
 console.log(i);
}  

var i;
for(i=1; i<=20; i++)
{
  if(i%2)
  {
    console.log(i+" Odd");
  }
  else
  {
    console.log(i+" Even");
  }
}

//length of array and elements
var fruits = ["Apple","Orange","Grape","Lemon"];
var i=0;
while(i<fruits.length)
{
  console.log(fruits[i])
  i++;
}

//do-while
do
{
  alert("You must be atleast 1.2 m in height to join this ride.");
  var userHeight = prompt("Please enter your height.");
}while(userHeight<1.2)
{
  alert("Yay!! Enjoy the ride.");
}
