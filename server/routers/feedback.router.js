const express = require ('express');
const router = express.Router();
const pool = require ('../modules/pool');

//setting up router to post data to sql
router.post('/', (req, res) => {
    let newFeedback = req.body;
    const queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
`;
    const sqlParams = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments
    ]; 

    pool.query(queryText, sqlParams)
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('POST error', error);
            res.sendStatus(500)
        });
});

module.exports = router;

