const router = require('express').Router();
let Biography = require('../models/biography.model');

router.route('/').get((req, res) => {
  Biography.find()
    .then(biography => res.json(biography))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const topic=req.body.topic;
  const tag=req.body.tag;
  const about=req.body.about;
  const learntrait=req.body.learntrait;
  const description = req.body.description;

  const newBiography = new Biography({
    username,
    topic,
    tag,
    about,
    learntrait,
    description,
  });

  newBiography.save()
  .then(() => res.json('Biography added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Biography.findById(req.params.id)
    .then(biography => res.json(biography))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Biography.findByIdAndDelete(req.params.id)
    .then(() => res.json(' Biography deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Biography.findById(req.params.id)
    .then( biography => {
       biography.username = req.body.username;
       biography.description = req.body.description;
       biography.topic=req.body.topic;
       biography.tag=req.body.tag;
       biography.learntrait=req.body.learntrait;
       biography.about=req.body.about;

      biography.save()
        .then(() => res.json('Biography updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;