const mongoose = require("mongoose");

const MongoDB_URL = "mongodb+srv://admin:patel@sikewearcluster.r7rsoch.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async () => {
    await mongoose.connect(MongoDB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}


connectDB();

const newAccountSchema = new mongoose.Schema({
    email: String,
    password: String,
    adminPerm: Boolean,
});


const AccountCreation = mongoose.model("Accounts", newAccountSchema);

const AccountProvider = class {

    async setMemberAdmin(email) {
        
    }

    //checks to see if user exists (sign in)
    async checkMembers(email, password) {

        let result;

        result = await AccountCreation.count({email:email, password:password});

      return result;
    }

    //checks to see if user has an account already (create account)
    async checkMemberExists (email){

      let result;

      result = await AccountCreation.count({email:email});

      return result;
        
    }



    login(email, password) {

    }

    createAccount(email, password) {

        const newAccount = new AccountCreation({
            email: email,
            password: password,
            adminPerm: false
        });
        newAccount.save();

    }

    forgotPassword(email, newPassword) {
        const update_user_info = mongoose.model("Accounts", newAccountSchema);
        update_user_info.updateOne(email); 
    }
}
module.exports = { AccountProvider };