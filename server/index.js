const express = require('express');
const app = express();
const { AccountProvider } = require("./accountProvider"); //access mongodb js file

//allows for server to have access to post/put requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const provider = new AccountProvider(); //mongodb class instance




app.get("/members", (req, res) => { //gets all members 

})


app.post("/apiPost", (req, res) => { //sign in post request
    const email = req.body.email; //get email
    const password = req.body.password; //get password

    console.log(email, password);

    provider.checkMembers(email, password)//check membership
        .then(result => {
            if (result == true) {

                res.json({ message: "found" }); //respond with success message
                return;
            }
            res.json({ message: "Account not found" }); //respond with error message
            return;
        })


})


app.post("/apiNewAccount", (req, res) => { //create new account post request
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);

    provider.checkMemberExists(email)
        .then(result => {
            if (result == 1) { //account already exists
                res.json({ message: "Account already exists" }); //respond with error message
                return;
            }
            if (result == 0) { //account doesn't exist
                provider.createAccount(email, password); //save account to database
                res.json({ message: "Account created successfully" }); //respond with success message
                return;
            }
        })


})


app.post("/apiForgotPassword", (req, res) => { //forgot password post request (in progress)
    const email = req.body.email;
    console.log(email);

    var result = checkMemberExists(email);
    if (result == true) {
        res.json({ message: "An email has been sent to update password" });
        return;
    }
    //else

    res.json({ message: "Account not found" });
    return;



});

app.listen(3081, () => {
    console.log(`listening at http://localhost:${3081}`);
});

process.on("unhandledRejection", err => {
    console.log(`an error occurred: ${err.message}`)
})