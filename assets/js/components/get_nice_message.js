/**
 Unlike PHP, in JavaScript, each file that you want to use somewhere else needs to export something,
 like a function, object, or even a string. Do that by saying module.exports and then the thing you want to export.
 Let's create a function() with one argument exclamationCount:
 * @param exclamationCount
 * @returns {string}
 */

/*
module.exports = function(exclamationCount) {
    return 'Hello Webpack Encore! Edit me in assets/js/app.js'+'!'.repeat(exclamationCount);
};
*/
// or we can use
export default function(exclamationCount) {
    return 'Hello Webpack Encore! Edit me in assets/js/app.js'+'!'.repeat(exclamationCount);
};