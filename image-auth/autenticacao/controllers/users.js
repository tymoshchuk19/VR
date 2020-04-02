const UserModel = require('../models/users');

var Users = module.exports;

//Devolve lista de filmes
Users.listar = () => {
    return UserModel
        .find()
        .exec();
}

Users.userById = idUser => {
    return UserModel
        .findById(idUser)
        .exec();
}

Users.getUser = un => {
    return UserModel
        .findOne({ username: un })
        .exec();
}

Users.newUser = user => {
    var novo = new UserModel(user);
    return novo.save();
}

Users.deleteFilme = idUser => {
    return UserModel
        .deleteOne({ _id: idUser })
        .exec();
}
