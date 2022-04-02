const request = require('request');

const header = { 'user-agent': 'node.js' };

const getUsers = function (since, req, res) {
    const sinceCalc = since * 30;
    request('https://api.github.com/users?since=' + sinceCalc + '&client_id=e1b8c9ab25870d8f825d&client_secret=9d7a832bf65a58d26cc0022fad0f323ed1a61398', { method: 'GET', headers: header }, (error, response, body) => {
        const next = Number(since) + 1;
        const previous = since == 0 ? 0 : since - 1;
        const baseUrl = 'https://' + req.headers.host;
        const current = Number(since);
        res.send({
            body: JSON.parse(response.body),
            current: current,
            previous: baseUrl + '/users?since=' + previous,
            next: baseUrl + '/users?since=' + next
        });
    });
}

const getUserDetails = function (username, res) {
    request(`https://api.github.com/users/${username}` + '?client_id=e1b8c9ab25870d8f825d&client_secret=9d7a832bf65a58d26cc0022fad0f323ed1a61398', { method: 'GET', headers: header }, (error, response, body) => {
        res.send(JSON.parse(response.body));
    });
}

const getUserRepos = function (username, res) {
    request(`https://api.github.com/users/${username}/repos` + '?client_id=e1b8c9ab25870d8f825d&client_secret=9d7a832bf65a58d26cc0022fad0f323ed1a61398', { method: 'GET', headers: header }, (error, response, body) => {
        res.send(JSON.parse(response.body));
    });
}

module.exports = {
    getUsers,
    getUserDetails,
    getUserRepos
};