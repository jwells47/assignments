//javascript file
var text="";
//var i=0;
/* FOR LOOP*/

/*for (var i = 2; i <= 15; i++) {
   text += "The number is " + i + "\n";
}*/

/* for in loop*/
/*var students = new Array("Gabriel", "Yohani", "Tyler","John", "Michael", "Giang");
var x;
for (x in students) {
       text += students[x] + "\n";
}*/

/* while loop*/
/*var i=0;
while (i < 5) {
   text += "The number is " + i + "\n";
    i++;
}*/

/*do while loop*/
var i=0;
/*do {
    text += "The number is " + i + "\n";
}
while (1 < 10);*/

/*var number = 1;
var sum = 0;
while(true)
{
       sum += number;
       
       if (number == 5){
           break;
       }
       number++;
       
}*/
for (i = 1; i<=10; i++)
{
    if ((i % 2) != 0) {
        continue;
        
    }



   console.log(i);
}
   
   