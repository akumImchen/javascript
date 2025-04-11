 // a simple personal info app using js
let person={
    name: "Akum",
    age:22,
    Hobbies:["basketball","Coding"]
}
function add(Hobbies ){
   person.Hobbies.push(Hobbies)
}

function display(){
    console.log("Name:",person.name);
    console.log("Age:" ,person.age);
    console.log("Hobbies:",person.Hobbies);

    console.log("Today's date is: ", Date())
    console.log("Types:");
    console.log("name->", typeof person.name);
    console.log("Age->",typeof person.age);
    console.log("Hobbies->",typeof person.Hobbies);

    
}
add("badminton")
display()



