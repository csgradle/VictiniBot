const chart = {
    normal: '**Vulnerable to:** fighting \n**Resistant to: **ghost', 
    fire: '**Vulnerable to: ** water, ground, rock\n**Resistant to: **fire, grass, ice, bug, steel, fairy', 
    water: '**Vulnerable to: ** grass, electric\n**Resistant to: **fire, water, ice, steel', 
    grass: '**Vulnerable to: ** fire, ice, poison, flying, bug\n**Resistant to: **water, grass, electric, ground', 
    electric: '**Vulnerable to: ** ground\n**Resistant to: **electric, flying, steel', 
    ice: '**Vulnerable to: ** fire, fighting, rock, steel\n**Resistant to: **ice', 
    fighting: '**Vulnerable to: **flying, psychic, fairy\n**Resistant to: **bug, rock, dark', 
    poison: '**Vulnerable to: ** ground, psychic\n**Resistant to: **grass, fighting, poison, bug, fairy', 
    ground: '**Vulnerable to: ** water, grass, ice\n**Resistant to: **electric, poison, rock', 
    flying: '**Vulnerable to: ** electric, ice, rock\n**Resistant to: **grass, fighting, ground, bug', 
    psychic: '**Vulnerable to: ** bug, ghost, dark\n**Resistant to: **fighting, psychic', 
    bug: '**Vulnerable to: ** fire, flying, rock\n**Resistant to: **grass, fighting, ground', 
    rock: '**Vulnerable to: ** water, grass, fighting, ground, steel\n**Resistant to: ** normal, fire, poison, flying', 
    ghost: '**Vulnerable to: ** ghost, dark\n**Resistant to: **normal, fighting, poison, bug', 
    dragon: '**Vulnerable to: ** ice, dragon, fairy\n**Resistant to: **fire, water, grass, electric', 
    dark: '**Vulnerable to: ** fighting, bug, fairy\n**Resistant to: **psychic, ghost, dark', 
    steel: '**Vulnerable to: ** fire, fighting, ground\n**Resistant to: **normal, grass, ice, poison, flying, psychic, bug, rock, dragon, steel, fairy', 
    fairy: '**Vulnerable to: ** poison, steel\n**Resistant to: **fighting, bug, dragon, dark', 
}
module.exports = {
    name: "type",
    description: "gets information on a pokemon type. use v!type to see all types.",
    aliases: [],
    usage: '[type]',
    execute(msg, args) {
        if(args.length == 0) {
            msg.channel.send('Try again with the pokemon type you want information for.\nAll types: normal, fire, water, grass, electric, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, dark, steel, fairy.');
        } else if(args.length > 0) {
            if(!(args[0] in chart)) {
                msg.channel.send('invalid type!');
            }
            let output = chart[args[0]];
            msg.channel.send(output);
        }
    }
}