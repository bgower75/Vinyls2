const express = require('express');
const mongoose = require('mongoose');
const Router = express.Router;
const controller = new Router();
const logger = require('../../utils/logger');
const queryString = require('querystring');

const vinylSchema = require('../schema/vinyl');

const Vinyl = mongoose.model("Vinyl", vinylSchema);

//Find all vinyls
controller.get('/', async (req, res) => {
    try {
        const foundVinyls = await Vinyl.find();
        if (foundVinyls.length === 0) {
            logger.error(`No vinyls found`);
            res.status(404).json({
                // eslint-disable-next-line no-undef
                "message": `No vinyls found ${err}`
            });
        } else {
            res.send(foundVinyls);
        }
    }
    catch (err) {
        logger.error(`No vinyls found ${err}`);
        res.status(404).json({
            "message": `No vinyls found ${err}`
        });
    }
});

//Find a vinyl by ID
controller.get('/id/:id', async (req, res) => {
    try {
        const foundVinyl = await Vinyl.findById(req.params.id);
        res.send(foundVinyl);
    }
    catch (err) {
        logger.error(`No vinyl found with id ${req.params.id} ${err}`);
        res.status(404).json({
            "message": `No vinyl found with id ${req.params.id} ${err}`
        });
    }
});

//Find a vinyl by artist using query param
controller.get('/', async (req, res) => {

    // Access the provided query parameters
    let artist = queryString.parse(req.query.artist);

    // let vinyls = await Vinyl.findAll({artist: artist}).toArray(function(err, result) {

    //     result.send(vinyls);
    // });
    res.send(artist);

    // Return the articles to the rendering engine
    // res.send('index', {
    //     vinyls: vinyls
    // });
});

//Create a vinyl entry
controller.post('/', (req, res) => {
    const newVinyl = new Vinyl({
        name: req.body.name,
        artist: req.body.artist,
        year: req.body.year,
        genre: req.body.genre
    });
    newVinyl.validate((err) => {
        if(err) {
            logger.error(`Wrong format for creating a vinyl ${err}`);
            res.status(400).json({
                "message": `Wrong format for creating a vinyl ${err}`
            });
        } else {
            newVinyl.save();
            res.status(201).send(newVinyl);
        }
    });
});

//Delete a vinyl by id
controller.delete('/id/:id', async (req, res) => {
    try {
        const foundVinyl = await Vinyl.findByIdAndDelete(req.params.id);
        logger.info(`Vinyl ${foundVinyl} found and deleted successfully`);
        res.status(200).json({
            "message": `Vinyl ${foundVinyl} found and deleted successfully`
        });
    }
    catch (err) {
        logger.error(`No vinyl with id ${req.params.id} found ${err}`);
        res.status(404).json({
            "message": `No vinyl with id ${req.params.id} found ${err}`
        });
    }
});

//Update a vinyl
controller.put('/id/:id', async (req, res) => {
    const foundVinyl = await Vinyl.findById(req.params.id);

    foundVinyl.name = req.body.name || foundVinyl.name;
    foundVinyl.artist = req.body.artist || foundVinyl.artist;
    foundVinyl.year = req.body.year || foundVinyl.year;
    foundVinyl.genre = req.body.genre || foundVinyl.genre;

    try {
        foundVinyl.validate((err) => {
            if(err) {
                logger.error(`Wrong format for updating a vinyl ${err}`);
                res.status(400).json({
                    "message": `Wrong format for updating a vinyl ${err}`
                });
            } else {
                foundVinyl.save();
                res.send(foundVinyl);
            }
        });
    }

    catch (err) {
        logger.error(`No vinyl with id ${req.params.id} found ${err}`);
        res.status(404).json({
            "message": `No vinyl with id ${req.params.id} found ${err}`
        });
    }
});

module.exports = controller;