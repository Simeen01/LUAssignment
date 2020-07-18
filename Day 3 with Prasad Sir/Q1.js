function EvenOdd(num){
    if (num%2==0){
        console.log("The number entered is",num,"and Number is even.")
    }
    else{
        console.log("The Number entered is",num,"and Number is odd.")
    }
}

let num = prompt("Enter a number",0);
EvenOdd(num)