var Express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

var app = Express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = require("./server/models");

db.mongoose
    .connect(db.url, {
        useNewUrlParser : true,
    }).then( ()=> {
        console.log("Connected to the database.")
    }).catch( err => {
        console.log("Cannot connect to database.", err);
        process.exit();
    });

    //simple route
    app.get("/", (req, res)=>{
        res.json({ message : "Welcome to Ecommerce Application"});
    });

    require("./server/routes/ecommerce.routes")(app);

    //set port, listen for request
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
// mongoose.connect("mongodb://localhost:27017/ecommercedb", {useNewUrlParser: true, useUnifiedTopology: true}, function checkDB(error){
//     if(error) {
//         console.log(error)
//     } else {
//         console.log("db connected successfuly")
//     }
// }); 
// app.listen(5038, function port(error){
//     if(error) {
//         console.log('Failed');
//     } else {
//         console.log('Success');
//     }
// });
