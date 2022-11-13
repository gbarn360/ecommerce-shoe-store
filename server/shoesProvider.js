const mongoose = require("mongoose");

const MongoDB_URL = "mongodb+srv://admin:patel@sikewearcluster.r7rsoch.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async () => {
    await mongoose.connect(MongoDB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

connectDB();

const addShoesSchema = new mongoose.Schema({
    providerEmail: String,
    brandName: String,
    shoeName: String,
    shoeSize: Number,
    shoePicURL: String, 
    price: Number,
    quantity: Number,
    color: String,
});

const ShoesCreation = mongoose.model("Shoes", addShoesSchema);

const ShoesCreator = class {

    async checkShoeExists(providerEmail, brandName, shoeName, shoeSize, shoePicURL, price, quantity, color) {
        let result; 

        result = await ShoesCreation.count({
            providerEmail: providerEmail,
            brandName: brandName,
            shoeName: shoeName,
            shoeSize: shoeSize,
            shoePicURL: shoePicURL,
            price: price,
            quantity: quantity,
            color: color
        });

        return result;
    }

    addShoe(providerEmail, brandName, shoeName, shoeSize, shoePicURL, price, quantity, color) {
        const newShoe = new ShoesCreation({
            providerEmail: providerEmail,
            brandName: brandName,
            shoeName: shoeName, 
            shoeSize: shoeSize, 
            shoePicURL: shoePicURL,
            price: price, 
            quantity: quantity,
            color: color
        });
        newShoe.save();
    }
}
module.exports = {ShoesCreator};