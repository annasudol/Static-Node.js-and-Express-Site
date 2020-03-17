const express = require('express');
const router = express.Router();
const { data } = require('../data/projects.json');
const { projects } = data;

// router.get('/', (req, res) => {
//     const numberOfProjects = cards.length;
//     const projectID = Math.floor(Math.random() * numberOfCards);
//     res.redirect(`/projects/${projectID}`)
// });

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const project = projects[id];
    console.log(project, `'project`);
    console.log(id, 'id')

    // const { side } = req.query;
    // const { id } = req.params;
    // console.log(side, "side")

    // if (!side) {
    //     return res.redirect(`/cards/${id}?side=question`);
    // }

    // const name = req.cookies.username;
    // const { hint } = cards[id];
    // console.log(text, "text")

    // const templateData = { id, text, name, side };

    // if (side === 'question') {
    //     templateData.hint = hint;
    //     templateData.sideToShow = 'answer';
    //     templateData.sideToShowDisplay = 'Answer';
    // } else if (side === 'answer') {
    //     templateData.sideToShow = 'question';
    //     templateData.sideToShowDisplay = 'Question';
    // }

    res.render('project', { project });
});

module.exports = router;