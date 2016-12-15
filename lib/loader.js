var request = require('request-promise');
var Promise = require('bluebird');
var url = require('url');


module.exports.load = function load(id) {
    var href = document.location.href;

    var handleError = function handleError(err) {
        console.log('got an error while making loader request');
        console.log(err);
    };

    var handleResponse = function handleResponse(body) {
        console.log('handling loader res');
        return body;
    };


    if (id === 'cards.rewards') {
        console.log('LOADER loading cards.rewards');
        
        var reqOpts = {
            uri: url.resolve(href, '/cards.json'),
            json: true
        };
        return request(reqOpts)
            .catch(handleError)
            .then(handleResponse);
    }
};
