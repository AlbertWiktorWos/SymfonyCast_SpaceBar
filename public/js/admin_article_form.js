Dropzone.autoDiscover = false; //That tells Dropzone to not automatically configure itself on any form that has the dropzone class


class ReferenceList
{
    constructor($element) {
        this.$element = $element;
        this.references = [];
        this.render();

        // set an listener to click on delete button
        this.$element.on('click', '.js-reference-delete', (event) => {
            this.handleReferenceDelete(event);
        });

        $.ajax({ //we get data from element that has url to our endpoint in ArticleReferenceAdminController
            url: this.$element.data('url')
        }).then(data => {
            this.references = data;
            this.render();
        })
    }

    // we want to add new reference to the list
    addReference(reference) {
        this.references.push(reference);
        this.render();
    }

    // we push an ajax request to the /admin/article/references to delete reference find by pushed reference.id
    handleReferenceDelete(event) {
        const $li = $(event.currentTarget).closest('.list-group-item');
        const id = $li.data('id');
        $li.addClass('disabled');
        $.ajax({
            url: '/admin/article/references/'+id,
            method: 'DELETE'
        }).then(() => {
            this.references = this.references.filter(reference => {
                return reference.id !== id;
            });
            //after delete render new list
            this.render();
        });
    }

    //this what we show before dynamism - this fragment was from edit.html.twig
    render() {
        const itemsHtml = this.references.map(reference => {
            return `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-id="${reference.id}">
            ${reference.orginalFilename} 
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

$(document).ready(function() {


    // we create new ReferenceList object (@see class above) with our list @see templates/article_admin/edit.html.twig
    var referenceList = new ReferenceList($('.js-reference-list'));
    // we want to initializeDropzone manually
    initializeDropzone(referenceList);

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
}