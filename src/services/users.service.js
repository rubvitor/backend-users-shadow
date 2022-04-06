const request = require('request');

const header = { 'user-agent': 'node.js' };

const auth = 'client_id=Iv1.77616772f88120cf&client_secret=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';

const getUsers = function (since, req, res) {
    const sinceCalc = since * 30;
    request('https://api.github.com/users?since=' + sinceCalc + '&' + auth, { method: 'GET', headers: header }, (error, response, body) => {
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
    request(`https://api.github.com/users/${username}?` + auth, { method: 'GET', headers: header }, (error, response, body) => {
        res.send(JSON.parse(response.body));
    });
}

const getUserRepos = function (username, res) {
    request(`https://api.github.com/users/${username}/repos?` + auth, { method: 'GET', headers: header }, (error, response, body) => {
        res.send(JSON.parse(response.body));
    });
}

module.exports = {
    getUsers,
    getUserDetails,
    getUserRepos
};