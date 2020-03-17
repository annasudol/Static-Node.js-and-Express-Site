const express = require('express');
const router = express.Router();

const { data } = require('../data/projects.json');
const { title, description, projects, img, about } = data;

router.get('/', (req, res) => {
    const templateData = { title, description, projects, img };
    res.render('index', templateData);
});

router.get('/about', (req, res) => {
    const { linkedIn, git } = about;
    res.render('about', { linkedIn, git });
});


module.exports = router;