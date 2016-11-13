var tries =0;
var ans=Math.floor(Math.random()*100);
var guess, name;
name = prompt("Enter your name:");
for(guess=1;guess!=ans;tries++) {
guess= prompt("Guess the number between 1 and 100. ") ;
if (guess <ans) {alert(" too low") ;} 
if (guess >ans)  {alert ("too high") ;} 
if (guess == 101) {alert ("The secret number is " + ans)};
} 
alert ("Well done " + name + " you got it in " + tries + " tries.") ;

