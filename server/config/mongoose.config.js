const mongoose = require("mongoose");
const minDB = "minDB"

mongoose.connect(`mongodb://127.0.0.1:27017/${minDB}`,
    {useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(()=>{
        console.log(`You are connected to ${minDB}`)
    })
    .catch((err)=>{
        console.log(`An error occurred connecting to ${minDB}`, err)
    })