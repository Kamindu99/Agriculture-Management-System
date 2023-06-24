const express = require('express');
const AgriSeed = require('../models/AgriSeed');
const router = express.Router();

router.post('/admin/add', (req, res) => {
    const newSeed = new AgriSeed({
        seedName: req.body.seedName,
        description: req.body.description,
        price: req.body.price,
        seedImage: req.body.seedImage
    });
    newSeed
        .save()
        .then(() => res.json("New Seed Added"))
        .catch((err) => res.status(400).json(`Error:${err}`));
});

router.get('/', (req, res) => {
    AgriSeed.find().exec((err, seed) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingSeed: seed
        });
    });
})

router.get('/admin/:id', (req, res) => {
    let seedId = req.params.id;
    AgriSeed.findById(seedId, (err, seed) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({
            success: true,
            seed
        });
    });
});

router.put('/admin/update/:id', (req, res) => {
    AgriSeed.findByIdAndUpdate(req.params.id)
        .then((seed) => {
            seed.seedName = req.body.seedName;
            seed.description = req.body.description;
            seed.price = req.body.price;
            seed.seedImage = req.body.seedImage;
            seed
                .save()
                .then(() => res.json("Seed details UPDATED successfully"))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});


router.delete('/admin/delete/:id', (req, res) => {
    AgriSeed.findByIdAndRemove(req.params.id).exec((err, deletedseed) => {
        if (err) return res.status(400).json({
            message: "Seed Delete unsuccesful", err
        });
        return res.json({
            message: "Seed Delete succesful", deletedseed
        });
    });
});




module.exports = router;