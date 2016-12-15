var $ = require('jquery');
var RewardCards = require('./cards-rewards');
var Rythus = window.Rythus || {};





Rythus.getRandomCard = function getRandomCard() {

    console.log('-- getRandomCard() --');
    var rewardCards = new RewardCards();
    var randomCard = rewardCards.getRandom()

    randomCard.then(function(card) {
        console.log('random card is');
        console.log(card);

        var fCard = rewardCards.format(card);

        $( "div.card .title" ).html(fCard.title);
        $( "div.card .picture" ).html('<img src="'+fCard.picture+'" />');
        $( "div.card .description" ).html(fCard.description);
    });




}


window.Rythus = Rythus;

// @todo something like this -- 
// RewardCards.getRandom()
