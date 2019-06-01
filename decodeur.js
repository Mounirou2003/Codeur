const tradClé = require('./clefConstructeur');
function decoder(clef, message) {
    let clefTrad = tradClé.tradClé(clef)
    let msgTrad = `${TradMot(clefTrad, message)}`
    return msgTrad;
};
function TradMot(Clef, message) {
    let motTrad = ''
    let nombre = ''
    for (i = 0; i < message.length + 1; i++) {
        if (message[i] === '/') {
            if (nombre != '') {
                motTrad = `${motTrad}${Clef[nombre]}`
                nombre = ''
            }
            if (message[i + 1] === '/') {
                motTrad = motTrad + ' '
            } else {
                motTrad = motTrad + ''
            };
        } else if (typeof (message[i]) === 'undefined') {
            if (nombre != '') {
                motTrad = `${motTrad}${Clef[nombre]}`
                nombre = ''
            };
        } else {
            nombre = `${nombre}${donneChiffre(message[i])}`
        };
    };
    return motTrad;
};
function donneChiffre(lettre) {
    let Conv;
    if (lettre === '/') {
        Conv = lettre
    } else {
        Conv = JSON.parse(lettre, 'UTF8');
    };
    return Conv;
};
exports.decoder = decoder;