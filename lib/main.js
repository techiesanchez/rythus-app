var $ = require('jquery');
var RewardCards = require('./cards-rewards');
var Rythus = window.Rythus || {};


Rythus.rewardCards = new RewardCards();


Rythus.getRandomCard = function getRandomCard() {

    console.log('-- getRandomCard() --');
    var randomCard = Rythus.rewardCards.getRandom()

    randomCard.then(function(card) {
        console.log('random card is');
        console.log(card);

        var fCard = Rythus.rewardCards.format(card);

        $( "div.card .title" ).html(fCard.title);
        $( "div.card .picture" ).html('<img src="'+fCard.picture+'" />');
        $( "div.card .description" ).html(fCard.description);
    });




}


window.Rythus = Rythus;

// @todo something like this -- 
// RewardCards.getRandom()
