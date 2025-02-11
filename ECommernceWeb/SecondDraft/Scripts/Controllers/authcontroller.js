// function validate() {
//     let status=false;
//     let emailAddress = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     if (emailAddress === "lakhanchavan1106@gmail.com" && password === "test") {
//         // console.log("Welcome");
//         status = true;
//     } 
//     // else {
//     //     // console.log("Invalid");
        
//     // }
// }
function validate(email, password) {
    let status = false;

    for (let i = 0; i < credentials.length; i++) {
        if (credentials[i].email === email && credentials[i].password === password) {
            status = true;
            break;
        }
    }
    
    return status;
}
