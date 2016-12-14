'use strict';

var path = require('path');
var request = require('superagent');
var markdown = require('markdown-it')();
var $ = require('jquery');
var _ = require('lodash');

var root = '../';



console.log('-- LOADER MODULE is a GO --');
console.log('root loader dir is ' + path.normalize(root));


module.exports.load = function load() {

    var listCards = function listCards(err, res) {
        if (err) throw err;

        var cards = res.body.cards;

        var randomPick = _.random(0, (cards.length-1));
        var randomCard = cards[randomPick];
        var title = randomCard.title || 'Untitled';
	var picture = randomCard.picture || null;
	var description;


	// if there is markdown descrip, use it
	// else if there is descrip, use it
	// else undef
        
        var hasMarkdown = false;
        var hasPlaintext = false;
        
	if (typeof randomCard.description_markdown !== 'undefined')
            hasMarkdown = true;
	else if (typeof randomCard.description_plaintext !== 'undefined')
	    hasPlaintext = true;


        // make sure we don't use an empty description
        if (hasMarkdown && randomCard.description_markdown !== '')
            description = markdown.render(randomCard.description_markdown);
        else if (hasPlaintext && randomCard.description_plaintext !== '')
            description = randomCard.description_plaintext;
        else
	    description = 'Undescribed';


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
        .get('cards.json')
        .end(listCards);
    
};


