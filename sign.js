let users = [
    {
        user: "Tulga",
        pass: "Pass1234"
    }
]

function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    for(let i = 0; i < users.length; i++){
        if(user === users[i].user && pass === users[i].pass){
            alert("You have succesfully logged in");
            return;
        }
    }
    alert("Username or password is incorrect");
}

function signup(){
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let cpass = document.getElementById("cPassword").value;
    if(password == cpass){
        if(password.length >= 8){ 
            if(password !== password.toLowerCase()){
                let newUser = {
                    user: username,
                    pass: password
                }
                users.push(newUser);
                alert("Succesfully signed up");
            }
            else{
                alert("Must contain atleast one upper case letter");
                return;
            }
        }
        else{
            alert("Must contain 8 or above characters");
            return;
        }
    }
    else{
        alert("Passwords doesn't match");
        return;
    }
}