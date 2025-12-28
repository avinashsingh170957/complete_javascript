// simple variables

let name = "Avinash" ;
console.log("User name is " , name);

// multiple variables

let fname,lname,age ;
fname = "Avinash",
lname = "Singh",
age = 25 ;

console.log("User name is " + fname + " his last name is " + lname+ " and his age is " + age);

// const var not change 

const First_name = "Avinsh singh";

console.log("Frist name is ",First_name);

//First_name = "Avinash"; this is not possible becuase const var never change.

// mulltiple const var in single short

const userdata = {
    fnames : "Avinash",
    lnames : "Singh",
    email : "avinashsingh0957@gmail.com"
} ;
const {fnames,lnames,email} = userdata ;
console.log("\n");
console.log("First name is ", fnames);
console.log("Last name is ", lnames);
console.log("Email is ", email);


