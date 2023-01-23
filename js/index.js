// 1-
// var userNumber = window.prompt('Enter Your Number');
// console.log(" The Number is " + userNumber);
// document.getElementById('demo').innerHTML =(" The Number is " + userNumber);

// 2-
// var userNumber = Number(window.prompt('Enter your Number'));
// if(userNumber % 2 == 0){
//     console.log('Yes');
//  document.getElementById('demo').innerHTML ="Yes";
// }else if(userNumber % 2 == 1){
//     console.log('No');
//     document.getElementById('demo').innerHTML ="No";
// }else{
//     console.log('Enter the correct number');
//     console.log('please Enter Number');
// }

// // 3-
// var firstnumber = Number(window.prompt('please Enter first number'));
// var lastnumber = Number(window.prompt('please Enter last number'));
// if (firstnumber > lastnumber){
//     document.getElementById('demo').innerHTML = " The max number is " + firstnumber;
// }else if(firstnumber < lastnumber) {
//     document.getElementById('demo').innerHTML =  " The max number is " + lastnumber;
// }else if(firstnumber == lastnumber){
//     document.getElementById('demo').innerHTML = "you entered the same number";
// }else{
//     document.getElementById('demo')= "please enter correct number";
// }

//4-
    // var firstnumber = Number(window.prompt('please Enter first number'));
    // if(firstnumber > 0){
    //     document.getElementById('demo').innerHTML =("positive");
    // }else if(firstnumber < 0){
    //     document.getElementById('demo').innerHTML = ("negative");
    // }else if(firstnumber == 0){
    //     document.getElementById('demo').innerHTML = ('it is zeroo');
    // }else{
    //     document.getElementById('demo').innerHTML = ('please enter correct number');
    //     }

    //5-
//     var firstNumber = Number(window.prompt('Enter the first number'));
//     var secoundNumber = Number(window.prompt('Enter the secound number'));
//     var lastNumber = Number(window.prompt('Enter third number'));
// if (firstNumber > secoundNumber)
// {
//     document.getElementById('demo').innerHTML = "MaxElement" + firstNumber;
//     document.getElementById('item').innerHTML = "MinElement" + secoundNumber;
// }else if(firstNumber > lastNumber)
// {
//     document.getElementById('demo').innerHTML = "MaxElement" + firstNumber;
//     document.getElementById('item').innerHTML = "MinElement" + lastNumber;
// }else if(secoundNumber > firstNumber)
// {
//     document.getElementById('demo').innerHTML = "MaxElement" + secoundNumber;
//     document.getElementById('item').innerHTML = "MinElement" + firstNumber;
// }else if(secoundNumber > lastNumber){
//     document.getElementById('demo').innerHTML = "MaxElement" + secoundNumber;
//     document.getElementById('item').innerHTML = "MinElement" + lastNumber;
// }else if(lastNumber > firstNumber){
//     document.getElementById('demo').innerHTML = "MaxElement" + lastNumber;
//     document.getElementById('item').innerHTML = "MinElement" + firstNumber;
// }else if(lastNumber > secoundNumber){
//     document.getElementById('demo').innerHTML = "MaxElement" + lastNumber;
//     document.getElementById('item').innerHTML = "MinElement" + secoundNumber;
// }

// else{
//     document.getElementById('demo').innerHTML = ("please Enter  different numbers");
// }

//7-
// var userNumber = Number(window.prompt('Enter your number'));

// if(userNumber % 2 == 0){
//     document.getElementById('demo').innerHTML = ' This number is  Even';
// }else{
//     document.getElementById('demo').innerHTML =  'This number is Odd';
// }


//8-
// var word = window.prompt('Enter your word');

//     if (word == "e"){
//         document.getElementById('demo').innerHTML = 'vowel';
//     }else if (word == "a"){
//         document.getElementById('demo').innerHTML = 'vowel';
//     }else if (word == "i"){
//         document.getElementById('demo').innerHTML = 'vowel';
//     }else if (word == "o"){
//         document.getElementById('demo').innerHTML = 'vowel';
//     }else if (word == "u"){
//         document.getElementById('demo').innerHTML = 'vowel';
//     }
//     else {
//         document.getElementById('demo').innerHTML = 'constant';
//     }

// 9-
//     var userNumber = Number(window.prompt('Enter you number'));
//     for(var i=0; i<=userNumber; i++){
//         document.getElementById('demo').innerHTML +=  " - "  + i ;
//         console.log(i);
// }

// 10-
// var userNumber =Number(window.prompt('enter your Number '));
//  i=userNumber;
// for (i=0;i<12*userNumber;i+=userNumber){
//     document.getElementById('demo').innerHTML += i + " . ";
//     console.log(i);
// }

