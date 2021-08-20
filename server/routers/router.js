const express = require ('express');
const router = express.Router();
const pool = require ('../modules/pool');


router.post('/', (req, res) => {
    let newFeedback = req.body;
    let queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
`;
    let sqlParams = [
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
        });
});

module.exports = router;

