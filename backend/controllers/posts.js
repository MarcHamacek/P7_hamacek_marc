const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');
const {
    json
} = require('body-parser');


// POSTS

// Create a Post
exports.createPost = (req, res) => {
    Post.create({
            title: req.body.title,
            content: req.body.content,
            UserId: req.token.userId
        })
        .then(() => res.status(201).json({
            message: 'Votre post a bien été publié !'
        }))
        .catch((error) => res.status(400).json({
            error
        }));
};

// Read all posts
exports.getAllPosts = (req, res) => {
    Post.findAll({
            include: [
                User,
                {
                    model: Comment,
                    include: User
                },
            ],
            order: [
                ["updatedAt", "DESC"],
                [{
                    model: Comment
                }, "updatedAt", "DESC"]
            ],
        })
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => res.status(404).json({
            error
        }));
};

// Read one post
exports.getOnePost = (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            include: [
                User,
                {
                    model: Comment,
                    include: User,
                },
            ],
            order: [
                [{
                    model: Comment
                }, "updatedAt", "DESC"]
            ],
        })
        .then(post => {
            res.status(200).json(post)
        })
        .catch(error => res.status(404).json({
            error: "Post introuvable !"
        }));
};

// Update a post
exports.updatePost = (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            if (post.UserId === req.token.userId) {
                Post.update({
                        title: req.body.title,
                        content: req.body.content,
                        UserId: req.body.userId
                    }, {
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(() => res.status(200).json({
                        message: 'Votre post a bien été modifié !'
                    }))
                    .catch(error => res.status(400).json({
                        error
                    }));
            } else {
                res.status(401).json({
                    error: "Vous ne disposez pas des droits pour modifier ce post !"
                });
            }
        })
        .catch(error => res.status(404).json({
            error: "Post introuvable !"
        }));
};

// Delete a post
exports.deletePost = (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(post => {
            Comment.findAll({
                    where: {
                        postId: req.params.id
                    }
                })
                .then((comment) => {
                    if (post.UserId === req.token.userId || req.token.userId.isAdmin === 1) {
                        Comment.destroy({
                                where: {
                                    postId: req.params.id
                                }
                            })
                            .then(() => {
                                Post.destroy({
                                        where: {
                                            id: req.params.id
                                        }
                                    })
                                    .then(() => res.status(200).json({
                                        message: 'Votre post a bien été supprimé !'
                                    }))
                                    .catch(error => res.status(400).json({
                                        error
                                    }));
                            })
                            .catch(error => res.status(400).json({
                                error
                            }));
                    } else {
                        res.status(401).json({
                            error: "Vous ne disposez pas des droits pour supprimer ce post !"
                        });
                    }
                })
                .catch(error => res.status(404).json({
                    error
                }))
        })
        .catch(error => res.status(500).json({
            error
        }));
};

// COMMENTS

// Add a comment to a post
// Voir problème avec UserId
exports.commentPost = (req, res) => {
    Comment.create({
            content: req.body.content,
            PostId: req.params.id,
            UserId: req.token.userId
        })
        .then(() => res.status(201).json({
            message: "Votre commentaire a bien été ajouté !"
        }))
        .catch((error) => res.status(400).json({
            error
        }));
};

// Read all comments
exports.getAllComments = (req, res) => {
    Comment.findAll({
            where: {
                postId: req.params.id
            },
            include: [User]
        })
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(404).json({
            error
        }));
};

// Update a comment on a post


// Delete a comment on a post
exports.deleteComment = (req, res) => {
    Comment.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((comments) => {
            Comment.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => res.status(200).json({
                    message: 'Votre commentaire a bien été supprimé !'
                }))
                .catch(error => res.status(400).json({
                    error
                }));
        })
        .catch((error) => res.status(500).json({
            error
        }));
};