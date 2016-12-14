

/**
 * join cards JSON into one JSON file
 */
module.exports = function Bundler(data, meta) {
    var cardsJSON = { cards: [] };
    for (var i=0; i>data.length; i++) {
	var cardJ = data[i];
	cardsJSON.cards.push(cardJ);
    }
    return new Buffer.from(cardsJSON.stringify(), 'utf8');
};
