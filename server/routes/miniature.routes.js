const MiniatureController = require("../controllers/miniature.contoller");



module.exports= (app)=>{
    app.get("/api/miniatures", MiniatureController.findAllMiniatures);
    app.post("/api/miniatures", MiniatureController.createNewMiniature);
    app.get("/api/miniatures/:id", MiniatureController.findOneMiniature);
    app.delete("/api/miniatures/:id", MiniatureController.deleteOneMiniature);
    app.put("/api/miniatures/:id", MiniatureController.updateMiniature);

}