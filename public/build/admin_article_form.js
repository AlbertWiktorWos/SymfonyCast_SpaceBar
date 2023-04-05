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
  } // we want to add new reference to the list


  _createClass(ReferenceList, [{
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

      reference.orginalFilename = jquery__WEBPACK_IMPORTED_MODULE_10___default()(event.currentTarget).val();
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
        return "\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\" data-id=\"".concat(reference.id, "\">\n\n             <!--  span with drag-handle class that we define as a class that can be drag to reordering in constructor of sorterObj -->\n            <span class=\"drag-handle fa fa-reorder\"></span>\n\n             <!--  now we not only display but also let the user to edit name of the file ").concat(reference.orginalFilename, " -->\n                <input type=\"text\" value=\"").concat(reference.orginalFilename, "\" class=\"form-control js-edit-filename\" style=\"width: auto;\">\n\n            <span>\n                      <!--  link to download an element -->\n                <a href=\"/admin/article/references/").concat(reference.id, "/download\" class=\"btn btn-link btn-sm\"><span class=\"fa fa-download\" style=\"vertical-align: middle\"></span></a>\n                       <!--  button to delete an element -->\n                <button class=\"js-reference-delete btn btn-link btn-sm\"><span class=\"fa fa-trash\"></span></button>\n            </span>\n        </li>\n        ");
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
      }); //handle the error massage  and show us what happened

      this.on('error', function (file, data) {
        if (data.detail) {
          // emit to show an error what happened
          this.emit('error', file, data.detail);
        }
      });
    }
  });
}

