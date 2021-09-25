const { DataTypes } = require('sequelize');

module.exports = model;

<<<<<<< HEAD
function model(sequelize) {
    const attributes = {
        mail: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false }
    };
=======
    this.username = customer.username;
    this.phone = customer.phone;
    this.mail = customer.mail;
    this.gender = customer.gender;
    this.password = customer.password;
>>>>>>> aff55ae3e3a914ef49e973f694ffd3335d5d2c5e
    

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}
