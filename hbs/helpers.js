const hbs = require('hbs');

hbs.registerHelper('getAny', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {

    let paraules = texto.split(' ');
    paraules.forEach((paraula, idx) => {
        paraules[idx] = paraula.charAt(0).toUpperCase() + paraula.slice(1).toLowerCase();
    });

    return paraules.join(' ');
})