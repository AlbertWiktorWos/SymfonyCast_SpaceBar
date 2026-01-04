(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin_article_form"],{

/***/ "./assets/js/admin_article_form.js":
/*!*****************************************!*\
  !*** ./assets/js/admin_article_form.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_13__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }














 //import './components/algolia-autocomplete' now we export function so we need to use from
//without lazy dependencies: import autocomplete from './components/algolia-autocomplete'

dropzone__WEBPACK_IMPORTED_MODULE_11___default.a.autoDiscover = false; //That tells Dropzone to not automatically configure itself on any form that has the dropzone class

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ready(function () {
  // now we use an export so lets check if we could use it than autocomplete
  var $autoComplete = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-user-autocomplete');

  if (!$autoComplete.is(':disabled')) {
    //without lazy dependencies: autocomplete($autoComplete, 'users', 'email');
    Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./components/algolia-autocomplete */ "./assets/js/components/algolia-autocomplete.js")).then(function (autocomplete) {
      //we have to use default, because our import use export!
      autocomplete.default($autoComplete, 'users', 'email');
    });
  }

  var $referenceList = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-reference-list');

  if ($referenceList[0]) {
    // we create new ReferenceList object (@see class above) with our list @see templates/article_admin/edit.html.twig
    var referenceList = new ReferenceList(jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-reference-list')); // we want to initializeDropzone manually

    initializeDropzone(referenceList);
  }

  var $locationSelect = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-article-form-location');
  var $specificLocationTarget = jquery__WEBPACK_IMPORTED_MODULE_10___default()('.js-specific-location-target');
  $locationSelect.on('change', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
      url: $locationSelect.data('specific-location-url'),
      data: {
        location: $locationSelect.val()
      },
      success: function success(html) {
        if (!html) {
          $specificLocationTarget.find('select').remove();
          $specificLocationTarget.addClass('d-none');
          return;
        } // Replace the current field and show


        $specificLocationTarget.html(html).removeClass('d-none');
      }
    });
  });
});

