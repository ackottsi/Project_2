const express = require('express');
const router = express.Router();//creates a router object
const ctrl = require('../controllers');

router.get('/', ctrl.movies.index);
router.get('/new', ctrl.movies.renderNew);
router.get('/:index', ctrl.movies.show);
// router.post('/', ctrl.movies.postMovie);
// router.delete('/:index', ctrl.movies.removeMovie);
router.get('/:index/edit', ctrl.movies.renderEdit);
router.put('/:index', ctrl.movies.editMovie);

module.exports = router;