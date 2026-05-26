const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { UserModel } = require("./model/UserModel");

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const {HoldingsModel} = require("./model/HoldingsModel");

const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());

// app.get('/addHoldings', async(requestAnimationFrame,res)=>{
//     let tempHoldings=[
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHoldings.forEach((item)=>{
//  let newHoldings = new HoldingsModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.day,
//     day: item.day,
//  });

//  newHoldings.save();
// });
// res.send("Done!");
// });



// app.get('/addPositions', async(req,res)=>{
//     let tempPositions= [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPositions.forEach((item)=>{
//  let newPosition = new PositionsModel({
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.day,
//     day: item.day,
//  });

//  newPosition.save();
// });
// res.send("Done!");
// });

app.get('/allHoldings', async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req, res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {

    const { name, qty, price, mode } = req.body;

    // save order history
    let newOrder = new OrdersModel({
        name,
        qty,
        price,
        mode,
    });

    await newOrder.save();

    // CHECK HOLDING EXISTS
    let existingHolding = await HoldingsModel.findOne({ name });

    if (existingHolding) {

        // UPDATE QTY
        existingHolding.qty += Number(qty);

        // UPDATE PRICE
        existingHolding.price = price;

        await existingHolding.save();

    } else {

        // CREATE NEW HOLDING
        let newHolding = new HoldingsModel({
            name,
            qty,
            avg: price,
            price,
            net: "0%",
            day: "0%",
        });

        await newHolding.save();
    }

    res.send("Buy order completed!");
});

app.post("/sellOrder", async (req, res) => {

    const { name, qty, price, mode } = req.body;

    // SAVE ORDER HISTORY
    let newOrder = new OrdersModel({
        name,
        qty,
        price,
        mode,
    });

    await newOrder.save();

    // FIND HOLDING
    let existingHolding = await HoldingsModel.findOne({ name });

    if (!existingHolding) {
        return res.status(404).send("Stock not found!");
    }

    // CHECK QTY
    if (existingHolding.qty < qty) {
        return res.status(400).send("Not enough quantity!");
    }

    // REDUCE QTY
    existingHolding.qty -= qty;

    // REMOVE IF ZERO
    if (existingHolding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
    } else {
        await existingHolding.save();
    }

    res.send("Sell order completed!");
});

app.post("/signup", async (req, res) => {

  try {

    const { email, password } = req.body;

    // CHECK USER EXISTS
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await UserModel.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    // FIND USER
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // COMPARE PASSWORD
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // CREATE JWT TOKEN
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // CREATE COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(200).json({
      message: "Login successful",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

app.get("/verify", async (req, res) => {

  const token = req.cookies.token;

  if (!token) {
    return res.json({
      status: false,
    });
  }

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await UserModel.findById(decoded.id);

    res.json({
      status: true,
      user: user.email,
    });

  } catch (error) {

    res.json({
      status: false,
    });
  }
});

app.get("/logout", (req, res) => {

  res.clearCookie("token");

  res.json({
    message: "Logout successful",
  });
});

app.listen(PORT, () => {
    console.log("App started!");
    mongoose.connect(url);
    console.log("DB connected!");
}); 