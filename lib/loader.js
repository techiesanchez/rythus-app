var request = require('superagent');
var Promise = require('bluebird');


module.exports.load = function load(id) {
    var handleResponse = function handleResponse(err, body) {
        if (err) return err;
        return body;
    };

    if (id === 'cards.rewards') {
        request
            .get('cards.json')
            .end(handleResponse);
    }
};
