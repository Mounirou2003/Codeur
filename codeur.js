const codeur = require('./codage')
const newKey = require('./clefConstructeur')
const decodeur = require('./decodeur')
function coder(clée, phrase) {
    if (newKey.nouvClée(clée) === 'error') {
        return `"${clée}" est incorrecte`
    } else {
        return codeur.coder(newKey.nouvClée(clée), phrase);
    };
};
function decoder(clée, message) {
    if (newKey.nouvClée(clée) === 'error') {
        return `"${clée}" est incorrecte`
    } else {
        return decodeur.decoder(newKey.nouvClée(clée), message);
    };
};
function constrClée(ObjClef) {
    return newKey.constrClée(ObjClef);
};
exports.decoder = decoder;
exports.coder = coder;
exports.constrClée = constrClée;