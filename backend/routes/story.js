const router = require('express').Router();
let Story = require('../models/story.model');

router.route('/').get((req, res) => {
  Story.find()
    .then(story => res.json(story))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const topic=req.body.topic;
  const tag=req.body.tag;
  const keypoints=req.body.keypoints;
  const description = req.body.description;

  const newStory = new Story({
    username,
    topic,
    tag,
    keypoints,
    description,
  });

  newStory.save()
  .then(() => res.json('Story added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Story.findById(req.params.id)
    .then(story => res.json(story))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Story.findByIdAndDelete(req.params.id)
    .then(() => res.json(' Story deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Story.findById(req.params.id)
    .then( story => {
       story.username = req.body.username;
       story.description = req.body.description;
       story.topic=req.body.topic;
       story.tag=req.body.tag;
       story.keypoints=req.body.keypoints;

      story.save()
        .then(() => res.json('Story updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;