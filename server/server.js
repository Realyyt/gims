
// Import dependencies
const express = require ("express");
const cors = require('cors')
const connectToDb = require("./config/connectToDb");
const katanaj150Controller = require("./controllers/katana-sj150Controller");
const katanasj450Controller = require("./controllers/katana-sj450Controller");
const katanasj700Controller = require("./controllers/katana-sj700Controller")
const mongoose = require('mongoose');


console.log(process.env);

// Create an express app
const app = express();

//configure express app
app.use(express.json());
app.use(cors())


connectToDb();


// Routing for KATANASJ150

app.get("/katanasj150", katanaj150Controller.fetchKatanasj150s);

app.get("/katanasj150/:id", katanaj150Controller.fetchKatanasj150);

app.post("/katanasj150", katanaj150Controller.createKatanasj150);

app.put("/katanasj150/:id", katanaj150Controller.updateKatanasj150);

app.delete("/katanasj150/:id", katanaj150Controller.deleteKatanasj150);



// Routing for KATANASJ450

app.get("/katanasj450", katanasj450Controller.fetchKatanasj450s);

app.get("/katanasj450/:id", katanasj450Controller.fetchKatanasj450);

app.post("/katanasj450", katanasj450Controller.createKatanasj450);

app.put("/katanasj450/:id", katanasj450Controller.updateKatanasj450);

app.delete("/katanasj450/:id", katanasj450Controller.deleteKatanasj450);




// Routing for KATANASJ700

app.get("/katanasj700", katanasj700Controller.fetchKatanasj700s);

app.get("/katanasj700/:id", katanasj700Controller.fetchKatanasj700);

app.post("/katanasj700", katanasj700Controller.createKatanasj700);

app.put("/katanasj700/:id", katanasj700Controller.updateKatanasj700);

app.delete("/katanasj700/:id", katanasj700Controller.deleteKatanasj700);






// Start your server
app.listen(3000, function(){
    console.log("Server started at port 3000 ")
});

