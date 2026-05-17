const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    model: String,
});

module.exports = {OrdersSchema};