//11-
// var userNumber = Number(window.prompt('enter your Number '));
// if(userNumber % 2 == 0){
//    for(i=0;i<=userNumber ;i+=2){
//        console.log(i);
//    }
// }else if(userNumber % 2 !== 0){
//     for(i=0; i<=userNumber;i+=2){
//         console.log(i);
//     }
// }


 // 12-
// var userNumber1 = Number(window.prompt('enter first  Number '));
// var userNumber2 = Number(window.prompt('enter last Number '));
// var result = userNumber1 ** userNumber2 ;
// document.getElementById('demo').innerHTML = " The power is " +  result;
// console.log( "The power is  "+   result);

//  12-
// var mathMarks = Number(window.prompt('  1- enter math mark'));
// var ArabicMarks = Number(window.prompt(' 2- enter Arabic mark'));
// var EnglishMarks = Number(window.prompt(' 3- enter English mark'));
// var scienceMarks = Number(window.prompt(' 4- enter science mark'));
// var sportMarks = Number(window.prompt(' 5- enter sport mark'));

// var total = (mathMarks + ArabicMarks + EnglishMarks + scienceMarks + sportMarks);
// var avg = (total/5);
// var percent = (total*100/100);
// document.getElementById('demo').innerHTML =" The total is" + " " +total;
// document.getElementById('item').innerHTML = " The average is" + " " +  avg;
// document.getElementById('sub').innerHTML = "The percent is" + " " + percent + "%";
// console.log( "Total Marks is " +  "" + total);
// console.log("Avreage Marks is" + " " + total/5);
// console.log ( " Percentage is " + total)/100 ;



//13-
//var monthNumber = Number(window.prompt("Enter the month number please"));
// var monthes = ["31 days", "28 days" , "31 days", "30 days" , "31 days", "30 days" ,
//                 "31 days", "31 days" , "30 days", "31 days" , "30 days", "31 days"]; 
// if (monthNumber === 1){
//     console.log( "this month is january it is  " + monthes[0]  ) ;
//     document.getElementById('demo').innerHTML = ( "This month is january it is  " + monthes[0]  ) ;
// }else if (monthNumber === 2){
//     document.getElementById('demo').innerHTML = ( "This month is Febraury it is  " + monthes[1]  ) ;
//     console.log("this month is Febraury it is  " + monthes[1] + " " + "or 29 " );
// }else if (monthNumber === 3){
//     document.getElementById('demo').innerHTML =("this month is March it is  " + monthes[2]);
//     console.log("this month is March it is  " + monthes[2]);
// }else if (monthNumber === 4){
//     document.getElementById('demo').innerHTML =("this month is April it is  " + monthes[3]);
//     console.log("this month is April it is  " + monthes[3]);
// }else if (monthNumber === 5){
//     document.getElementById('demo').innerHTML =("this month is May it is  " + monthes[4]);
//     console.log("this month is May it is  " + monthes[4]);
// }else if (monthNumber === 6){
//     document.getElementById('demo').innerHTML =("this month is Jone it is  " + monthes[5]);
//     console.log("this month is Jone it is  " + monthes[5]);
// }else if (monthNumber === 7){
//     document.getElementById('demo').innerHTML =("this month is July it is  " + monthes[6]);
//     console.log("this month is July it is  " + monthes[6]);
// }else if (monthNumber === 8){
//     document.getElementById('demo').innerHTML =("this month is August it is  " + monthes[7]);
//     console.log("this month is August it is  " + monthes[7]);
// }else if (monthNumber === 9){
//     document.getElementById('demo').innerHTML =("this month is Sebtember it is  " + monthes[8]);
//     console.log("this month is Sebtember it is  " + monthes[8]);
// }else if (monthNumber === 10){
//     console.log("this month is October it is  "+ monthes[9]);
//     document.getElementById('demo').innerHTML = ("this month is October it is  "+ monthes[9]);
// }else if (monthNumber === 11){
//     document.getElementById('demo').innerHTML = ("this month is November it is  " + monthes[10]);
//     console.log("this month is November it is  " + monthes[10]);
// }else if (monthNumber === 12){
//     document.getElementById('demo').innerHTML =("this month is December it is  " + monthes[11]);
//     console.log("this month is December it is  " + monthes[11]);
// }else{
//     document.getElementById('demo').innerHTML =("please enter the month number");
//     console.log("please enter the month number");
// }





