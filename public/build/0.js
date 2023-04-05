(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./assets/css/algolia-autocomplete.scss":
/*!**********************************************!*\
  !*** ./assets/css/algolia-autocomplete.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/components/algolia-autocomplete.js":
/*!******************************************************!*\
  !*** ./assets/js/components/algolia-autocomplete.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autocomplete.js/dist/autocomplete.jquery */ "./node_modules/autocomplete.js/dist/autocomplete.jquery.js");
/* harmony import */ var autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autocomplete_js_dist_autocomplete_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/algolia-autocomplete.scss */ "./assets/css/algolia-autocomplete.scss");
/* harmony import */ var _css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_algolia_autocomplete_scss__WEBPACK_IMPORTED_MODULE_2__);

 //we dont use "from" cause it doesnt export anything


/* harmony default export */ __webpack_exports__["default"] = (function ($elements, dataKey, displayKey) {
  $elements.each(function () {
    var autocompleteUrl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('autocomplete-url');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).autocomplete({
      hint: false
    }, [{
      source: function source(query, cb) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
          url: autocompleteUrl + '?query=' + query
        }).then(function (data) {
          if (dataKey) {
            data = data[dataKey];
          }

          cb(data);
        });
      },
      displayKey: displayKey,
      debounce: 500 // only request every 1/2 second

    }]);
  });
});
;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FsZ29saWEtYXV0b2NvbXBsZXRlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWxnb2xpYS1hdXRvY29tcGxldGUuanMiXSwibmFtZXMiOlsiJGVsZW1lbnRzIiwiZGF0YUtleSIsImRpc3BsYXlLZXkiLCJlYWNoIiwiYXV0b2NvbXBsZXRlVXJsIiwiJCIsImRhdGEiLCJhdXRvY29tcGxldGUiLCJoaW50Iiwic291cmNlIiwicXVlcnkiLCJjYiIsImFqYXgiLCJ1cmwiLCJ0aGVuIiwiZGVib3VuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ21EOztBQUNuRDtBQUVlLHlFQUFTQSxTQUFULEVBQW9CQyxPQUFwQixFQUE2QkMsVUFBN0IsRUFBeUM7QUFDcERGLFdBQVMsQ0FBQ0csSUFBVixDQUFlLFlBQVc7QUFDdEIsUUFBSUMsZUFBZSxHQUFHQyw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRQyxJQUFSLENBQWEsa0JBQWIsQ0FBdEI7QUFFQUQsaURBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUUsWUFBUixDQUFxQjtBQUFDQyxVQUFJLEVBQUU7QUFBUCxLQUFyQixFQUFvQyxDQUNoQztBQUNJQyxZQUFNLEVBQUUsZ0JBQVNDLEtBQVQsRUFBZ0JDLEVBQWhCLEVBQW9CO0FBQ3hCTixxREFBQyxDQUFDTyxJQUFGLENBQU87QUFDSEMsYUFBRyxFQUFFVCxlQUFlLEdBQUMsU0FBaEIsR0FBMEJNO0FBRDVCLFNBQVAsRUFFR0ksSUFGSCxDQUVRLFVBQVNSLElBQVQsRUFBZTtBQUNuQixjQUFJTCxPQUFKLEVBQWE7QUFDVEssZ0JBQUksR0FBR0EsSUFBSSxDQUFDTCxPQUFELENBQVg7QUFDSDs7QUFDRFUsWUFBRSxDQUFDTCxJQUFELENBQUY7QUFDSCxTQVBEO0FBUUgsT0FWTDtBQVdJSixnQkFBVSxFQUFFQSxVQVhoQjtBQVlJYSxjQUFRLEVBQUUsR0FaZCxDQVlrQjs7QUFabEIsS0FEZ0MsQ0FBcEM7QUFnQkgsR0FuQkQ7QUFvQkg7QUFBQSxDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgJ2F1dG9jb21wbGV0ZS5qcy9kaXN0L2F1dG9jb21wbGV0ZS5qcXVlcnknOyAvL3dlIGRvbnQgdXNlIFwiZnJvbVwiIGNhdXNlIGl0IGRvZXNudCBleHBvcnQgYW55dGhpbmdcclxuaW1wb3J0ICcuLi8uLi9jc3MvYWxnb2xpYS1hdXRvY29tcGxldGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkZWxlbWVudHMsIGRhdGFLZXksIGRpc3BsYXlLZXkpIHtcclxuICAgICRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhdXRvY29tcGxldGVVcmwgPSAkKHRoaXMpLmRhdGEoJ2F1dG9jb21wbGV0ZS11cmwnKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5hdXRvY29tcGxldGUoe2hpbnQ6IGZhbHNlfSwgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGZ1bmN0aW9uKHF1ZXJ5LCBjYikge1xyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYXV0b2NvbXBsZXRlVXJsKyc/cXVlcnk9JytxdWVyeVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFbZGF0YUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUtleTogZGlzcGxheUtleSxcclxuICAgICAgICAgICAgICAgIGRlYm91bmNlOiA1MDAgLy8gb25seSByZXF1ZXN0IGV2ZXJ5IDEvMiBzZWNvbmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==