const sequelize = require('../middleware/sequelize');
const {
    DataTypes
} = require('sequelize');


const User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


// Associations with Post and Comment
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

User.sync();

module.exports = User;