const sequelize = require('../middleware/sequelize');
const {
    DataTypes
} = require('sequelize');


const Post = sequelize.define("Post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


// Association with Comment
const Comment = require('./Comment');

Post.hasMany(Comment);
Comment.belongsTo(Post);

Post.sync();

module.exports = Post;