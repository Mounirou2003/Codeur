function nouvClée(clée) {
    if (clée.length === 52) {
            return {
                a: `${clée[0]}` + `${clée[1]}`,
                b: `${clée[2]}` + `${clée[3]}`,
                c: `${clée[4]}` + `${clée[5]}`,
                d: `${clée[6]}` + `${clée[7]}`,
                e: `${clée[8]}` + `${clée[9]}`,
                f: `${clée[10]}` + `${clée[11]}`,
                g: `${clée[12]}` + `${clée[13]}`,
                h: `${clée[14]}` + `${clée[15]}`,
                i: `${clée[16]}` + `${clée[17]}`,
                j: `${clée[18]}` + `${clée[19]}`,
                k: `${clée[20]}` + `${clée[21]}`,
                l: `${clée[22]}` + `${clée[23]}`,
                m: `${clée[24]}` + `${clée[25]}`,
                n: `${clée[26]}` + `${clée[27]}`,
                o: `${clée[28]}` + `${clée[29]}`,
                p: `${clée[30]}` + `${clée[31]}`,
                q: `${clée[32]}` + `${clée[33]}`,
                r: `${clée[34]}` + `${clée[35]}`,
                s: `${clée[36]}` + `${clée[37]}`,
                t: `${clée[38]}` + `${clée[39]}`,
                u: `${clée[40]}` + `${clée[41]}`,
                v: `${clée[42]}` + `${clée[43]}`,
                w: `${clée[44]}` + `${clée[45]}`,
                x: `${clée[46]}` + `${clée[47]}`,
                y: `${clée[48]}` + `${clée[49]}`,
                z: `${clée[50]}` + `${clée[51]}`
            };
    } else {
        return `error`;
    };
};
function constrClée(Clef) {
    let fichier = tradClé(Clef);
    return `${fichier.a}${fichier.b}${fichier.c}${fichier.d}${fichier.e}${fichier.f}${fichier.g}${fichier.h}${fichier.i}${fichier.j}${fichier.k}${fichier.l}${fichier.m}${fichier.n}${fichier.o}${fichier.p}${fichier.q}${fichier.r}${fichier.s}${fichier.t}${fichier.u}${fichier.v}${fichier.w}${fichier.x}${fichier.y}${fichier.z}`;
};
function tradClé(fichierObj) {
    let fichierTraduit = {}
    let Arrai=Object.keys(fichierObj)
    Arrai.forEach(nom => {
        fichierTraduit[fichierObj[nom]] = nom;
    });
    return fichierTraduit;
}
exports.nouvClée = nouvClée;
exports.constrClée = constrClée;
exports.tradClé=tradClé;