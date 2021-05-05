const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// Import de la Base de données
const sequelize = require('./middleware/sequelize');

// Test d'authentification
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Connection to database failed'));


// Users Routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// Posts Routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);


// Stockage Multer
app.use("/images", express.static(path.join(__dirname, "images")));


// Code creating user post & comment
/*async function test() {

    // Creation post
    const comments = await Comment.findAll({
        include: User // where postId: req.params.id
    });

    console.log(JSON.stringify(comments, null, 2));

    // comments.forEach(comment => {
    //     const commentS =
    //  // console.log(comment.user);
    //  // console.log(`${comment.content} by ${comment.user}`);
    // });

    // Recuperation tous les posts

    //
}
test();*/

// Exportation de l'application
module.exports = app;