const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.actors.index);
router.get('/profile/:index', ctrl.actors.renderProfile);
router.get('/new', ctrl.actors.renderNewActor);
router.post('/',ctrl.actors.createActor);
router.put('/profile/:index',ctrl.actors.editProfile);

// router.delete('/profile/:index',ctrl.actors.deleteActor);


module.exports=router;