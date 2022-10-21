/*5.1*/
/*addition*/
// var number1 = 25;
// var number2 = 25;

// var result = number1  + number2;
// document.write("The Sum of Two number is " + result);


/*5.2*/ 
/*subtract*/
// var number1 = 30;
// var number2 = 25;

// var result = number1  - number2;
// document.write("The Sum of Two number is " + result);


/*multiple*/
// var number1 = 5;
// var number2 = 6;

// var result = number1  * number2;
// document.write("The Sum of Two number is " + result);

/*divide*/
// var number1 = 20;
// var number2 = 10;

// var result = number1  / number2;
// document.write("The Sum of Two number is " + result);


/*modulus*/
// var number1 = 17%2;     /*modulus is 1 because is divible by 1 and only 17*/
// var number2 = 13%2;     /*modulus is 1 because is divible by 1 and only 17*/
// var number3 = 9%3;      /*modulus is 0 because is divible by 1,3 and 6*/

// var result = number1  + number2 + number3;
// document.write("The Sum of modulus number is " + result);


/*5.3*/
/*a and b*/
// var b;
// var a = "Value after variable declaration is: " + b ;
// document.write(a);


/*c and d*/
// var a = 23;
// var b = "Initial value is : " + a;
// document.write(b);


/*e andf*/
// var a = 5;
// a++;
// var b = "Value after increament is : " + a;
// document.write(b);


/*g and h*/
// var a = 6;
// a += 7;
// var b = "Value after addition is : " + a;
// document.write(b);


/*i and j*/
// var a = 13;
// a--;
// var b = "Value after decreament is : " + a;
// document.write(b);


/*k and l*/
// var a = 6;         
// var b = 3;               /*show reminder after the variable value 3*/
// var c = a%b;
// var d = "The remainder is : " + c;
// document.write(d);


/*5.4*/
// var cost_per_movie = 600;
// var five_ticket_price = cost_per_movie * 5;
// var a = "Total cost to by 5 Tickets to a movie is " + five_ticket_price + " PKR";
// document.write(a);


/*5.5   any nummber given from user */
// var number = (prompt('Enter an integer: '));

// for(i = 1; i <= 10; i++) {
//     var result = i * number;

//     document.write(number + "*" + i + "= " + result + "<br>");
// };


/*only one table number put in code*/
// var a;
// a = 4;
// for(i = 1; i <= 10; i++) {
//     var result = a * i;

//     document.write(a + "*" + i + "= " + result + "<br>");
// };


/*5.6*/
/*celcius  to fahrenheit*/
// var celsius = (prompt('Enter an Celsius Temperature in number: '));
// var fahrenheit =  (celsius * 9/5) + 32;
// document.write( celsius+"<sup>o</sup>C  is  " + fahrenheit + "<sup>o</sup>F");


//
/*fahrenheit to celcius*/
// var fahrenheit = (prompt('Enter an Fahrenheit Temperature in number: '));
// var Celsius =  (fahrenheit - 32) * 5/9;
// document.write(fahrenheit+"<sup>o</sup>F  is  " + Celsius + "<sup>o</sup>C");


/*5.7*/ 
// var number_1 = parseInt(prompt("Enter item number 1 price : "));    /*parseInt is for only number in put*/
// var number_2 = parseInt(prompt("Enter item number 2 price : "));
// var Shiping_charges = 100;
// var total_quantity1 = number_1 * 3;
// var total_quantity2 = number_2 * 7;
// var number = total_quantity1 + total_quantity2 + Shiping_charges;
// document.write("Price of item 1 is " + number_1 + "<br>");
// document.write("Quantity of item 1 is " + 3 + "<br>");
// document.write("Price of item 1 is " + number_2  + "<br>");
// document.write("Quantity of item 2 is " + 7  + "<br>");
// document.write("Shiping charges is " + Shiping_charges  + "<br>");
// document.write("Total cost of your order is " + number);


/*5.7 best structure*/
// var number_1 = parseInt(prompt("Enter item number 1 price : "));    /*parseInt is for only number in put*/
// var number_2 = parseInt(prompt("Enter item number 2 price : "));
// var Shiping_charges = 100;
// var q_1 = parseInt(prompt("quantity of item 1 : "));     /*any quantity given*/
// var q_2 = parseInt(prompt("quantity of item 2 : "));
// var total_quantity1 = number_1 * q_1;
// var total_quantity2 = number_2 * q_2;
// var number = total_quantity1 + total_quantity2 + Shiping_charges;
// document.write("Price of item 1 is " + number_1 + "<br>");
// document.write("Quantity of item 1 is " + q_1 + "<br>");
// document.write("Price of item 1 is " + number_2  + "<br>");
// document.write("Quantity of item 2 is " + q_2  + "<br>");
// document.write("Shiping charges is " + Shiping_charges  + "<br>");
// document.write("Total cost of your order is " + number);


/*5.8*/
// document.write("<h1>Marks Sheet</h1>" + "<br>");

// var total_marks = parseInt(prompt("Enter the total number : "));
// var obtained_marks = parseInt(prompt("Enter the obtained number : "));
// var percentage = ( obtained_marks / total_marks ) * 100 ;
// document.write("Total Marks: " + total_marks + "<br>");
// document.write("Marks Obtained: " + obtained_marks + "<br>");
// document.write("Percentage: " + percentage);


/*5.9*/
/*find the total amount of dollar and riyal and change into pkr*/

// document.write("<h1>Currency in PKR</h1>" + "<br>");
// var dollar = parseInt(prompt("Enter the amount of US Dollar : "));
// var saudi_riyal = parseInt(prompt("Enter the amount of Saudi_Riyal : "));
// var dollar_rate = prompt("Enter the current Dollar rate: ");
// var Saudi_Riyal_rate = prompt("Enter the current Saudi Riyal rate: ");
// var dollar_pkr = dollar * dollar_rate;
// var riyal_pkr = saudi_riyal * Saudi_Riyal_rate;
// var pkr = dollar_pkr + riyal_pkr;
// document.write("Total Curreny in PKR: " + pkr);


/*5.10*/
// var number = parseInt(prompt("Enter your number : " ));
// var adder = number + 5;
// var multiplies = adder * 10;
// var divides = multiplies / 2;
// document.write("result : " + divides);


/*5.11*/
// var current_year = parseInt(prompt("Enter the current year "));
// var birth_year = parseInt(prompt("Enter the birth year "));
// var age = current_year - birth_year;
// document.write("The current year is : " + current_year + "<br>");
// document.write("The birth year is : " + birth_year + "<br>");
// document.write("Your age is : " + age + "<br>");


/*5.12*/
//
//


/*5.13*/
// var favorite_snake = prompt("Enter your favorite Snakes : ");
// var current_age = parseInt(prompt("Enter your current age : "));
// var maxi_age = parseInt(prompt("Enter your maximum age : "));
// var per_day_snake = parseInt(prompt("Enter per day snakes : " ));
// var maximum_age = maxi_age = 65; 
// var total_snakes_in_life = (maximum_age - current_age) * per_day_snake;
// document.write("favorite snake : " + favorite_snake + "<br>");
// document.write("current age : " + current_age + "<br>");
// document.write("Estimated Maximum Age : " + maximum_age + "<br>");
// document.write("Amount of snakes per day : " + per_day_snake + "<br>");
// document.write("you will need " + total_snakes_in_life + " "+ favorite_snake + " to last you until the old age of " + maximum_age);


