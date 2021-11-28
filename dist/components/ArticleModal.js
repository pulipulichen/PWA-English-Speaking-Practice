(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/ArticleModal"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ArticleModal/ArticleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FArticleModal%2FArticleModal.vue&lang=yaml":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/ArticleModal/ArticleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FArticleModal%2FArticleModal.vue&lang=yaml ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".ConfigurationModal[data-v-4a2c63af] {\n  display: none;\n}\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/\n", "",{"version":3,"sources":["/var/host/media/removable/MicroSD/NetBeansProjects/[html]/PWA-English-Speaking-Practice/src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true&","ArticleModal.less"],"names":[],"mappings":"AAAA;EACE,aAAA;ACCF;AACA;;EAEE","file":"ArticleModal.less","sourcesContent":[".ConfigurationModal {\n  display: none;\n}\n\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/",".ConfigurationModal {\n  display: none;\n}\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ArticleModal/ArticleModal.html?vue&type=template&id=4a2c63af&scoped=true&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/ArticleModal/ArticleModal.html?vue&type=template&id=4a2c63af&scoped=true& ***!
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
        _c("div", { staticClass: "two fields" }, [
          _c("div", { staticClass: "fourteen wide field" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localConfig.articleResource,
                    expression: "localConfig.articleResource"
                  }
                ],
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.localConfig,
                      "articleResource",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("optgroup", { attrs: { label: _vm.$t("English") } }, [
                  _c("option", { attrs: { value: "english-bbc-world-news" } }, [
                    _vm._v(_vm._s(_vm.$t("BBC World News")))
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "english-cnn-world-news" } }, [
                    _vm._v(_vm._s(_vm.$t("CNN World News")))
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "english-taiwan-today" } }, [
                    _vm._v(_vm._s(_vm.$t("Taiwan Today")))
                  ])
                ]),
                _vm._v(" "),
                _c("optgroup", { attrs: { label: _vm.$t("Chinese") } }, [
                  _c("option", { attrs: { value: "chinese-pts-news" } }, [
                    _vm._v(_vm._s(_vm.$t("PTS News")))
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "four wide field" }, [
            _c(
              "a",
              {
                staticClass: "ui fluid button",
                on: { click: _vm.downloadResource }
              },
              [_vm._v("\n          Download\n        ")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "two fields" }, [
          _c("div", { staticClass: "fourteen wide field" }, [
            _c("label", { attrs: { for: "setenceTokenizerStrategy" } }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.$t("Sentence Tokenizer Strategy")) +
                  "\n        "
              )
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localConfig.setenceTokenizerStrategy,
                    expression: "localConfig.setenceTokenizerStrategy"
                  }
                ],
                attrs: { id: "setenceTokenizerStrategy" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.localConfig,
                      "setenceTokenizerStrategy",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("optgroup", { attrs: { label: _vm.$t("English") } }, [
                  _c("option", { attrs: { value: "english-default" } }, [
                    _vm._v(_vm._s(_vm.$t("English: Default")))
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "english-basic" } }, [
                    _vm._v(_vm._s(_vm.$t("English: Basic")))
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "english-clause" } }, [
                    _vm._v(_vm._s(_vm.$t("English: Clause")))
                  ])
                ]),
                _vm._v(" "),
                _c("optgroup", { attrs: { label: _vm.$t("Chinese") } }, [
                  _c("option", { attrs: { value: "chinese-default" } }, [
                    _vm._v(_vm._s(_vm.$t("Chinese: Default")))
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "chinese-comma" } }, [
                    _vm._v(_vm._s(_vm.$t("Chinese: Comma")))
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "four wide field" }, [
            _c("label", [
              _vm._v(
                "\n          " + _vm._s(_vm.$t("Setence Count")) + "\n        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input" }, [
              _c("input", {
                staticClass: "ui input disabled",
                attrs: { type: "number", disabled: "disabled" },
                domProps: { value: _vm.config.sentenceList.length }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ce52d2fe", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/ArticleModal/ArticleModal.html?vue&type=template&id=4a2c63af&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModal.html?vue&type=template&id=4a2c63af&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ArticleModal_html_vue_type_template_id_4a2c63af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./ArticleModal.html?vue&type=template&id=4a2c63af&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ArticleModal/ArticleModal.html?vue&type=template&id=4a2c63af&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ArticleModal_html_vue_type_template_id_4a2c63af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ArticleModal_html_vue_type_template_id_4a2c63af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ArticleModal/ArticleModal.js?vue&type=script&lang=js&?7996":
/*!******************************************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModal.js?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ArticleModalMethodsSentence_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleModalMethodsSentence.js */ "./src/components/ArticleModal/ArticleModalMethodsSentence.js");
/* harmony import */ var _ArticleModalMethodsRSS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleModalMethodsRSS.js */ "./src/components/ArticleModal/ArticleModalMethodsRSS.js");
/* harmony import */ var _ArticleModalComputed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleModalComputed.js */ "./src/components/ArticleModal/ArticleModalComputed.js");


let ArticleModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false,
      setenceTokenizerStrategy: 'english-default'
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
    "localConfig.setenceTokenizerStrategy": async function () {
      await this.utils.AsyncUtils.sleep()
      this.buildSentenceList()
    },
  },
  //computed: {}, // ArticleModalComputed.js
  mounted() {
    //this.loadRSS()
    //console.log(this.localConfig.fieldArticle)
    if (!this.localConfig.fieldArticle
            || this.localConfig.fieldArticle === '') {
      //this.loadDemo()
      this.loadRSS()
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

    cleanValue (text) {
      while (text.startsWith('<![CDATA[')
        && text.endsWith(']]>')) {
          text = text.slice(9, -3)
      }

      text = text.replace(/<[^>]*>?/gm, '');

      return text.trim()
    },
    

    loadDemo: async function () {
      //let rss = await this.utils.AxiosUtils.get('http://rss.cnn.com/rss/edition.rss')
      //console.log(rss)
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
      
      this.localConfig.playingIndex = 0
      this.localConfig.setenceTokenizerStrategy = 'clause'
    }
  }
}


Object(_ArticleModalMethodsSentence_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ArticleModal)


Object(_ArticleModalMethodsRSS_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ArticleModal)


Object(_ArticleModalComputed_js__WEBPACK_IMPORTED_MODULE_3__["default"])(ArticleModal)

/* harmony default export */ __webpack_exports__["default"] = (ArticleModal);

/***/ }),

/***/ "./src/components/ArticleModal/ArticleModal.js?vue&type=script&lang=js&?95a6":
/*!******************************************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModal.js?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./ArticleModal.js?vue&type=script&lang=js& */ "./src/components/ArticleModal/ArticleModal.js?vue&type=script&lang=js&?7996");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_ArticleModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ArticleModal_less_vue_type_style_index_0_id_4a2c63af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ArticleModal_less_vue_type_style_index_0_id_4a2c63af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ArticleModal_less_vue_type_style_index_0_id_4a2c63af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ArticleModal_less_vue_type_style_index_0_id_4a2c63af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ArticleModal_less_vue_type_style_index_0_id_4a2c63af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ArticleModal/ArticleModal.vue":
/*!******************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModal.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleModal_html_vue_type_template_id_4a2c63af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleModal.html?vue&type=template&id=4a2c63af&scoped=true& */ "./src/components/ArticleModal/ArticleModal.html?vue&type=template&id=4a2c63af&scoped=true&");
/* harmony import */ var _ArticleModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleModal.js?vue&type=script&lang=js& */ "./src/components/ArticleModal/ArticleModal.js?vue&type=script&lang=js&?95a6");
/* empty/unused harmony star reexport *//* harmony import */ var _ArticleModal_less_vue_type_style_index_0_id_4a2c63af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true& */ "./src/components/ArticleModal/ArticleModal.less?vue&type=style&index=0&id=4a2c63af&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArticleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FArticleModal%2FArticleModal.vue&lang=yaml */ "./src/components/ArticleModal/ArticleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FArticleModal%2FArticleModal.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ArticleModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleModal_html_vue_type_template_id_4a2c63af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArticleModal_html_vue_type_template_id_4a2c63af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4a2c63af",
  null
  
)

/* custom blocks */

if (typeof _ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ArticleModal/ArticleModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ArticleModal/ArticleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FArticleModal%2FArticleModal.vue&lang=yaml":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FArticleModal%2FArticleModal.vue&lang=yaml ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./ArticleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FArticleModal%2FArticleModal.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ArticleModal/ArticleModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml%5D%2FPWA-English-Speaking-Practice%2Fsrc%2Fcomponents%2FArticleModal%2FArticleModal.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_ArticleModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_5D_2FPWA_English_Speaking_Practice_2Fsrc_2Fcomponents_2FArticleModal_2FArticleModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ArticleModal/ArticleModalComputed.js":
/*!*************************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModalComputed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ArticleModal) {
    let chunkSentenceOptionsBasic = [
      {
        needle: ', ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '. ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '." ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '," ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
      {
        needle: '," ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: true
      },
    ]
    let chunkSentenceOptionsClause = [
      {
        needle: ' from ',
        minBefore: 5,
        minAfter: 3,
        chunkAfter: false
      },
      {
        needle: ' for ',
        minBefore: 7,
        minAfter: 5,
        chunkAfter: false
      },
      {
        needle: ' and ',
        minBefore: 7,
        minAfter: 5,
        chunkAfter: false
      },
      {
        needle: ' following ',
        minBefore: 5,
        minAfter: 3,
        chunkAfter: false
      },
      {
        needle: ' while ',
        minBefore: 5,
        minAfter: 3,
        chunkAfter: false
      },
      {
        needle: ' to ',
        minBefore: 5,
        minAfter: 5,
        chunkAfter: false
      },
      {
        needle: ' so ',
        minBefore: 5,
        minAfter: 3,
        chunkAfter: false
      },
    ]
    
    if (!ArticleModal.computed) {
      ArticleModal.computed = {}
    }
    
    ArticleModal.computed.chunkSentenceOptions = function () {
      if (this.localConfig.setenceTokenizerStrategy === 'english-default') {
        return []
      }
      if (this.localConfig.setenceTokenizerStrategy === 'english-basic') {
        return chunkSentenceOptionsBasic
      }
      if (this.localConfig.setenceTokenizerStrategy === 'english-clause') {
        return chunkSentenceOptionsBasic.concat(chunkSentenceOptionsClause)
      }
      return []
    }
    
    ArticleModal.computed.rssSourceURL = function () {
      let url = 'https://script.google.com/macros/s/AKfycbz_JO169VpYt_BQImAWLf2WCnenfy5BNCT7jOKSGTnaB1CSpE__vwo-o-LFb0n9yhj8/exec'
      if (this.localConfig.articleResource === 'english-bbc-world-news') {
        // donothing
        this.setenceTokenizerStrategy = 'english-default'
      }
      
      if (this.localConfig.articleResource === 'english-cnn-world-news') {
        url = url + '?feed=' + encodeURIComponent('http://rss.cnn.com/rss/edition_world.rss')
        this.setenceTokenizerStrategy = 'english-default'
      }
      if (this.localConfig.articleResource === 'english-taiwan-today') {
        url = url + '?feed=' + encodeURIComponent('http://api.taiwantoday.tw/en/rss.php?unit=2,6,10,15,18')
        this.setenceTokenizerStrategy = 'english-default'
      }
      
      if (this.localConfig.articleResource === 'chinese-pts-news') {
        url = url + '?feed=' + encodeURIComponent('https://news.pts.org.tw/xml/newsfeed.xml')
        this.setenceTokenizerStrategy = 'chinese-comma'
      }
      
      return url
    }
    
});

/***/ }),

/***/ "./src/components/ArticleModal/ArticleModalMethodsRSS.js":
/*!***************************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModalMethodsRSS.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Tokenizer = __webpack_require__(/*! sentence-tokenizer */ "./node_modules/sentence-tokenizer/lib/tokenizer.js");

/* harmony default export */ __webpack_exports__["default"] = (function (ArticleModal) {
    
    ArticleModal.methods.downloadResource = async function () {
      console.log(this.rssSourceURL)
      let {output} = await this.utils.AxiosUtils.get(this.rssSourceURL)
      console.log(output)
      
      if (this.localConfig.articleResource === 'englis-taiwan-today') {
        output = output.splice(0, 2)
      }
      
      this.localConfig.fieldArticle = output.join(' ')
      this.localConfig.playingIndex = 0
      
      this.localConfig.setenceTokenizerStrategy = this.setenceTokenizerStrategy
    }
    
    ArticleModal.methods.loadRSS = async function () {
      
      let {output} = await this.utils.AxiosUtils.get(this.rssSourceURL)
      console.log(output)
      //console.log(result)
      /*
      let result = await this.utils.AxiosUtils.get('./demo/rss1.xml')
      //console.log(result)
      
      let items = result.split('<item>').splice(1)
      items.forEach(item => {
        let title = item.slice(item.indexOf('<title>') + 7, item.indexOf('</title>'))
        title = this.cleanValue(title)
        if (!title.endsWith('.')) {
          title = title + '.'
        }
        
        let description = item.slice(item.indexOf('<description>') + 13, item.indexOf('</description>'))
        description = this.cleanValue(description)
        console.log(title)
        console.log(description)
      })
      */
      this.localConfig.fieldArticle = output.join(' ')
      this.localConfig.playingIndex = 0
      this.localConfig.setenceTokenizerStrategy = 'default'
    }
});

/***/ }),

/***/ "./src/components/ArticleModal/ArticleModalMethodsSentence.js":
/*!********************************************************************!*\
  !*** ./src/components/ArticleModal/ArticleModalMethodsSentence.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Tokenizer = __webpack_require__(/*! sentence-tokenizer */ "./node_modules/sentence-tokenizer/lib/tokenizer.js");

