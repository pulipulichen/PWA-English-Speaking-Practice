(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/ConfigurationModal"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ConfigurationModal/ConfigurationModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects-Windows%5Cpwa%5CPWA-English-Speaking-Practice%5Csrc%5Ccomponents%5CConfigurationModal%5CConfigurationModal.vue&lang=yaml":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/ConfigurationModal/ConfigurationModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects-Windows%5Cpwa%5CPWA-English-Speaking-Practice%5Csrc%5Ccomponents%5CConfigurationModal%5CConfigurationModal.vue&lang=yaml ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".ConfigurationModal[data-v-065545af] {\n  display: none;\n}\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/\n.pitch-item[data-v-065545af] {\n  width: 3.5rem;\n  text-align: center;\n}\n", "",{"version":3,"sources":["E:/pudding/Code-Porjects-Windows/pwa/PWA-English-Speaking-Practice/src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true&","ConfigurationModal.less"],"names":[],"mappings":"AAAA;EACE,aAAA;ACCF;AACA;;EAEE;ADGF;EACE,aAAA;EACA,kBAAA;ACDF","file":"ConfigurationModal.less","sourcesContent":[".ConfigurationModal {\n  display: none;\n}\n\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/\n\n.pitch-item {\n  width: 3.5rem;\n  text-align: center;\n}",".ConfigurationModal {\n  display: none;\n}\n/*.config-modal-content {\n  padding-left: 10.5rem !important;\n}*/\n.pitch-item {\n  width: 3.5rem;\n  text-align: center;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ConfigurationModal/ConfigurationModal.html?vue&type=template&id=065545af&scoped=true&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/ConfigurationModal/ConfigurationModal.html?vue&type=template&id=065545af&scoped=true& ***!
  \******************************************************************************************************************************************************************************************/
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
        _vm._v("\r\n    " + _vm._s(_vm.$t("Configuration")) + "\r\n  ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content ui form" }, [
        _c("div", { staticClass: "field" }, [
          _c("label", [
            _vm._v("\r\n        " + _vm._s(_vm.$t("Pitch")) + "\r\n      ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "ui fluid buttons" }, [
            _c(
              "button",
              {
                staticClass: "ui icon button",
                class: { disabled: _vm.localConfig.pitch === 0.5 },
                attrs: { type: "button" },
                on: { click: _vm.pitchReduce }
              },
              [_c("i", { staticClass: "minus icon" })]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "ui disabled button pitch-item",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.localConfig.pitch = 1
                  }
                }
              },
              [
                _vm._v(
                  "\r\n            " +
                    _vm._s(_vm.localConfig.pitch) +
                    "\r\n        "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "ui icon button",
                class: { disabled: _vm.localConfig.pitch === 1.5 },
                attrs: { type: "button" },
                on: { click: _vm.pitchRise }
              },
              [_c("i", { staticClass: "plus icon" })]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", { attrs: { for: "voiceName" } }, [
            _vm._v("\r\n        " + _vm._s(_vm.$t("Voice")) + "\r\n      ")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.localConfig.voiceName,
                  expression: "localConfig.voiceName"
                }
              ],
              attrs: { id: "voiceName" },
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
                    "voiceName",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            _vm._l(_vm.voiceNames, function(name) {
              return _c("option", { domProps: { value: name } }, [
                _vm._v(_vm._s(name))
              ])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", [
            _vm._v(
              "\r\n        " + _vm._s(_vm.$t("Practice Mode")) + "\r\n      "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "ui fluid buttons" }, [
            _c(
              "button",
              {
                staticClass: "ui button",
                class: {
                  "positive disabled":
                    _vm.localConfig.practiceMode === "speaking"
                },
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.localConfig.practiceMode = "speaking"
                  }
                }
              },
              [
                _vm._v(
                  "\r\n          " + _vm._s(_vm.$t("Speaking")) + "\r\n        "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "ui button",
                class: {
                  "positive disabled":
                    _vm.localConfig.practiceMode === "writing"
                },
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.localConfig.practiceMode = "writing"
                  }
                }
              },
              [
                _vm._v(
                  "\r\n          " + _vm._s(_vm.$t("Writing")) + "\r\n        "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", { attrs: { for: "practiceSentenceMask" } }, [
            _vm._v(
              "\r\n        " + _vm._s(_vm.$t("Practice Mask")) + "\r\n      "
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
                  value: _vm.localConfig.practiceSentenceMask,
                  expression: "localConfig.practiceSentenceMask"
                }
              ],
              attrs: { id: "practiceSentenceMask" },
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
                    "practiceSentenceMask",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "none" } }, [
                _vm._v(
                  "\r\n          " +
                    _vm._s(_vm.$t("Do nothing")) +
                    "\r\n        "
                )
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "translation" } }, [
                _vm._v(
                  "\r\n          " +
                    _vm._s(_vm.$t("Translation")) +
                    "\r\n        "
                )
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "word-block" } }, [
                _vm._v(
                  "\r\n          " +
                    _vm._s(_vm.$t("Word Block")) +
                    "\r\n        "
                )
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "sentence-block" } }, [
                _vm._v(
                  "\r\n          " +
                    _vm._s(_vm.$t("Sentence Block")) +
                    "\r\n        "
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _vm.localConfig.practiceMode === "speaking"
          ? _c("div", { staticClass: "field" }, [
              _c("label", [
                _vm._v(
                  "\r\n        " +
                    _vm._s(_vm.$t("Speaking Instruction Strategy")) +
                    "\r\n      "
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
                      value: _vm.localConfig.speakingInstructionStrategy,
                      expression: "localConfig.speakingInstructionStrategy"
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
                        "speakingInstructionStrategy",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "none" } }, [
                    _vm._v(
                      "\r\n          " + _vm._s(_vm.$t("None")) + "\r\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "sentence" } }, [
                    _vm._v(
                      "\r\n          " +
                        _vm._s(_vm.$t("Full sentence")) +
                        "\r\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "words-by-words" } }, [
                    _vm._v(
                      "\r\n          " +
                        _vm._s(_vm.$t("Words by words")) +
                        "\r\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "word-by-word" } }, [
                    _vm._v(
                      "\r\n          " +
                        _vm._s(_vm.$t("Word by word")) +
                        "\r\n        "
                    )
                  ])
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.localConfig.practiceMode === "speaking"
          ? _c("div", { staticClass: "field" }, [
              _c("label", [
                _vm._v(
                  "\r\n        " +
                    _vm._s(_vm.$t("Speech to Text Mockup")) +
                    "\r\n      "
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
                      value: _vm.localConfig.debugSpeechToTextUtilsMockup,
                      expression: "localConfig.debugSpeechToTextUtilsMockup"
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
                        "debugSpeechToTextUtilsMockup",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "false" } }, [
                    _vm._v(
                      "\r\n          " + _vm._s(_vm.$t("None")) + "\r\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "auto" } }, [
                    _vm._v(
                      "\r\n          " + _vm._s(_vm.$t("Auto")) + "\r\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "perfect" } }, [
                    _vm._v(
                      "\r\n          " +
                        _vm._s(_vm.$t("Perfect")) +
                        "\r\n        "
                    )
                  ])
                ]
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "actions" }, [
        _c("div", { staticClass: "ui button", on: { click: _vm.close } }, [
          _vm._v("\r\n      " + _vm._s(_vm.$t("OK")) + "\r\n    ")
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("eae1ce16", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/ConfigurationModal/ConfigurationModal.html?vue&type=template&id=065545af&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/ConfigurationModal/ConfigurationModal.html?vue&type=template&id=065545af&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ConfigurationModal_html_vue_type_template_id_065545af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./ConfigurationModal.html?vue&type=template&id=065545af&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ConfigurationModal/ConfigurationModal.html?vue&type=template&id=065545af&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ConfigurationModal_html_vue_type_template_id_065545af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ConfigurationModal_html_vue_type_template_id_065545af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ConfigurationModal/ConfigurationModal.js?vue&type=script&lang=js&?ab38":
/*!******************************************************************************************!*\
  !*** ./src/components/ConfigurationModal/ConfigurationModal.js?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfigurationModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./ConfigurationModal.js?vue&type=script&lang=js& */ "./src/components/ConfigurationModal/ConfigurationModal.js?vue&type=script&lang=js&?e05d");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_ConfigurationModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ConfigurationModal/ConfigurationModal.js?vue&type=script&lang=js&?e05d":
/*!******************************************************************************************!*\
  !*** ./src/components/ConfigurationModal/ConfigurationModal.js?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


//import FieldArticle from './FieldArticle/FieldArticle.vue'

let ConfigurationModal = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      modal: null,
      isOpened: false,
      voiceNames: [],
    }
  },
  components: {
//    FieldArticle
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.voiceName': async function () {
      await this.utils.TextToSpeechUtils.setPreferVoice(this.localConfig.voiceName)
    },
    'localConfig.pitch'() {
      this.utils.TextToSpeechUtils.setPitch(this.localConfig.pitch)
    },
  },
//  computed: {
//    
//  },
  mounted: async function () {
    //this.init()
    this.voiceNames = await this.utils.TextToSpeechUtils.getVoiceNameList()
    if (!this.localConfig.voiceName) {
      this.localConfig.voiceName = await this.utils.TextToSpeechUtils.setPreferVoice()
    }
    else {
      await this.utils.TextToSpeechUtils.setPreferVoice(this.localConfig.voiceName)
    }
    
    this.initVoice()
    //console.log(this.voiceNames)
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
      //console.log('aaa')
      if (!this.modal) {
        this.init()
      }
      
      this.modal.modal('show')
    },
    close () {
      this.modal.modal('hide')
    },
    
    pitchReduce () {
      this.localConfig.pitch = this.localConfig.pitch - 0.25
      if (this.localConfig.pitch < 0.5) {
        this.localConfig.pitch = 0.5
      }
    },
    pitchRise () {
      this.localConfig.pitch = this.localConfig.pitch + 0.25
      if (this.localConfig.pitch > 1.5) {
        this.localConfig.pitch = 1.5
      }
    },
    initVoice: async function () {
      
      if (typeof(this.localConfig.voiceName) === 'string') {
        return true
      }
      
      let voice = await this.utils.TextToSpeechUtils.setPreferVoice()
      //console.log(voice)
      this.localConfig.voiceName = voice.name
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ConfigurationModal);

/***/ }),

/***/ "./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationModal_less_vue_type_style_index_0_id_065545af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationModal_less_vue_type_style_index_0_id_065545af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationModal_less_vue_type_style_index_0_id_065545af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationModal_less_vue_type_style_index_0_id_065545af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationModal_less_vue_type_style_index_0_id_065545af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ConfigurationModal/ConfigurationModal.vue":
/*!******************************************************************!*\
  !*** ./src/components/ConfigurationModal/ConfigurationModal.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfigurationModal_html_vue_type_template_id_065545af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfigurationModal.html?vue&type=template&id=065545af&scoped=true& */ "./src/components/ConfigurationModal/ConfigurationModal.html?vue&type=template&id=065545af&scoped=true&");
/* harmony import */ var _ConfigurationModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigurationModal.js?vue&type=script&lang=js& */ "./src/components/ConfigurationModal/ConfigurationModal.js?vue&type=script&lang=js&?ab38");
/* empty/unused harmony star reexport *//* harmony import */ var _ConfigurationModal_less_vue_type_style_index_0_id_065545af_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true& */ "./src/components/ConfigurationModal/ConfigurationModal.less?vue&type=style&index=0&id=065545af&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfigurationModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects-Windows%5Cpwa%5CPWA-English-Speaking-Practice%5Csrc%5Ccomponents%5CConfigurationModal%5CConfigurationModal.vue&lang=yaml */ "./src/components/ConfigurationModal/ConfigurationModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects-Windows%5Cpwa%5CPWA-English-Speaking-Practice%5Csrc%5Ccomponents%5CConfigurationModal%5CConfigurationModal.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConfigurationModal_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfigurationModal_html_vue_type_template_id_065545af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfigurationModal_html_vue_type_template_id_065545af_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "065545af",
  null
  
)

/* custom blocks */

if (typeof _ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ConfigurationModal/ConfigurationModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ConfigurationModal/ConfigurationModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects-Windows%5Cpwa%5CPWA-English-Speaking-Practice%5Csrc%5Ccomponents%5CConfigurationModal%5CConfigurationModal.vue&lang=yaml":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationModal/ConfigurationModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects-Windows%5Cpwa%5CPWA-English-Speaking-Practice%5Csrc%5Ccomponents%5CConfigurationModal%5CConfigurationModal.vue&lang=yaml ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./ConfigurationModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects-Windows%5Cpwa%5CPWA-English-Speaking-Practice%5Csrc%5Ccomponents%5CConfigurationModal%5CConfigurationModal.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ConfigurationModal/ConfigurationModal.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=E%3A%5Cpudding%5CCode-Porjects-Windows%5Cpwa%5CPWA-English-Speaking-Practice%5Csrc%5Ccomponents%5CConfigurationModal%5CConfigurationModal.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationModal_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_E_3A_5Cpudding_5CCode_Porjects_Windows_5Cpwa_5CPWA_English_Speaking_Practice_5Csrc_5Ccomponents_5CConfigurationModal_5CConfigurationModal_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=ConfigurationModal.js.map