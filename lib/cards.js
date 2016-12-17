/**
 * Cards Superclass
 */
var Cards = function Cards() {
    var self = this;
    self.deck = loader.load('cards.rewards')
                      .catch(function(err) {
                          console.log('there was an error while loading rewards cards');
                          console.log(err);
                      })
                      .then(function(cards) {
                          console.log('loaded rewards cards. cards--');
                          console.log(cards);
                          return cards;
                      });
    return self;
};



Cards.prototype.shuffle = function shuffle() {
    
};

Cards.prototype.getRandom = function getRandom() {
    var self = this;

};




/**
 * get a random card
 *
 * @return {object} card - card object, (parsed json)
 */
RewardCards.prototype.getRandom = function getRandom() {
    var self = this;
    
    return self.deck
               .then(function(deck) {
                   console.log('deck is %s', deck);
                   console.log(deck);
                   
                   var randomPick = _.random(0, (deck.cards.length-1));
                   var randomCard = deck.cards[randomPick];
                   
                   return randomCard;
               });
};
