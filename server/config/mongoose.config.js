const mongoose = require("mongoose");
constMinDB = "MinDB"

mongoose.connect(`mongodb://localhost/${minDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})