function generateCV(){

let name = document.getElementById("nameField").value;
let email = document.getElementById("emailField").value;
let phone = document.getElementById("phoneField").value;
let address = document.getElementById("addressField").value;

let objective = document.getElementById("objectiveField").value;
let education = document.getElementById("educationField").value;
let skills = document.getElementById("skillsField").value;
let experience = document.getElementById("experienceField").value;

document.getElementById("nameT").innerHTML = name;
document.getElementById("emailT").innerHTML = email;
document.getElementById("phoneT").innerHTML = phone;
document.getElementById("addressT").innerHTML = address;

document.getElementById("objectiveT").innerHTML = objective;
document.getElementById("educationT").innerHTML = education;
document.getElementById("skillsT").innerHTML = skills;
document.getElementById("experienceT").innerHTML = experience;

document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";

}

function printCV(){
window.print();
}