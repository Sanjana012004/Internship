var mark = prompt("Enter your mark to recieve your grade");

if(mark>=90)
{
  alert("Congrats! You Obtained an A!");
}
else if(mark>=80)
{
  alert("Well done! You obtained a B!");
}
else if(mark>=70)
{
  alert("Not Bad! You Obtained a C!");
}
else if(mark>=60)
{
  alert("Hmm.... You obtained a D. Better Luck Next Time!");
}
else if(mark>=0 && mark<=59)
{
  alert("You can do better than obtaining an F!");
}
else
{
  alert("You have entered an Invalid marks!");
}