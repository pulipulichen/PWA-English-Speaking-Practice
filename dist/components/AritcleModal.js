(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/AritcleModal"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/AritcleModal/AritcleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FAritcleModal%2FAritcleModal.vue&lang=yaml":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/AritcleModal/AritcleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FAritcleModal%2FAritcleModal.vue&lang=yaml ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".ConfigurationModal[data-v-7320db6f] {\n  display: none;\n}\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/\n", "",{"version":3,"sources":["/var/host/media/removable/MicroSD/NetBeansProjects/[html]/PWA-English-Speaking-Practice/src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true&","AritcleModal.less"],"names":[],"mappings":"AAAA;EACE,aAAA;ACCF;AACA;;EAEE","file":"AritcleModal.less","sourcesContent":[".ConfigurationModal {\n  display: none;\n}\n\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/",".ConfigurationModal {\n  display: none;\n}\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/AritcleModal/AritcleModal.html?vue&type=template&id=7320db6f&scoped=true&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/AritcleModal/AritcleModal.html?vue&type=template&id=7320db6f&scoped=true& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "Modal", staticClass: "ui modal ConfigurationModal" },
    [
      _c("i", { staticClass: "close icon" }),
      _vm._v(" "),
      _c("div", { staticClass: "header" }, [
        _vm._v("\n    " + _vm._s(_vm.$t("Article")) + "\n  ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content ui form" }, [
        _c("div", { staticClass: "field" }, [
          _c(
            "a",
            { staticClass: "ui fluid button", on: { click: _vm.loadDemo } },
            [_vm._v("\n        " + _vm._s(_vm.$t("Load Demo")) + "\n      ")]
          ),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localConfig.fieldArticle,
                expression: "localConfig.fieldArticle"
              }
            ],
            attrs: { id: "fieldArticle" },
            domProps: { value: _vm.localConfig.fieldArticle },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localConfig, "fieldArticle", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "actions" }, [
        _c("div", { staticClass: "ui button", on: { click: _vm.close } }, [
          _vm._v("\n      " + _vm._s(_vm.$t("OK")) + "\n    ")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("458832c3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/AritcleModal/AritcleModal.html?vue&type=template&id=7320db6f&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/components/AritcleModal/AritcleModal.html?vue&type=template&id=7320db6f&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AritcleModal_html_vue_type_template_id_7320db6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./AritcleModal.html?vue&type=template&id=7320db6f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/AritcleModal/AritcleModal.html?vue&type=template&id=7320db6f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AritcleModal_html_vue_type_template_id_7320db6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AritcleModal_html_vue_type_template_id_7320db6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/AritcleModal/AritcleModal.js?vue&type=script&lang=js&?c570":
/*!******************************************************************************!*\
  !*** ./src/components/AritcleModal/AritcleModal.js?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AritcleModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./AritcleModal.js?vue&type=script&lang=js& */ "./src/components/AritcleModal/AritcleModal.js?vue&type=script&lang=js&?e95d");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_AritcleModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/AritcleModal/AritcleModal.js?vue&type=script&lang=js&?e95d":
/*!******************************************************************************!*\
  !*** ./src/components/AritcleModal/AritcleModal.js?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


const Tokenizer = __webpack_require__(/*! sentence-tokenizer */ "./node_modules/sentence-tokenizer/lib/tokenizer.js");

let AritcleModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    "localConfig.fieldArticle": async function () {
      await this.utils.AsyncUtils.sleep()
      this.buildSentenceList()
    },
  },
//  computed: {
//  },
  mounted() {
    //console.log(this.localConfig.fieldArticle)
    if (!this.localConfig.fieldArticle
            || this.localConfig.fieldArticle === '') {
      this.loadDemo()
    }
    else {
      this.buildSentenceList()
    }
  },
  methods: {
    init: function () {
      this.modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$refs.Modal)
      
      this.modal.modal({
        onShow: () => {
          //console.log('open')
          this.isOpened = true
        },
        onHidden: () => {
          this.isOpened = false
        }
      })
    },
    open: async function () {
      if (!this.modal) {
        this.init()
      }
      
      this.modal.modal('show')
    },
    close () {
      this.modal.modal('hide')
    },
    buildSentenceList: function () {
      //console.log(this.fieldArticle)
      
      if (!this.localConfig.fieldArticle || this.localConfig.fieldArticle.trim() === '') {
        return false
      }
      
      var tokenizer = new Tokenizer('Chuck')
      tokenizer.setEntry(this.localConfig.fieldArticle.trim())
      
      let sentences = tokenizer.getSentences()
      let sentenceList = []
      
      let splitSentenceByNeedle = function (sentence, needle, needleAppend = true) {
        while (sentence.split(' ').length > 7 
                && sentence.indexOf(needle) > -1) {
          let pos = sentence.indexOf(needle)
          let part
          let otherPart
          if (needleAppend === true) {
            part = sentence.slice(0, pos + needle.length).trim()
            otherPart = sentence.slice(pos + needle.length).trim()
          }
          else {
            part = sentence.slice(0, pos).trim()
            otherPart = sentence.slice(pos).trim()
          }
          if (part.split(' ').length > 5 
                  && otherPart.split(' ').length > 3) {
            sentenceList.push(part)
            sentence = otherPart
          }
          else {
            break
          }
        }
        return sentence
      }
      //console.log(sentences)
      sentences.forEach(sentence => {
//        while (sentence.indexOf(', ') > -1) {
//          let pos = sentence.indexOf(', ')
//          let part = sentence.slice(0, pos + 2).trim()
//          sentenceList.push(part)
//          sentence = sentence.slice(pos + 2).trim()
//        }
        //console.log(sentence)
        sentence = splitSentenceByNeedle(sentence, ', ')
        sentence = splitSentenceByNeedle(sentence, '. ')
        sentence = splitSentenceByNeedle(sentence, '." ')
        sentence = splitSentenceByNeedle(sentence, '," ')
        
        sentence = splitSentenceByNeedle(sentence, ' from ', false)
        sentence = splitSentenceByNeedle(sentence, ' for ', false)
        sentence = splitSentenceByNeedle(sentence, ' following ', false)
        /*
        while (sentence.indexOf('. ') > -1) {
          let pos = sentence.indexOf('. ')
          let part = sentence.slice(0, pos + 2).trim()
          sentenceList.push(part)
          sentence = sentence.slice(pos + 2).trim()
        }
        */
        if (sentence.length > 0) {
          sentenceList.push(sentence.trim())
        }
      })
      //console.log(sentenceList)
      this.config.sentenceList = sentenceList
    },

    loadDemo: async function () {
      let article = await this.utils.AxiosUtils.get('./demo/article1.txt')

      //console.log(article)

      article = article.split(`“`).join('"')
      article = article.split(`”`).join('"')
      article = article.split(`\n`).join(' ')
      article = article.split(`\t`).join(' ')
      while (article.indexOf('  ') > -1) {
        article = article.split(`  `).join(' ')
      }

      this.localConfig.fieldArticle = article
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (AritcleModal);

/***/ }),

/***/ "./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_AritcleModal_less_vue_type_style_index_0_id_7320db6f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_AritcleModal_less_vue_type_style_index_0_id_7320db6f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_AritcleModal_less_vue_type_style_index_0_id_7320db6f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_AritcleModal_less_vue_type_style_index_0_id_7320db6f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_AritcleModal_less_vue_type_style_index_0_id_7320db6f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/AritcleModal/AritcleModal.vue":
/*!******************************************************!*\
  !*** ./src/components/AritcleModal/AritcleModal.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AritcleModal_html_vue_type_template_id_7320db6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AritcleModal.html?vue&type=template&id=7320db6f&scoped=true& */ "./src/components/AritcleModal/AritcleModal.html?vue&type=template&id=7320db6f&scoped=true&");
/* harmony import */ var _AritcleModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AritcleModal.js?vue&type=script&lang=js& */ "./src/components/AritcleModal/AritcleModal.js?vue&type=script&lang=js&?c570");
/* empty/unused harmony star reexport *//* harmony import */ var _AritcleModal_less_vue_type_style_index_0_id_7320db6f_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true& */ "./src/components/AritcleModal/AritcleModal.less?vue&type=style&index=0&id=7320db6f&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AritcleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FAritcleModal%2FAritcleModal.vue&lang=yaml */ "./src/components/AritcleModal/AritcleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FAritcleModal%2FAritcleModal.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AritcleModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AritcleModal_html_vue_type_template_id_7320db6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AritcleModal_html_vue_type_template_id_7320db6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7320db6f",
  null
  
)

/* custom blocks */

if (typeof _AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/AritcleModal/AritcleModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/AritcleModal/AritcleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FAritcleModal%2FAritcleModal.vue&lang=yaml":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/AritcleModal/AritcleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FAritcleModal%2FAritcleModal.vue&lang=yaml ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./AritcleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FAritcleModal%2FAritcleModal.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/AritcleModal/AritcleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FAritcleModal%2FAritcleModal.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_AritcleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FAritcleModal_2FAritcleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=AritcleModal.js.map