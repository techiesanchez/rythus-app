

/**
 * join cards JSON into one JSON file
 */
module.exports = function Bundler(data, meta) {
    //console.log('%s, %s', data, meta);
    //console.log(data);
    //console.log('bundling %s', data.length);
    
    var cardsOutput = { 
        resources: [],
        settlements: [],
        battallions: [],
        heros: [],
        merchants: [],
        dungeons: [],
        villains: [],
        monsters: [],
        encounters: [],
        rewards: []
    };
    
    Object.keys(data).forEach(function(keyName) {
        var category = keyName.split('/')[0];
        console.log('%s\'s category is %s', keyName, category);
        switch (category) {
        case 'resource':
          cardsOutput.resources.push(data[keyName]); break;
        case 'settlement':
          cardsOutput.settlements.push(data[keyName]); break;
        case 'battallion':
          cardsOutput.battallions.push(data[keyName]); break;
        case 'hero':
          cardsOutput.heros.push(data[keyName]); break;
        case 'merchant':
          cardsOutput.merchants.push(data[keyName]); break;
        case 'dungeon':
          cardsOutput.dungeons.push(data[keyName]); break;
        case 'villain':
          cardsOutput.villains.push(data[keyName]); break;
        case 'monster':
          cardsOutput.monsters.push(data[keyName]); break;
        case 'encounter':
          cardsOutput.encounters.push(data[keyName]); break;
        case 'reward':
          cardsOutput.rewards.push(data[keyName]); break;
        default:
          console.log('WARNING: unrecognized card category %s (%s)', category, data[keyName]);
        }
    });
    return new Buffer.from(JSON.stringify(cardsOutput), 'utf8');
};
