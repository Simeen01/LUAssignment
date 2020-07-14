//var : Function scope

//string
var name = "Simeen"

//number
var age = 18

//boolean
var canfly = false;

//array
var languages = ['Hindi', 'Urdu', 'English', 'Marathi', 'Arabic']

//objects
var friend = {
    name:"Huda",
    hobby:"Fashionista",
}


//Since 'a' is not assigned a value the output comes as undefined.
var a;
console.log(a);

var a=10;
console.log(a);

//let : Block scope
//{} used to separate scope of variable, inside {} the scope is local.
{
    let name = "Sai Sir";
    //name = "Seema"  //for renaming local and global variables
    let city; //no error eventhough not initialized a value
    console.log("Local varaible name: ",name)
}
console.log("Global variable name: ",name)

//const - constant
//Must initialize a value else shows error
const country = "India";
console.log(country);

//country = "UK"  //this shows error since in const we cannot rename/change value 

const fruits = ["mango", "apple"]
console.log(fruits)
fruits.push("banana")
console.log(fruits)

fruits = ["watermelon", "sweetmelon"] //shows error since fruits is const