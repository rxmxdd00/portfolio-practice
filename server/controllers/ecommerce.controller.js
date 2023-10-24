const db = require("../models");
const Ecommerce = db.Ecommerce;

exports.create = (req, res) => {

    if (!req.body.title) {
        res.status(400).send({ message : "Content can not be empty!"});
        return;
    }

    //create
    const ecommerce = new Ecommerce ({
        title : req.body.title,
        description : req.body.description,
        published : req.body.published ? req.body.published : false
    });
    
    ecommerce
        .save(ecommerce)
        .then(data =>{
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message : err.message || "Some error occured while adding data."
            });
        });
}

exports.getAll = (req, res)=> {
    const title = req.query.title;
    var condition = title ? {title : {$regex : new RegExp(title),  $options : '1'}} : {};

    Ecommerce.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message : err.message || 'Some error occured while retrieving the data.'
            });
        });
}

exports.getOne = (req, res)=> {
    const id = req.params.id;
    // var condition = title ? {title : {$regex : new RegExp(title),  $options : '1'}} : {};

    Ecommerce.findById(id)
        .then(data => {
           if(!data) {
            res.status(400).send({
                message : "Data not found with the id of " + id
            });
           } else {
            res.send(data);
           }
        })
        .catch(err => {
            res.status(500).send({
                message : 'Error retrieving data with the id of ' + id
            });
        });
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty!"
        });
    }

    const id = req.params.id;

    Ecommerce.findByIdAndUpdate(id, req.body, {useFindAndModify : false})
        .then( data => {
            if(!data){
                res.status(400).send({
                    message : "Cannot update data with id of " + id + "maybe data not found."
                });
            } else res.send({message: "Data was updated successfully"});
        }).catch(err => {
            res.status(500).send(
                {
                    message : "Error updating the data with id of " + id
                }
            );
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Ecommerce.findByIdAndRemove(id, {useFindAndModify: false})
        .then( data => {
            if(!data) {
                res.status(400).send({
                    message: "Cannot delete this data with id of " + id + " maybe data not found."
                });
            }  else {
                res.send({
                    message : "Data deleted successfully!"
                })
            }
        }).catch( err=>{
            res.status(500).send({
                message  : "Cannot delete this data with id of " + id
            });
        });
}