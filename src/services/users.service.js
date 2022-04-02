const request = require('request');
var url = require('url');

const header = { 'user-agent': 'node.js' };

const getUsers = function (since, req, res) {
    const sinceCalc = since * 30;
    request('https://api.github.com/users?since=' + sinceCalc, { method: 'GET', headers: header }, (error, response, body) => {
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
    request(`https://api.github.com/users/${username}`, { method: 'GET', headers: header }, (error, response, body) => {
        res.send(JSON.parse(response.body));
    });
}

const getUserRepos = function (username, res) {
    request(`https://api.github.com/users/${username}/repos`, { method: 'GET', headers: header }, (error, response, body) => {
        res.send(JSON.parse(response.body));
    });
}

module.exports = {
    getUsers,
    getUserDetails,
    getUserRepos
};