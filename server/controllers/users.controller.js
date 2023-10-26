const db = require("../models");
const Users = db.Users;
var key = '123456789trytryrtyr';
const encryptor = require('simple-encryptor')(key)

exports.create = (req, res) => {
    const data={
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password,
    };
    var encrypted = encryptor.encrypt(data.password);
    data.password = encrypted;
    
    const users = new Users(data);
    users.save(users)
    .then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message : err.message || "Some error occured while adding data."
        });
    });
}

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    Users.findOne({email : email}).then(
        data => {
            if(!data) {
                // res.status(400).send({
                //     message : "User not found with this email: " + email
                // }); 
                res.send({
                    status : '400',
                    message : "User not found invalid email or password "
                }); 
            } else {
                const decrypted = encryptor.decrypt(data.password);
                if(decrypted == password) {
                    // data.password = decrypted;
                    res.send(data);
                } else {
                    // res.status(500).send({
                    //     message : "User password not match with this email: " + email
                    // }); 
                    res.send({
                        status : '500',
                        message : "User password not match"
                    }); 
                }
               
            }
        }).catch(err => {
            res.status(500).send({
                message : 'Error retrieving data with this email: ' + email
            });
        });
}
exports.getAll = (req, res) => {}

exports.getOne = (req, res) => {
}