

/**
 * join cards JSON into one JSON file
 */
module.exports = function Bundler(data, meta) {
    console.log('%s, %s', data, meta);
    console.log(data);
    console.log('bundling %s', data.length);
    
    var cardsOutput = { cards: [] };
    
    Object.keys(data).forEach(function(keyName) {
	cardsOutput.cards.push(data[keyName]);
        console.log(data[keyName]);
    })
    return new Buffer.from(JSON.stringify(cardsOutput), 'utf8');
};
