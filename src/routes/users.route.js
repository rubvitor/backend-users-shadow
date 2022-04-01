const express = require('express');
const router = express.Router({ mergeParams: true });

const usersController = require('../controllers/users.controller');

router.route('/')
    .get(usersController.getUsers);

router.route('/:username/details').get(usersController.getUserDetails);

router.route('/:username/repos').get(usersController.getUserRepos);

module.exports = router;