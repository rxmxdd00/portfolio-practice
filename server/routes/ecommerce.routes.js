module.exports = app => {
    const ecommerce = require("../controllers/ecommerce.controller.js");

    var router = require("express").Router();

    router.post("/create", ecommerce.create);

    router.get("/get", ecommerce.getAll);

    router.get("/get/:id", ecommerce.getOne);

    router.put('/update/:id', ecommerce.update);
    
    router.delete("/delete/:id", ecommerce.delete);

    app.use("/api/ecommerce", router);
}