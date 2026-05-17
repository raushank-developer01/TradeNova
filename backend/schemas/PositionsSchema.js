const {Schema} = require("mongoose");

const Positi = new Schema({
    porduct: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = {PositionsSchema};