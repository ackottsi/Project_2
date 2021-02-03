const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/profile/:index', ctrl.actors.renderProfile);

module.exports=router;