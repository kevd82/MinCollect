const MiniatureController = require("../controllers/miniature.contoller");



module.exports= (app)=>{
    app.get("/api/miniatures", MiniatureController.findAllMiniatures);
    





}