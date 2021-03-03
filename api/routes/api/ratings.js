const express = require('express');
const router = express.Router();
const ratingController = require('../../controllers/ratingController');

router
  .get('/', ratingController.getAllRatings)
  .post('/', ratingController.createUsersRating);

router
  .get('/:id', ratingController.getRatingByUserId)
  .patch('/:id', ratingController.updateUserRating);

module.exports = router;
