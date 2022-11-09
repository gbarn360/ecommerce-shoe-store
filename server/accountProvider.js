const mongoose = require("mongoose");


const MongoDB_URL = "mongodb+srv://admin:patel@sikewearcluster.r7rsoch.mongodb.net/?retryWrites=true&w=majority";


const newAccountSchema = {
    email: String,
    password: String,
};

const AccountCreation = mongoose.model("Accounts", newAccountSchema);

const AccountProvider = class {

    //checks to see if user exists (sign in)
    checkMembers(email, password) {

        let result;

        result = AccountCreation.collection.count({
            email: email,
            password: password
        })
        console.log(result);
        return result;
    }

    //checks to see if user has an account already (create account)
    checkMemberExists(email) {

        let result;

        result = AccountCreation.collection.count({
            email: email,
            password: password
        })
        console.log(result);
        return result;
    }



    login(email, password) {

    }

    createAccount(email, password) {
        const newAccount = new AccountCreation({
            email: email,
            password: password
        });
        newAccount.save();

    }

    forgotPassword(email) {

    }
}

module.exports = { AccountProvider };