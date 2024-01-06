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
        },

    createNewMiniature: (req, res)=>{
        Miniature.create(req.body)
            .then((newMiniature)=>{
                console.log(newMiniature);
                res.json(newMiniature)
            })
            .catch((err)=>{
                console.log("createNewMiniature has failed");
                res.status(400).json(err)
            })
    },

    findOneMiniature: (req, res)=>{
        
    }


}
