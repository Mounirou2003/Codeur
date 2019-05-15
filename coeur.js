const codeur = require('./codage')
const newKey = require('./clefConstructeur')
function nouvClée(clée) {
    newKey.nouvClée(clée)
    return;
};
function coder(clée, phrase) {
    let phraseCodée = codeur.coder(clée, phrase);
    return phraseCodée;
};
function constrClée(FichierClef,confirm){
    let clée=newKey.constrClée(FichierClef,confirm);
    return clée;
}
exports.nouvClée = nouvClée;
exports.coder = coder;
exports.constrClée=constrClée;