// 14
    // var PhysicsMark = Number(window.prompt('enter physicsMark '));
    // var ChemistryMark = Number(window.prompt('enter ChemistryMark '));
    // var BiologyMark = Number(window.prompt('enter BiologyMark '));
    // var MathematicsMark = Number(window.prompt('enter MathematicsMark '));
    // var ComputerMark = Number(window.prompt('enter ComputerMark '));
    // if(PhysicsMark  >=  90){
    //     console.log("PhysicsMark Percentage is ---> " + PhysicsMark + "%" + "   " +  "Grad is A") ;
    // }else if (PhysicsMark >=  80){
    //     console.log("PhysicsMark Percentage is ---> " + PhysicsMark + "%" + "   " + "Grad is B") ;

    // }else if (PhysicsMark >=  70){
    //     console.log("PhysicsMark Percentage is ---> " + PhysicsMark + "%" + "   " + "Grad is C") ;

    // }else if (PhysicsMark >=  60){
    //     console.log("PhysicsMark Percentage is ---> " + PhysicsMark + "%" + "   " + "Grad is D") ;

    // }else if (PhysicsMark >=  40){
    //     console.log("PhysicsMark Percentage is ---> " + PhysicsMark + "%" + "   " + "Grad is E") ;
    // }else if (PhysicsMark <  40){
    //     console.log("PhysicsMark Percentage is ---> " + PhysicsMark + "%" + "   " + "Grad is F") ;
    // }else {
    //     console.log("PhysicsMark please Enter the Number");
    // }

    // if(ChemistryMark >=  90){
    //     console.log("ChemistryMark Percentage is ---> " + ChemistryMark + "%" + "  " + "Grad is A") ;
    // }else if (ChemistryMark >=  80){
    //     console.log("ChemistryMark Percentage is ---> " + ChemistryMark + "%" + "   " + "Grad is B") ;

    // }else if (ChemistryMark >=  70){
    //     console.log("ChemistryMark Percentage is ---> " + ChemistryMark + "%" + "   " + "Grad is C") ;

    // }else if (ChemistryMark >=  60){
    //     console.log("ChemistryMark Percentage is ---> " + PhysicsMark + "%" + "   " + "Grad is D") ;

    // }else if (ChemistryMark >=  40){
    //     console.log("ChemistryMark Percentage is ---> " + ChemistryMark + "%" + "   " + "Grad is E") ;
    // }else if (ChemistryMark <  40){
    //     console.log("ChemistryMark Percentage is ---> " + ChemistryMark + "%" + "   " + "Grad is F") ;
    // }else {
    //     console.log("ChemistryMark please Enter the Number");  
    // }
    // if(BiologyMark >=  90){
    //     console.log("BiologyMark Percentage is ---> " + BiologyMark + "%" + "   " + "Grad is A") ;
    // }else if (BiologyMark >=  80){
    //     console.log("BiologyMark Percentage is ---> " + BiologyMark + "%" + "   " + "Grad is B") ;

    // }else if (BiologyMark >=  70){
    //     console.log("BiologyMark Percentage is ---> " + BiologyMark + "%" + "   " + "Grad is C") ;

    // }else if (BiologyMark >=  60){
    //     console.log("BiologyMark Percentage is ---> " + BiologyMark + "%" + "   " + "Grad is D") ;

    // }else if (BiologyMark >=  40){
    //     console.log("BiologyMark Percentage is ---> " + BiologyMark + "%" + "   " + "Grad is E") ;
    // }else if (BiologyMark <  40){
    //     console.log("BiologyMark Percentage is ---> " + BiologyMark + "%" + "   " + "Grad is F") ;
    // }else {BiologyMark
    //     console.log("please Enter the Number");
    // }


    // if(MathematicsMark >=  90){
    //     console.log("MathematicsMark Percentage is ---> " + MathematicsMark + "%" + "   " + "Grad is A") ;
    // }else if (MathematicsMark >=  80){
    //     console.log("MathematicsMark Percentage is ---> " + MathematicsMark + "%" + "   " + "Grad is B") ;

    // }else if (MathematicsMark >=  70){
    //     console.log("MathematicsMark Percentage is ---> " + MathematicsMark + "%" + "   " + "Grad is C") ;

    // }else if (MathematicsMark >=  60){
    //     console.log("MathematicsMark Percentage is ---> " + MathematicsMark + "%" + "   " + "Grad is D") ;

    // }else if (MathematicsMark >=  40){
    //     console.log("MathematicsMark Percentage is ---> " + MathematicsMark + "%" + "   " + "Grad is E") ;
    // }else if (MathematicsMark <  40){
    //     console.log("MathematicsMark Percentage is ---> " + MathematicsMark + "%" + "   " + "Grad is F") ;
    // }else {
    //     console.log("please Enter the Number");
    // }


    // if(ComputerMark >=  90){
    //     console.log(" ComputerMark Percentage is ---> " + ComputerMark + "%" + "   " + "Grad is A") ;
    // }else if (ComputerMark >=  80  ){
    //     console.log(" ComputerMark Percentage is ---> " + ComputerMark + "%" + "   " + "Grad is B") ;

    // }else if (ComputerMark >=  70){
    //     console.log(" ComputerMark Percentage is ---> " + ComputerMark + "%" + "   " + "Grad is C") ;

    // }else if (ComputerMark >=  60){
    //     console.log(" ComputerMark Percentage is ---> " + ComputerMark + "%" + "   " + "Grad is D") ;

    // }else if (ComputerMark >=  40){
    //     console.log(" ComputerMark Percentage is ---> " + ComputerMark + "%" + "   " + "Grad is E") ;
    // }else if (ComputerMark <  40){
    //     console.log(" ComputerMark Percentage is ---> " + ComputerMark + "%" + "   " + "Grad is F") ;
    // }else {
    //     console.log("please Enter the Number");
    // }




                                                // useing switch case 