/* harmony default export */ __webpack_exports__["default"] = (function (ArticleModal) {
    
    ArticleModal.methods.chunkSentence = function (sentence) {
      let output = []
      
      //output.push(sentence)
      let checking = true
      while (checking) {
        if (sentence.length <= 7) {
          break
        }
        
        for (let i = 0; i < this.chunkSentenceOptions.length; i++) {
          let {needle, minBefore = 5, minAfter = 3, chunkAfter = false} = this.chunkSentenceOptions[i]
          
          if (!needle || sentence.indexOf(needle) === -1) {
            continue
          }
          
          let pos = sentence.indexOf(needle)
          
          let part
          let otherPart
          if (chunkAfter === true) {
            part = sentence.slice(0, pos + needle.length).trim()
            otherPart = sentence.slice(pos + needle.length).trim()
          }
          else {
            part = sentence.slice(0, pos).trim()
            otherPart = sentence.slice(pos).trim()
          }
          
          if (part.split(' ').length >= minBefore
                  && otherPart.split(' ').length >= minAfter) {
            
            output = output.concat(this.chunkSentence(part))
            sentence = otherPart
            i = 0
            continue
          }
          else {
            continue
          }
        }
        
        checking = false
      }
      
      if (sentence !== '') {
        output.push(sentence)
      }
      
      return output
    }
    
    ArticleModal.methods.buildSentenceList = function () {
      //console.log(this.fieldArticle)
      
      if (!this.localConfig.fieldArticle || this.localConfig.fieldArticle.trim() === '') {
        return false
      }
      
      var tokenizer = new Tokenizer('Chuck')
      tokenizer.setEntry(this.localConfig.fieldArticle.trim())
      
      let sentences = tokenizer.getSentences()
      let sentenceList = []
      
      // ----------------------------
      /*
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
      */
      //console.log(sentences)
      sentences.forEach(sentence => {
//        while (sentence.indexOf(', ') > -1) {
//          let pos = sentence.indexOf(', ')
//          let part = sentence.slice(0, pos + 2).trim()
//          sentenceList.push(part)
//          sentence = sentence.slice(pos + 2).trim()
//        }
        //console.log(sentence)
        /*
        sentence = splitSentenceByNeedle(sentence, ', ')
        sentence = splitSentenceByNeedle(sentence, '. ')
        sentence = splitSentenceByNeedle(sentence, '." ')
        sentence = splitSentenceByNeedle(sentence, '," ')
        
        sentence = splitSentenceByNeedle(sentence, ' from ', false)
        sentence = splitSentenceByNeedle(sentence, ' for ', false)
        sentence = splitSentenceByNeedle(sentence, ' following ', false)
        */
        /*
        while (sentence.indexOf('. ') > -1) {
          let pos = sentence.indexOf('. ')
          let part = sentence.slice(0, pos + 2).trim()
          sentenceList.push(part)
          sentence = sentence.slice(pos + 2).trim()
        }
        */
       /*
        if (sentence.length > 0) {
          sentenceList.push(sentence.trim())
        }
        */
        this.chunkSentence(sentence).forEach(s => {
          sentenceList.push(s)
        })
      })
      
      // ----------------------------
      
//      let debugSentenceList = sentenceList
//      debugSentenceList = debugSentenceList.filter(sentence => {
//        return sentence.split(' ').length > 10
//      })
//      console.log(debugSentenceList.join('\n'))
//      console.log(debugSentenceList.length)
      
      // ----------------------------
      
      this.config.sentenceList = sentenceList
    }
});

/***/ })

}]);
//# sourceMappingURL=ArticleModal.js.map