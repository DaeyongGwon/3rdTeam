const express = require('express');
const controller = require('../controller/review');
const router = express.Router();

// GET localhost:8000/review
router.get('/review', controller.CgetReview);
// // POST localhost:8000/review/
router.post('/review/:user_id/:test_id', controller.createReview);
// // PATCH localhost:8000/review/:reviewId
router.patch('/review/:user_id/:review_id', controller.patchReview);
// // DELETE localhost:8000/review/:reviewId
// router.delete("/review/:reviewId", controller.Cdeletereview);

module.exports = router;
