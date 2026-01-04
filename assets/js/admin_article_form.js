import $ from 'jquery';
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'
import Sortable from 'sortablejs'
//import './components/algolia-autocomplete' now we export function so we need to use from
//without lazy dependencies: import autocomplete from './components/algolia-autocomplete'

Dropzone.autoDiscover = false; //That tells Dropzone to not automatically configure itself on any form that has the dropzone class


$(document).ready(function() {

    // now we use an export so lets check if we could use it than autocomplete
    const $autoComplete = $('.js-user-autocomplete');
    if (!$autoComplete.is(':disabled')) {
        //without lazy dependencies: autocomplete($autoComplete, 'users', 'email');
        import('./components/algolia-autocomplete').then((autocomplete) => {
            //we have to use default, because our import use export!
            autocomplete.default($autoComplete, 'users', 'email');
        });
    }

    const $referenceList = $('.js-reference-list');
    if ($referenceList[0]) {
        // we create new ReferenceList object (@see class above) with our list @see templates/article_admin/edit.html.twig
        var referenceList = new ReferenceList($('.js-reference-list'));
        // we want to initializeDropzone manually
        initializeDropzone(referenceList);
    }

    var $locationSelect = $('.js-article-form-location');
    var $specificLocationTarget = $('.js-specific-location-target');

    $locationSelect.on('change', function(e) {
        $.ajax({
            url: $locationSelect.data('specific-location-url'),
            data: {
                location: $locationSelect.val()
            },
            success: function (html) {
                if (!html) {
                    $specificLocationTarget.find('select').remove();
                    $specificLocationTarget.addClass('d-none');

                    return;
                }

                // Replace the current field and show
                $specificLocationTarget
                    .html(html)
                    .removeClass('d-none')
            }
        });
    });
});

class ReferenceList
{
    constructor($element) {
        this.$element = $element;
        this.sortable = Sortable.create(this.$element[0],//obj to handle a sortable functions, on constructor we passed first element of our list
            { // list of options @see https://cdnjs.com/libraries/Sortable and https://www.jsdelivr.com/package/npm/sortablejs
                handle: '.drag-handle', // we can only drag elements with class .drag-handle
                animation: 150, //its look more smoother
                onEnd: () => { //he knows the ids because we added data-id attribute to the li element!
                    $.ajax({
                        url: this.$element.data('url')+'/reorder',
                        method: 'POST',
                        data: JSON.stringify(this.sortable.toArray())
                    });
                }
            });
        this.references = [];
        this.dropzone = null;
        this.render();

        // set a listener to click on delete button
        this.$element.on('click', '.js-reference-delete', (event) => {
            this.handleReferenceDelete(event);
        });

        // set a listener if we edit the filename
        this.$element.on('blur', '.js-edit-filename', (event) => {
            this.handleReferenceEditFilename(event);
        });

        $.ajax({ //we get data from element that has url to our endpoint in ArticleReferenceAdminController
            url: this.$element.data('url')
        }).then(data => {
            this.references = data;
            this.render();
        })
    }

    setDropzone(dropzone) {
        this.dropzone = dropzone;
    }

    // we want to add new reference to the list
    addReference(reference) {
        this.references.push(reference);
        this.render();
    }

    // we push an ajax request to the /admin/article/references to delete reference find by pushed reference.id
    handleReferenceDelete(event) {
        // get the element that we wanted to delete
        const $li = $(event.currentTarget).closest('.list-group-item');
        const id = $li.data('id');
        $li.addClass('disabled');

        $.ajax({
            url: '/admin/article/references/'+id,
            method: 'DELETE'
        }).then(() => {

            if (this.dropzone) {
                const file = this.dropzone.files.find(f => f.id === id);
                if (file) {
                    this.dropzone.removeFile(file);
                }
            }

            this.references = this.references.filter(reference => {
                return reference.id !== id;
            });
            //after delete render new list
            this.render();
        });
    }

    handleReferenceEditFilename(event) {
        // get the element that we wanted to edit
        const $li = $(event.currentTarget).closest('.list-group-item');
        const id = $li.data('id');
        const reference = this.references.find(reference => {
            return reference.id === id;
        });
        // get the val of new filename and push it via ajax
        reference.originalFilename = $(event.currentTarget).val();
        $.ajax({
            url: '/admin/article/references/'+id,
            method: 'PUT',
            data: JSON.stringify(reference)
        });
    }

    //this what we show before dynamism - this fragment was from edit.html.twig
    render() {
        const itemsHtml = this.references.map(reference => {
            return `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${reference.id}">

             <!--  span with drag-handle class that we define as a class that can be drag to reordering in constructor of sorterObj -->
            <span class="drag-handle fa fa-reorder"></span>

             <!--  now we not only display but also let the user to edit name of the file ${reference.originalFilename} -->
                <input type="text" value="${reference.originalFilename}" class="form-control js-edit-filename" style="width: auto;">

            <span>
                      <!--  link to download an element -->
                <a href="/admin/article/references/${reference.id}/download" class="btn btn-link btn-sm"><span class="fa fa-download" style="vertical-align: middle"></span></a>
                       <!--  button to delete an element -->
                <button class="js-reference-delete btn btn-link btn-sm"><span class="fa fa-trash"></span></button>
            </span>
        </li>
        `
        });

        // add this html to our site overwriting the element with new data
        this.$element.html(itemsHtml.join(''));
    }
}

/**
 * Our configuration to dropzone
 * @param {ReferenceList} referenceList
 */
function initializeDropzone(referenceList) {
    // our form with our class
    var formElement = document.querySelector('.js-reference-dropzone');
    if (!formElement) {
        return;
    }
    // we create an dropzone on our element with our paramName that point to the reference "paramName"
    var dropzone = new Dropzone(formElement, {
        paramName: 'reference',
        init: function() {
            //handle the success by adding new Reference to the list of attachments
            this.on('success', function(file, data) {
                referenceList.addReference(data);
                file.id = data.id; // we add id to the file to be able to find and delete it later
            });
            //handle the error massage  and show us what happened
            this.on('error', function(file, data) {
                if (data.detail) {
                    // emit to show an error what happened
                    this.emit('error', file, data.detail);
                }
            });
        }
    });

    referenceList.setDropzone(dropzone);
}