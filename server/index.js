const express = require('express');
const app = express();


//allows for server to have access to post/put requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//list of users
const members = [
    { email: "gbarn360@gmail.com", password: "1234567" }
]

//checks to see if user exists (sign in)
function checkMembers(email, password) {

    let result;
    members.forEach((entry) => { //for each member, compare its email and password with that of the post request
        if (entry.email === email && entry.password === password) {
            result = true;
        }
        else {
            result = false;
        }
    })
    return result;
}

//checks to see if user has an account already (create account)
function checkMemberExists(email) {

    let result;
    members.forEach((entry) => {
        if (entry.email === email) {
            result = true;
        }
        else {
            result = false;
        }
    })
    return result;
}

app.get("/members", (req, res) => { //gets all members 
    res.json(members);
})


app.post("/apiPost", (req, res) => { //sign in post request
    const email = req.body.email; //get email
    const password = req.body.password; //get password

    console.log(email, password);

    var result = checkMembers(email, password); //check membership
    if (result == true) {

        res.json({ message: "found" }); //respond with success message
        return;
    }
    res.json({ message: "Account not found" }); //respond with error message
    return;

})

app.post("/apiNewAccount", (req, res) => { //create new account post request
    const email = req.body.email;
    const password = req.body.password;

    console.log(email, password);

    var result = checkMemberExists(email);
    if (result == true) {
        res.json({ message: "Account already exists" }); //respond with error message
        return;
    }
    //else
    const newMember = { email: email, password: password }; //create new member, push into members array
    members.push(newMember);
    res.json({ message: "Account created successfully" }); //respond with success message
    return;

})


app.post("/apiForgotPassword", (req, res) => { //forgot password post request (in progress)
    const email = req.body.email;
    console.log(email);



});

app.listen(3081, () => {
    console.log(`listening at http://localhost:${3081}`);
});