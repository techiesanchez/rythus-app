'use strict';

var markdown = require('markdown-it')();
var _ = require('lodash');
var loader = require('./loader');


var RewardCards = function RewardCards() {
    var self = this;
    self.deck = loader.load('cards.rewards');
    return self;
};




/**
 * get a random card
 *
 * @return {object} card - card object, (parsed json)
 */
RewardCards.prototype.getRandom = function getRandom() {
    var self = this;
    
    var deck = self.deck;

    var randomPick = _.random(0, (deck.length-1));
    var randomCard = deck[randomPick];
    
    return randomCard;
};

RewardCards.prototype.format = function format(cardJSON) {
    var self = this;

    var title = cardJSON.title || 'Untitled';
    var picture = cardJSON.picture || null;
    var description;


    // if there is markdown descrip, use it
    // else if there is descrip, use it
    // else undef
    
    var hasMarkdown = false;
    var hasPlaintext = false;
    
    if (typeof cardJSON.description_markdown !== 'undefined')
        hasMarkdown = true;
    else if (typeof cardJSON.description_plaintext !== 'undefined')
	hasPlaintext = true;
    
    
    // make sure we don't use an empty description
    if (hasMarkdown && cardJSON.description_markdown !== '')
        description = markdown.render(cardJSON.description_markdown);
    else if (hasPlaintext && cardJSON.description_plaintext !== '')
        description = cardJSON.description_plaintext;
    else
	description = 'Undescribed';
    
    
    if (!picture) {
	picture = 'http://placekitten.com/350/350';
    }
    else {
	picture = 'img/'+picture;
    }
    
    var formatted = { 
        description: description, 
        picture: picture,
        title: title
    };
    
    return formatted;
    
};

/**
 * get a card using its index in cards.json
 */
RewardCards.prototype.getCard = function getCard(index) {

};

module.exports = RewardCards;