var ReferenceList = /*#__PURE__*/function () {
  function ReferenceList($element) {
    var _this = this;

    _classCallCheck(this, ReferenceList);

    this.$element = $element;
    this.sortable = sortablejs__WEBPACK_IMPORTED_MODULE_13___default.a.create(this.$element[0], //obj to handle a sortable functions, on constructor we passed first element of our list
    {
      // list of options @see https://cdnjs.com/libraries/Sortable and https://www.jsdelivr.com/package/npm/sortablejs
      handle: '.drag-handle',
      // we can only drag elements with class .drag-handle
      animation: 150,
      //its look more smoother
      onEnd: function onEnd() {
        //he knows the ids because we added data-id attribute to the li element!
        jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
          url: _this.$element.data('url') + '/reorder',
          method: 'POST',
          data: JSON.stringify(_this.sortable.toArray())
        });
      }
    });
    this.references = [];
    this.dropzone = null;
    this.render(); // set a listener to click on delete button

    this.$element.on('click', '.js-reference-delete', function (event) {
      _this.handleReferenceDelete(event);
    }); // set a listener if we edit the filename

    this.$element.on('blur', '.js-edit-filename', function (event) {
      _this.handleReferenceEditFilename(event);
    });
    jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
      //we get data from element that has url to our endpoint in ArticleReferenceAdminController
      url: this.$element.data('url')
    }).then(function (data) {
      _this.references = data;

      _this.render();
    });
  }

  _createClass(ReferenceList, [{
    key: "setDropzone",
    value: function setDropzone(dropzone) {
      this.dropzone = dropzone;
    } // we want to add new reference to the list

  }, {
    key: "addReference",
    value: function addReference(reference) {
      this.references.push(reference);
      this.render();
    } // we push an ajax request to the /admin/article/references to delete reference find by pushed reference.id

  }, {
    key: "handleReferenceDelete",
    value: function handleReferenceDelete(event) {
      var _this2 = this;

      // get the element that we wanted to delete
      var $li = jquery__WEBPACK_IMPORTED_MODULE_10___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      $li.addClass('disabled');
      jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
        url: '/admin/article/references/' + id,
        method: 'DELETE'
      }).then(function () {
        if (_this2.dropzone) {
          var file = _this2.dropzone.files.find(function (f) {
            return f.id === id;
          });

          if (file) {
            _this2.dropzone.removeFile(file);
          }
        }

        _this2.references = _this2.references.filter(function (reference) {
          return reference.id !== id;
        }); //after delete render new list

        _this2.render();
      });
    }
  }, {
    key: "handleReferenceEditFilename",
    value: function handleReferenceEditFilename(event) {
      // get the element that we wanted to edit
      var $li = jquery__WEBPACK_IMPORTED_MODULE_10___default()(event.currentTarget).closest('.list-group-item');
      var id = $li.data('id');
      var reference = this.references.find(function (reference) {
        return reference.id === id;
      }); // get the val of new filename and push it via ajax

      reference.originalFilename = jquery__WEBPACK_IMPORTED_MODULE_10___default()(event.currentTarget).val();
      jquery__WEBPACK_IMPORTED_MODULE_10___default.a.ajax({
        url: '/admin/article/references/' + id,
        method: 'PUT',
        data: JSON.stringify(reference)
      });
    } //this what we show before dynamism - this fragment was from edit.html.twig

  }, {
    key: "render",
    value: function render() {
      var itemsHtml = this.references.map(function (reference) {
        return "\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\" data-id=\"".concat(reference.id, "\">\n\n             <!--  span with drag-handle class that we define as a class that can be drag to reordering in constructor of sorterObj -->\n            <span class=\"drag-handle fa fa-reorder\"></span>\n\n             <!--  now we not only display but also let the user to edit name of the file ").concat(reference.originalFilename, " -->\n                <input type=\"text\" value=\"").concat(reference.originalFilename, "\" class=\"form-control js-edit-filename\" style=\"width: auto;\">\n\n            <span>\n                      <!--  link to download an element -->\n                <a href=\"/admin/article/references/").concat(reference.id, "/download\" class=\"btn btn-link btn-sm\"><span class=\"fa fa-download\" style=\"vertical-align: middle\"></span></a>\n                       <!--  button to delete an element -->\n                <button class=\"js-reference-delete btn btn-link btn-sm\"><span class=\"fa fa-trash\"></span></button>\n            </span>\n        </li>\n        ");
      }); // add this html to our site overwriting the element with new data

      this.$element.html(itemsHtml.join(''));
    }
  }]);

  return ReferenceList;
}();
/**
 * Our configuration to dropzone
 * @param {ReferenceList} referenceList
 */


function initializeDropzone(referenceList) {
  // our form with our class
  var formElement = document.querySelector('.js-reference-dropzone');

  if (!formElement) {
    return;
  } // we create an dropzone on our element with our paramName that point to the reference "paramName"


  var dropzone = new dropzone__WEBPACK_IMPORTED_MODULE_11___default.a(formElement, {
    paramName: 'reference',
    init: function init() {
      //handle the success by adding new Reference to the list of attachments
      this.on('success', function (file, data) {
        referenceList.addReference(data);
        file.id = data.id; // we add id to the file to be able to find and delete it later
      }); //handle the error massage  and show us what happened

      this.on('error', function (file, data) {
        if (data.detail) {
          // emit to show an error what happened
          this.emit('error', file, data.detail);
        }
      });
    }
  });
  referenceList.setDropzone(dropzone);
}

