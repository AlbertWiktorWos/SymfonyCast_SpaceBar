/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../css/app.scss';

// custom js
//we can make variable with our js file
//const getNiceMessageVariable = require('./js/get_nice_message.js');
//or jus import file
import getNiceMessage from './components/get_nice_message';

// we add jquery by yarn add jquery –dev
import $ from 'jquery';
import 'bootstrap'; // adds bootstrap library to our app
// uncomment if you have legacy code that needs global variables
//global.$ = $;

console.log(getNiceMessage(5));

$('.dropdown-toggle').dropdown();
// on custom file field change we want to set the added name
$('.custom-file-input').on('change', function(event) {
    var inputFile = event.currentTarget;
    $(inputFile).parent()
        .find('.custom-file-label')
        .html(inputFile.files[0].name);
});
