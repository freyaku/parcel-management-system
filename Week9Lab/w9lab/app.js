const express = require('express');
const mongoose = require("mongoose");
let path = require("path");

const sender = require("./routers/sender");
const parcel = require("./routers/parcel");


let app = express();
const PORT_NUMBER = 8081;

app.listen(PORT_NUMBER, () => {
  console.log(`Listening on port ${PORT_NUMBER}`);
});

app.use(express.json())
app.use("/", express.static(path.join(__dirname, "dist/w9lab")));

let url = "mongodb://localhost:27017/labweek10app";

let print = console.log;

mongoose.connect(url, function (err) {
  if (err) print("unable to connect to Mongoose");
  else print("connect to DB successfully");
});

app.get('/sender/:name', sender.getAllByName);
app.post('/sender', sender.createSender);
app.delete('/sender/:id', sender.deleteOneSenderById);
app.put('/sender', sender.updateSender);
app.put('/sender/parcel', sender.addParcel);
app.get('/sender', sender.getSenders);


//app.get('/parcel', parcel.getAllByAddress);
app.put('/parcel', parcel.updateAddress);
app.get('/parcel', parcel.getParcels);
