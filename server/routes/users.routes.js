module.exports = app => {
    const users = require('./../controllers/users.controller');
    var router = require("express").Router();
    
    
    router.post('/create', users.create);
    router.post('/login', users.login);
    app.use("/api/users", router)
}