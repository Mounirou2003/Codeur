const fs = require('fs')
const NewKey = require('./clefConstructeur')
function coder(Clef, phrase) {
    if (fs.existsSync(`./node_modules/Key/${Clef}.json`)) {
        let phraseCodée = '';
        let obj = require(`./Key/${Clef}.json`);
        for (let i = 0; i < phrase.length; i++) {
            let lettre = phrase[i].toLowerCase();
            if (i === 0) {
                phraseCodée = `${coderLettre(obj, lettre)}`;
            } else {
                phraseCodée = `${phraseCodée}` + '/' + `${coderLettre(obj, lettre)}`;
            };
        };
        return phraseCodée;
    } else {
        NewKey.nouvClée(Clef);
        console.log('vous pouvez relancer le progamme')
        return "cette clée n'est pas reconnue";
    };
};
function coderLettre(clées, Letter) {
    let nbLettre;
    if (Letter === 'a') {
        nbLettre = clées.a;
    } else if (Letter === 'b') {
        nbLettre = clées.b;
    } else if (Letter === 'c') {
        nbLettre = clées.c;
    } else if (Letter === 'd') {
        nbLettre = clées.d
    } else if (Letter === 'e') {
        nbLettre = clées.e
    } else if (Letter === 'f') {
        nbLettre = clées.f
    } else if (Letter === 'g') {
        nbLettre = clées.g
    } else if (Letter === 'h') {
        nbLettre = clées.h
    } else if (Letter === 'i') {
        nbLettre = clées.i
    } else if (Letter === 'j') {
        nbLettre = clées.j
    } else if (Letter === 'k') {
        nbLettre = clées.k
    } else if (Letter === 'l') {
        nbLettre = clées.l
    } else if (Letter === 'm') {
        nbLettre = clées.m
    } else if (Letter === 'n') {
        nbLettre = clées.n
    } else if (Letter === 'o') {
        nbLettre = clées.o
    } else if (Letter === 'p') {
        nbLettre = clées.p
    } else if (Letter === 'q') {
        nbLettre = clées.q
    } else if (Letter === 'r') {
        nbLettre = clées.r
    } else if (Letter === 's') {
        nbLettre = clées.s
    } else if (Letter === 't') {
        nbLettre = clées.t
    } else if (Letter === 'u') {
        nbLettre = clées.u
    } else if (Letter === 'v') {
        nbLettre = clées.v
    } else if (Letter === 'w') {
        nbLettre = clées.w
    } else if (Letter === 'x') {
        nbLettre = clées.x
    } else if (Letter === 'y') {
        nbLettre = clées.y
    } else if (Letter === 'z') {
        nbLettre = clées.z
    } else if (Letter === ' ') {
        nbLettre = ''
    } else {
        nbLettre = Letter
    };
    return nbLettre;
};
exports.coder = coder;