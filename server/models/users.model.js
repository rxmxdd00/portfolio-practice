module.exports = mongoose => {
    var schema = mongoose.Schema ({
        firstName : String,
        lastName : String,
        email : String,
        password: String
    });

    schema.method("toJSON", function (){
        const { __v , _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Users = mongoose.model("users", schema);
    return Users;
}