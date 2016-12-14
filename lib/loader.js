'use strict';

var path = require('path');
var request = require('superagent');
var markdown = require('markdown-it')();
var $ = require('jquery');
var _ = require('lodash');

var root = '../';



console.log('-- LOADER MODULE --');
console.log('root loader dir is ' + path.normalize(root));


module.exports.load = function load() {

    var listCards = function listCards(err, res) {
        if (err) {
            throw err;
        }
        var cards = res.body.cards;

        var randomPick = _.random(0, (cards.length-1));
        var randomCard = cards[randomPick];
        var title = randomCard.title || 'Untitled';
	var picture = randomCard.picture || null;
	var description;


	// if there is markdown descrip, use it
	// else if there is descrip, use it
	// else undef

	if (typeof randomCard.description_markdown !== 'undefined') {
	    description = markdown.render(randomCard.description_markdown);
	}
	else if (typeof randomCard.description_plaintext !== 'undefined') {
	    description = randomCard.description_plaintext;
	}
	else {
	    description = 'Undescribed';
	}

	if (!picture) {
	    picture = 'http://placekitten.com/350/350';
	}
	else {
	    picture = 'img/'+picture;
	}
	
	$( "div.card .title" ).html(title);
	$( "div.card .picture" ).html('<img src="'+picture+'" />');
	$( "div.card .description" ).html(description);
    };



    request
      .get('/cards.json')
      .end(listCards);
    
};


