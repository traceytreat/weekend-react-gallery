const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    /*
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
    */
    const queryText = `UPDATE gallery SET likes = likes + 1 WHERE id = $1`
    pool.query(queryText, [req.params.id])
        .then(() => {
            console.log('router PUT (addLike) successful');
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('router PUT (addLike) error', error);
            res.sendStatus(500);
        });
}); 

// this is for getDescription in GalleryItem
router.put('/:id', (req, res) => {
    console.log(req.params);
    /*
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.clicked = !galleryItem.clicked;
        }
    }
    res.sendStatus(200);
    */
    const queryText = `UPDATE gallery SET clicked = NOT clicked WHERE id = $1`
    pool.query(queryText, [req.params.id])
        .then(() => {
            console.log('router PUT (getDescription) successful');
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('router PUT (getDescription) error', err0r);
            res.sendStatus(500);
        });
});

// END PUT Route

// GET Route
router.get('/', (req, res) => {

    //res.send(galleryItems);
    const queryText = `SELECT * FROM gallery ORDER BY id ASC;`
    pool.query(queryText)
        .then(result => {
            console.log('router GET successful');
            res.send(result.rows);
        })
        .catch(error => {
            console.log('router GET error', error);
            res.sendStatus(500);
        });
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const galleryItem = {
        path: req.body.path,
        description: req.body.description,
    }
    const queryText = `INSERT INTO gallery
                        (path, description, likes, clicked)
                        VALUES
                        ($1, $2, 0, false)`
    pool.query(queryText, [galleryItem.path, galleryItem.description])
        .then(() => {
            console.log('router POST successful');
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('router POST error', error);
            res.sendStatus(500)
        })
});

module.exports = router;