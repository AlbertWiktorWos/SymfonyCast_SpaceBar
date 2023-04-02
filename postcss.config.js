/*
to use PostCSS, you need to create a postcss.config.js file.
 Encore walks you through that process and sets it up to use autoprefixer to start.
 but it require autoprefixer: yarn add autoprefixer --dev
 */
module.exports = {
    plugins: {
        'autoprefixer': {},
    }
}