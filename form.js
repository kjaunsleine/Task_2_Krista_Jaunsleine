/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/form.js":
/*!******************************!*\
  !*** ./resources/js/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function() {
  // Form validation
const form = $('#applForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const comment = document.getElementById('comment');
const permission = document.getElementById('permission');
const emptyFieldMsg = 'Lauciņš nedrīkst palikt tukšs';

  $(window).on('load', function(){
    name.value = '';
    email.value = '';
    phone.value = '';
    comment.value = '';
    if(company) {
      company.value = '';
    }
  });

  $.validator.addMethod('phoneRegex', function(value, element){
    return this.optional(element) || /^[0-9\s\(\)\+\-]+$/.test(value);
  }, 'Jāievada derīgs telefona numurs');


  form.validate({
    rules: {
      name: {required: true, minlength: 2, maxlength: 64},
      email: {required: true, email: true},
      company: {required: true, maxlength: 300},
      phone:  {required: true, phoneRegex: true},
      comment: 'required',
      permission: 'required'
    },
    messages: {
      name: {required: emptyFieldMsg, minlength: 'Jābūt ievadītām vismaz 2 rakstu zīmēm', maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 64'},
      email: {required: emptyFieldMsg, email: 'Jāievada derīga e-pasta adrese' },
      company: {required: emptyFieldMsg, maxlength: 'Sasniegts maksimālais rakstu zīmju skaits - 300'},
      phone: {required: emptyFieldMsg, phoneRegex: 'Jāievada derīgs telefona numurs' },
      comment: emptyFieldMsg,
      permission: 'Lauciņam jābūt atķeksētam, lai turpinātu'
    },
    errorPlacement: function(error, permission){
      error.appendTo(permission.parent('div'));
    }
  });

  // ------------------------- Form submit message

  form.on('submit', function(event){
    event.preventDefault();
    
    if(form.valid() === true){
      $('.form-info').hide();

      const submitMsg = document.createElement('div');
      $(submitMsg).addClass('submit-message');
      const html = "<p>Paldies, ka sapņo!</p><p>Ja Tavs sapnis tiks izvēlēts, mēs ar Tevi sazināsimies.</p>";
      $(submitMsg).html(html);
      $('.form-container').css({marginBottom: '12.3rem' });
      $('.form-container.form-container-extra-margin').css({marginBottom: '14.2rem' });
      $('.form-container').append(submitMsg);
      $('#submit').hide();
    } 
  });
});



/***/ })

/******/ });
//# sourceMappingURL=form.js.map