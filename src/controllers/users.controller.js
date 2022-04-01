const usersService = require('../services/users.service');

const getUsers = function(req, res) {
    usersService.getUsers(req.query.since, req, res);
}

const getUserDetails = function(req, res) {
    usersService.getUserDetails(req.params.username, res);
}

const getUserRepos = function(req, res) {
    usersService.getUserRepos(req.params.username, res);
}

module.exports = {
    getUsers,
    getUserDetails,
    getUserRepos
};