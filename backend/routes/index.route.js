const express = require('express');
const router = express.Router();

const offerController = require("../controllers/offer.controller")

router.get('/offers', offerController.getOffers);
router.get('/create_offer', offerController.createOffers);
router.get('/update_offer', offerController.updateOffers);
router.get('/delete_offer', offerController.deleteOffers)

module.exports = router;