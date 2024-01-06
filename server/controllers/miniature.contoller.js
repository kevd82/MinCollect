const Miniature = require("../models/miniature.model");




module.exports = {

    findAllMiniatures: (req, res)=>{
        Miniature.find()
            .then((allMiniatures)=>{
                console.log(allMiniatures);
                res.json(allMiniatures)
            })
            .catch((err)=>{
                console.log("findAllMiniatures has failed");
                res.json({message: "Error in findAllMiniatures", error: err})
            })
        }


}
