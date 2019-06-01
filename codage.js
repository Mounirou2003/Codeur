function coder(obj, phrase) {
    let phraseCodée = '';
    for (let i = 0; i < phrase.length; i++) {
        let lettre = phrase[i].toLowerCase();
        if (i === 0) {
            phraseCodée = `${coderLettre(obj, lettre)}`;
        } else {
            phraseCodée = `${phraseCodée}` + '/' + `${coderLettre(obj, lettre)}`;
        };
    };
    return phraseCodée;
};
function coderLettre(clées, letter) {
    let nbLettre
    if (typeof (clées[letter]) != 'undefined') {
        nbLettre = clées[letter];
    } else if (letter === ' ') {
        nbLettre = '';
    } else {
        nbLettre = letter;
    };
    return nbLettre;
};
exports.coder = coder;