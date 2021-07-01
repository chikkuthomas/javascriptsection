
// setting username and password for local storage//
var user = {
    username: "luminar",
    password: "luminar123"
}

// saving the user details as dictionary with key name as username//
localStorage.setItem(user.username, JSON.stringify(user))

// login() functio for onclick of submit button//
function login() {
    let uname = usename.value // getting values from the username input box ,id=usename
    let pword = pasword.value // getting values from the password text boc, id=pasword

    //to check the username is not enterd//
    let user = JSON.parse(localStorage.getItem(uname)) // input value of login text box
    if (user == null) {
        alert("invalid username")
    }
     
    // to check password is blank //
    let usr=JSON.parse(localStorage.getItem(pword))
    if(usr==null){
        alert("password should not be blank")
    }
    

    let details = JSON.parse(localStorage.getItem("luminar")); // getting the user details from local storage

    if (uname == details.username & pword == details.password) { // comparing username and password with user inputs
        alert("login success")   // if true "login succsess"
    }
    else {
        alert("login failed")  // if false "login failed"
    }


}


