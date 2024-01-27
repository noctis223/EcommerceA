'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ecommerce-a documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-AppModule-da76448ed8de91af8dba291c6b50736c28b920d5c0e75d09735d17d3602ceb737f3cabe042522fad3ee4a5c1879c5404139160df246cad7be8f48f5150becdbb"' : 'data-bs-target="#xs-components-links-module-AppModule-da76448ed8de91af8dba291c6b50736c28b920d5c0e75d09735d17d3602ceb737f3cabe042522fad3ee4a5c1879c5404139160df246cad7be8f48f5150becdbb"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-da76448ed8de91af8dba291c6b50736c28b920d5c0e75d09735d17d3602ceb737f3cabe042522fad3ee4a5c1879c5404139160df246cad7be8f48f5150becdbb"' : 'id="xs-components-links-module-AppModule-da76448ed8de91af8dba291c6b50736c28b920d5c0e75d09735d17d3602ceb737f3cabe042522fad3ee4a5c1879c5404139160df246cad7be8f48f5150becdbb"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AcquistaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AcquistaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AggiungiprodottoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AggiungiprodottoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AggiungiquantitaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AggiungiquantitaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AllordiniComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AllordiniComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AllreclamiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AllreclamiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BarraComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BarraComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CarrelloComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CarrelloComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CercabrcodeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CercabrcodeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CercanomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CercanomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CofereclamoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CofereclamoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CofermaresoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CofermaresoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ConfermacontattoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfermacontattoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ConfermaordineComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfermaordineComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ConfermaprodottoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfermaprodottoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ConfermareclamoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfermareclamoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ContattiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ContattiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CreanuovaTipologiaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CreanuovaTipologiaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DettagliComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DettagliComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ErroreComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ErroreComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ErroreclamoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ErroreclamoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ErroreresoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ErroreresoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InfoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InfoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginDialogComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginDialogComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/OrdiniComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OrdiniComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ReclamoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ReclamoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegistrazioneComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegistrazioneComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ResiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ResiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ShowimmaginedialogComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ShowimmaginedialogComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VediprodottoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VediprodottoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VisualizzatuttiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VisualizzatuttiComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Caddy.html\" data-type=\"entity-link\" >Caddy</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SharedService.html\" data-type=\"entity-link\" >SharedService</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ImmaginiprocessService.html\" data-type=\"entity-link\" >ImmaginiprocessService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/KeycloakService.html\" data-type=\"entity-link\" >KeycloakService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ProdottoserviceTsComponent.html\" data-type=\"entity-link\" >ProdottoserviceTsComponent</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SecurityService.html\" data-type=\"entity-link\" >SecurityService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SharedDataService.html\" data-type=\"entity-link\" >SharedDataService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#guards-links"' : 'data-bs-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AcquistaprodottoserviceService.html\" data-type=\"entity-link\" >AcquistaprodottoserviceService</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/ProdottoEditService.html\" data-type=\"entity-link\" >ProdottoEditService</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Category.html\" data-type=\"entity-link\" >Category</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Client.html\" data-type=\"entity-link\" >Client</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/dettagliordine.html\" data-type=\"entity-link\" >dettagliordine</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ExcludedUrl.html\" data-type=\"entity-link\" >ExcludedUrl</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ExcludedUrlRegex.html\" data-type=\"entity-link\" >ExcludedUrlRegex</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FileHandle.html\" data-type=\"entity-link\" >FileHandle</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ItemProduct.html\" data-type=\"entity-link\" >ItemProduct</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/KeycloakEvent.html\" data-type=\"entity-link\" >KeycloakEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/KeycloakOptions.html\" data-type=\"entity-link\" >KeycloakOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/mieiOrdini.html\" data-type=\"entity-link\" >mieiOrdini</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Ordine.html\" data-type=\"entity-link\" >Ordine</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Product.html\" data-type=\"entity-link\" >Product</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/reclamo.html\" data-type=\"entity-link\" >reclamo</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Tipologia.html\" data-type=\"entity-link\" >Tipologia</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Utente.html\" data-type=\"entity-link\" >Utente</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));