/***/ })

},[["./assets/js/admin_article_form.js","runtime","vendors~admin_article_form~app~article_show","vendors~admin_article_form~app","vendors~admin_article_form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW5fYXJ0aWNsZV9mb3JtLmpzIl0sIm5hbWVzIjpbIkRyb3B6b25lIiwiYXV0b0Rpc2NvdmVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkYXV0b0NvbXBsZXRlIiwiaXMiLCJ0aGVuIiwiYXV0b2NvbXBsZXRlIiwiZGVmYXVsdCIsIiRyZWZlcmVuY2VMaXN0IiwicmVmZXJlbmNlTGlzdCIsIlJlZmVyZW5jZUxpc3QiLCJpbml0aWFsaXplRHJvcHpvbmUiLCIkbG9jYXRpb25TZWxlY3QiLCIkc3BlY2lmaWNMb2NhdGlvblRhcmdldCIsIm9uIiwiZSIsImFqYXgiLCJ1cmwiLCJkYXRhIiwibG9jYXRpb24iLCJ2YWwiLCJzdWNjZXNzIiwiaHRtbCIsImZpbmQiLCJyZW1vdmUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJGVsZW1lbnQiLCJzb3J0YWJsZSIsIlNvcnRhYmxlIiwiY3JlYXRlIiwiaGFuZGxlIiwiYW5pbWF0aW9uIiwib25FbmQiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwidG9BcnJheSIsInJlZmVyZW5jZXMiLCJyZW5kZXIiLCJldmVudCIsImhhbmRsZVJlZmVyZW5jZURlbGV0ZSIsImhhbmRsZVJlZmVyZW5jZUVkaXRGaWxlbmFtZSIsInJlZmVyZW5jZSIsInB1c2giLCIkbGkiLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsImlkIiwiZmlsdGVyIiwib3JnaW5hbEZpbGVuYW1lIiwiaXRlbXNIdG1sIiwibWFwIiwiam9pbiIsImZvcm1FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImRyb3B6b25lIiwicGFyYW1OYW1lIiwiaW5pdCIsImZpbGUiLCJhZGRSZWZlcmVuY2UiLCJkZXRhaWwiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFFQUEs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QTJDO0FBQ3ZDO0FBQ0EsTUFBSTZDLFdBQVcsR0FBR3JELFFBQVEsQ0FBQ3NELGFBQVQsQ0FBdUIsd0JBQXZCLENBQWxCOztBQUNBLE1BQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNkO0FBQ0gsR0FMc0MsQ0FNdkM7OztBQUNBLE1BQUlFLFFBQVEsR0FBRyxJQUFJMUQsZ0RBQUosQ0FBYXdELFdBQWIsRUFBMEI7QUFDckNHLGFBQVMsRUFBRSxXQUQwQjtBQUVyQ0MsUUFBSSxFQUFFLGdCQUFXO0FBQ2I7QUFDQSxXQUFLNUMsRUFBTCxDQUFRLFNBQVIsRUFBbUIsVUFBUzZDLElBQVQsRUFBZXpDLElBQWYsRUFBcUI7QUFDcENULHFCQUFhLENBQUNtRCxZQUFkLENBQTJCMUMsSUFBM0I7QUFDSCxPQUZELEVBRmEsQ0FLYjs7QUFDQSxXQUFLSixFQUFMLENBQVEsT0FBUixFQUFpQixVQUFTNkMsSUFBVCxFQUFlekMsSUFBZixFQUFxQjtBQUNsQyxZQUFJQSxJQUFJLENBQUMyQyxNQUFULEVBQWlCO0FBQ2I7QUFDQSxlQUFLQyxJQUFMLENBQVUsT0FBVixFQUFtQkgsSUFBbkIsRUFBeUJ6QyxJQUFJLENBQUMyQyxNQUE5QjtBQUNIO0FBQ0osT0FMRDtBQU1IO0FBZG9DLEdBQTFCLENBQWY7QUFnQkgsQyIsImZpbGUiOiJhZG1pbl9hcnRpY2xlX2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSAnZHJvcHpvbmUnXHJcbmltcG9ydCAnZHJvcHpvbmUvZGlzdC9kcm9wem9uZS5jc3MnXHJcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJ1xyXG4vL2ltcG9ydCAnLi9jb21wb25lbnRzL2FsZ29saWEtYXV0b2NvbXBsZXRlJyBub3cgd2UgZXhwb3J0IGZ1bmN0aW9uIHNvIHdlIG5lZWQgdG8gdXNlIGZyb21cclxuLy93aXRob3V0IGxhenkgZGVwZW5kZW5jaWVzOiBpbXBvcnQgYXV0b2NvbXBsZXRlIGZyb20gJy4vY29tcG9uZW50cy9hbGdvbGlhLWF1dG9jb21wbGV0ZSdcclxuXHJcbkRyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlOyAvL1RoYXQgdGVsbHMgRHJvcHpvbmUgdG8gbm90IGF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGl0c2VsZiBvbiBhbnkgZm9ybSB0aGF0IGhhcyB0aGUgZHJvcHpvbmUgY2xhc3NcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBub3cgd2UgdXNlIGFuIGV4cG9ydCBzbyBsZXRzIGNoZWNrIGlmIHdlIGNvdWxkIHVzZSBpdCB0aGFuIGF1dG9jb21wbGV0ZVxyXG4gICAgY29uc3QgJGF1dG9Db21wbGV0ZSA9ICQoJy5qcy11c2VyLWF1dG9jb21wbGV0ZScpO1xyXG4gICAgaWYgKCEkYXV0b0NvbXBsZXRlLmlzKCc6ZGlzYWJsZWQnKSkge1xyXG4gICAgICAgIC8vd2l0aG91dCBsYXp5IGRlcGVuZGVuY2llczogYXV0b2NvbXBsZXRlKCRhdXRvQ29tcGxldGUsICd1c2VycycsICdlbWFpbCcpO1xyXG4gICAgICAgIGltcG9ydCgnLi9jb21wb25lbnRzL2FsZ29saWEtYXV0b2NvbXBsZXRlJykudGhlbigoYXV0b2NvbXBsZXRlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vd2UgaGF2ZSB0byB1c2UgZGVmYXVsdCwgYmVjYXVzZSBvdXIgaW1wb3J0IHVzZSBleHBvcnQhXHJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5kZWZhdWx0KCRhdXRvQ29tcGxldGUsICd1c2VycycsICdlbWFpbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0ICRyZWZlcmVuY2VMaXN0ID0gJCgnLmpzLXJlZmVyZW5jZS1saXN0Jyk7XHJcbiAgICBpZiAoJHJlZmVyZW5jZUxpc3RbMF0pIHtcclxuICAgICAgICAvLyB3ZSBjcmVhdGUgbmV3IFJlZmVyZW5jZUxpc3Qgb2JqZWN0IChAc2VlIGNsYXNzIGFib3ZlKSB3aXRoIG91ciBsaXN0IEBzZWUgdGVtcGxhdGVzL2FydGljbGVfYWRtaW4vZWRpdC5odG1sLnR3aWdcclxuICAgICAgICB2YXIgcmVmZXJlbmNlTGlzdCA9IG5ldyBSZWZlcmVuY2VMaXN0KCQoJy5qcy1yZWZlcmVuY2UtbGlzdCcpKTtcclxuICAgICAgICAvLyB3ZSB3YW50IHRvIGluaXRpYWxpemVEcm9wem9uZSBtYW51YWxseVxyXG4gICAgICAgIGluaXRpYWxpemVEcm9wem9uZShyZWZlcmVuY2VMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJGxvY2F0aW9uU2VsZWN0ID0gJCgnLmpzLWFydGljbGUtZm9ybS1sb2NhdGlvbicpO1xyXG4gICAgdmFyICRzcGVjaWZpY0xvY2F0aW9uVGFyZ2V0ID0gJCgnLmpzLXNwZWNpZmljLWxvY2F0aW9uLXRhcmdldCcpO1xyXG5cclxuICAgICRsb2NhdGlvblNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJGxvY2F0aW9uU2VsZWN0LmRhdGEoJ3NwZWNpZmljLWxvY2F0aW9uLXVybCcpLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbjogJGxvY2F0aW9uU2VsZWN0LnZhbCgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldC5maW5kKCdzZWxlY3QnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldC5hZGRDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZpZWxkIGFuZCBzaG93XHJcbiAgICAgICAgICAgICAgICAkc3BlY2lmaWNMb2NhdGlvblRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jbGFzcyBSZWZlcmVuY2VMaXN0XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc29ydGFibGUgPSBTb3J0YWJsZS5jcmVhdGUodGhpcy4kZWxlbWVudFswXSwvL29iaiB0byBoYW5kbGUgYSBzb3J0YWJsZSBmdW5jdGlvbnMsIG9uIGNvbnN0cnVjdG9yIHdlIHBhc3NlZCBmaXJzdCBlbGVtZW50IG9mIG91ciBsaXN0XHJcbiAgICAgICAgICAgIHsgLy8gbGlzdCBvZiBvcHRpb25zIEBzZWUgaHR0cHM6Ly9jZG5qcy5jb20vbGlicmFyaWVzL1NvcnRhYmxlIGFuZCBodHRwczovL3d3dy5qc2RlbGl2ci5jb20vcGFja2FnZS9ucG0vc29ydGFibGVqc1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlOiAnLmRyYWctaGFuZGxlJywgLy8gd2UgY2FuIG9ubHkgZHJhZyBlbGVtZW50cyB3aXRoIGNsYXNzIC5kcmFnLWhhbmRsZVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTAsIC8vaXRzIGxvb2sgbW9yZSBzbW9vdGhlclxyXG4gICAgICAgICAgICAgICAgb25FbmQ6ICgpID0+IHsgLy9oZSBrbm93cyB0aGUgaWRzIGJlY2F1c2Ugd2UgYWRkZWQgZGF0YS1pZCBhdHRyaWJ1dGUgdG8gdGhlIGxpIGVsZW1lbnQhXHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLiRlbGVtZW50LmRhdGEoJ3VybCcpKycvcmVvcmRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh0aGlzLnNvcnRhYmxlLnRvQXJyYXkoKSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGEgbGlzdGVuZXIgdG8gY2xpY2sgb24gZGVsZXRlIGJ1dHRvblxyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrJywgJy5qcy1yZWZlcmVuY2UtZGVsZXRlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVmZXJlbmNlRGVsZXRlKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGEgbGlzdGVuZXIgaWYgd2UgZWRpdCB0aGUgZmlsZW5hbWVcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKCdibHVyJywgJy5qcy1lZGl0LWZpbGVuYW1lJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVmZXJlbmNlRWRpdEZpbGVuYW1lKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJC5hamF4KHsgLy93ZSBnZXQgZGF0YSBmcm9tIGVsZW1lbnQgdGhhdCBoYXMgdXJsIHRvIG91ciBlbmRwb2ludCBpbiBBcnRpY2xlUmVmZXJlbmNlQWRtaW5Db250cm9sbGVyXHJcbiAgICAgICAgICAgIHVybDogdGhpcy4kZWxlbWVudC5kYXRhKCd1cmwnKVxyXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSB3YW50IHRvIGFkZCBuZXcgcmVmZXJlbmNlIHRvIHRoZSBsaXN0XHJcbiAgICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2gocmVmZXJlbmNlKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIHB1c2ggYW4gYWpheCByZXF1ZXN0IHRvIHRoZSAvYWRtaW4vYXJ0aWNsZS9yZWZlcmVuY2VzIHRvIGRlbGV0ZSByZWZlcmVuY2UgZmluZCBieSBwdXNoZWQgcmVmZXJlbmNlLmlkXHJcbiAgICBoYW5kbGVSZWZlcmVuY2VEZWxldGUoZXZlbnQpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIGVsZW1lbnQgdGhhdCB3ZSB3YW50ZWQgdG8gZGVsZXRlXHJcbiAgICAgICAgY29uc3QgJGxpID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbGkuZGF0YSgnaWQnKTtcclxuICAgICAgICAkbGkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hZG1pbi9hcnRpY2xlL3JlZmVyZW5jZXMvJytpZCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZXMgPSB0aGlzLnJlZmVyZW5jZXMuZmlsdGVyKHJlZmVyZW5jZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlLmlkICE9PSBpZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vYWZ0ZXIgZGVsZXRlIHJlbmRlciBuZXcgbGlzdFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlZmVyZW5jZUVkaXRGaWxlbmFtZShldmVudCkge1xyXG4gICAgICAgIC8vIGdldCB0aGUgZWxlbWVudCB0aGF0IHdlIHdhbnRlZCB0byBlZGl0XHJcbiAgICAgICAgY29uc3QgJGxpID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCcubGlzdC1ncm91cC1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbGkuZGF0YSgnaWQnKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZChyZWZlcmVuY2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVmZXJlbmNlLmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBnZXQgdGhlIHZhbCBvZiBuZXcgZmlsZW5hbWUgYW5kIHB1c2ggaXQgdmlhIGFqYXhcclxuICAgICAgICByZWZlcmVuY2Uub3JnaW5hbEZpbGVuYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYWRtaW4vYXJ0aWNsZS9yZWZlcmVuY2VzLycraWQsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHJlZmVyZW5jZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMgd2hhdCB3ZSBzaG93IGJlZm9yZSBkeW5hbWlzbSAtIHRoaXMgZnJhZ21lbnQgd2FzIGZyb20gZWRpdC5odG1sLnR3aWdcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBpdGVtc0h0bWwgPSB0aGlzLnJlZmVyZW5jZXMubWFwKHJlZmVyZW5jZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBkYXRhLWlkPVwiJHtyZWZlcmVuY2UuaWR9XCI+XHJcblxyXG4gICAgICAgICAgICAgPCEtLSAgc3BhbiB3aXRoIGRyYWctaGFuZGxlIGNsYXNzIHRoYXQgd2UgZGVmaW5lIGFzIGEgY2xhc3MgdGhhdCBjYW4gYmUgZHJhZyB0byByZW9yZGVyaW5nIGluIGNvbnN0cnVjdG9yIG9mIHNvcnRlck9iaiAtLT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcmFnLWhhbmRsZSBmYSBmYS1yZW9yZGVyXCI+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgIDwhLS0gIG5vdyB3ZSBub3Qgb25seSBkaXNwbGF5IGJ1dCBhbHNvIGxldCB0aGUgdXNlciB0byBlZGl0IG5hbWUgb2YgdGhlIGZpbGUgJHtyZWZlcmVuY2Uub3JnaW5hbEZpbGVuYW1lfSAtLT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtyZWZlcmVuY2Uub3JnaW5hbEZpbGVuYW1lfVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGpzLWVkaXQtZmlsZW5hbWVcIiBzdHlsZT1cIndpZHRoOiBhdXRvO1wiPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tICBsaW5rIHRvIGRvd25sb2FkIGFuIGVsZW1lbnQgLS0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2FkbWluL2FydGljbGUvcmVmZXJlbmNlcy8ke3JlZmVyZW5jZS5pZH0vZG93bmxvYWRcIiBjbGFzcz1cImJ0biBidG4tbGluayBidG4tc21cIj48c3BhbiBjbGFzcz1cImZhIGZhLWRvd25sb2FkXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXCI+PC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8IS0tICBidXR0b24gdG8gZGVsZXRlIGFuIGVsZW1lbnQgLS0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwianMtcmVmZXJlbmNlLWRlbGV0ZSBidG4gYnRuLWxpbmsgYnRuLXNtXCI+PHNwYW4gY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhZGQgdGhpcyBodG1sIHRvIG91ciBzaXRlIG92ZXJ3cml0aW5nIHRoZSBlbGVtZW50IHdpdGggbmV3IGRhdGFcclxuICAgICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaXRlbXNIdG1sLmpvaW4oJycpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE91ciBjb25maWd1cmF0aW9uIHRvIGRyb3B6b25lXHJcbiAqIEBwYXJhbSB7UmVmZXJlbmNlTGlzdH0gcmVmZXJlbmNlTGlzdFxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZURyb3B6b25lKHJlZmVyZW5jZUxpc3QpIHtcclxuICAgIC8vIG91ciBmb3JtIHdpdGggb3VyIGNsYXNzXHJcbiAgICB2YXIgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcmVmZXJlbmNlLWRyb3B6b25lJyk7XHJcbiAgICBpZiAoIWZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gd2UgY3JlYXRlIGFuIGRyb3B6b25lIG9uIG91ciBlbGVtZW50IHdpdGggb3VyIHBhcmFtTmFtZSB0aGF0IHBvaW50IHRvIHRoZSByZWZlcmVuY2UgXCJwYXJhbU5hbWVcIlxyXG4gICAgdmFyIGRyb3B6b25lID0gbmV3IERyb3B6b25lKGZvcm1FbGVtZW50LCB7XHJcbiAgICAgICAgcGFyYW1OYW1lOiAncmVmZXJlbmNlJyxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy9oYW5kbGUgdGhlIHN1Y2Nlc3MgYnkgYWRkaW5nIG5ldyBSZWZlcmVuY2UgdG8gdGhlIGxpc3Qgb2YgYXR0YWNobWVudHNcclxuICAgICAgICAgICAgdGhpcy5vbignc3VjY2VzcycsIGZ1bmN0aW9uKGZpbGUsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUxpc3QuYWRkUmVmZXJlbmNlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9oYW5kbGUgdGhlIGVycm9yIG1hc3NhZ2UgIGFuZCBzaG93IHVzIHdoYXQgaGFwcGVuZWRcclxuICAgICAgICAgICAgdGhpcy5vbignZXJyb3InLCBmdW5jdGlvbihmaWxlLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5kZXRhaWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBlbWl0IHRvIHNob3cgYW4gZXJyb3Igd2hhdCBoYXBwZW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBmaWxlLCBkYXRhLmRldGFpbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==