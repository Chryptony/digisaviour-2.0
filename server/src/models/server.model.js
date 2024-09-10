const {DataTypes} = require ("sequelize")
const database = require ("../database")

const Server = database.define("server", {
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    email: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    telepon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    perihal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    keterangan:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})
module.exports = Server;