/***/ })

},[["./assets/js/admin_article_form.js","runtime","vendors~admin_article_form~app~article_show","vendors~admin_article_form~app","vendors~admin_article_form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW5fYXJ0aWNsZV9mb3JtLmpzIl0sIm5hbWVzIjpbIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkYXV0b0NvbXBsZXRlIiwiaXMiLCJ0aGVuIiwiYXV0b2NvbXBsZXRlIiwiZGVmYXVsdCIsIiRyZWZlcmVuY2VMaXN0IiwicmVmZXJlbmNlTGlzdCIsIlJlZmVyZW5jZUxpc3QiLCJpbml0aWFsaXplRHJvcHpvbmUiLCIkbG9jYXRpb25TZWxlY3QiLCIkc3BlY2lmaWNMb2NhdGlvblRhcmdldCIsIm9uIiwiZSIsImFqYXgiLCJ1cmwiLCJkYXRhIiwibG9jYXRpb24iLCJ2YWwiLCJzdWNjZXNzIiwiaHRtbCIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJGVsZW1lbnQiLCJzb3J0YWJsZSIsIlNvcnRhYmxlIiwiY3JlYXRlIiwiaGFuZGxlIiwiYW5pbWF0aW9uIiwib25FbmQiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwidG9BcnJheSIsInJlZmVyZW5jZXMiLCJkcm9wem9uZSIsInJlbmRlciIsImV2ZW50IiwiaGFuZGxlUmVmZXJlbmNlRGVsZXRlIiwiaGFuZGxlUmVmZXJlbmNlRWRpdEZpbGVuYW1lIiwicmVmZXJlbmNlIiwicHVzaCIsIiRsaSIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiaWQiLCJmaWxlIiwiZmlsZXMiLCJmIiwicmVtb3ZlRmlsZSIsImZpbHRlciIsIm9yaWdpbmFsRmlsZW5hbWUiLCJpdGVtc0h0bWwiLCJtYXAiLCJqb2luIiwiZm9ybUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyYW1OYW1lIiwiaW5pdCIsImFkZFJlZmVyZW5jZSIsImRldGFpbCIsImVtaXQiLCJzZXREcm9wem9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZUFBS0MsSUFBTCxDQUFVLE9BQVYsRUFBbUJmLElBQW5CLEVBQXlCaEMsSUFBSSxDQUFDOEMsTUFBOUI7QUFDSDtBQUNKLE9BTEQ7QUFNSDtBQWZvQyxHQUExQixDQUFmO0FBa0JBdkQsZUFBYSxDQUFDeUQsV0FBZCxDQUEwQjNCLFFBQTFCO0FBQ0gsQyIsImZpbGUiOiJhZG1pbl9hcnRpY2xlX2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnXHJcbmltcG9ydCAnZHJvcHpvbmUvZGlzdC9kcm9wem9uZS5jc3MnXHJcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJ1xyXG4vL2ltcG9ydCAnLi9jb21wb25lbnRzL2FsZ29saWEtYXV0b2NvbXBsZXRlJyBub3cgd2UgZXhwb3J0IGZ1bmN0aW9uIHNvIHdlIG5lZWQgdG8gdXNlIGZyb21cclxuLy93aXRob3V0IGxhenkgZGVwZW5kZW5jaWVzOiBpbXBvcnQgYXV0b2NvbXBsZXRlIGZyb20gJy4vY29tcG9uZW50cy9hbGdvbGlhLWF1dG9jb21wbGV0ZSdcclxuXHJcbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlOyAvL1RoYXQgdGVsbHMgRHJvcHpvbmUgdG8gbm90IGF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGl0c2VsZiBvbiBhbnkgZm9ybSB0aGF0IGhhcyB0aGUgZHJvcHpvbmUgY2xhc3NcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBub3cgd2UgdXNlIGFuIGV4cG9ydCBzbyBsZXRzIGNoZWNrIGlmIHdlIGNvdWxkIHVzZSBpdCB0aGFuIGF1dG9jb21wbGV0ZVxyXG4gICAgY29uc3QgJGF1dG9Db21wbGV0ZSA9ICQoJy5qcy11c2VyLWF1dG9jb21wbGV0ZScpO1xyXG4gICAgaWYgKCEkYXV0b0NvbXBsZXRlLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgIC8vd2l0aG91dCBsYXp5IGRlcGVuZGVuY2llczogYXV0b2NvbXBsZXRlKCRhdXRvQ29tcGxldGUsICd1c2VycycsICdlbWFpbCcpO1xyXG4gICAgICAgIGltcG9ydCgnLi9jb21wb25lbnRzL2FsZ29saWEtYXV0b2NvbXBsZXRlJykudGhlbigoYXV0b2NvbXBsZXRlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vd2UgaGF2ZSB0byB1c2UgZGVmYXVsdCwgYmVjYXVzZSBvdXIgaW1wb3J0IHVzZSBleHBvcnQhXHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5kZWZhdWx0KCRhdXRvQ29tcGxldGUsICd1c2VycycsICdlbWFpbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0ICRyZWZlcmVuY2VMaXN0ID0gJCgnLmpzLXJlZmVyZW5jZS1saXN0Jyk7XHJcbiAgICBpZiAoJHJlZmVyZW5jZUxpc3RbMF0pIHtcclxuICAgICAgICAvLyB3ZSBjcmVhdGUgbmV3IFJlZmVyZW5jZUxpc3Qgb2JqZWN0IChAc2VlIGNsYXNzIGFib3ZlKSB3aXRoIG91ciBsaXN0IEBzZWUgdGVtcGxhdGVzL2FydGljbGVfYWRtaW4vZWRpdC5odG1sLnR3aWdcclxuICAgICAgICB2YXIgcmVmZXJlbmNlTGlzdCA9IG5ldyBSZWZlcmVuY2VMaXN0KCQoJy5qcy1yZWZlcmVuY2UtbGlzdCcpKTtcclxuICAgICAgICAvLyB3ZSB3YW50IHRvIGluaXRpYWxpemVEcm9wem9uZSBtYW51YWxseVxyXG4gICAgICAgIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJGxvY2F0aW9uU2VsZWN0ID0gJCgnLmpzLWFydGljbGUtZm9ybS1sb2NhdGlvbicpO1xyXG4gICAgdmFyICRzcGVjaWZpY0xvY2F0aW9uVGFyZ2V0ID0gJCgnLmpzLXNwZWNpZmljLWxvY2F0aW9uLXRhcmdldCcpO1xyXG5cclxuICAgICRsb2NhdGlvblNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJGxvY2F0aW9uU2VsZWN0LmRhdGEoJ3NwZWNpZmljLWxvY2F0aW9uLXVybCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogJGxvY2F0aW9uU2VsZWN0LnZhbCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XHJcbiAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jbGFzcyBSZWZlcmVuY2VMaXN0XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc29ydGFibGUgPSBTb3J0YWJsZS5jcmVhdGUodGhpcy4kZWxlbWVudFswXSwvL29iaiB0byBoYW5kbGUgYSBzb3J0YWJsZSBmdW5jdGlvbnMsIG9uIGNvbnN0cnVjdG9yIHdlIHBhc3NlZCBmaXJzdCBlbGVtZW50IG9mIG91ciBsaXN0XHJcbiAgICAgICAgICAgIHsgLy8gbGlzdCBvZiBvcHRpb25zIEBzZWUgaHR0cHM6Ly9jZG5qcy5jb20vbGlicmFyaWVzL1NvcnRhYmxlIGFuZCBodHRwczovL3d3dy5qc2RlbGl2ci5jb20vcGFja2FnZS9ucG0vc29ydGFibGVqc1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlOiAnLmRyYWctaGFuZGxlJywgLy8gd2UgY2FuIG9ubHkgZHJhZyBlbGVtZW50cyB3aXRoIGNsYXNzIC5kcmFnLWhhbmRsZVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsIC8vaXRzIGxvb2sgbW9yZSBzbW9vdGhlclxyXG4gICAgICAgICAgICAgICAgb25FbmQ6ICgpID0+IHsgLy9oZSBrbm93cyB0aGUgaWRzIGJlY2F1c2Ugd2UgYWRkZWQgZGF0YS1pZCBhdHRyaWJ1dGUgdG8gdGhlIGxpIGVsZW1lbnQhXHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLiRlbGVtZW50LmRhdGEoJ3VybCcpKycvcmVvcmRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh0aGlzLnNvcnRhYmxlLnRvQXJyYXkoKSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5kcm9wem9uZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGEgbGlzdGVuZXIgdG8gY2xpY2sgb24gZGVsZXRlIGJ1dHRvblxyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrJywgJy5qcy1yZWZlcmVuY2UtZGVsZXRlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVmZXJlbmNlRGVsZXRlKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGEgbGlzdGVuZXIgaWYgd2UgZWRpdCB0aGUgZmlsZW5hbWVcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdibHVyJywgJy5qcy1lZGl0LWZpbGVuYW1lJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVmZXJlbmNlRWRpdEZpbGVuYW1lKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJC5hamF4KHsgLy93ZSBnZXQgZGF0YSBmcm9tIGVsZW1lbnQgdGhhdCBoYXMgdXJsIHRvIG91ciBlbmRwb2ludCBpbiBBcnRpY2xlUmVmZXJlbmNlQWRtaW5Db250cm9sbGVyXHJcbiAgICAgICAgICAgIHVybDogdGhpcy4kZWxlbWVudC5kYXRhKCd1cmwnKVxyXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZXREcm9wem9uZShkcm9wem9uZSkge1xyXG4gICAgICAgIHRoaXMuZHJvcHpvbmUgPSBkcm9wem9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSB3YW50IHRvIGFkZCBuZXcgcmVmZXJlbmNlIHRvIHRoZSBsaXN0XHJcbiAgICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2gocmVmZXJlbmNlKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIHB1c2ggYW4gYWpheCByZXF1ZXN0IHRvIHRoZSAvYWRtaW4vYXJ0aWNsZS9yZWZlcmVuY2VzIHRvIGRlbGV0ZSByZWZlcmVuY2UgZmluZCBieSBwdXNoZWQgcmVmZXJlbmNlLmlkXHJcbiAgICBoYW5kbGVSZWZlcmVuY2VEZWxldGUoZXZlbnQpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIGVsZW1lbnQgdGhhdCB3ZSB3YW50ZWQgdG8gZGVsZXRlXHJcbiAgICAgICAgY29uc3QgJGxpID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbGkuZGF0YSgnaWQnKTtcclxuICAgICAgICAkbGkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hZG1pbi9hcnRpY2xlL3JlZmVyZW5jZXMvJytpZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZHJvcHpvbmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmRyb3B6b25lLmZpbGVzLmZpbmQoZiA9PiBmLmlkID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcHpvbmUucmVtb3ZlRmlsZShmaWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0gdGhpcy5yZWZlcmVuY2VzLmZpbHRlcihyZWZlcmVuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZS5pZCAhPT0gaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2FmdGVyIGRlbGV0ZSByZW5kZXIgbmV3IGxpc3RcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZWZlcmVuY2VFZGl0RmlsZW5hbWUoZXZlbnQpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIGVsZW1lbnQgdGhhdCB3ZSB3YW50ZWQgdG8gZWRpdFxyXG4gICAgICAgIGNvbnN0ICRsaSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnLmxpc3QtZ3JvdXAtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gJGxpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQocmVmZXJlbmNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZS5pZCA9PT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSB2YWwgb2YgbmV3IGZpbGVuYW1lIGFuZCBwdXNoIGl0IHZpYSBhamF4XHJcbiAgICAgICAgcmVmZXJlbmNlLm9yaWdpbmFsRmlsZW5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hZG1pbi9hcnRpY2xlL3JlZmVyZW5jZXMvJytpZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyB3aGF0IHdlIHNob3cgYmVmb3JlIGR5bmFtaXNtIC0gdGhpcyBmcmFnbWVudCB3YXMgZnJvbSBlZGl0Lmh0bWwudHdpZ1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zSHRtbCA9IHRoaXMucmVmZXJlbmNlcy5tYXAocmVmZXJlbmNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiIGRhdGEtaWQ9XCIke3JlZmVyZW5jZS5pZH1cIj5cclxuXHJcbiAgICAgICAgICAgICA8IS0tICBzcGFuIHdpdGggZHJhZy1oYW5kbGUgY2xhc3MgdGhhdCB3ZSBkZWZpbmUgYXMgYSBjbGFzcyB0aGF0IGNhbiBiZSBkcmFnIHRvIHJlb3JkZXJpbmcgaW4gY29uc3RydWN0b3Igb2Ygc29ydGVyT2JqIC0tPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyYWctaGFuZGxlIGZhIGZhLXJlb3JkZXJcIj48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgPCEtLSAgbm93IHdlIG5vdCBvbmx5IGRpc3BsYXkgYnV0IGFsc28gbGV0IHRoZSB1c2VyIHRvIGVkaXQgbmFtZSBvZiB0aGUgZmlsZSAke3JlZmVyZW5jZS5vcmlnaW5hbEZpbGVuYW1lfSAtLT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtyZWZlcmVuY2Uub3JpZ2luYWxGaWxlbmFtZX1cIiBjbGFzcz1cImZvcm0tY29udHJvbCBqcy1lZGl0LWZpbGVuYW1lXCIgc3R5bGU9XCJ3aWR0aDogYXV0bztcIj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSAgbGluayB0byBkb3dubG9hZCBhbiBlbGVtZW50IC0tPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hZG1pbi9hcnRpY2xlL3JlZmVyZW5jZXMvJHtyZWZlcmVuY2UuaWR9L2Rvd25sb2FkXCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS1kb3dubG9hZFwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZVwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgYnV0dG9uIHRvIGRlbGV0ZSBhbiBlbGVtZW50IC0tPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImpzLXJlZmVyZW5jZS1kZWxldGUgYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPjxzcGFuIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIGBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoaXMgaHRtbCB0byBvdXIgc2l0ZSBvdmVyd3JpdGluZyB0aGUgZWxlbWVudCB3aXRoIG5ldyBkYXRhXHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5odG1sKGl0ZW1zSHRtbC5qb2luKCcnKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPdXIgY29uZmlndXJhdGlvbiB0byBkcm9wem9uZVxyXG4gKiBAcGFyYW0ge1JlZmVyZW5jZUxpc3R9IHJlZmVyZW5jZUxpc3RcclxuICovXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KSB7XHJcbiAgICAvLyBvdXIgZm9ybSB3aXRoIG91ciBjbGFzc1xyXG4gICAgdmFyIGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlZmVyZW5jZS1kcm9wem9uZScpO1xyXG4gICAgaWYgKCFmb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHdlIGNyZWF0ZSBhbiBkcm9wem9uZSBvbiBvdXIgZWxlbWVudCB3aXRoIG91ciBwYXJhbU5hbWUgdGhhdCBwb2ludCB0byB0aGUgcmVmZXJlbmNlIFwicGFyYW1OYW1lXCJcclxuICAgIHZhciBkcm9wem9uZSA9IG5ldyBEcm9wem9uZShmb3JtRWxlbWVudCwge1xyXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlZmVyZW5jZScsXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIHRoZSBzdWNjZXNzIGJ5IGFkZGluZyBuZXcgUmVmZXJlbmNlIHRvIHRoZSBsaXN0IG9mIGF0dGFjaG1lbnRzXHJcbiAgICAgICAgICAgIHRoaXMub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihmaWxlLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VMaXN0LmFkZFJlZmVyZW5jZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGZpbGUuaWQgPSBkYXRhLmlkOyAvLyB3ZSBhZGQgaWQgdG8gdGhlIGZpbGUgdG8gYmUgYWJsZSB0byBmaW5kIGFuZCBkZWxldGUgaXQgbGF0ZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vaGFuZGxlIHRoZSBlcnJvciBtYXNzYWdlICBhbmQgc2hvdyB1cyB3aGF0IGhhcHBlbmVkXHJcbiAgICAgICAgICAgIHRoaXMub24oJ2Vycm9yJywgZnVuY3Rpb24oZmlsZSwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGV0YWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1pdCB0byBzaG93IGFuIGVycm9yIHdoYXQgaGFwcGVuZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZmlsZSwgZGF0YS5kZXRhaWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWZlcmVuY2VMaXN0LnNldERyb3B6b25lKGRyb3B6b25lKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=