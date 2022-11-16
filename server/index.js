//const { application } = require('express');
const express = require('express');
const app = express();
const { AccountProvider } = require("./accountProvider"); //access mongodb js file
const {ShoesCreator} = require("./shoesProvider");

//allows for server to have access to post/put requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const provider = new AccountProvider(); //mongodb class instance

const creator = new ShoesCreator();

// creator.addShoe("patelom1022@gmail.com", "Sike", "Sir Force", 10, "shoe1", 124.99, 100, "Black");
// creator.addShoe("gbarn","SIKE","oldskool",11,"this",1000,100,"purple");

app.get("/members", (req, res) => { //gets all members 

})


app.post("/apiPost", (req, res) => { //sign in post request
    const email = req.body.email; //get emails
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
    const newPassword = req.body.newPassword;

    console.log(email);
    console.log(newPassword);

    provider.checkMemberExists(email)
    .then( result => {
        if (result == 1) {
            res.json({ message: "An email has been sent to update password" });
            provider.forgotPassword(email);
            return;
        }
        if (result == 0) {
            res.json({ message: "Account not found" });
            return;
        }
    }) 


});

app.post("/api/addShoe", (req, res) => {
    const providerEmail = req.body.email;
    const brandName = req.body.brand;
    const shoeName = req.body.shoeName;
    const shoeSize = req.body.shoeSize;
    const shoePicURL = req.body.shoeURL;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const color = req.body.color;

    creator.checkShoeExists(providerEmail, brandName, shoeName, shoeSize, shoePicURL, price, quantity, color) 
    .then(result => {
        if(result == 1) {
            res.json({message: "Shoe already exists!"});
            return;
        }
        if(result == 0) {
            creator.addShoe(providerEmail, brandName, shoeName, shoeSize, shoePicURL, price, quantity, color);
            res.json({message: "Shoe has been added!"});
            return; 
        }
    })
});

app.get('/shop/shoes',(req,res)=>{
    creator.getShoes().then(result => res.json(result));
});


app.listen(3081, () => {
    console.log(`listening at http://localhost:${3081}`);
});

process.on("unhandledRejection", err => {
    console.log(`an error occurred: ${err.message}`)
})