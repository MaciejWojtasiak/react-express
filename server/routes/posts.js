const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post have been deleted");

            } catch (err) {
                res.status(500).json(err);
            }
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username = req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                });
                res.status(200).json(updatedPost);

            } catch (err) {
                res.status(500).json(err)
            }
        }

    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ONE POST

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json("Post not found.");
    }
});

//GET ALL POSTS

router.get('/', async (req, res) => {
    const catName = req.query.cat;
    const username = req.query.user;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({ categories: { $category: [catName] } });
        } else {
            posts = await Post.find()
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;