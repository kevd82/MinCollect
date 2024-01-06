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
        Miniature.findOne({_id: req.params.id})
            .then((oneMiniature)=>{
                console.log(oneMiniature);
                res.json(oneMiniature);
            })
            .catch((err)=>{
                console.log("findOneMiniature has failed");
                res.json({message: "Error in findOneMiniature", error: err})
            })
    },

    deleteOneMiniature: (req, res)=>{
        Miniature.deleteOne({_id: req.params.id})
            .then((deletedMiniature)=>{
                console.log(deletedMiniature);
                res.json(deletedMiniature);
            })
            .catch((err)=>{
                console.log("deleteOneMiniature has failed");
                res.json({message: "Error in deleteOneMiniature", error: err})
            })
    },

    updateMiniature: (req, res)=>{
        Miniature.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new:true, runValidators:true}
            )
            .then((updatedMiniature)=>{
                console.log(updatedMiniature);
                res.json(updatedMiniature);
            })
            .catch((err)=>{
                console.log("updateMiniature has failed");
                res.status(400).json(err)
            })
    },




}
