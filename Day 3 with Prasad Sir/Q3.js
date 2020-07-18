let marks = prompt("Enter marks:")
switch (true){
    case (marks>=90 && marks<100):
        console.log(`Marks: ${marks}`)
        console.log("Grade: A")
        break;
    
    case (marks>=85 && marks<89):
        console.log(`Marks: ${marks}`)
        console.log("Grade: B")
        break;
    
    case (marks>=80 && marks<84):
        console.log(`Marks: ${marks}`)
        console.log("Grade: B+")
        break;

    case (marks>=75 && marks<79):
        console.log(`Marks: ${marks}`)
        console.log("Grade: C+")
        break;

    case (marks>=70 && marks<74):
        console.log(`Marks: ${marks}`)
        console.log("Grade: C")
        break;

    case (marks>=60 && marks<69):
        console.log(`Marks: ${marks}`)
        console.log("Grade: D")
        break;

    case (marks<=59):
        console.log(`Marks: ${marks}`)
        console.log("Grade: F")
        break;

    default:
        console.log("Please enter valid input.")
        break;
}