//15-
// var monthNumber = Number(window.prompt("Enter the month number please"));
//         switch (monthNumber)
//         {
//             case 1:
//                 console.log( "this month is january it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML =( "this month is january it is  31 day" ) ;
//             break;
//             case 2:
//                 console.log( "this month is February it is  28 day" ) ;
//                 document.getElementById('demo').innerHTML =( "this month is February it is  28 day" ) ;
//             break;
//             case 3:
//                 console.log( "this month is March it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is March it is  31 day" ) ;
//             break;
//             case 4:
//                 console.log( "this month is April it is  30 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is April it is  30 day" ) ;
//             break;
//             case 5:
//                 console.log( "this month is May it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is May it is  31 day" ) ;
//             break;
//             case 6:
//                 console.log( "this month is June it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML =( "this month is June it is  31 day" ) ;
//             break;
//             case 7:
//                 console.log( "this month is July  it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is July  it is  31 day" ) ;
//             break;
//             case 8:
//                 console.log( "this month is August it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is August it is  31 day" ) ;
//             break;
//             case 9:
//                 console.log( "this month is Sebetember it is  30 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is Sebetember it is  30 day" ) ;
//             break;
//             case 10:
//                 console.log( "this month is October it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is October it is  31 day" ) ;
//             break;
//             case 11:
//                 console.log( "this month is Nobember it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is Nobember it is  31 day" ) ;
//             break;
//             case 12:
//                 console.log( "this month is December it is  31 day" ) ;
//                 document.getElementById('demo').innerHTML = ( "this month is December it is  31 day" ) ;
//             break;
            
//         }

//16-
    // var alphabet = window.prompt('enter your alphabet word');
    // switch (alphabet)
    // {
    //     case "e":
    //         document.getElementById('demo').innerHTML = ('vowel');
    //         break;
    //     case "a":
    //         document.getElementById('demo').innerHTML = ('vowel');
    //         break;
    //     case "i":
    //         document.getElementById('demo').innerHTML = ('vowel');
    //         break;
    //     case "o":
    //         document.getElementById('demo').innerHTML = ('vowel');
    //         break;
    //     case "u":
    //         document.getElementById('demo').innerHTML = ('vowel');
    //         break;
    //     case "b":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "c":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "d":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "b":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "f":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "g":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "h":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "j":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "k":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "l":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "m":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "n":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "p":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "q":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "r":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "s":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "s":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "s":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "t":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "u":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "v":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "w":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "x":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "y":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;
    //     case "z":
    //         document.getElementById('demo').innerHTML = ('constant');
    //         break;       
    // }

// 17-
//     var  num1 = Number(window.prompt("Enter the first number "));
//     var  num2 = Number(window.prompt("Enter the last number"));
//     var result = num1 > num2;
        
// switch (result) 
// {
//     case true:
//         console.log(num1);
//         break;
//     case false:
//         console.log(num2);
//         break;
// }

//18-

// var userNumber = Number(window.prompt('Enter your number'));
// var result = userNumber % 2;
// switch (result)
// {
//     case 0:
//         console.log('even');
//         break;
//    case 1:
//         console.log('odd');
// }



// 19-

// var userNumber = Number(window.prompt('Enter your number'));
// var result = userNumber > 0;
// var resultZeroo = userNumber === 0;
// switch (result)
// {
//     case true:
//         document.getElementById('demo').innerHTML = "Positive";
//         break;
//     case false:
//         document.getElementById('demo').innerHTML = "Negative";
//         break;
// }
//  switch (resultZeroo)
//  {
//      case true:
//         document.getElementById('demo').innerHTML = "Zero is neutral collective";
//         break;
//  }

// 20-calculator