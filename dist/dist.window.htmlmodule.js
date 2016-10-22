/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************!*\
  !*** multi window.htmlmodule ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/window.htmlmodule */313);


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _nodeinit = __webpack_require__(/*! ./nodeinit */ 2);

	Object.keys(_nodeinit).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nodeinit[key];
	    }
	  });
	});

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	Object.keys(_domassembler).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _domassembler[key];
	    }
	  });
	});

	var _htmlassembler = __webpack_require__(/*! ./htmlassembler */ 4);

	Object.keys(_htmlassembler).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _htmlassembler[key];
	    }
	  });
	});

	var _xmldom = __webpack_require__(/*! ./xmldom */ 5);

	Object.keys(_xmldom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _xmldom[key];
	    }
	  });
	});

	var _htmldom = __webpack_require__(/*! ./htmldom */ 6);

	Object.keys(_htmldom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _htmldom[key];
	    }
	  });
	});

/***/ },
/* 2 */
/*!*************************!*\
  !*** ./lib/nodeinit.js ***!
  \*************************/
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NodeInit = NodeInit;
	/**
	 * Converts any non-dictionary object argument to a `NodeInit` dictionary object
	 * with a `children` property assigned to the passed object
	 * @function NodeInit
	 * @param {*|Object} init
	 * @returns {{}} NodeInit dictionary object
	 */
	function NodeInit(init) {
	    if (init && init.constructor !== Object) {
	        return { children: init };
	    }
	    return init;
	}

/***/ },
/* 3 */
/*!*****************************!*\
  !*** ./lib/domassembler.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DOMAssembler = exports.XML_NS_URI = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nodeinit = __webpack_require__(/*! ./nodeinit */ 2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var isArray = Array.isArray;
	var _window = window;
	var document = _window.document;
	var Element = _window.Element;

	/**
	 * - XML namespace
	 * - provides `Element` DOM interface
	 * - https://www.w3.org/1999/xml
	 */

	var XML_NS_URI = exports.XML_NS_URI = 'https://www.w3.org/1999/xml';

	/**
	 * - Assembler for DOM `Element`
	 * - `Document.createElementNS` functionality wrapper
	 * - Provides built-in and adapted interfaces for `Element` initialization
	 */

	var DOMAssembler = exports.DOMAssembler = function () {
	    function DOMAssembler() {
	        _classCallCheck(this, DOMAssembler);
	    }

	    _createClass(DOMAssembler, [{
	        key: 'createElement',


	        /**
	         * Create the specified element and initialize it by a given property set
	         * @param {String} tagName
	         * @param {{}} [init]
	         * @returns {Element} created and initialized DOM `Element`
	         */
	        value: function createElement(tagName, init) {
	            var namespaceURI = this.constructor.namespaceURI;

	            this.element = document.createElementNS(namespaceURI, tagName);
	            if (init) this.init = (0, _nodeinit.NodeInit)(init);
	            return this.element;
	        }

	        /**
	         * @returns {String} create elements in XML namespace
	         */

	    }, {
	        key: 'element',

	        /**
	         * Assign given element to assembler instance
	         * @param {Element} element node to assign
	         */
	        set: function set(element) {
	            if (element instanceof Element) {
	                this.node = element;
	            } else throw Error('This is not Element');
	        }

	        /**
	         * Get the assigned element
	         * @returns {Element} assigned node
	         */
	        ,
	        get: function get() {
	            if (this.node) return this.node;else throw Error('No element assigned');
	        }

	        /**
	         * todo thinkme: define as method? if(init) this.init(NodeInit(init), ...initlist);
	         * Initialize the element with defined properties
	         * @param {{}} init initializing dictionary object
	         */

	    }, {
	        key: 'init',
	        set: function set(init) {
	            var element = this.element;
	            for (var prop in init) {
	                var value = init[prop];
	                if (value !== undefined) {
	                    if (prop in this) this[prop] = value;else if (prop in element) element[prop] = value;
	                }
	            }
	        }

	        /**
	         * Set attributes on the element
	         * @param {{}} attrset dictionary object
	         */

	    }, {
	        key: 'attrset',
	        set: function set(attrset) {
	            var element = this.element;
	            for (var name in attrset) {
	                var value = attrset[name];
	                if (typeof value === 'string') {
	                    element.setAttribute(name, value);
	                }
	            }
	        }

	        /**
	         * Append children to the element
	         * - Supports arrays and nested arrays, single DOM nodes and strings as `Text` nodes
	         * @param {Node|String|DOMAssembler|Array} children child node or string or assembler instance or array of listed
	         */

	    }, {
	        key: 'children',
	        set: function set(children) {
	            var _this = this;

	            if (isArray(children)) {
	                children.forEach(function (child) {
	                    return _this.children = child;
	                });
	            } else if (children) {
	                var child = typeof children === 'string' ? document.createTextNode(children) : children instanceof DOMAssembler ? // todo add spec
	                children.element : children;
	                this.element.appendChild(child);
	            }
	        }
	    }], [{
	        key: 'namespaceURI',
	        get: function get() {
	            return XML_NS_URI;
	        }
	    }]);

	    return DOMAssembler;
	}();

	Object.defineProperty(DOMAssembler.prototype, 'node', { writable: true, value: null });

/***/ },
/* 4 */
/*!******************************!*\
  !*** ./lib/htmlassembler.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HTMLAssembler = exports.XHTML_NS_URI = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var assign = Object.assign;

	/**
	 * - XHTML namespace
	 * - provides all inherited from `HTMLElement` DOM interfaces
	 * - https://www.w3.org/1999/xhtml
	 */

	var XHTML_NS_URI = exports.XHTML_NS_URI = 'http://www.w3.org/1999/xhtml';

	/**
	 * - Assembler for DOM `HTMLElement`
	 * - `Document.createElement` functionality wrapper
	 * - Provides built-in and adapted interfaces for `HTMLElement` initialization
	 */

	var HTMLAssembler = exports.HTMLAssembler = function (_DOMAssembler) {
	  _inherits(HTMLAssembler, _DOMAssembler);

	  function HTMLAssembler() {
	    _classCallCheck(this, HTMLAssembler);

	    return _possibleConstructorReturn(this, (HTMLAssembler.__proto__ || Object.getPrototypeOf(HTMLAssembler)).apply(this, arguments));
	  }

	  _createClass(HTMLAssembler, [{
	    key: 'dataset',

	    /**
	     * Assign custom `data-` attributes to the element
	     * @param {{}} dataset declaration dictionary object
	     */
	    set: function set(dataset) {
	      assign(this.element.dataset, dataset);
	    }

	    /**
	     * Assign CSS style declaration to the element
	     * @param {CSSStyleDeclaration} style declaration dictionary object
	     */

	  }, {
	    key: 'style',
	    set: function set(style) {
	      assign(this.element.style, style);
	    }

	    /**
	     * @returns {String} create elements in XHTML namespace
	     */

	  }], [{
	    key: 'namespaceURI',
	    get: function get() {
	      return XHTML_NS_URI;
	    }
	  }]);

	  return HTMLAssembler;
	}(_domassembler.DOMAssembler);

/***/ },
/* 5 */
/*!***********************!*\
  !*** ./lib/xmldom.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.comment = exports.text = exports.element = exports.xmldom = undefined;

	var _domassembler = __webpack_require__(/*! ./domassembler */ 3);

	var _window = window;
	var document = _window.document;


	var assembler = new _domassembler.DOMAssembler();

	var xmldom = exports.xmldom = function xmldom(tagName, init) {
	  return assembler.createElement(tagName, init);
	};

	var element = exports.element = function element(init) {
	  return xmldom('element', init);
	};

	var text = exports.text = function text(_text) {
	  return document.createTextNode(_text);
	};

	var comment = exports.comment = function comment(_comment) {
	  return document.createComment(_comment);
	};

/***/ },
/* 6 */
/*!************************!*\
  !*** ./lib/htmldom.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wbr = exports.video = exports.variable = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.template = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.style = exports.strong = exports.span = exports.source = exports.small = exports.slot = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.picture = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.figcaption = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.htmldom = undefined;

	var _htmlassembler = __webpack_require__(/*! ./htmlassembler */ 4);

	var assembler = new _htmlassembler.HTMLAssembler();

	/**
	 * Assembles the specified element
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#htmlelement-htmlelement)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
	 * - [MSDN API reference](https://msdn.microsoft.com/en-us/library/hh869697(v=vs.85).aspx)
	 *
	 * Provides `HTMLElement` interface and all HTML DOM interfaces which inherit from it
	 * @function htmldom
	 * @param {String} tagName element tag name
	 * @param {{}} init `NodeInit` dictionary
	 * @param {{}} init.dataset
	 * @param {{}} init.style `CSSStyleDeclaration`
	 * @param {String|Node|DOMAssembler|Array} init.children
	 * @param {String} init.accessKey
	 * @param {String} init.className
	 * @param {String} init.contentEditable
	 * @param {String} init.dir
	 * @param {Boolean} init.hidden
	 * @param {String} init.id
	 * @param {String} init.innerHTML
	 * @param {String} init.lang
	 * @param {Number} init.tabIndex
	 * @param {String} init.title
	 */
	var htmldom = exports.htmldom = function htmldom(tagName, init) {
	  return assembler.createElement(tagName, init);
	};

	/**
	 * [The `a` element](https://html.spec.whatwg.org/#the-a-element)
	 *  - If the `a` element has an `href` attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.
	 *  - If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.
	 *
	 * Implements `HTMLAnchorElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-a-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
	 * - [MSDN API reference](https://msdn.microsoft.com/en-us/library/hh869682(v=vs.85).aspx)
	 *
	 * @function a
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.href Address of the hyperlink
	 * @param {String} init.target Browsing context for hyperlink navigation
	 * @param {String} init.download Whether to download the resource instead of navigating to it, and its file name if so
	 * @param {String} init.ping URLs to ping
	 * @param {String} init.rel Relationship between the location in the document containing the hyperlink and the destination resource
	 * @param {String} init.hreflang Language of the linked resource
	 * @param {String} init.type Hint for the type of the referenced resource
	 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
	 */
	var a = exports.a = function a(init) {
	  return htmldom('a', init);
	};

	/**
	 * [The `abbr` element](https://html.spec.whatwg.org/#the-abbr-element)
	 * represents an abbreviation or acronym, optionally with its expansion.
	 * The `title` attribute may be used to provide an expansion of the abbreviation.
	 * The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-abbr-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)
	 *
	 * @function abbr
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.title Special semantics: full term or expansion of abbreviation
	 */
	var abbr = exports.abbr = function abbr(init) {
	  return htmldom('abbr', init);
	};

	/**
	 * [The `address` element](https://html.spec.whatwg.org/#the-address-element)
	 * represents the contact information for its nearest `article` or `body` element ancestor.
	 * If that is the `body` element, then the contact information applies to the document as a whole.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-address-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
	 *
	 * @function address
	 * @param {{}} init `NodeInit` dictionary
	 */
	var address = exports.address = function address(init) {
	  return htmldom('address', init);
	};

	/**
	 * [The `area` element](https://html.spec.whatwg.org/#the-area-element)
	 * represents either a hyperlink with some text and a corresponding area on an image map,
	 * or a dead area on an image map.
	 *
	 * Implements `HTMLAreaElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-area-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAreaElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
	 *
	 * @function area
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.alt Replacement text for use when images are not available
	 * @param {String} init.coords Coordinates for the shape to be created in an image map
	 * @param {String} init.shape The kind of shape to be created in an image map
	 * @param {String} init.href Address of the hyperlink
	 * @param {String} init.target Browsing context for hyperlink navigation
	 * @param {String} init.download Whether to download the resource instead of navigating to it, and its file name if so
	 * @param {String} init.ping URLs to ping
	 * @param {String} init.rel Relationship between the location in the document containing the hyperlink and the destination resource
	 */
	var area = exports.area = function area(init) {
	  return htmldom('area', init);
	};

	/**
	 * [The `article` element](https://html.spec.whatwg.org/#the-article-element)
	 * represents a complete, or self-contained, composition in a document, page, application,
	 * or site and that is, in principle, independently distributable or reusable, e.g. in syndication.
	 * This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment,
	 * an interactive widget or gadget, or any other independent item of content.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-article-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
	 *
	 * @function article
	 * @param {{}} init `NodeInit` dictionary
	 */
	var article = exports.article = function article(init) {
	  return htmldom('article', init);
	};

	/**
	 * [The `aside` element](https://html.spec.whatwg.org/#the-aside-element)
	 * represents a section of a page that consists of content that is tangentially related to the content around the aside element,
	 * and which could be considered separate from that content.
	 * Such sections are often represented as sidebars in printed typography.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-aside-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
	 *
	 * @function aside
	 * @param {{}} init `NodeInit` dictionary
	 */
	var aside = exports.aside = function aside(init) {
	  return htmldom('aside', init);
	};

	/**
	 * [The `audio` element](https://html.spec.whatwg.org/#the-audio-element)
	 * represents a sound or audio stream.
	 * Content may be provided inside the `audio` element.
	 * User agents should not show this content to the user;
	 * it is intended for older Web browsers which do not support audio, so that legacy audio plugins can be tried,
	 * or to show text to the users of these older browsers informing them of how to access the audio contents.
	 *
	 * Implements `HTMLAudioElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-audio-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
	 *
	 * @function audio
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.src Address of the resource
	 * @param {String} init.crossorigin How the element handles crossorigin requests
	 * @param {String} init.preload Hints how much buffering the media resource will likely need
	 * @param {Boolean} init.autoplay Hint that the media resource can be started automatically when the page is loaded
	 * @param {Boolean} init.loop Whether to loop the media resource
	 * @param {Boolean} init.muted Whether to mute the media resource by default
	 * @param {Boolean} init.controls Show user agent controls
	 */
	var audio = exports.audio = function audio(init) {
	  return htmldom('audio', init);
	};

	/**
	 * [The `b` element](https://html.spec.whatwg.org/#the-b-element)
	 * represents a span of text to which attention is being drawn
	 * for utilitarian purposes without conveying any extra importance
	 * and with no implication of an alternate voice or mood,
	 * such as key words in a document abstract, product names in a review,
	 * actionable words in interactive text-driven software, or an article lede.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-b-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
	 *
	 * @function b
	 * @param {{}} init `NodeInit` dictionary
	 */
	var b = exports.b = function b(init) {
	  return htmldom('b', init);
	};

	/**
	 * [The `base` element](https://html.spec.whatwg.org/#the-base-element)
	 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-base-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
	 *
	 * @function base
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.dir special semantics
	 */
	var base = exports.base = function base(init) {
	  return htmldom('base', init);
	};

	/**
	 * [The `bdi` element](https://html.spec.whatwg.org/#the-bdi-element)
	 * represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-bdi-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)
	 *
	 * @function bdi
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.dir special semantics
	 */
	var bdi = exports.bdi = function bdi(init) {
	  return htmldom('bdi', init);
	};

	/**
	 * [The `bdo` element](https://html.spec.whatwg.org/#the-bdo-element)
	 * represents explicit text directionality formatting control for its children.
	 * It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-bdo-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)
	 *
	 * @function bdo
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.dir special semantics: `rtl` or `ltr` values allowed only
	 */
	var bdo = exports.bdo = function bdo(init) {
	  return htmldom('bdo', init);
	};

	/**
	 * [The `blockquote` element](https://html.spec.whatwg.org/#the-blockquote-element)
	 * represents a section that is quoted from another source.
	 * Content inside a blockquote must be quoted from another source,
	 * whose address, if it has one, may be cited in the cite attribute.
	 *
	 * Implements `HTMLQuoteElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-blockquote-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLQuoteElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
	 *
	 * @function blockquote
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.cite Link to the source of the quotation or more information about the edit
	 */
	var blockquote = exports.blockquote = function blockquote(init) {
	  return htmldom('blockquote', init);
	};

	/**
	 * [The `body` element](https://html.spec.whatwg.org/#the-body-element)
	 * represents the main content of the document.
	 *
	 * Implements `HTMLBodyElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-body-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
	 *
	 * @function body
	 * @param {{}} init `NodeInit` dictionary
	 * @param init.onafterprint
	 * @param init.onbeforeprint
	 * @param init.onbeforeunload
	 * @param init.onhashchange
	 * @param init.onlanguagechange
	 * @param init.onmessage
	 * @param init.onoffline
	 * @param init.ononline
	 * @param init.onpagehide
	 * @param init.onpageshow
	 * @param init.onpopstate
	 * @param init.onrejectionhandled
	 * @param init.onstorage
	 * @param init.onunhandledrejection
	 * @param init.onunload
	 */
	var body = exports.body = function body(init) {
	  return htmldom('body', init);
	};

	/**
	 * [The `br` element](https://html.spec.whatwg.org/#the-br-element)
	 * represents a line break.
	 *
	 * Implements `HTMLBRElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-br-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBRElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
	 *
	 * @function br
	 * @param {{}} init `NodeInit` dictionary
	 */
	var br = exports.br = function br(init) {
	  return htmldom('br', init);
	};

	/**
	 * [The `button` element](https://html.spec.whatwg.org/#the-button-element)
	 * represents a button labeled by its contents.
	 *
	 * - [w3](https://www.w3.org/TR/html/single-page.html#the-button-element)
	 * - [mdn](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
	 * - [msdn](https://msdn.microsoft.com/en-us/library/ms535211(v=vs.85).aspx)
	 *
	 * Implements `HTMLButtonElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-button-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
	 *
	 * @function button
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Boolean} [init.autofocus] Automatically focus the form control when the page is loaded
	 * @param {Boolean} [init.disabled] Whether the form control is disabled
	 * @param {String} [init.formAction] URL to use for form submission
	 * @param {String} [init.formEnctype] Form data set encoding type to use for form submission
	 * @param {String} [init.formMethod] HTTP method to use for form submission
	 * @param {Boolean} [init.formNoValidate] Bypass form control validation for form submission
	 * @param {String} [init.formTarget] Browsing context for form submission
	 * @param {String} [init.name] Name of form control to use for form submission and in the form.elements API
	 * @param {String} [init.type] Type of button
	 * @param {String} [init.value] Value to be used for form submission
	 * @param {HTMLMenuElement} [init.menu] Specifies the element's designated pop-up menu
	 */
	var button = exports.button = function button(init) {
	  return htmldom('button', init);
	};

	/**
	 * [The `canvas` element](https://html.spec.whatwg.org/#the-canvas-element)
	 * provides scripts with a resolution-dependent bitmap canvas,
	 * which can be used for rendering graphs, game graphics, art,
	 * or other visual images on the fly.
	 *
	 * Implements `HTMLCanvasElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-canvas-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
	 *
	 * @function canvas
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Number} init.width Horizontal dimension
	 * @param {Number} init.height Vertical dimension
	 */
	var canvas = exports.canvas = function canvas(init) {
	  return htmldom('canvas', init);
	};

	/**
	 * [The `caption` element](https://html.spec.whatwg.org/#the-caption-element)
	 * represents the title of the table that is its parent,
	 * if it has a parent and that is a table element.
	 *
	 * Implements `HTMLTableCaptionElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-caption-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCaptionElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
	 *
	 * @function caption
	 * @param {{}} init `NodeInit` dictionary
	 */
	var caption = exports.caption = function caption(init) {
	  return htmldom('caption', init);
	};

	/**
	 * [The `cite` element](https://html.spec.whatwg.org/#the-cite-element)
	 * represents the title of a work (e.g. a book, a paper, an essay, a poem,
	 * a score, a song, a script, a film, a TV show, a game, a sculpture, a painting,
	 * a theatre production, a play, an opera, a musical, an exhibition, a legal case report,
	 * a computer program, etc). This can be a work that is being quoted or referenced in detail
	 * (i.e. a citation), or it can just be a work that is mentioned in passing.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-cite-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)
	 *
	 * @function cite
	 * @param {{}} init `NodeInit` dictionary
	 */
	var cite = exports.cite = function cite(init) {
	  return htmldom('cite', init);
	};

	/**
	 * [The `code` element](https://html.spec.whatwg.org/#the-code-element)
	 * represents a fragment of computer code. This could be an XML element name,
	 * a file name, a computer program, or any other string that a computer would recognize.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-code-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
	 *
	 * @function code
	 * @param {{}} init `NodeInit` dictionary
	 */
	var code = exports.code = function code(init) {
	  return htmldom('code', init);
	};

	/**
	 * [The `col` element](https://html.spec.whatwg.org/#the-col-element)
	 * represents has a parent and that is a colgroup element that itself has a parent
	 * that is a table element, then the col element represents one or more columns
	 * in the column group represented by that colgroup.
	 *
	 * Implements `HTMLTableColElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-col-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535225(v=vs.85).aspx)
	 *
	 * @function col
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Number} init.span Number of columns spanned by the element
	 */
	var col = exports.col = function col(init) {
	  return htmldom('col', init);
	};

	/**
	 * [The `colgroup` element](https://html.spec.whatwg.org/#the-colgroup-element)
	 * represents represents a group of one or more columns in the table that is its parent,
	 * if it has a parent and that is a table element.
	 *
	 * Implements `HTMLTableColElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-colgroup-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableColElement)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535225(v=vs.85).aspx)
	 *
	 * @function colgroup
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Number} init.span Number of columns spanned by the element
	 */
	var colgroup = exports.colgroup = function colgroup(init) {
	  return htmldom('colgroup', init);
	};

	/**
	 * [The `data` element](https://html.spec.whatwg.org/#the-data-element)
	 * represents its contents, along with a machine-readable form
	 * of those contents in the value attribute.
	 *
	 * Implements `HTMLDataElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-data-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt706246(v=vs.85).aspx)
	 *
	 * @function data
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.value Machine-readable value
	 */
	var data = exports.data = function data(init) {
	  return htmldom('data', init);
	};

	/**
	 * [The `datalist` element](https://html.spec.whatwg.org/#the-datalist-element)
	 * represents a set of option elements that represent predefined options for other controls.
	 * In the rendering, the datalist element represents nothing and it, along with its children,
	 * should be hidden.
	 *
	 * Implements `HTMLDataListElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataListElement)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/hh772925(v=vs.85).aspx)
	 *
	 * @function datalist
	 * @param {{}} init `NodeInit` dictionary
	 */
	var datalist = exports.datalist = function datalist(init) {
	  return htmldom('datalist', init);
	};

	/**
	 * [The `dd` element](https://html.spec.whatwg.org/#the-dd-element)
	 * represents the description, definition, or value,
	 * part of a term-description group in a description list (dl element).
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-datalist-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535234(v=vs.85).aspx)
	 *
	 * @function dd
	 * @param {{}} init `NodeInit` dictionary
	 */
	var dd = exports.dd = function dd(init) {
	  return htmldom('dd', init);
	};

	/**
	 * [The `del` element](https://html.spec.whatwg.org/#the-del-element)
	 * represents a removal from the document.
	 *
	 * Uses `HTMLModElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-del-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535236(v=vs.85).aspx)
	 *
	 * @function del
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.cite Link to the source of the quotation or more information about the edit
	 * @param {String} init.dateTime Date and (optionally) time of the change
	 */
	var del = exports.del = function del(init) {
	  return htmldom('del', init);
	};

	/**
	 * [The `details` element](https://html.spec.whatwg.org/#the-details-element)
	 * represents a disclosure widget from which the user can obtain additional information or controls.
	 *
	 * Implements `HTMLDetailsElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/interactive-elements.html#the-details-element)
	 * - [MDN elemeent reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
	 *
	 * @function details
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.open Whether the details are visible
	 */
	var details = exports.details = function details(init) {
	  return htmldom('details', init);
	};

	/**
	 * [The `dfn` element](https://html.spec.whatwg.org/#the-dfn-element)
	 * represents the defining instance of a term. The paragraph, description list group,
	 * or section that is the nearest ancestor of the dfn element must also contain
	 * the definition(s) for the term given by the dfn element.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dfn-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535237(v=vs.85).aspx)
	 *
	 * @function dfn
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.title Special semantics: Full term or expansion of abbreviation
	 */
	var dfn = exports.dfn = function dfn(init) {
	  return htmldom('dfn', init);
	};

	/**
	 * [The `dialog` element](https://html.spec.whatwg.org/#the-dialog-element)
	 * represents a part of an application that a user interacts with to perform a task,
	 * for example a dialog box, inspector, or window.
	 *
	 * Implements `HTMLDialogElement` interface
	 *
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
	 *
	 * @function dialog
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.open Whether the dialog box is showing
	 */
	var dialog = exports.dialog = function dialog(init) {
	  return htmldom('dialog', init);
	};

	/**
	 * [The `div` element](https://html.spec.whatwg.org/#the-div-element)
	 * has no special meaning at all. It represents its children.
	 * It can be used with the class, lang, and title attributes to mark up semantics
	 * common to a group of consecutive elements.
	 *
	 * Implements `HTMLDivElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-div-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535240(v=vs.85).aspx)
	 *
	 * @function div
	 * @param {{}} init `NodeInit` dictionary
	 */
	var div = exports.div = function div(init) {
	  return htmldom('div', init);
	};

	/**
	 * [The `dl` element](https://html.spec.whatwg.org/#the-dl-element)
	 * represents an association list consisting of zero or more name-value groups (a description list).
	 * A name-value group consists of one or more names (dt elements) followed by one or more values
	 * (dd elements), ignoring any nodes other than dt and dd elements.
	 * Within a single dl element, there should not be more than one dt element for each name.
	 *
	 * Implements `HTMLDListElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dl-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDListElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535241(v=vs.85).aspx)
	 *
	 * @function dl
	 * @param {{}} init `NodeInit` dictionary
	 */
	var dl = exports.dl = function dl(init) {
	  return htmldom('dl', init);
	};

	/**
	 * [The `dt` element](https://html.spec.whatwg.org/#the-dt-element)
	 * represents the term, or name, part of a term-description group in a description list (dl element).
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-dt-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535243(v=vs.85).aspx)
	 *
	 * @function dt
	 * @param {{}} init `NodeInit` dictionary
	 */
	var dt = exports.dt = function dt(init) {
	  return htmldom('dt', init);
	};

	/**
	 * [The `em` element](https://html.spec.whatwg.org/#the-em-element)
	 * represents stress emphasis of its contents.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-em-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535244(v=vs.85).aspx)
	 *
	 * @function em
	 * @param {{}} init `NodeInit` dictionary
	 */
	var em = exports.em = function em(init) {
	  return htmldom('em', init);
	};

	/**
	 * [The `embed` element](https://html.spec.whatwg.org/#the-embed-element)
	 * represents provides an integration point for an external (typically non-HTML)
	 * application or interactive content.
	 *
	 * Implements `HTMLEmbedElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-embed-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLEmbedElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535245(v=vs.85).aspx)
	 *
	 * @function embed
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.src Address of the resource
	 * @param {String} init.type Type of embedded resource
	 * @param {String} init.width Horizontal dimension
	 * @param {String} init.height Vertical dimension
	 */
	var embed = exports.embed = function embed(init) {
	  return htmldom('embed', init);
	};

	/**
	 * [The `fieldset` element](https://html.spec.whatwg.org/#the-fieldset-element)
	 * represents
	 *
	 * Implements `HTMLFieldSetElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-fieldset-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535247(v=vs.85).aspx)
	 *
	 * @function fieldset
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.disabled Whether the form control is disabled
	 * @param {String} init.form Associates the control with a form element
	 * @param {String} init.name Name of form control to use in the form.elements API
	 */
	var fieldset = exports.fieldset = function fieldset(init) {
	  return htmldom('fieldset', init);
	};

	/**
	 * [The `figcaption` element](https://html.spec.whatwg.org/#the-figcaption-element)
	 * represents a caption or legend for the rest of the contents
	 * of the figcaption element's parent figure element, if any.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-figcaption-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593037(v=vs.85).aspx)
	 *
	 * @function figcaption
	 * @param {{}} init `NodeInit` dictionary
	 */
	var figcaption = exports.figcaption = function figcaption(init) {
	  return htmldom('figcaption', init);
	};

	/**
	 * [The `figure` element](https://html.spec.whatwg.org/#the-figure-element)
	 * represents some flow content, optionally with a caption,
	 * that is self-contained (like a complete sentence) and is typically referenced
	 * as a single unit from the main flow of the document.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-figure-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/*.aspx)
	 *
	 * @function figure
	 * @param {{}} init `NodeInit` dictionary
	 */
	var figure = exports.figure = function figure(init) {
	  return htmldom('figure', init);
	};

	/**
	 * [The `footer` element](https://html.spec.whatwg.org/#the-footer-element)
	 * represents a footer for its nearest ancestor sectioning content or sectioning root element.
	 * A footer typically contains information about its section such as who wrote it,
	 * links to related documents, copyright data, and the like.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-footer-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593039(v=vs.85).aspx)
	 *
	 * @function footer
	 * @param {{}} init `NodeInit` dictionary
	 */
	var footer = exports.footer = function footer(init) {
	  return htmldom('footer', init);
	};

	/**
	 * [The `form` element](https://html.spec.whatwg.org/#the-form-element)
	 * represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
	 *
	 * Implements `HTMLFormElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-form-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535249(v=vs.85).aspx)
	 *
	 * @function form
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.acceptCharset Character encodings to use for form submission
	 * @param {String} init.action URL to use for form submission
	 * @param {String} init.autocomplete Default setting for autofill feature for controls in the form
	 * @param {String} init.enctype Form data set encoding type to use for form submission
	 * @param {String} init.method HTTP method to use for form submission
	 * @param {String} init.name Name of form to use in the document.forms API
	 * @param {Boolean} init.noValidate Bypass form control validation for form submission
	 * @param {String} init.target Browsing context for form submission
	 */
	var form = exports.form = function form(init) {
	  return htmldom('form', init);
	};

	/**
	 * [The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements](https://html.spec.whatwg.org/#the-h1-element)
	 * represent headings for their sections.
	 *
	 * Implements `HTMLHeadingElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-h1-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535253(v=vs.85).aspx)
	 *
	 * @function h1
	 * @param {{}} init `NodeInit` dictionary
	 */
	var h1 = exports.h1 = function h1(init) {
	  return htmldom('h1', init);
	};
	/**
	 * See [h1](#h1)
	 * @function h2
	 * @param {{}} init `NodeInit` dictionary
	 */
	var h2 = exports.h2 = function h2(init) {
	  return htmldom('h2', init);
	};
	/**
	 * See [h1](#h1)
	 * @function h3
	 * @param {{}} init `NodeInit` dictionary
	 */
	var h3 = exports.h3 = function h3(init) {
	  return htmldom('h3', init);
	};
	/**
	 * See [h1](#h1)
	 * @function h4
	 * @param {{}} init `NodeInit` dictionary
	 */
	var h4 = exports.h4 = function h4(init) {
	  return htmldom('h4', init);
	};
	/**
	 * See [h1](#h1)
	 * @function h5
	 * @param {{}} init `NodeInit` dictionary
	 */
	var h5 = exports.h5 = function h5(init) {
	  return htmldom('h5', init);
	};
	/**
	 * See [h1](#h1)
	 * @function h6
	 * @param {{}} init `NodeInit` dictionary
	 */
	var h6 = exports.h6 = function h6(init) {
	  return htmldom('h6', init);
	};

	/**
	 * [The `head` element](https://html.spec.whatwg.org/#the-head-element)
	 * represents a collection of metadata for the Document.
	 *
	 * Implements `HTMLHeadElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-head-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/HTMLHeadElement)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535252(v=vs.85).aspx)
	 *
	 * @function head
	 * @param {{}} init `NodeInit` dictionary
	 */
	var head = exports.head = function head(init) {
	  return htmldom('head', init);
	};

	/**
	 * [The `header` element](https://html.spec.whatwg.org/#the-header-element)
	 * represents a group of introductory or navigational aids.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-header-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593044(v=vs.85).aspx)
	 *
	 * @function header
	 * @param {{}} init `NodeInit` dictionary
	 */
	var header = exports.header = function header(init) {
	  return htmldom('header', init);
	};

	/**
	 * [The `hgroup` element](https://html.spec.whatwg.org/#the-hgroup-element)
	 * represents the heading of a section, which consists
	 * of all the h1–h6 element children of the hgroup element.
	 * The element is used to group a set of h1–h6 elements when the heading has multiple levels,
	 * such as subheadings, alternative titles, or taglines.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-hgroup-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593045(v=vs.85).aspx)
	 *
	 * @function hgroup
	 * @param {{}} init `NodeInit` dictionary
	 */
	var hgroup = exports.hgroup = function hgroup(init) {
	  return htmldom('hgroup', init);
	};

	/**
	 * [The `hr` element](https://html.spec.whatwg.org/#the-hr-element)
	 * represents a paragraph-level thematic break, e.g. a scene change in a story,
	 * or a transition to another topic within a section of a reference book.
	 *
	 * Implements `HTMLHRElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-hr-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHRElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535254(v=vs.85).aspx)
	 *
	 * @function hr
	 * @param {{}} init `NodeInit` dictionary
	 */
	var hr = exports.hr = function hr(init) {
	  return htmldom('hr', init);
	};

	/**
	 * [The `html` element](https://html.spec.whatwg.org/#the-html-element)
	 * represents the root of an HTML document.
	 *
	 * Implements `HTMLHtmlElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-html-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535255(v=vs.85).aspx)
	 *
	 * @function html
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.manifest [Application cache manifest](https://html.spec.whatwg.org/#concept-appcache-manifest)
	 */
	var html = exports.html = function html(init) {
	  return htmldom('html', init);
	};

	/**
	 * [The `i` element](https://html.spec.whatwg.org/#the-i-element)
	 * represents a span of text in an alternate voice or mood,
	 * or otherwise offset from the normal prose in a manner indicating a different quality of text,
	 * such as a taxonomic designation, a technical term, an idiomatic phrase from another language,
	 * transliteration, a thought, or a ship name in Western texts.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-i-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535257(v=vs.85).aspx)
	 *
	 * @function i
	 * @param {{}} init `NodeInit` dictionary
	 */
	var i = exports.i = function i(init) {
	  return htmldom('i', init);
	};

	/**
	 * [The `iframe` element](https://html.spec.whatwg.org/#the-iframe-element)
	 * represents a [nested browsing context](https://html.spec.whatwg.org/#nested-browsing-context).
	 *
	 * Implements `HTMLIFrameElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-iframe-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535258(v=vs.85).aspx)
	 *
	 * @function iframe
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.src Address of the resource
	 * @param {String} init.srcdoc A document to render in the iframe
	 * @param {String} init.name Name of nested browsing context
	 * @param {String} init.attrset.sandbox Security rules for nested content
	 * @param {String} init.allowFullScreen Whether to allow the iframe's contents to use requestFullscreen()
	 * @param {String} init.allowUserMedia Whether to allow the iframe's contents to use getUserMedia()
	 * @param {String} init.width Horizontal dimension
	 * @param {String} init.height Vertical dimension
	 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
	 */
	var iframe = exports.iframe = function iframe(init) {
	  return htmldom('iframe', init);
	};

	/**
	 * [The `img` element](https://html.spec.whatwg.org/#the-img-element)
	 * represents an image.
	 *
	 * Implements `HTMLImageElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-img-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535259(v=vs.85).aspx)
	 *
	 * @function img
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.alt Replacement text for use when images are not available
	 * @param {String} init.src Address of the resource
	 * @param {String} init.srcset Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
	 * @param {String} init.sizes Image sizes for different page layouts
	 * @param {String} init.crossOrigin How the element handles crossorigin requests
	 * @param {String} init.useMap Name of image map to use
	 * @param {Boolean} init.isMap Whether the image is a server-side image map
	 * @param {Number} init.width Horizontal dimension
	 * @param {Number} init.height Vertical dimension
	 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
	 */
	var img = exports.img = function img(init) {
	  return htmldom('img', init);
	};

	/**
	 * [The `input` element](https://html.spec.whatwg.org/#the-input-element)
	 * represents a typed data field, usually with a form control to allow the user to edit the data.
	 *
	 * Implements `HTMLInputElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-input-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535260(v=vs.85).aspx)
	 *
	 * @function input
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.alt Replacement text for use when images are not available
	 * @param {String} init.accept Hint for expected file type in file upload controls
	 * @param {String} init.autocomplete Hint for form autofill feature
	 * @param {Boolean} init.autofocus Automatically focus the form control when the page is loaded
	 * @param {Boolean} init.checked Whether the command or control is checked
	 * @param {Boolean} init.defaultChecked
	 * @param {String} init.dirName Name of form control to use for sending the element's directionality in form submission
	 * @param {Boolean} init.disabled Whether the form control is disabled
	 * @param {String} init.formAction URL to use for form submission
	 * @param {String} init.formEnctype Form data set encoding type to use for form submission
	 * @param {String} init.formMethod HTTP method to use for form submission
	 * @param {Boolean} init.formNoValidate Bypass form control validation for form submission
	 * @param {String} init.formTarget Browsing context for form submission
	 * @param {Number} init.height Vertical dimension
	 * @param {Boolean} init.indeterminate
	 * @param {String} init.inputMode Hint for selecting an input modality
	 * @param {String} init.max Maximum value
	 * @param {Number} init.maxLength Maximum length of value
	 * @param {String} init.min Minimum value
	 * @param {Number} init.minLength Minimum length of value
	 * @param {Boolean} init.multiple Whether to allow multiple values
	 * @param {String} init.name Name of form control to use for form submission and in the form.elements API
	 * @param {String} init.pattern Pattern to be matched by the form control's value
	 * @param {String} init.placeholder User-visible label to be placed within the form control
	 * @param {Boolean} init.readOnly Whether to allow the value to be edited by the user
	 * @param {Boolean} init.required Whether the control is required for form submission
	 * @param {Number} init.size Size of the control
	 * @param {String} init.src Address of the resource
	 * @param {String} init.step Granularity to be matched by the form control's value
	 * @param {String} init.type Type of form control
	 * @param {String} init.value Value of the form control
	 * @param {String} init.defaultValue
	 * @param {String} init.width Horizontal dimension
	 * @param {String} init.title Special semantics: Description of pattern (when used with pattern attribute).
	 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
	 * @param {String} init.attrset.list List of autocomplete options
	 */
	var input = exports.input = function input(init) {
	  return htmldom('input', init);
	};

	/**
	 * [The `ins` element](https://html.spec.whatwg.org/#the-ins-element)
	 * represents an addition to the document.
	 *
	 * Uses `HTMLModElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ins-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLModElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535842(v=vs.85).aspx)
	 *
	 * @function ins
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.cite Link to the source of the quotation or more information about the edit
	 * @param {String} init.dateTime Date and (optionally) time of the change
	 */
	var ins = exports.ins = function ins(init) {
	  return htmldom('ins', init);
	};

	/**
	 * [The `kbd` element](https://html.spec.whatwg.org/#the-kbd-element)
	 * represents user input (typically keyboard input,
	 * although it may also be used to represent other input, such as voice commands).
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-kbd-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/*.aspx)
	 *
	 * @function kbd
	 * @param {{}} init `NodeInit` dictionary
	 */
	var kbd = exports.kbd = function kbd(init) {
	  return htmldom('kbd', init);
	};

	/**
	 * [The `label` element](https://html.spec.whatwg.org/#the-label-element)
	 * represents a caption in a user interface.
	 * The caption can be associated with a specific form control,
	 * known as the label element's labeled control, either using the for attribute,
	 * or by putting the form control inside the label element itself.
	 *
	 * Implements `HTMLLabelElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-label-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535845(v=vs.85).aspx)
	 *
	 * @function label
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.for Associate the label with form control
	 */
	var label = exports.label = function label(init) {
	  return htmldom('label', init);
	};

	/**
	 * [The `legend` element](https://html.spec.whatwg.org/#the-legend-element)
	 * represents a caption for the rest of the contents of the legend element's parent fieldset element, if any.
	 *
	 * Implements `HTMLLegendElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-legend-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLegendElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535846(v=vs.85).aspx)
	 *
	 * @function legend
	 * @param {{}} init `NodeInit` dictionary
	 */
	var legend = exports.legend = function legend(init) {
	  return htmldom('legend', init);
	};

	/**
	 * [The `li` element](https://html.spec.whatwg.org/#the-li-element)
	 * represents a list item. If its parent element is an ol, ul, or menu element,
	 * then the element is an item of the parent element's list, as defined for those elements.
	 * Otherwise, the list item has no defined list-related relationship to any other li element.
	 *
	 * Implements `HTMLLIElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-li-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLIElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535847(v=vs.85).aspx)
	 *
	 * @function li
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Number} init.value Ordinal value of the list item (if the element is not a child of an ul or menu element)
	 */
	var li = exports.li = function li(init) {
	  return htmldom('li', init);
	};

	/**
	 * [The `link` element](https://html.spec.whatwg.org/#the-link-element)
	 * allows authors to link their document to other resources.
	 *
	 * Implements `HTMLLinkElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-link-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535848(v=vs.85).aspx)
	 *
	 * @function link
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.href Address of the hyperlink
	 * @param {String} init.crossOrigin How the element handles crossorigin requests
	 * @param {String} init.rel Relationship between the document containing the hyperlink and the destination resource
	 * @param {String} init.as Destination for a preload request (for `rel="preload"`)
	 * @param {String} init.media Applicable media
	 * @param {String} init.nonce Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
	 * @param {String} init.hreflang Language of the linked resource
	 * @param {String} init.type Hint for the type of the referenced resource
	 * @param {String} init.sizes Sizes of the icons (for `rel="icon"`)
	 * @param {String} init.referrerPolicy Determines the referrer policy for fetches initiated by the element
	 * @param {String} init.title Special semantics: title of the link; [CSS style sheet set name](CSS style sheet set name).
	 */
	var link = exports.link = function link(init) {
	  return htmldom('link', init);
	};

	/**
	 * [The `main` element](https://html.spec.whatwg.org/#the-main-element)
	 * can be used as a container for the dominant contents of another element.
	 * It represents its children.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-main-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt634542(v=vs.85).aspx)
	 *
	 * @function main
	 * @param {{}} init `NodeInit` dictionary
	 */
	var main = exports.main = function main(init) {
	  return htmldom('main', init);
	};

	/**
	 * [The `map` element](https://html.spec.whatwg.org/#the-map-element),
	 * in conjunction with an img element and any area element descendants, defines an image map.
	 * The element represents its children.
	 *
	 * Implements `HTMLMapElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-map-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMapElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535850(v=vs.85).aspx)
	 *
	 * @function map
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.name Name of [image map](https://html.spec.whatwg.org/#image-map) to reference from the `usemap` attribute
	 */
	var map = exports.map = function map(init) {
	  return htmldom('map', init);
	};

	/**
	 * [The `mark` element](https://html.spec.whatwg.org/#the-mark-element)
	 * represents a run of text in one document marked or highlighted for reference purposes,
	 * due to its relevance in another context.
	 * When used in a quotation or other block of text referred to from the prose,
	 * it indicates a highlight that was not originally present but which has been added
	 * to bring the reader's attention to a part of the text that might not have been considered
	 * important by the original author when the block was originally written,
	 * but which is now under previously unexpected scrutiny.
	 * When used in the main prose of a document,
	 * it indicates a part of the document that has been highlighted
	 * due to its likely relevance to the user's current activity.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-mark-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593046(v=vs.85).aspx)
	 *
	 * @function mark
	 * @param {{}} init `NodeInit` dictionary
	 */
	var mark = exports.mark = function mark(init) {
	  return htmldom('mark', init);
	};

	/**
	 * [The `menu` element](https://html.spec.whatwg.org/#the-menu-element)
	 * represents a list of commands.
	 *
	 * Implements `HTMLMenuElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-menu-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535852(v=vs.85).aspx)
	 *
	 * @function menu
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.type Type of menu
	 * @param {String} init.label User-visible label
	 */
	var menu = exports.menu = function menu(init) {
	  return htmldom('menu', init);
	};

	/**
	 * [The `menuitem` element](https://html.spec.whatwg.org/#the-menuitem-element)
	 * represents a command that the user can invoke from a popup menu
	 * (either a context menu or the menu of a menu button).
	 *
	 * Implements `HTMLMenuItemElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-menuitem-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuItemElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem)
	 *
	 * @function menuitem
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.type Type of command
	 * @param {String} init.label User-visible label
	 * @param {String} init.icon Icon for the command
	 * @param {Boolean} init.disabled Whether the form control is disabled
	 * @param {Boolean} init.checked Whether the command or control is checked
	 * @param {String} init.radiogroup Name of group of commands to treat as a radio button group
	 * @param {Boolean} init.default Mark the command as being a default command
	 * @param {String} init.title Special semantics: hint describing the command
	 */
	var menuitem = exports.menuitem = function menuitem(init) {
	  return htmldom('menuitem', init);
	};

	/**
	 * [The `meta` element](https://html.spec.whatwg.org/#the-meta-element)
	 * represents various kinds of metadata that cannot be expressed using the title,
	 * base, link, style, and script elements.
	 *
	 * Implements `HTMLMetaElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-meta-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535853(v=vs.85).aspx)
	 *
	 * @function meta
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.name Metadata name
	 * @param {String} init.http-equiv Pragma directive
	 * @param {String} init.content Value of the element
	 * @param {String} init.attrset.charset Character encoding declaration
	 */
	var meta = exports.meta = function meta(init) {
	  return htmldom('meta', init);
	};

	/**
	 * [The `meter` element](https://html.spec.whatwg.org/#the-meter-element)
	 * represents a scalar measurement within a known range, or a fractional value;
	 * for example disk usage, the relevance of a query result,
	 * or the fraction of a voting population to have selected a particular candidate.
	 *
	 * Implements `HTMLMeterElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-meter-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt573149(v=vs.85).aspx)
	 *
	 * @function meter
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Number} init.value Current value of the element
	 * @param {Number} init.min Lower bound of range
	 * @param {Number} init.max Upper bound of range
	 * @param {Number} init.low High limit of low range
	 * @param {Number} init.high Low limit of high range
	 * @param {Number} init.optimum Optimum value in gauge
	 */
	var meter = exports.meter = function meter(init) {
	  return htmldom('meter', init);
	};

	/**
	 * [The `nav` element](https://html.spec.whatwg.org/#the-nav-element)
	 * represents a section of a page that links to other pages or to parts within the page:
	 * a section with navigation links.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-nav-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593047(v=vs.85).aspx)
	 *
	 * @function nav
	 * @param {{}} init `NodeInit` dictionary
	 */
	var nav = exports.nav = function nav(init) {
	  return htmldom('nav', init);
	};

	/**
	 * [The `noscript` element](https://html.spec.whatwg.org/#the-noscript-element)
	 * represents nothing if scripting is enabled,
	 * and represents its children if scripting is disabled.
	 * It is used to present different markup to user agents that support scripting
	 * and those that don't support scripting, by affecting how the document is parsed.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-noscript-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535858(v=vs.85).aspx)
	 *
	 * @function noscript
	 * @param {{}} init `NodeInit` dictionary
	 */
	var noscript = exports.noscript = function noscript(init) {
	  return htmldom('noscript', init);
	};

	/**
	 * [The `object` element](https://html.spec.whatwg.org/#the-object-element)
	 * can represent an external resource, which, depending on the type of the resource,
	 * will either be treated as an image, as a nested browsing context,
	 * or as an external resource to be processed by a plugin.
	 *
	 * Implements `HTMLObjectElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-object-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535859(v=vs.85).aspx)
	 *
	 * @function object
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.data Address of the resource
	 * @param {String} init.type Type of embedded resource
	 * @param {Boolean} init.typeMustMatch Whether the type attribute and the Content-Type value need to match for the resource to be used
	 * @param {String} init.name Name of nested browsing context
	 * @param {String} init.useMap Name of image map to use
	 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
	 * @param {String} init.width Horizontal dimension
	 * @param {String} init.height Vertical dimension
	 */
	var object = exports.object = function object(init) {
	  return htmldom('object', init);
	};

	/**
	 * [The `ol` element](https://html.spec.whatwg.org/#the-ol-element)
	 * represents a list of items, where the items have been intentionally ordered,
	 * such that changing the order would change the meaning of the document.
	 *
	 * Implements `HTMLOListElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ol-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOListElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535875(v=vs.85).aspx)
	 *
	 * @function ol
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Boolean} init.reversed Number the list backwards
	 * @param {Number} init.start Starting value of the list
	 * @param {String} init.type Kind of list marker
	 */
	var ol = exports.ol = function ol(init) {
	  return htmldom('ol', init);
	};

	/**
	 * [The `optgroup` element](https://html.spec.whatwg.org/#the-optgroup-element)
	 * represents a group of option elements with a common label.
	 *
	 * Implements `HTMLOptGroupElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-optgroup-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptGroupElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535876(v=vs.85).aspx)
	 *
	 * @function optgroup
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Boolean} init.disabled Whether the form control is disabled
	 * @param {String} init.label User-visible label
	 */
	var optgroup = exports.optgroup = function optgroup(init) {
	  return htmldom('optgroup', init);
	};

	/**
	 * [The `option` element](https://html.spec.whatwg.org/#the-option-element)
	 * represents an option in a select element or as part of a list of suggestions
	 * in a datalist element.
	 *
	 * Implements `HTMLOptionElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-option-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535877(v=vs.85).aspx)
	 *
	 * @function option
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Boolean} init.disabled Whether the form control is disabled
	 * @param {String} init.label User-visible label
	 * @param {Boolean} init.selected Whether the option is selected by default
	 * @param {String} init.value Value to be used for form submission
	 */
	var option = exports.option = function option(init) {
	  return htmldom('option', init);
	};

	/**
	 * [The `output` element](https://html.spec.whatwg.org/#the-output-element)
	 * represents the result of a calculation performed by the application,
	 * or the result of a user action.
	 *
	 * Implements `HTMLOutputElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-output-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOutputElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt732268(v=vs.85).aspx)
	 *
	 * @function output
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.for Specifies controls from which the output was calculated
	 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
	 * @param {String} init.name Name of form control to use in the [form.elements](https://html.spec.whatwg.org/#dom-form-elements) API
	 */
	var output = exports.output = function output(init) {
	  return htmldom('output', init);
	};

	/**
	 * [The `p` element](https://html.spec.whatwg.org/#the-p-element)
	 * represents a paragraph.
	 *
	 * Implements `HTMLParagraphElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-p-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParagraphElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535878(v=vs.85).aspx)
	 *
	 * @function p
	 * @param {{}} init `NodeInit` dictionary
	 */
	var p = exports.p = function p(init) {
	  return htmldom('p', init);
	};

	/**
	 * [The `param` element](https://html.spec.whatwg.org/#the-param-element)
	 * defines parameters for plugins invoked by object elements.
	 * It does not represent anything on its own.
	 *
	 * Implements `HTMLParamElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-param-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLParamElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535880(v=vs.85).aspx)
	 *
	 * @function param
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.name Name of parameter
	 * @param {String} init.value Value of parameter
	 */
	var param = exports.param = function param(init) {
	  return htmldom('param', init);
	};

	/**
	 * [The `picture` element](https://html.spec.whatwg.org/#the-picture-element)
	 * is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.
	 *
	 * Implements `HTMLPictureElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-picture-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPictureElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt574001(v=vs.85).aspx)
	 *
	 * @function picture
	 * @param {{}} init `NodeInit` dictionary
	 */
	var picture = exports.picture = function picture(init) {
	  return htmldom('picture', init);
	};

	/**
	 * [The `pre` element](https://html.spec.whatwg.org/#the-pre-element)
	 * represents a block of preformatted text, in which structure is represented
	 * by typographic conventions rather than by elements.
	 *
	 * Implements `HTMLPreElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-pre-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLPreElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535883(v=vs.85).aspx)
	 *
	 * @function pre
	 * @param {{}} init `NodeInit` dictionary
	 */
	var pre = exports.pre = function pre(init) {
	  return htmldom('pre', init);
	};

	/**
	 * [The `progress` element](https://html.spec.whatwg.org/#the-progress-element)
	 * represents the completion progress of a task. The progress is either indeterminate,
	 * indicating that progress is being made but that it is not clear
	 * how much more work remains to be done before the task is complete
	 * (e.g. because the task is waiting for a remote host to respond),
	 * or the progress is a number in the range zero to a maximum,
	 * giving the fraction of work that has so far been completed.
	 *
	 * Implements `HTMLProgressElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-progress-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/hh772953(v=vs.85).aspx)
	 *
	 * @function progress
	 * @param {{}} init `NodeInit` dictionary
	 * @param {Number} init.value Current value of the element
	 * @param {Number} init.max Upper bound of range
	 */
	var progress = exports.progress = function progress(init) {
	  return htmldom('progress', init);
	};

	/**
	 * [The `q` element](https://html.spec.whatwg.org/#the-q-element)
	 * represents some phrasing content quoted from another source.
	 *
	 * Uses `HTMLQuoteElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-q-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535884(v=vs.85).aspx)
	 *
	 * @function q
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.cite Link to the source of the quotation or more information about the edit
	 */
	var q = exports.q = function q(init) {
	  return htmldom('q', init);
	};

	/**
	 * [The `rp` element](https://html.spec.whatwg.org/#the-rp-element)
	 * can be used to provide parentheses or other content
	 * around a ruby text component of a ruby annotation,
	 * to be shown by user agents that don't support ruby annotations.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-rp-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)
	 *
	 * @function rp
	 * @param {{}} init `NodeInit` dictionary
	 */
	var rp = exports.rp = function rp(init) {
	  return htmldom('rp', init);
	};

	/**
	 * [The `rt` element](https://html.spec.whatwg.org/#the-rt-element)
	 * marks the ruby text component of a ruby annotation.
	 * When it is the child of a ruby element, it doesn't represent anything itself,
	 * but the ruby element uses it as part of determining what it represents.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-rt-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535885(v=vs.85).aspx)
	 *
	 * @function rt
	 * @param {{}} init `NodeInit` dictionary
	 */
	var rt = exports.rt = function rt(init) {
	  return htmldom('rt', init);
	};

	/**
	 * [The `ruby` element](https://html.spec.whatwg.org/#the-ruby-element)
	 * allows one or more spans of phrasing content to be marked with ruby annotations.
	 * Ruby annotations are short runs of text presented alongside base text,
	 * primarily used in East Asian typography as a guide for pronunciation
	 * or to include other annotations.
	 * In Japanese, this form of typography is also known as furigana.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ruby-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535886(v=vs.85).aspx)
	 *
	 * @function ruby
	 * @param {{}} init `NodeInit` dictionary
	 */
	var ruby = exports.ruby = function ruby(init) {
	  return htmldom('ruby', init);
	};

	/**
	 * [The `s` element](https://html.spec.whatwg.org/#the-s-element)
	 * represents contents that are no longer accurate or no longer relevant.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-s-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535890(v=vs.85).aspx)
	 *
	 * @function s
	 * @param {{}} init `NodeInit` dictionary
	 */
	var s = exports.s = function s(init) {
	  return htmldom('s', init);
	};

	/**
	 * [The `samp` element](https://html.spec.whatwg.org/#the-samp-element)
	 * represents sample or quoted output from another program or computing system.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-samp-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535891(v=vs.85).aspx)
	 *
	 * @function samp
	 * @param {{}} init `NodeInit` dictionary
	 */
	var samp = exports.samp = function samp(init) {
	  return htmldom('samp', init);
	};

	/**
	 * [The `script` element](https://html.spec.whatwg.org/#the-script-element)
	 * allows authors to include dynamic script and data blocks in their documents.
	 * The element does not represent content for the user.
	 *
	 * Implements `HTMLScriptElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-script-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535892(v=vs.85).aspx)
	 *
	 * @function script
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.src Address of the resource
	 * @param {String} init.type Type of embedded resource
	 * @param {String} init.charset Character encoding of the external script resource
	 * @param {String} init.async Execute script when available, without blocking
	 * @param {String} init.defer Defer script execution
	 * @param {String} init.crossOrigin How the element handles crossorigin requests
	 * @param {String} init.nonce Cryptographic nonce used in Content Security Policy checks [CSP]
	 */
	var script = exports.script = function script(init) {
	  return htmldom('script', init);
	};

	/**
	 * [The `section` element](https://html.spec.whatwg.org/#the-section-element)
	 * represents a generic section of a document or application.
	 * A section, in this context, is a thematic grouping of content,
	 * typically with a heading.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-section-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/gg593059(v=vs.85).aspx)
	 *
	 * @function section
	 * @param {{}} init `NodeInit` dictionary
	 */
	var section = exports.section = function section(init) {
	  return htmldom('section', init);
	};

	/**
	 * [The `select` element](https://html.spec.whatwg.org/#the-select-element)
	 * represents a control for selecting amongst a set of options.
	 *
	 * Implements `HTMLSelectElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-select-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535893(v=vs.85).aspx)
	 *
	 * @function select
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.autocomplete Hint for form autofill feature
	 * @param {Boolean} init.autofocus Automatically focus the form control when the page is loaded
	 * @param {Boolean} init.disabled Whether the form control is disabled
	 * @param {String} init.attrset.form Associates the control with a form element (ID reference)
	 * @param {Boolean} init.multiple Whether to allow multiple values
	 * @param {String} init.name Name of form control to use for form submission and in the form.elements API
	 * @param {Boolean} init.required Whether the control is required for form submission
	 * @param {Number} init.size Size of the control
	 */
	var select = exports.select = function select(init) {
	  return htmldom('select', init);
	};

	/**
	 * [The `slot` element](https://html.spec.whatwg.org/#the-slot-element)
	 * defines a slot. It is typically used in a shadow tree.
	 * A slot element represents its assigned nodes, if any, and its contents otherwise.
	 *
	 * Implements `HTMLSlotElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-slot-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
	 *
	 * @function slot
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.name Name of shadow tree slot
	 */
	var slot = exports.slot = function slot(init) {
	  return htmldom('slot', init);
	};

	/**
	 * [The `small` element](https://html.spec.whatwg.org/#the-small-element)
	 * represents side comments such as small print.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-small-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535894(v=vs.85).aspx)
	 *
	 * @function small
	 * @param {{}} init `NodeInit` dictionary
	 */
	var small = exports.small = function small(init) {
	  return htmldom('small', init);
	};

	/**
	 * [The `source` element](https://html.spec.whatwg.org/#the-source-element)
	 * allows authors to specify multiple alternative source sets for img elements
	 * or multiple alternative media resources for media elements.
	 * It does not represent anything on its own.
	 *
	 * Implements `HTMLSourceElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-source-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSourceElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ff975070(v=vs.85).aspx)
	 *
	 * @function source
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.src Address of the resource
	 * @param {String} init.type Type of embedded resource
	 * @param {String} init.srcset Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
	 * @param {String} init.sizes Image sizes for different page layouts
	 * @param {String} init.media Applicable media
	 */
	var source = exports.source = function source(init) {
	  return htmldom('source', init);
	};

	/**
	 * [The `span` element](https://html.spec.whatwg.org/#the-span-element)
	 * doesn't mean anything on its own,
	 * but can be useful when used together with the global attributes,
	 * e.g. class, lang, or dir. It represents its children.
	 *
	 * Implements `HTMLSpanElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-span-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSpanElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535895(v=vs.85).aspx)
	 *
	 * @function span
	 * @param {{}} init `NodeInit` dictionary
	 */
	var span = exports.span = function span(init) {
	  return htmldom('span', init);
	};

	/**
	 * [The `strong` element](https://html.spec.whatwg.org/#the-strong-element)
	 * represents strong importance, seriousness, or urgency for its contents.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-strong-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTML*Element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535897(v=vs.85).aspx)
	 *
	 * @function strong
	 * @param {{}} init `NodeInit` dictionary
	 */
	var strong = exports.strong = function strong(init) {
	  return htmldom('strong', init);
	};

	/**
	 * [The `style` element](https://html.spec.whatwg.org/#the-style-element)
	 * allows authors to embed style information in their documents.
	 * The style element is one of several inputs to the styling processing model.
	 * The element does not represent content for the user.
	 *
	 * Implements `HTMLStyleElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-style-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535898(v=vs.85).aspx)
	 *
	 * @function style
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.media Applicable media
	 * @param {String} init.nonce Cryptographic nonce used in [Content Security Policy](https://html.spec.whatwg.org/#refsCSP) checks
	 * @param {String} init.type Type of embedded resource
	 * @param {String} init.title Special semantics: CSS style sheet set name.
	 */
	var style = exports.style = function style(init) {
	  return htmldom('style', init);
	};

	/**
	 * [The `sub` element](https://html.spec.whatwg.org/#the-sub-element)
	 * represents a subscript.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-sub-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535899(v=vs.85).aspx)
	 *
	 * @function sub
	 * @param {{}} init `NodeInit` dictionary
	 */
	var sub = exports.sub = function sub(init) {
	  return htmldom('sub', init);
	};

	/**
	 * [The `summary` element](https://html.spec.whatwg.org/#the-summary-element)
	 *  represents a summary, caption, or legend for the rest of the contents
	 *  of the summary element's parent details element, if any.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-summary-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
	 *
	 * @function summary
	 * @param {{}} init `NodeInit` dictionary
	 */
	var summary = exports.summary = function summary(init) {
	  return htmldom('summary', init);
	};

	/**
	 * [The `sup` element](https://html.spec.whatwg.org/#the-sup-element)
	 * represents a superscript
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-sup-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535900(v=vs.85).aspx)
	 *
	 * @function sup
	 * @param {{}} init `NodeInit` dictionary
	 */
	var sup = exports.sup = function sup(init) {
	  return htmldom('sup', init);
	};

	/**
	 * [The `table` element](https://html.spec.whatwg.org/#the-table-element)
	 * represents data with more than one dimension, in the form of a table.
	 *
	 * Implements `HTMLTableElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-table-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535901(v=vs.85).aspx)
	 *
	 * @function table
	 * @param {{}} init `NodeInit` dictionary
	 */
	var table = exports.table = function table(init) {
	  return htmldom('table', init);
	};

	/**
	 * [The `tbody` element](https://html.spec.whatwg.org/#the-tbody-element)
	 * represents a block of rows that consist of a body of data for the parent table element,
	 * if the tbody element has a parent and it is a table.
	 *
	 * Implements `HTMLTableSectionElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-tbody-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535902(v=vs.85).aspx)
	 *
	 * @function tbody
	 * @param {{}} init `NodeInit` dictionary
	 */
	var tbody = exports.tbody = function tbody(init) {
	  return htmldom('tbody', init);
	};

	/**
	 * [The `td` element](https://html.spec.whatwg.org/#the-td-element)
	 * represents a data cell in a table.
	 *
	 * Implements `HTMLTableCellElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-td-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535903(v=vs.85).aspx)
	 *
	 * @function td
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.colSpan Number of columns that the cell is to span
	 * @param {String} init.rowSpan Number of rows that the cell is to span
	 * @param {String} init.headers The header cells for this cell
	 */
	var td = exports.td = function td(init) {
	  return htmldom('td', init);
	};

	/**
	 * [The `template` element](https://html.spec.whatwg.org/#the-template-element)
	 * is used to declare fragments of HTML that can be cloned and inserted in the document by script.
	 *
	 * Implements `HTMLTemplateElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-template-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt586693(v=vs.85).aspx)
	 *
	 * @function template
	 * @param {{}} init `NodeInit` dictionary
	 */
	var template = exports.template = function template(init) {
	  return htmldom('template', init);
	};

	/**
	 * [The `textarea` element](https://html.spec.whatwg.org/#the-textarea-element)
	 * represents a multiline plain text edit control for the element's raw value.
	 * The contents of the control represent the control's default value.
	 *
	 * Implements `HTMLTextAreaElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-textarea-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535904(v=vs.85).aspx)
	 *
	 * @function textarea
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.autocomplete Hint for form autofill feature
	 * @param {String} init.autofocus Automatically focus the form control when the page is loaded
	 * @param {String} init.cols Maximum number of characters per line
	 * @param {String} init.dirName Name of form control to use for sending the element's directionality in form submission
	 * @param {String} init.disabled Whether the form control is disabled
	 * @param {String} init.form Associates the control with a form element
	 * @param {String} init.inputMode Hint for selecting an input modality
	 * @param {String} init.maxLength Maximum length of value
	 * @param {String} init.minLength Minimum length of value
	 * @param {String} init.name Name of form control to use for form submission and in the form.elements API
	 * @param {String} init.placeholder User-visible label to be placed within the form control
	 * @param {String} init.readOnly Whether to allow the value to be edited by the user
	 * @param {String} init.required Whether the control is required for form submission
	 * @param {String} init.rows Number of lines to show
	 * @param {String} init.wrap How the value of the form control is to be wrapped for form submission
	 */
	var textarea = exports.textarea = function textarea(init) {
	  return htmldom('textarea', init);
	};

	/**
	 * [The `tfoot` element](https://html.spec.whatwg.org/#the-tfoot-element)
	 *  represents the block of rows that consist of the column summaries (footers)
	 *  for the parent table element, if the tfoot element has a parent and it is a table.
	 *
	 * Uses `HTMLTableSectionElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-tfoot-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535907(v=vs.85).aspx)
	 *
	 * @function tfoot
	 * @param {{}} init `NodeInit` dictionary
	 */
	var tfoot = exports.tfoot = function tfoot(init) {
	  return htmldom('tfoot', init);
	};

	/**
	 * [The `th` element](https://html.spec.whatwg.org/#the-th-element)
	 * represents a header cell in a table.
	 *
	 * Uses `HTMLTableCellElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-th-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535908(v=vs.85).aspx)
	 *
	 * @function th
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.colSpan Number of columns that the cell is to span
	 * @param {String} init.rowSpan Number of rows that the cell is to span
	 * @param {String} init.headers The header cells for this cell
	 * @param {String} init.scope Specifies which cells the header cell applies to
	 * @param {String} init.abbr Alternative label to use for the header cell when referencing the cell in other contexts
	 */
	var th = exports.th = function th(init) {
	  return htmldom('th', init);
	};

	/**
	 * [The `thead` element](https://html.spec.whatwg.org/#the-thead-element)
	 * represents the block of rows that consist of the column labels (headers)
	 * for the parent table element, if the thead element has a parent and it is a table.
	 *
	 * Uses `HTMLTableSectionElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-thead-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535909(v=vs.85).aspx)
	 *
	 * @function thead
	 * @param {{}} init `NodeInit` dictionary
	 */
	var thead = exports.thead = function thead(init) {
	  return htmldom('thead', init);
	};

	/**
	 * [The `time` element](https://html.spec.whatwg.org/#the-time-element)
	 * represents its contents,
	 * along with a machine-readable form of those contents in the datetime attribute.
	 * The kind of content is limited to various kinds of dates,
	 * times, time-zone offsets, and durations, as described below.
	 *
	 * Implements `HTMLTimeElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-time-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/mt706248(v=vs.85).aspx)
	 *
	 * @function time
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.datetime Machine-readable value
	 */
	var time = exports.time = function time(init) {
	  return htmldom('time', init);
	};

	/**
	 * [The `title` element](https://html.spec.whatwg.org/#the-title-element)
	 * represents the document's title or name.
	 * Authors should use titles that identify their documents
	 * even when they are used out of context,
	 * for example in a user's history or bookmarks, or in search results.
	 * The document's title is often different from its first heading,
	 * since the first heading does not have to stand alone when taken out of context.
	 *
	 * Implements `HTMLTitleElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-title-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTitleElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535910(v=vs.85).aspx)
	 *
	 * @function title
	 * @param {{}} init `NodeInit` dictionary
	 */
	var title = exports.title = function title(init) {
	  return htmldom('title', init);
	};

	/**
	 * [The `tr` element](https://html.spec.whatwg.org/#the-tr-element)
	 * represents a row of cells in a table.
	 *
	 * Implements `HTMLTableRowElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-tr-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535911(v=vs.85).aspx)
	 *
	 * @function tr
	 * @param {{}} init `NodeInit` dictionary
	 */
	var tr = exports.tr = function tr(init) {
	  return htmldom('tr', init);
	};

	/**
	 * [The `track` element](https://html.spec.whatwg.org/#the-track-element)
	 * allows authors to specify explicit external timed text tracks for media elements.
	 * It does not represent anything on its own.
	 *
	 * Implements `HTMLTrackElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-track-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/hh772958(v=vs.85).aspx)
	 *
	 * @function track
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.kind The type of text track
	 * @param {String} init.src Address of the resource
	 * @param {String} init.srclang Language of the text track
	 * @param {String} init.label User-visible label
	 * @param {Boolean} init.default Enable the track if no other text track is more suitable
	 */
	var track = exports.track = function track(init) {
	  return htmldom('track', init);
	};

	/**
	 * [The `u` element](https://html.spec.whatwg.org/#the-u-element)
	 * represents a span of text with an unarticulated,
	 * though explicitly rendered, non-textual annotation,
	 * such as labeling the text as being a proper name in Chinese text
	 * (a Chinese proper name mark), or labeling the text as being misspelt.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-u-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535913(v=vs.85).aspx)
	 *
	 * @function u
	 * @param {{}} init `NodeInit` dictionary
	 */
	var u = exports.u = function u(init) {
	  return htmldom('u', init);
	};

	/**
	 * [The `ul` element](https://html.spec.whatwg.org/#the-ul-element)
	 * represents a list of items, where the order of the items is not important — that is,
	 * where changing the order would not materially change the meaning of the document.
	 *
	 * Implements `HTMLUListElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-ul-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLUListElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535914(v=vs.85).aspx)
	 *
	 * @function ul
	 * @param {{}} init `NodeInit` dictionary
	 */
	var ul = exports.ul = function ul(init) {
	  return htmldom('ul', init);
	};

	/**
	 * [the `var` element](https://html.spec.whatwg.org/#the-var-element)
	 * represents a variable.
	 * This could be an actual variable in a mathematical expression or programming context,
	 * an identifier representing a constant, a symbol identifying a physical quantity,
	 * a function parameter, or just be a term used as a placeholder in prose.
	 *
	 * **`var` is reserved JS keyword so use `variable` instead**
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-var-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/ms535916(v=vs.85).aspx)
	 *
	 * @function variable
	 * @param {{}} init `NodeInit` dictionary
	 */
	var variable = exports.variable = function variable(init) {
	  return htmldom('var', init);
	};

	/**
	 * [The `video` element](https://html.spec.whatwg.org/#the-video-element)
	 * is used for playing videos or movies, and audio files with captions.
	 *
	 * Implements `HTMLVideoElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-video-element)
	 * - [MDN API reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
	 * - [MSDN HTML reference](https://msdn.microsoft.com/en-us/library/hh772959(v=vs.85).aspx)
	 *
	 * @function video
	 * @param {{}} init `NodeInit` dictionary
	 * @param {String} init.src Address of the resource
	 * @param {String} init.crossOrigin How the element handles crossorigin requests
	 * @param {String} init.poster Poster frame to show prior to video playback
	 * @param {String} init.preload Hints how much buffering the media resource will likely need
	 * @param {Boolean} init.autoplay Hint that the media resource can be started automatically when the page is loaded
	 * @param {Boolean} init.playsInline Encourage the user agent to display video content within the element's playback area
	 * @param {Boolean} init.loop Whether to loop the media resource
	 * @param {Number} init.muted Whether to mute the media resource by default
	 * @param {Boolean} init.controls Show user agent controls
	 * @param {Number} init.width Horizontal dimension
	 * @param {Number} init.height Vertical dimension
	 */
	var video = exports.video = function video(init) {
	  return htmldom('video', init);
	};

	/**
	 * [The `wbr` element](https://html.spec.whatwg.org/#the-wbr-element)
	 * represents a line break opportunity.
	 *
	 * Uses `HTMLElement` interface
	 *
	 * - [W3 specification](https://www.w3.org/TR/html/single-page.html#the-wbr-element)
	 * - [MDN HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)
	 *
	 * @function wbr
	 * @param {{}} init `NodeInit` dictionary
	 */
	var wbr = exports.wbr = function wbr(init) {
	  return htmldom('wbr', init);
	};

/***/ },
/* 7 */
/*!***********************!*\
  !*** ./shim/index.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! babel-polyfill */ 8);

	__webpack_require__(/*! dom4 */ 306);

	__webpack_require__(/*! ./shim.id */ 307);

	__webpack_require__(/*! ./shim.classname */ 308);

	__webpack_require__(/*! ./shim.classlist */ 309);

	__webpack_require__(/*! ./shim.hidden */ 310);

	__webpack_require__(/*! ./shim.click */ 311);

	__webpack_require__(/*! ./shim.head */ 312);

/***/ },
/* 8 */
/*!***************************************!*\
  !*** ./~/babel-polyfill/lib/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(/*! core-js/shim */ 9);

	__webpack_require__(/*! regenerator-runtime/runtime */ 300);

	__webpack_require__(/*! core-js/fn/regexp/escape */ 303);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/*!********************************************!*\
  !*** ./~/babel-polyfill/~/core-js/shim.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./modules/es6.symbol */ 10);
	__webpack_require__(/*! ./modules/es6.object.create */ 59);
	__webpack_require__(/*! ./modules/es6.object.define-property */ 60);
	__webpack_require__(/*! ./modules/es6.object.define-properties */ 61);
	__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ 62);
	__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ 64);
	__webpack_require__(/*! ./modules/es6.object.keys */ 67);
	__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ 68);
	__webpack_require__(/*! ./modules/es6.object.freeze */ 69);
	__webpack_require__(/*! ./modules/es6.object.seal */ 70);
	__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ 71);
	__webpack_require__(/*! ./modules/es6.object.is-frozen */ 72);
	__webpack_require__(/*! ./modules/es6.object.is-sealed */ 73);
	__webpack_require__(/*! ./modules/es6.object.is-extensible */ 74);
	__webpack_require__(/*! ./modules/es6.object.assign */ 75);
	__webpack_require__(/*! ./modules/es6.object.is */ 77);
	__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ 79);
	__webpack_require__(/*! ./modules/es6.object.to-string */ 81);
	__webpack_require__(/*! ./modules/es6.function.bind */ 83);
	__webpack_require__(/*! ./modules/es6.function.name */ 86);
	__webpack_require__(/*! ./modules/es6.function.has-instance */ 87);
	__webpack_require__(/*! ./modules/es6.parse-int */ 88);
	__webpack_require__(/*! ./modules/es6.parse-float */ 92);
	__webpack_require__(/*! ./modules/es6.number.constructor */ 94);
	__webpack_require__(/*! ./modules/es6.number.to-fixed */ 96);
	__webpack_require__(/*! ./modules/es6.number.to-precision */ 99);
	__webpack_require__(/*! ./modules/es6.number.epsilon */ 100);
	__webpack_require__(/*! ./modules/es6.number.is-finite */ 101);
	__webpack_require__(/*! ./modules/es6.number.is-integer */ 102);
	__webpack_require__(/*! ./modules/es6.number.is-nan */ 104);
	__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ 105);
	__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ 106);
	__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ 107);
	__webpack_require__(/*! ./modules/es6.number.parse-float */ 108);
	__webpack_require__(/*! ./modules/es6.number.parse-int */ 109);
	__webpack_require__(/*! ./modules/es6.math.acosh */ 110);
	__webpack_require__(/*! ./modules/es6.math.asinh */ 112);
	__webpack_require__(/*! ./modules/es6.math.atanh */ 113);
	__webpack_require__(/*! ./modules/es6.math.cbrt */ 114);
	__webpack_require__(/*! ./modules/es6.math.clz32 */ 116);
	__webpack_require__(/*! ./modules/es6.math.cosh */ 117);
	__webpack_require__(/*! ./modules/es6.math.expm1 */ 118);
	__webpack_require__(/*! ./modules/es6.math.fround */ 120);
	__webpack_require__(/*! ./modules/es6.math.hypot */ 121);
	__webpack_require__(/*! ./modules/es6.math.imul */ 122);
	__webpack_require__(/*! ./modules/es6.math.log10 */ 123);
	__webpack_require__(/*! ./modules/es6.math.log1p */ 124);
	__webpack_require__(/*! ./modules/es6.math.log2 */ 125);
	__webpack_require__(/*! ./modules/es6.math.sign */ 126);
	__webpack_require__(/*! ./modules/es6.math.sinh */ 127);
	__webpack_require__(/*! ./modules/es6.math.tanh */ 128);
	__webpack_require__(/*! ./modules/es6.math.trunc */ 129);
	__webpack_require__(/*! ./modules/es6.string.from-code-point */ 130);
	__webpack_require__(/*! ./modules/es6.string.raw */ 131);
	__webpack_require__(/*! ./modules/es6.string.trim */ 132);
	__webpack_require__(/*! ./modules/es6.string.iterator */ 133);
	__webpack_require__(/*! ./modules/es6.string.code-point-at */ 138);
	__webpack_require__(/*! ./modules/es6.string.ends-with */ 139);
	__webpack_require__(/*! ./modules/es6.string.includes */ 143);
	__webpack_require__(/*! ./modules/es6.string.repeat */ 144);
	__webpack_require__(/*! ./modules/es6.string.starts-with */ 145);
	__webpack_require__(/*! ./modules/es6.string.anchor */ 146);
	__webpack_require__(/*! ./modules/es6.string.big */ 148);
	__webpack_require__(/*! ./modules/es6.string.blink */ 149);
	__webpack_require__(/*! ./modules/es6.string.bold */ 150);
	__webpack_require__(/*! ./modules/es6.string.fixed */ 151);
	__webpack_require__(/*! ./modules/es6.string.fontcolor */ 152);
	__webpack_require__(/*! ./modules/es6.string.fontsize */ 153);
	__webpack_require__(/*! ./modules/es6.string.italics */ 154);
	__webpack_require__(/*! ./modules/es6.string.link */ 155);
	__webpack_require__(/*! ./modules/es6.string.small */ 156);
	__webpack_require__(/*! ./modules/es6.string.strike */ 157);
	__webpack_require__(/*! ./modules/es6.string.sub */ 158);
	__webpack_require__(/*! ./modules/es6.string.sup */ 159);
	__webpack_require__(/*! ./modules/es6.date.now */ 160);
	__webpack_require__(/*! ./modules/es6.date.to-json */ 161);
	__webpack_require__(/*! ./modules/es6.date.to-iso-string */ 162);
	__webpack_require__(/*! ./modules/es6.date.to-string */ 163);
	__webpack_require__(/*! ./modules/es6.date.to-primitive */ 164);
	__webpack_require__(/*! ./modules/es6.array.is-array */ 166);
	__webpack_require__(/*! ./modules/es6.array.from */ 167);
	__webpack_require__(/*! ./modules/es6.array.of */ 173);
	__webpack_require__(/*! ./modules/es6.array.join */ 174);
	__webpack_require__(/*! ./modules/es6.array.slice */ 176);
	__webpack_require__(/*! ./modules/es6.array.sort */ 177);
	__webpack_require__(/*! ./modules/es6.array.for-each */ 178);
	__webpack_require__(/*! ./modules/es6.array.map */ 182);
	__webpack_require__(/*! ./modules/es6.array.filter */ 183);
	__webpack_require__(/*! ./modules/es6.array.some */ 184);
	__webpack_require__(/*! ./modules/es6.array.every */ 185);
	__webpack_require__(/*! ./modules/es6.array.reduce */ 186);
	__webpack_require__(/*! ./modules/es6.array.reduce-right */ 188);
	__webpack_require__(/*! ./modules/es6.array.index-of */ 189);
	__webpack_require__(/*! ./modules/es6.array.last-index-of */ 190);
	__webpack_require__(/*! ./modules/es6.array.copy-within */ 191);
	__webpack_require__(/*! ./modules/es6.array.fill */ 194);
	__webpack_require__(/*! ./modules/es6.array.find */ 196);
	__webpack_require__(/*! ./modules/es6.array.find-index */ 197);
	__webpack_require__(/*! ./modules/es6.array.species */ 198);
	__webpack_require__(/*! ./modules/es6.array.iterator */ 200);
	__webpack_require__(/*! ./modules/es6.regexp.constructor */ 202);
	__webpack_require__(/*! ./modules/es6.regexp.to-string */ 204);
	__webpack_require__(/*! ./modules/es6.regexp.flags */ 205);
	__webpack_require__(/*! ./modules/es6.regexp.match */ 206);
	__webpack_require__(/*! ./modules/es6.regexp.replace */ 208);
	__webpack_require__(/*! ./modules/es6.regexp.search */ 209);
	__webpack_require__(/*! ./modules/es6.regexp.split */ 210);
	__webpack_require__(/*! ./modules/es6.promise */ 211);
	__webpack_require__(/*! ./modules/es6.map */ 218);
	__webpack_require__(/*! ./modules/es6.set */ 221);
	__webpack_require__(/*! ./modules/es6.weak-map */ 222);
	__webpack_require__(/*! ./modules/es6.weak-set */ 224);
	__webpack_require__(/*! ./modules/es6.typed.array-buffer */ 225);
	__webpack_require__(/*! ./modules/es6.typed.data-view */ 228);
	__webpack_require__(/*! ./modules/es6.typed.int8-array */ 229);
	__webpack_require__(/*! ./modules/es6.typed.uint8-array */ 231);
	__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ 232);
	__webpack_require__(/*! ./modules/es6.typed.int16-array */ 233);
	__webpack_require__(/*! ./modules/es6.typed.uint16-array */ 234);
	__webpack_require__(/*! ./modules/es6.typed.int32-array */ 235);
	__webpack_require__(/*! ./modules/es6.typed.uint32-array */ 236);
	__webpack_require__(/*! ./modules/es6.typed.float32-array */ 237);
	__webpack_require__(/*! ./modules/es6.typed.float64-array */ 238);
	__webpack_require__(/*! ./modules/es6.reflect.apply */ 239);
	__webpack_require__(/*! ./modules/es6.reflect.construct */ 240);
	__webpack_require__(/*! ./modules/es6.reflect.define-property */ 241);
	__webpack_require__(/*! ./modules/es6.reflect.delete-property */ 242);
	__webpack_require__(/*! ./modules/es6.reflect.enumerate */ 243);
	__webpack_require__(/*! ./modules/es6.reflect.get */ 244);
	__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ 245);
	__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ 246);
	__webpack_require__(/*! ./modules/es6.reflect.has */ 247);
	__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ 248);
	__webpack_require__(/*! ./modules/es6.reflect.own-keys */ 249);
	__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ 251);
	__webpack_require__(/*! ./modules/es6.reflect.set */ 252);
	__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ 253);
	__webpack_require__(/*! ./modules/es7.array.includes */ 254);
	__webpack_require__(/*! ./modules/es7.string.at */ 255);
	__webpack_require__(/*! ./modules/es7.string.pad-start */ 256);
	__webpack_require__(/*! ./modules/es7.string.pad-end */ 258);
	__webpack_require__(/*! ./modules/es7.string.trim-left */ 259);
	__webpack_require__(/*! ./modules/es7.string.trim-right */ 260);
	__webpack_require__(/*! ./modules/es7.string.match-all */ 261);
	__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ 262);
	__webpack_require__(/*! ./modules/es7.symbol.observable */ 263);
	__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ 264);
	__webpack_require__(/*! ./modules/es7.object.values */ 265);
	__webpack_require__(/*! ./modules/es7.object.entries */ 267);
	__webpack_require__(/*! ./modules/es7.object.define-getter */ 268);
	__webpack_require__(/*! ./modules/es7.object.define-setter */ 270);
	__webpack_require__(/*! ./modules/es7.object.lookup-getter */ 271);
	__webpack_require__(/*! ./modules/es7.object.lookup-setter */ 272);
	__webpack_require__(/*! ./modules/es7.map.to-json */ 273);
	__webpack_require__(/*! ./modules/es7.set.to-json */ 276);
	__webpack_require__(/*! ./modules/es7.system.global */ 277);
	__webpack_require__(/*! ./modules/es7.error.is-error */ 278);
	__webpack_require__(/*! ./modules/es7.math.iaddh */ 279);
	__webpack_require__(/*! ./modules/es7.math.isubh */ 280);
	__webpack_require__(/*! ./modules/es7.math.imulh */ 281);
	__webpack_require__(/*! ./modules/es7.math.umulh */ 282);
	__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ 283);
	__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ 285);
	__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ 286);
	__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ 287);
	__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ 288);
	__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ 289);
	__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ 290);
	__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ 291);
	__webpack_require__(/*! ./modules/es7.reflect.metadata */ 292);
	__webpack_require__(/*! ./modules/es7.asap */ 293);
	__webpack_require__(/*! ./modules/es7.observable */ 294);
	__webpack_require__(/*! ./modules/web.timers */ 295);
	__webpack_require__(/*! ./modules/web.immediate */ 298);
	__webpack_require__(/*! ./modules/web.dom.iterable */ 299);
	module.exports = __webpack_require__(/*! ./modules/_core */ 16);

/***/ },
/* 10 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.symbol.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var global = __webpack_require__(/*! ./_global */ 11),
	    has = __webpack_require__(/*! ./_has */ 12),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 13),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    redefine = __webpack_require__(/*! ./_redefine */ 25),
	    META = __webpack_require__(/*! ./_meta */ 29).KEY,
	    $fails = __webpack_require__(/*! ./_fails */ 14),
	    shared = __webpack_require__(/*! ./_shared */ 30),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 31),
	    uid = __webpack_require__(/*! ./_uid */ 26),
	    wks = __webpack_require__(/*! ./_wks */ 32),
	    wksExt = __webpack_require__(/*! ./_wks-ext */ 33),
	    wksDefine = __webpack_require__(/*! ./_wks-define */ 34),
	    keyOf = __webpack_require__(/*! ./_keyof */ 36),
	    enumKeys = __webpack_require__(/*! ./_enum-keys */ 49),
	    isArray = __webpack_require__(/*! ./_is-array */ 52),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 24),
	    _create = __webpack_require__(/*! ./_object-create */ 53),
	    gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 56),
	    $GOPD = __webpack_require__(/*! ./_object-gopd */ 58),
	    $DP = __webpack_require__(/*! ./_object-dp */ 18),
	    $keys = __webpack_require__(/*! ./_object-keys */ 37),
	    gOPD = $GOPD.f,
	    dP = $DP.f,
	    gOPN = gOPNExt.f,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    PROTOTYPE = 'prototype',
	    HIDDEN = wks('_hidden'),
	    TO_PRIMITIVE = wks('toPrimitive'),
	    isEnum = {}.propertyIsEnumerable,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    OPSymbols = shared('op-symbols'),
	    ObjectProto = Object[PROTOTYPE],
	    USE_NATIVE = typeof $Symbol == 'function',
	    QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  }return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto,
	      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(/*! ./_object-gopn */ 57).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(/*! ./_object-pie */ 51).f = $propertyIsEnumerable;
	  __webpack_require__(/*! ./_object-gops */ 50).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 35)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
	  wks(symbols[i++]);
	}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
	  wksDefine(symbols[i++]);
	}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it],
	        i = 1,
	        replacer,
	        $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 11 */
/*!*******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_global.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/*!****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_has.js ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 13 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_descriptors.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./_fails */ 14)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 14 */
/*!******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_fails.js ***!
  \******************************************************/
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 15 */
/*!*******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_export.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    core = __webpack_require__(/*! ./_core */ 16),
	    hide = __webpack_require__(/*! ./_hide */ 17),
	    redefine = __webpack_require__(/*! ./_redefine */ 25),
	    ctx = __webpack_require__(/*! ./_ctx */ 27),
	    PROTOTYPE = 'prototype';

	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 16 */
/*!*****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_core.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/*!*****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_hide.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(/*! ./_object-dp */ 18),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 24);
	module.exports = __webpack_require__(/*! ./_descriptors */ 13) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 18 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-dp.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(/*! ./_an-object */ 19),
	    IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 21),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23),
	    dP = Object.defineProperty;

	exports.f = __webpack_require__(/*! ./_descriptors */ 13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 19 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_an-object.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(/*! ./_is-object */ 20);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 20 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_is-object.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 21 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_ie8-dom-define.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = !__webpack_require__(/*! ./_descriptors */ 13) && !__webpack_require__(/*! ./_fails */ 14)(function () {
	  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 22)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 22 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_dom-create.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    document = __webpack_require__(/*! ./_global */ 11).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 23 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_to-primitive.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./_is-object */ 20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 24 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_property-desc.js ***!
  \**************************************************************/
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 25 */
/*!*********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_redefine.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    hide = __webpack_require__(/*! ./_hide */ 17),
	    has = __webpack_require__(/*! ./_has */ 12),
	    SRC = __webpack_require__(/*! ./_uid */ 26)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);

	__webpack_require__(/*! ./_core */ 16).inspectSource = function (it) {
	  return $toString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 26 */
/*!****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_uid.js ***!
  \****************************************************/
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 27 */
/*!****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_ctx.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./_a-function */ 28);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 28 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_a-function.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 29 */
/*!*****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_meta.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var META = __webpack_require__(/*! ./_uid */ 26)('meta'),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    has = __webpack_require__(/*! ./_has */ 12),
	    setDesc = __webpack_require__(/*! ./_object-dp */ 18).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(/*! ./_fails */ 14)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 30 */
/*!*******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_shared.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 31 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_set-to-string-tag.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var def = __webpack_require__(/*! ./_object-dp */ 18).f,
	    has = __webpack_require__(/*! ./_has */ 12),
	    TAG = __webpack_require__(/*! ./_wks */ 32)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 32 */
/*!****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_wks.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var store = __webpack_require__(/*! ./_shared */ 30)('wks'),
	    uid = __webpack_require__(/*! ./_uid */ 26),
	    _Symbol = __webpack_require__(/*! ./_global */ 11).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 33 */
/*!********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_wks-ext.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.f = __webpack_require__(/*! ./_wks */ 32);

/***/ },
/* 34 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_wks-define.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    core = __webpack_require__(/*! ./_core */ 16),
	    LIBRARY = __webpack_require__(/*! ./_library */ 35),
	    wksExt = __webpack_require__(/*! ./_wks-ext */ 33),
	    defineProperty = __webpack_require__(/*! ./_object-dp */ 18).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ },
/* 35 */
/*!********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_library.js ***!
  \********************************************************/
/***/ function(module, exports) {

	"use strict";

	module.exports = false;

/***/ },
/* 36 */
/*!******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_keyof.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getKeys = __webpack_require__(/*! ./_object-keys */ 37),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
	};

/***/ },
/* 37 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-keys.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(/*! ./_object-keys-internal */ 38),
	    enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 48);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 38 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-keys-internal.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = __webpack_require__(/*! ./_has */ 12),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 43)(false),
	    IE_PROTO = __webpack_require__(/*! ./_shared-key */ 47)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 39 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_to-iobject.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./_iobject */ 40),
	    defined = __webpack_require__(/*! ./_defined */ 42);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 40 */
/*!********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_iobject.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./_cof */ 41);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 41 */
/*!****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_cof.js ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 42 */
/*!********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_defined.js ***!
  \********************************************************/
/***/ function(module, exports) {

	"use strict";

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 43 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_array-includes.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    toIndex = __webpack_require__(/*! ./_to-index */ 46);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 44 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_to-length.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./_to-integer */ 45),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 45 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_to-integer.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	"use strict";

	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 46 */
/*!*********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_to-index.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(/*! ./_to-integer */ 45),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 47 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_shared-key.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shared = __webpack_require__(/*! ./_shared */ 30)('keys'),
	    uid = __webpack_require__(/*! ./_uid */ 26);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 48 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_enum-bug-keys.js ***!
  \**************************************************************/
/***/ function(module, exports) {

	'use strict';

	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 49 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_enum-keys.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(/*! ./_object-keys */ 37),
	    gOPS = __webpack_require__(/*! ./_object-gops */ 50),
	    pIE = __webpack_require__(/*! ./_object-pie */ 51);
	module.exports = function (it) {
	  var result = getKeys(it),
	      getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = pIE.f,
	        i = 0,
	        key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 50 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-gops.js ***!
  \************************************************************/
/***/ function(module, exports) {

	"use strict";

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 51 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-pie.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	"use strict";

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 52 */
/*!*********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_is-array.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(/*! ./_cof */ 41);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 53 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-create.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(/*! ./_an-object */ 19),
	    dPs = __webpack_require__(/*! ./_object-dps */ 54),
	    enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 48),
	    IE_PROTO = __webpack_require__(/*! ./_shared-key */ 47)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(/*! ./_dom-create */ 22)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(/*! ./_html */ 55).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 54 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-dps.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(/*! ./_object-dp */ 18),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    getKeys = __webpack_require__(/*! ./_object-keys */ 37);

	module.exports = __webpack_require__(/*! ./_descriptors */ 13) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 55 */
/*!*****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_html.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(/*! ./_global */ 11).document && document.documentElement;

/***/ },
/* 56 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-gopn-ext.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    gOPN = __webpack_require__(/*! ./_object-gopn */ 57).f,
	    toString = {}.toString;

	var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ },
/* 57 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-gopn.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(/*! ./_object-keys-internal */ 38),
	    hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 48).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 58 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-gopd.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pIE = __webpack_require__(/*! ./_object-pie */ 51),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 24),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23),
	    has = __webpack_require__(/*! ./_has */ 12),
	    IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 21),
	    gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(/*! ./_descriptors */ 13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 59 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.create.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 53) });

/***/ },
/* 60 */
/*!**************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.define-property.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 13), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 18).f });

/***/ },
/* 61 */
/*!****************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.define-properties.js ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 13), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ 54) });

/***/ },
/* 62 */
/*!**************************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \**************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 58).f;

	__webpack_require__(/*! ./_object-sap */ 63)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 63 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-sap.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./_export */ 15),
	    core = __webpack_require__(/*! ./_core */ 16),
	    fails = __webpack_require__(/*! ./_fails */ 14);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 64 */
/*!***************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.get-prototype-of.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 65),
	    $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66);

	__webpack_require__(/*! ./_object-sap */ 63)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 65 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_to-object.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./_defined */ 42);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 66 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-gpo.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(/*! ./_has */ 12),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    IE_PROTO = __webpack_require__(/*! ./_shared-key */ 47)('IE_PROTO'),
	    ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 67 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.keys.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./_to-object */ 65),
	    $keys = __webpack_require__(/*! ./_object-keys */ 37);

	__webpack_require__(/*! ./_object-sap */ 63)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 68 */
/*!*********************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.get-own-property-names.js ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(/*! ./_object-sap */ 63)('getOwnPropertyNames', function () {
	  return __webpack_require__(/*! ./_object-gopn-ext */ 56).f;
	});

/***/ },
/* 69 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.freeze.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    meta = __webpack_require__(/*! ./_meta */ 29).onFreeze;

	__webpack_require__(/*! ./_object-sap */ 63)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 70 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.seal.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    meta = __webpack_require__(/*! ./_meta */ 29).onFreeze;

	__webpack_require__(/*! ./_object-sap */ 63)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 71 */
/*!*****************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.prevent-extensions.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    meta = __webpack_require__(/*! ./_meta */ 29).onFreeze;

	__webpack_require__(/*! ./_object-sap */ 63)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 72 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.is-frozen.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 20);

	__webpack_require__(/*! ./_object-sap */ 63)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 73 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.is-sealed.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 20);

	__webpack_require__(/*! ./_object-sap */ 63)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 74 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.is-extensible.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(/*! ./_is-object */ 20);

	__webpack_require__(/*! ./_object-sap */ 63)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 75 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.assign.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 76) });

/***/ },
/* 76 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-assign.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)

	var getKeys = __webpack_require__(/*! ./_object-keys */ 37),
	    gOPS = __webpack_require__(/*! ./_object-gops */ 50),
	    pIE = __webpack_require__(/*! ./_object-pie */ 51),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    IObject = __webpack_require__(/*! ./_iobject */ 40),
	    $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(/*! ./_fails */ 14)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 77 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.is.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(/*! ./_export */ 15);
	$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ 78) });

/***/ },
/* 78 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_same-value.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	"use strict";

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 79 */
/*!***************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.set-prototype-of.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(/*! ./_export */ 15);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 80).set });

/***/ },
/* 80 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_set-proto.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    anObject = __webpack_require__(/*! ./_an-object */ 19);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(/*! ./_ctx */ 27)(Function.call, __webpack_require__(/*! ./_object-gopd */ 58).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 81 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.object.to-string.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()

	var classof = __webpack_require__(/*! ./_classof */ 82),
	    test = {};
	test[__webpack_require__(/*! ./_wks */ 32)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(/*! ./_redefine */ 25)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 82 */
/*!********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_classof.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./_cof */ 41),
	    TAG = __webpack_require__(/*! ./_wks */ 32)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 83 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.function.bind.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ 84) });

/***/ },
/* 84 */
/*!*****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_bind.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    invoke = __webpack_require__(/*! ./_invoke */ 85),
	    arraySlice = [].slice,
	    factories = {};

	var construct = function construct(F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) {
	      n[i] = 'a[' + i + ']';
	    }factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */) {
	  var fn = aFunction(this),
	      partArgs = arraySlice.call(arguments, 1);
	  var bound = function bound() /* args... */{
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 85 */
/*!*******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_invoke.js ***!
  \*******************************************************/
/***/ function(module, exports) {

	"use strict";

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 86 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.function.name.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(/*! ./_object-dp */ 18).f,
	    createDesc = __webpack_require__(/*! ./_property-desc */ 24),
	    has = __webpack_require__(/*! ./_has */ 12),
	    FProto = Function.prototype,
	    nameRE = /^\s*function ([^ (]*)/,
	    NAME = 'name';

	var isExtensible = Object.isExtensible || function () {
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(/*! ./_descriptors */ 13) && dP(FProto, NAME, {
	  configurable: true,
	  get: function get() {
	    try {
	      var that = this,
	          name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch (e) {
	      return '';
	    }
	  }
	});

/***/ },
/* 87 */
/*!*************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.function.has-instance.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    HAS_INSTANCE = __webpack_require__(/*! ./_wks */ 32)('hasInstance'),
	    FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ 18).f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
	    if (typeof this != 'function' || !isObject(O)) return false;
	    if (!isObject(this.prototype)) return O instanceof this;
	    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	    while (O = getPrototypeOf(O)) {
	      if (this.prototype === O) return true;
	    }return false;
	  } });

/***/ },
/* 88 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.parse-int.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $parseInt = __webpack_require__(/*! ./_parse-int */ 89);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

/***/ },
/* 89 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_parse-int.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $parseInt = __webpack_require__(/*! ./_global */ 11).parseInt,
	    $trim = __webpack_require__(/*! ./_string-trim */ 90).trim,
	    ws = __webpack_require__(/*! ./_string-ws */ 91),
	    hex = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 90 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_string-trim.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    defined = __webpack_require__(/*! ./_defined */ 42),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    spaces = __webpack_require__(/*! ./_string-ws */ 91),
	    space = '[' + spaces + ']',
	    non = '\u200B\x85',
	    ltrim = RegExp('^' + space + space + '*'),
	    rtrim = RegExp(space + space + '*$');

	var exporter = function exporter(KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 91 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_string-ws.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	'use strict';

	module.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 92 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.parse-float.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $parseFloat = __webpack_require__(/*! ./_parse-float */ 93);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

/***/ },
/* 93 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_parse-float.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $parseFloat = __webpack_require__(/*! ./_global */ 11).parseFloat,
	    $trim = __webpack_require__(/*! ./_string-trim */ 90).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ 91) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3),
	      result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 94 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.constructor.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    has = __webpack_require__(/*! ./_has */ 12),
	    cof = __webpack_require__(/*! ./_cof */ 41),
	    inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 95),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    gOPN = __webpack_require__(/*! ./_object-gopn */ 57).f,
	    gOPD = __webpack_require__(/*! ./_object-gopd */ 58).f,
	    dP = __webpack_require__(/*! ./_object-dp */ 18).f,
	    $trim = __webpack_require__(/*! ./_string-trim */ 90).trim,
	    NUMBER = 'Number',
	    $Number = global[NUMBER],
	    Base = $Number,
	    proto = $Number.prototype
	// Opera ~12 has broken Object#toString
	,
	    BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ 53)(proto)) == NUMBER,
	    TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function toNumber(argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0),
	        third,
	        radix,
	        maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66:case 98:
	          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
	        case 79:case 111:
	          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
	        default:
	          return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      }return parseInt(digits, radix);
	    }
	  }return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value,
	        that = this;
	    return that instanceof $Number
	    // check on 1..constructor(foo) case
	    && (BROKEN_COF ? fails(function () {
	      proto.valueOf.call(that);
	    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(/*! ./_descriptors */ 13) ? gOPN(Base) : (
	  // ES3:
	  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	  // ES6 (in case, if modules with ES6 Number statics required before):
	  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(/*! ./_redefine */ 25)(global, NUMBER, $Number);
	}

/***/ },
/* 95 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_inherit-if-required.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    setPrototypeOf = __webpack_require__(/*! ./_set-proto */ 80).set;
	module.exports = function (that, target, C) {
	  var P,
	      S = target.constructor;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  }return that;
	};

/***/ },
/* 96 */
/*!*******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.to-fixed.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toInteger = __webpack_require__(/*! ./_to-integer */ 45),
	    aNumberValue = __webpack_require__(/*! ./_a-number-value */ 97),
	    repeat = __webpack_require__(/*! ./_string-repeat */ 98),
	    $toFixed = 1..toFixed,
	    floor = Math.floor,
	    data = [0, 0, 0, 0, 0, 0],
	    ERROR = 'Number.toFixed: incorrect invocation!',
	    ZERO = '0';

	var multiply = function multiply(n, c) {
	  var i = -1,
	      c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function divide(n) {
	  var i = 6,
	      c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = c % n * 1e7;
	  }
	};
	var numToString = function numToString() {
	  var i = 6,
	      s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  }return s;
	};
	var pow = function pow(x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function log(x) {
	  var n = 0,
	      x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  }return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !__webpack_require__(/*! ./_fails */ 14)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR),
	        f = toInteger(fractionDigits),
	        s = '',
	        m = ZERO,
	        e,
	        z,
	        j,
	        k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    }return m;
	  }
	});

/***/ },
/* 97 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_a-number-value.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cof = __webpack_require__(/*! ./_cof */ 41);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 98 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_string-repeat.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(/*! ./_to-integer */ 45),
	    defined = __webpack_require__(/*! ./_defined */ 42);

	module.exports = function repeat(count) {
	  var str = String(defined(this)),
	      res = '',
	      n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (; n > 0; (n >>>= 1) && (str += str)) {
	    if (n & 1) res += str;
	  }return res;
	};

/***/ },
/* 99 */
/*!***********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.to-precision.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $fails = __webpack_require__(/*! ./_fails */ 14),
	    aNumberValue = __webpack_require__(/*! ./_a-number-value */ 97),
	    $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});

/***/ },
/* 100 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.epsilon.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

/***/ },
/* 101 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.is-finite.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    _isFinite = __webpack_require__(/*! ./_global */ 11).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 102 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.is-integer.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ 103) });

/***/ },
/* 103 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_is-integer.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 104 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.is-nan.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    return number != number;
	  }
	});

/***/ },
/* 105 */
/*!**************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.is-safe-integer.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    isInteger = __webpack_require__(/*! ./_is-integer */ 103),
	    abs = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 106 */
/*!***************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.max-safe-integer.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

/***/ },
/* 107 */
/*!***************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.min-safe-integer.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/***/ },
/* 108 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.parse-float.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $parseFloat = __webpack_require__(/*! ./_parse-float */ 93);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

/***/ },
/* 109 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.number.parse-int.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $parseInt = __webpack_require__(/*! ./_parse-int */ 89);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

/***/ },
/* 110 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.acosh.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    log1p = __webpack_require__(/*! ./_math-log1p */ 111),
	    sqrt = Math.sqrt,
	    $acosh = Math.acosh;

	$export($export.S + $export.F * !($acosh
	// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	&& Math.floor($acosh(Number.MAX_VALUE)) == 710
	// Tor Browser bug: Math.acosh(Infinity) -> NaN 
	&& $acosh(Infinity) == Infinity), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 111 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_math-log1p.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	"use strict";

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 112 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.asinh.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    $asinh = Math.asinh;

	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

/***/ },
/* 113 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.atanh.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    $atanh = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 114 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.cbrt.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    sign = __webpack_require__(/*! ./_math-sign */ 115);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 115 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_math-sign.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	"use strict";

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 116 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.clz32.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 117 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.cosh.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    exp = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 118 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.expm1.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    $expm1 = __webpack_require__(/*! ./_math-expm1 */ 119);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

/***/ },
/* 119 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_math-expm1.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	"use strict";

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = !$expm1
	// Old FF bug
	|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	// Tor Browser bug
	|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 120 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.fround.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    sign = __webpack_require__(/*! ./_math-sign */ 115),
	    pow = Math.pow,
	    EPSILON = pow(2, -52),
	    EPSILON32 = pow(2, -23),
	    MAX32 = pow(2, 127) * (2 - EPSILON32),
	    MIN32 = pow(2, -126);

	var roundTiesToEven = function roundTiesToEven(n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};

	$export($export.S, 'Math', {
	  fround: function fround(x) {
	    var $abs = Math.abs(x),
	        $sign = sign(x),
	        a,
	        result;
	    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if (result > MAX32 || result != result) return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 121 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.hypot.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(/*! ./_export */ 15),
	    abs = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) {
	    // eslint-disable-line no-unused-vars
	    var sum = 0,
	        i = 0,
	        aLen = arguments.length,
	        larg = 0,
	        arg,
	        div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 122 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.imul.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    $imul = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 14)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff,
	        xn = +x,
	        yn = +y,
	        xl = UINT16 & xn,
	        yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 123 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.log10.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 124 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.log1p.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ 111) });

/***/ },
/* 125 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.log2.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 126 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.sign.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ 115) });

/***/ },
/* 127 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.sinh.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    expm1 = __webpack_require__(/*! ./_math-expm1 */ 119),
	    exp = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 14)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 128 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.tanh.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    expm1 = __webpack_require__(/*! ./_math-expm1 */ 119),
	    exp = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x),
	        b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 129 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.math.trunc.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 130 */
/*!**************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.from-code-point.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toIndex = __webpack_require__(/*! ./_to-index */ 46),
	    fromCharCode = String.fromCharCode,
	    $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) {
	    // eslint-disable-line no-unused-vars
	    var res = [],
	        aLen = arguments.length,
	        i = 0,
	        code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
	    }return res.join('');
	  }
	});

/***/ },
/* 131 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.raw.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    toLength = __webpack_require__(/*! ./_to-length */ 44);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw),
	        len = toLength(tpl.length),
	        aLen = arguments.length,
	        res = [],
	        i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    }return res.join('');
	  }
	});

/***/ },
/* 132 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.trim.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()

	__webpack_require__(/*! ./_string-trim */ 90)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 133 */
/*!*******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.iterator.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $at = __webpack_require__(/*! ./_string-at */ 134)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./_iter-define */ 135)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 134 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_string-at.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(/*! ./_to-integer */ 45),
	    defined = __webpack_require__(/*! ./_defined */ 42);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 135 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_iter-define.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(/*! ./_library */ 35),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    redefine = __webpack_require__(/*! ./_redefine */ 25),
	    hide = __webpack_require__(/*! ./_hide */ 17),
	    has = __webpack_require__(/*! ./_has */ 12),
	    Iterators = __webpack_require__(/*! ./_iterators */ 136),
	    $iterCreate = __webpack_require__(/*! ./_iter-create */ 137),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 31),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    ITERATOR = __webpack_require__(/*! ./_wks */ 32)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';

	var returnThis = function returnThis() {
	  return this;
	};

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 136 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_iterators.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 137 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_iter-create.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var create = __webpack_require__(/*! ./_object-create */ 53),
	    descriptor = __webpack_require__(/*! ./_property-desc */ 24),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 31),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./_hide */ 17)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 32)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 138 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.code-point-at.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $at = __webpack_require__(/*! ./_string-at */ 134)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});

/***/ },
/* 139 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.ends-with.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    context = __webpack_require__(/*! ./_string-context */ 140),
	    ENDS_WITH = 'endsWith',
	    $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 142)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH),
	        endPosition = arguments.length > 1 ? arguments[1] : undefined,
	        len = toLength(that.length),
	        end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
	        search = String(searchString);
	    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 140 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_string-context.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(/*! ./_is-regexp */ 141),
	    defined = __webpack_require__(/*! ./_defined */ 42);

	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 141 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_is-regexp.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    cof = __webpack_require__(/*! ./_cof */ 41),
	    MATCH = __webpack_require__(/*! ./_wks */ 32)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 142 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_fails-is-regexp.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MATCH = __webpack_require__(/*! ./_wks */ 32)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) {/* empty */}
	  }return true;
	};

/***/ },
/* 143 */
/*!*******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.includes.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    context = __webpack_require__(/*! ./_string-context */ 140),
	    INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 142)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */) {
	    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 144 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.repeat.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(/*! ./_string-repeat */ 98)
	});

/***/ },
/* 145 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.starts-with.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    context = __webpack_require__(/*! ./_string-context */ 140),
	    STARTS_WITH = 'startsWith',
	    $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ 142)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH),
	        index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
	        search = String(searchString);
	    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 146 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.anchor.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)

	__webpack_require__(/*! ./_string-html */ 147)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});

/***/ },
/* 147 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_string-html.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    defined = __webpack_require__(/*! ./_defined */ 42),
	    quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function createHTML(string, tag, attribute, value) {
	  var S = String(defined(string)),
	      p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 148 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.big.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()

	__webpack_require__(/*! ./_string-html */ 147)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});

/***/ },
/* 149 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.blink.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()

	__webpack_require__(/*! ./_string-html */ 147)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});

/***/ },
/* 150 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.bold.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()

	__webpack_require__(/*! ./_string-html */ 147)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});

/***/ },
/* 151 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.fixed.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()

	__webpack_require__(/*! ./_string-html */ 147)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

/***/ },
/* 152 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.fontcolor.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)

	__webpack_require__(/*! ./_string-html */ 147)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});

/***/ },
/* 153 */
/*!*******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.fontsize.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)

	__webpack_require__(/*! ./_string-html */ 147)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});

/***/ },
/* 154 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.italics.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()

	__webpack_require__(/*! ./_string-html */ 147)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});

/***/ },
/* 155 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.link.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)

	__webpack_require__(/*! ./_string-html */ 147)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});

/***/ },
/* 156 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.small.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()

	__webpack_require__(/*! ./_string-html */ 147)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});

/***/ },
/* 157 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.strike.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()

	__webpack_require__(/*! ./_string-html */ 147)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});

/***/ },
/* 158 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.sub.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()

	__webpack_require__(/*! ./_string-html */ 147)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});

/***/ },
/* 159 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.string.sup.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()

	__webpack_require__(/*! ./_string-html */ 147)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});

/***/ },
/* 160 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.date.now.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Date', { now: function now() {
	    return new Date().getTime();
	  } });

/***/ },
/* 161 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.date.to-json.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23);

	$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ 14)(function () {
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
	      return 1;
	    } }) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key) {
	    var O = toObject(this),
	        pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 162 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.date.to-iso-string.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

	var $export = __webpack_require__(/*! ./_export */ 15),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    getTime = Date.prototype.getTime;

	var lz = function lz(num) {
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function () {
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString() {
	    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	    var d = this,
	        y = d.getUTCFullYear(),
	        m = d.getUTCMilliseconds(),
	        s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 163 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.date.to-string.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DateProto = Date.prototype,
	    INVALID_DATE = 'Invalid Date',
	    TO_STRING = 'toString',
	    $toString = DateProto[TO_STRING],
	    getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(/*! ./_redefine */ 25)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 164 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.date.to-primitive.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ 32)('toPrimitive'),
	    proto = Date.prototype;

	if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ 17)(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ 165));

/***/ },
/* 165 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_date-to-primitive.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(/*! ./_an-object */ 19),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23),
	    NUMBER = 'number';

	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 166 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.is-array.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ 52) });

/***/ },
/* 167 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.from.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(/*! ./_ctx */ 27),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    call = __webpack_require__(/*! ./_iter-call */ 168),
	    isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 169),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    createProperty = __webpack_require__(/*! ./_create-property */ 170),
	    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 171);

	$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ 172)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 168 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_iter-call.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./_an-object */ 19);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 169 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_is-array-iter.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// check on default Array iterator
	var Iterators = __webpack_require__(/*! ./_iterators */ 136),
	    ITERATOR = __webpack_require__(/*! ./_wks */ 32)('iterator'),
	    ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 170 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_create-property.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $defineProperty = __webpack_require__(/*! ./_object-dp */ 18),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 24);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ },
/* 171 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/core.get-iterator-method.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(/*! ./_classof */ 82),
	    ITERATOR = __webpack_require__(/*! ./_wks */ 32)('iterator'),
	    Iterators = __webpack_require__(/*! ./_iterators */ 136);
	module.exports = __webpack_require__(/*! ./_core */ 16).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 172 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_iter-detect.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ITERATOR = __webpack_require__(/*! ./_wks */ 32)('iterator'),
	    SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 173 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.of.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    createProperty = __webpack_require__(/*! ./_create-property */ 170);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 14)(function () {
	  function F() {}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of() /* ...args */{
	    var index = 0,
	        aLen = arguments.length,
	        result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) {
	      createProperty(result, index, arguments[index++]);
	    }result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 174 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.join.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ 40) != Object || !__webpack_require__(/*! ./_strict-method */ 175)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 175 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_strict-method.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fails = __webpack_require__(/*! ./_fails */ 14);

	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    arg ? method.call(null, function () {}, 1) : method.call(null);
	  });
	};

/***/ },
/* 176 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.slice.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    html = __webpack_require__(/*! ./_html */ 55),
	    cof = __webpack_require__(/*! ./_cof */ 41),
	    toIndex = __webpack_require__(/*! ./_to-index */ 46),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ 14)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length),
	        klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toIndex(begin, len),
	        upTo = toIndex(end, len),
	        size = toLength(upTo - start),
	        cloned = Array(size),
	        i = 0;
	    for (; i < size; i++) {
	      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
	    }return cloned;
	  }
	});

/***/ },
/* 177 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.sort.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    $sort = [].sort,
	    test = [1, 2, 3];

	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(/*! ./_strict-method */ 175)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 178 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.for-each.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $forEach = __webpack_require__(/*! ./_array-methods */ 179)(0),
	    STRICT = __webpack_require__(/*! ./_strict-method */ 175)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_array-methods.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(/*! ./_ctx */ 27),
	    IObject = __webpack_require__(/*! ./_iobject */ 40),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    asc = __webpack_require__(/*! ./_array-species-create */ 180);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1,
	      IS_FILTER = TYPE == 2,
	      IS_SOME = TYPE == 3,
	      IS_EVERY = TYPE == 4,
	      IS_FIND_INDEX = TYPE == 6,
	      NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
	      create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this),
	        self = IObject(O),
	        f = ctx(callbackfn, that, 3),
	        length = toLength(self.length),
	        index = 0,
	        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
	        val,
	        res;
	    for (; length > index; index++) {
	      if (NO_HOLES || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (TYPE) {
	          if (IS_MAP) result[index] = res; // map
	          else if (res) switch (TYPE) {
	              case 3:
	                return true; // some
	              case 5:
	                return val; // find
	              case 6:
	                return index; // findIndex
	              case 2:
	                result.push(val); // filter
	            } else if (IS_EVERY) return false; // every
	        }
	      }
	    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 180 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_array-species-create.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ 181);

	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 181 */
/*!**************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_array-species-constructor.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(/*! ./_is-object */ 20),
	    isArray = __webpack_require__(/*! ./_is-array */ 52),
	    SPECIES = __webpack_require__(/*! ./_wks */ 32)('species');

	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  }return C === undefined ? Array : C;
	};

/***/ },
/* 182 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.map.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $map = __webpack_require__(/*! ./_array-methods */ 179)(1);

	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 175)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.filter.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $filter = __webpack_require__(/*! ./_array-methods */ 179)(2);

	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 175)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 184 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.some.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $some = __webpack_require__(/*! ./_array-methods */ 179)(3);

	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 175)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 185 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.every.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $every = __webpack_require__(/*! ./_array-methods */ 179)(4);

	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 175)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 186 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.reduce.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $reduce = __webpack_require__(/*! ./_array-reduce */ 187);

	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 175)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 187 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_array-reduce.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    IObject = __webpack_require__(/*! ./_iobject */ 40),
	    toLength = __webpack_require__(/*! ./_to-length */ 44);

	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that),
	      self = IObject(O),
	      length = toLength(O.length),
	      index = isRight ? length - 1 : 0,
	      i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (; isRight ? index >= 0 : length > index; index += i) {
	    if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	  }return memo;
	};

/***/ },
/* 188 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.reduce-right.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $reduce = __webpack_require__(/*! ./_array-reduce */ 187);

	$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ 175)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 189 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.index-of.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $indexOf = __webpack_require__(/*! ./_array-includes */ 43)(false),
	    $native = [].indexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ 175)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	    // convert -0 to +0
	    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 190 */
/*!***********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.last-index-of.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    toInteger = __webpack_require__(/*! ./_to-integer */ 45),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    $native = [].lastIndexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ 175)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this),
	        length = toLength(O.length),
	        index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (; index >= 0; index--) {
	      if (index in O) if (O[index] === searchElement) return index || 0;
	    }return -1;
	  }
	});

/***/ },
/* 191 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.copy-within.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ 192) });

	__webpack_require__(/*! ./_add-to-unscopables */ 193)('copyWithin');

/***/ },
/* 192 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_array-copy-within.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';

	var toObject = __webpack_require__(/*! ./_to-object */ 65),
	    toIndex = __webpack_require__(/*! ./_to-index */ 46),
	    toLength = __webpack_require__(/*! ./_to-length */ 44);

	module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
	  var O = toObject(this),
	      len = toLength(O.length),
	      to = toIndex(target, len),
	      from = toIndex(start, len),
	      end = arguments.length > 2 ? arguments[2] : undefined,
	      count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
	      inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];else delete O[to];
	    to += inc;
	    from += inc;
	  }return O;
	};

/***/ },
/* 193 */
/*!*******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_add-to-unscopables.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(/*! ./_wks */ 32)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ 17)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 194 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.fill.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ 195) });

	__webpack_require__(/*! ./_add-to-unscopables */ 193)('fill');

/***/ },
/* 195 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_array-fill.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';

	var toObject = __webpack_require__(/*! ./_to-object */ 65),
	    toIndex = __webpack_require__(/*! ./_to-index */ 46),
	    toLength = __webpack_require__(/*! ./_to-length */ 44);
	module.exports = function fill(value /*, start = 0, end = @length */) {
	  var O = toObject(this),
	      length = toLength(O.length),
	      aLen = arguments.length,
	      index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
	      end = aLen > 2 ? arguments[2] : undefined,
	      endPos = end === undefined ? length : toIndex(end, length);
	  while (endPos > index) {
	    O[index++] = value;
	  }return O;
	};

/***/ },
/* 196 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.find.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $find = __webpack_require__(/*! ./_array-methods */ 179)(5),
	    KEY = 'find',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(/*! ./_add-to-unscopables */ 193)(KEY);

/***/ },
/* 197 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.find-index.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $find = __webpack_require__(/*! ./_array-methods */ 179)(6),
	    KEY = 'findIndex',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(/*! ./_add-to-unscopables */ 193)(KEY);

/***/ },
/* 198 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.species.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_set-species */ 199)('Array');

/***/ },
/* 199 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_set-species.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    dP = __webpack_require__(/*! ./_object-dp */ 18),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 13),
	    SPECIES = __webpack_require__(/*! ./_wks */ 32)('species');

	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 200 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.array.iterator.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 193),
	    step = __webpack_require__(/*! ./_iter-step */ 201),
	    Iterators = __webpack_require__(/*! ./_iterators */ 136),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./_iter-define */ 135)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 201 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_iter-step.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	"use strict";

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 202 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.regexp.constructor.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 95),
	    dP = __webpack_require__(/*! ./_object-dp */ 18).f,
	    gOPN = __webpack_require__(/*! ./_object-gopn */ 57).f,
	    isRegExp = __webpack_require__(/*! ./_is-regexp */ 141),
	    $flags = __webpack_require__(/*! ./_flags */ 203),
	    $RegExp = global.RegExp,
	    Base = $RegExp,
	    proto = $RegExp.prototype,
	    re1 = /a/g,
	    re2 = /a/g
	// "new" creates a new object, old webkit buggy here
	,
	    CORRECT_NEW = new $RegExp(re1) !== re1;

	if (__webpack_require__(/*! ./_descriptors */ 13) && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ 14)(function () {
	  re2[__webpack_require__(/*! ./_wks */ 32)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp,
	        piRE = isRegExp(p),
	        fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function proxy(key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function get() {
	        return Base[key];
	      },
	      set: function set(it) {
	        Base[key] = it;
	      }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
	    proxy(keys[i++]);
	  }proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(/*! ./_redefine */ 25)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(/*! ./_set-species */ 199)('RegExp');

/***/ },
/* 203 */
/*!******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_flags.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags

	var anObject = __webpack_require__(/*! ./_an-object */ 19);
	module.exports = function () {
	  var that = anObject(this),
	      result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

/***/ },
/* 204 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.regexp.to-string.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./es6.regexp.flags */ 205);
	var anObject = __webpack_require__(/*! ./_an-object */ 19),
	    $flags = __webpack_require__(/*! ./_flags */ 203),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 13),
	    TO_STRING = 'toString',
	    $toString = /./[TO_STRING];

	var define = function define(fn) {
	  __webpack_require__(/*! ./_redefine */ 25)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(/*! ./_fails */ 14)(function () {
	  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
	})) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	  // FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

/***/ },
/* 205 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.regexp.flags.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(/*! ./_descriptors */ 13) && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ 18).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(/*! ./_flags */ 203)
	});

/***/ },
/* 206 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.regexp.match.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @@match logic
	__webpack_require__(/*! ./_fix-re-wks */ 207)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';

	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 207 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_fix-re-wks.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hide = __webpack_require__(/*! ./_hide */ 17),
	    redefine = __webpack_require__(/*! ./_redefine */ 25),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    defined = __webpack_require__(/*! ./_defined */ 42),
	    wks = __webpack_require__(/*! ./_wks */ 32);

	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY),
	      fns = exec(defined, SYMBOL, ''[KEY]),
	      strfn = fns[0],
	      rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () {
	      return 7;
	    };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	    ? function (string, arg) {
	      return rxfn.call(string, this, arg);
	    }
	    // 21.2.5.6 RegExp.prototype[@@match](string)
	    // 21.2.5.9 RegExp.prototype[@@search](string)
	    : function (string) {
	      return rxfn.call(string, this);
	    });
	  }
	};

/***/ },
/* 208 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.regexp.replace.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @@replace logic
	__webpack_require__(/*! ./_fix-re-wks */ 207)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';

	    var O = defined(this),
	        fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 209 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.regexp.search.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @@search logic
	__webpack_require__(/*! ./_fix-re-wks */ 207)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';

	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 210 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.regexp.split.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @@split logic
	__webpack_require__(/*! ./_fix-re-wks */ 207)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';

	  var isRegExp = __webpack_require__(/*! ./_is-regexp */ 141),
	      _split = $split,
	      $push = [].push,
	      $SPLIT = 'split',
	      LENGTH = 'length',
	      LAST_INDEX = 'lastIndex';
	  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function $split(separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) {
	              if (arguments[i] === undefined) match[i] = undefined;
	            }
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	    // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function $split(separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this),
	        fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 211 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.promise.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(/*! ./_library */ 35),
	    global = __webpack_require__(/*! ./_global */ 11),
	    ctx = __webpack_require__(/*! ./_ctx */ 27),
	    classof = __webpack_require__(/*! ./_classof */ 82),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 212),
	    forOf = __webpack_require__(/*! ./_for-of */ 213),
	    speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 214),
	    task = __webpack_require__(/*! ./_task */ 215).set,
	    microtask = __webpack_require__(/*! ./_microtask */ 216)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ 32)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();

	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 217)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(/*! ./_set-to-string-tag */ 31)($Promise, PROMISE);
	__webpack_require__(/*! ./_set-species */ 199)(PROMISE);
	Wrapper = __webpack_require__(/*! ./_core */ 16)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 172)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 212 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_an-instance.js ***!
  \************************************************************/
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 213 */
/*!*******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_for-of.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(/*! ./_ctx */ 27),
	    call = __webpack_require__(/*! ./_iter-call */ 168),
	    isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 169),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 171),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 214 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_species-constructor.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(/*! ./_an-object */ 19),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    SPECIES = __webpack_require__(/*! ./_wks */ 32)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 215 */
/*!*****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_task.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(/*! ./_ctx */ 27),
	    invoke = __webpack_require__(/*! ./_invoke */ 85),
	    html = __webpack_require__(/*! ./_html */ 55),
	    cel = __webpack_require__(/*! ./_dom-create */ 22),
	    global = __webpack_require__(/*! ./_global */ 11),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(/*! ./_cof */ 41)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 216 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_microtask.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    macrotask = __webpack_require__(/*! ./_task */ 215).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(/*! ./_cof */ 41)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 217 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_redefine-all.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redefine = __webpack_require__(/*! ./_redefine */ 25);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 218 */
/*!*******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.map.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var strong = __webpack_require__(/*! ./_collection-strong */ 219);

	// 23.1 Map Objects
	module.exports = __webpack_require__(/*! ./_collection */ 220)('Map', function (get) {
	  return function Map() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 219 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_collection-strong.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dP = __webpack_require__(/*! ./_object-dp */ 18).f,
	    create = __webpack_require__(/*! ./_object-create */ 53),
	    redefineAll = __webpack_require__(/*! ./_redefine-all */ 217),
	    ctx = __webpack_require__(/*! ./_ctx */ 27),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 212),
	    defined = __webpack_require__(/*! ./_defined */ 42),
	    forOf = __webpack_require__(/*! ./_for-of */ 213),
	    $iterDefine = __webpack_require__(/*! ./_iter-define */ 135),
	    step = __webpack_require__(/*! ./_iter-step */ 201),
	    setSpecies = __webpack_require__(/*! ./_set-species */ 199),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 13),
	    fastKey = __webpack_require__(/*! ./_meta */ 29).fastKey,
	    SIZE = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function getEntry(that, key) {
	  // fast case
	  var index = fastKey(key),
	      entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined; // first entry
	      that._l = undefined; // last entry
	      that[SIZE] = 0; // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function _delete(key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */) {
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
	            entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) {
	            entry = entry.p;
	          }
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function get() {
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var entry = getEntry(that, key),
	        prev,
	        index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	      // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key, // <- key
	        v: value, // <- value
	        p: prev = that._l, // <- previous entry
	        n: undefined, // <- next entry
	        r: false // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    }return that;
	  },
	  getEntry: getEntry,
	  setStrong: function setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = iterated; // target
	      this._k = kind; // kind
	      this._l = undefined; // previous
	    }, function () {
	      var that = this,
	          kind = that._k,
	          entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) {
	        entry = entry.p;
	      } // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 220 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_collection.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    redefine = __webpack_require__(/*! ./_redefine */ 25),
	    redefineAll = __webpack_require__(/*! ./_redefine-all */ 217),
	    meta = __webpack_require__(/*! ./_meta */ 29),
	    forOf = __webpack_require__(/*! ./_for-of */ 213),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 212),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    $iterDetect = __webpack_require__(/*! ./_iter-detect */ 172),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 31),
	    inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ 95);

	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME],
	      C = Base,
	      ADDER = IS_MAP ? 'set' : 'add',
	      proto = C && C.prototype,
	      O = {};
	  var fixMethod = function fixMethod(KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY, KEY == 'delete' ? function (a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'has' ? function has(a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'get' ? function get(a) {
	      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'add' ? function add(a) {
	      fn.call(this, a === 0 ? 0 : a);return this;
	    } : function set(a, b) {
	      fn.call(this, a === 0 ? 0 : a, b);return this;
	    });
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C()
	    // early implementations not supports chaining
	    ,
	        HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    ,
	        THROWS_ON_PRIMITIVES = fails(function () {
	      instance.has(1);
	    })
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    ,
	        ACCEPT_ITERABLES = $iterDetect(function (iter) {
	      new C(iter);
	    }) // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    ,
	        BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C(),
	          index = 5;
	      while (index--) {
	        $instance[ADDER](index, index);
	      }return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 221 */
/*!*******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.set.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var strong = __webpack_require__(/*! ./_collection-strong */ 219);

	// 23.2 Set Objects
	module.exports = __webpack_require__(/*! ./_collection */ 220)('Set', function (get) {
	  return function Set() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 222 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.weak-map.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var each = __webpack_require__(/*! ./_array-methods */ 179)(0),
	    redefine = __webpack_require__(/*! ./_redefine */ 25),
	    meta = __webpack_require__(/*! ./_meta */ 29),
	    assign = __webpack_require__(/*! ./_object-assign */ 76),
	    weak = __webpack_require__(/*! ./_collection-weak */ 223),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    getWeak = meta.getWeak,
	    isExtensible = Object.isExtensible,
	    uncaughtFrozenStore = weak.ufstore,
	    tmp = {},
	    InternalMap;

	var wrapper = function wrapper(get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ 220)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype,
	        method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	      }return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 223 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_collection-weak.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redefineAll = __webpack_require__(/*! ./_redefine-all */ 217),
	    getWeak = __webpack_require__(/*! ./_meta */ 29).getWeak,
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 212),
	    forOf = __webpack_require__(/*! ./_for-of */ 213),
	    createArrayMethod = __webpack_require__(/*! ./_array-methods */ 179),
	    $has = __webpack_require__(/*! ./_has */ 12),
	    arrayFind = createArrayMethod(5),
	    arrayFindIndex = createArrayMethod(6),
	    id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function UncaughtFrozenStore() {
	  this.a = [];
	};
	var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function get(key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function has(key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function set(key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;else this.a.push([key, value]);
	  },
	  'delete': function _delete(key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = id++; // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function _delete(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 224 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.weak-set.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var weak = __webpack_require__(/*! ./_collection-weak */ 223);

	// 23.4 WeakSet Objects
	__webpack_require__(/*! ./_collection */ 220)('WeakSet', function (get) {
	  return function WeakSet() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 225 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.array-buffer.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $typed = __webpack_require__(/*! ./_typed */ 226),
	    buffer = __webpack_require__(/*! ./_typed-buffer */ 227),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    toIndex = __webpack_require__(/*! ./_to-index */ 46),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    ArrayBuffer = __webpack_require__(/*! ./_global */ 11).ArrayBuffer,
	    speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 214),
	    $ArrayBuffer = buffer.ArrayBuffer,
	    $DataView = buffer.DataView,
	    $isView = $typed.ABV && ArrayBuffer.isView,
	    $slice = $ArrayBuffer.prototype.slice,
	    VIEW = $typed.VIEW,
	    ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ 14)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength,
	        first = toIndex(start, len),
	        final = toIndex(end === undefined ? len : end, len),
	        result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
	        viewS = new $DataView(this),
	        viewT = new $DataView(result),
	        index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    }return result;
	  }
	});

	__webpack_require__(/*! ./_set-species */ 199)(ARRAY_BUFFER);

/***/ },
/* 226 */
/*!******************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_typed.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    hide = __webpack_require__(/*! ./_hide */ 17),
	    uid = __webpack_require__(/*! ./_uid */ 26),
	    TYPED = uid('typed_array'),
	    VIEW = uid('view'),
	    ABV = !!(global.ArrayBuffer && global.DataView),
	    CONSTR = ABV,
	    i = 0,
	    l = 9,
	    Typed;

	var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};

/***/ },
/* 227 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_typed-buffer.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(/*! ./_global */ 11),
	    DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 13),
	    LIBRARY = __webpack_require__(/*! ./_library */ 35),
	    $typed = __webpack_require__(/*! ./_typed */ 226),
	    hide = __webpack_require__(/*! ./_hide */ 17),
	    redefineAll = __webpack_require__(/*! ./_redefine-all */ 217),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 212),
	    toInteger = __webpack_require__(/*! ./_to-integer */ 45),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    gOPN = __webpack_require__(/*! ./_object-gopn */ 57).f,
	    dP = __webpack_require__(/*! ./_object-dp */ 18).f,
	    arrayFill = __webpack_require__(/*! ./_array-fill */ 195),
	    setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 31),
	    ARRAY_BUFFER = 'ArrayBuffer',
	    DATA_VIEW = 'DataView',
	    PROTOTYPE = 'prototype',
	    WRONG_LENGTH = 'Wrong length!',
	    WRONG_INDEX = 'Wrong index!',
	    $ArrayBuffer = global[ARRAY_BUFFER],
	    $DataView = global[DATA_VIEW],
	    Math = global.Math,
	    RangeError = global.RangeError,
	    Infinity = global.Infinity,
	    BaseBuffer = $ArrayBuffer,
	    abs = Math.abs,
	    pow = Math.pow,
	    floor = Math.floor,
	    log = Math.log,
	    LN2 = Math.LN2,
	    BUFFER = 'buffer',
	    BYTE_LENGTH = 'byteLength',
	    BYTE_OFFSET = 'byteOffset',
	    $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
	    $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
	    $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function packIEEE754(value, mLen, nBytes) {
	  var buffer = Array(nBytes),
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
	      i = 0,
	      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
	      e,
	      m,
	      c;
	  value = abs(value);
	  if (value != value || value === Infinity) {
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = eLen - 7,
	      i = nBytes - 1,
	      s = buffer[i--],
	      e = s & 127,
	      m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  }return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function packI8(it) {
	  return [it & 0xff];
	};
	var packI16 = function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function packF64(it) {
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function packF32(it) {
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function get() {
	      return this[internal];
	    } });
	};

	var get = function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) {
	    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	  }
	};

	var validateArrayBufferArguments = function validateArrayBufferArguments(that, length) {
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length,
	      byteLength = toLength(numberLength);
	  if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH],
	        offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	  }) || !fails(function () {
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2)),
	      $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 228 */
/*!*******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.data-view.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15);
	$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ 226).ABV, {
	  DataView: __webpack_require__(/*! ./_typed-buffer */ 227).DataView
	});

/***/ },
/* 229 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.int8-array.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/*!************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_typed-array.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	if (__webpack_require__(/*! ./_descriptors */ 13)) {
	  var LIBRARY = __webpack_require__(/*! ./_library */ 35),
	      global = __webpack_require__(/*! ./_global */ 11),
	      fails = __webpack_require__(/*! ./_fails */ 14),
	      $export = __webpack_require__(/*! ./_export */ 15),
	      $typed = __webpack_require__(/*! ./_typed */ 226),
	      $buffer = __webpack_require__(/*! ./_typed-buffer */ 227),
	      ctx = __webpack_require__(/*! ./_ctx */ 27),
	      anInstance = __webpack_require__(/*! ./_an-instance */ 212),
	      propertyDesc = __webpack_require__(/*! ./_property-desc */ 24),
	      hide = __webpack_require__(/*! ./_hide */ 17),
	      redefineAll = __webpack_require__(/*! ./_redefine-all */ 217),
	      toInteger = __webpack_require__(/*! ./_to-integer */ 45),
	      toLength = __webpack_require__(/*! ./_to-length */ 44),
	      toIndex = __webpack_require__(/*! ./_to-index */ 46),
	      toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23),
	      has = __webpack_require__(/*! ./_has */ 12),
	      same = __webpack_require__(/*! ./_same-value */ 78),
	      classof = __webpack_require__(/*! ./_classof */ 82),
	      isObject = __webpack_require__(/*! ./_is-object */ 20),
	      toObject = __webpack_require__(/*! ./_to-object */ 65),
	      isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 169),
	      create = __webpack_require__(/*! ./_object-create */ 53),
	      getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	      gOPN = __webpack_require__(/*! ./_object-gopn */ 57).f,
	      getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 171),
	      uid = __webpack_require__(/*! ./_uid */ 26),
	      wks = __webpack_require__(/*! ./_wks */ 32),
	      createArrayMethod = __webpack_require__(/*! ./_array-methods */ 179),
	      createArrayIncludes = __webpack_require__(/*! ./_array-includes */ 43),
	      speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 214),
	      ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ 200),
	      Iterators = __webpack_require__(/*! ./_iterators */ 136),
	      $iterDetect = __webpack_require__(/*! ./_iter-detect */ 172),
	      setSpecies = __webpack_require__(/*! ./_set-species */ 199),
	      arrayFill = __webpack_require__(/*! ./_array-fill */ 195),
	      arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ 192),
	      $DP = __webpack_require__(/*! ./_object-dp */ 18),
	      $GOPD = __webpack_require__(/*! ./_object-gopd */ 58),
	      dP = $DP.f,
	      gOPD = $GOPD.f,
	      RangeError = global.RangeError,
	      TypeError = global.TypeError,
	      Uint8Array = global.Uint8Array,
	      ARRAY_BUFFER = 'ArrayBuffer',
	      SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
	      BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
	      PROTOTYPE = 'prototype',
	      ArrayProto = Array[PROTOTYPE],
	      $ArrayBuffer = $buffer.ArrayBuffer,
	      $DataView = $buffer.DataView,
	      arrayForEach = createArrayMethod(0),
	      arrayFilter = createArrayMethod(2),
	      arraySome = createArrayMethod(3),
	      arrayEvery = createArrayMethod(4),
	      arrayFind = createArrayMethod(5),
	      arrayFindIndex = createArrayMethod(6),
	      arrayIncludes = createArrayIncludes(true),
	      arrayIndexOf = createArrayIncludes(false),
	      arrayValues = ArrayIterators.values,
	      arrayKeys = ArrayIterators.keys,
	      arrayEntries = ArrayIterators.entries,
	      arrayLastIndexOf = ArrayProto.lastIndexOf,
	      arrayReduce = ArrayProto.reduce,
	      arrayReduceRight = ArrayProto.reduceRight,
	      arrayJoin = ArrayProto.join,
	      arraySort = ArrayProto.sort,
	      arraySlice = ArrayProto.slice,
	      arrayToString = ArrayProto.toString,
	      arrayToLocaleString = ArrayProto.toLocaleString,
	      ITERATOR = wks('iterator'),
	      TAG = wks('toStringTag'),
	      TYPED_CONSTRUCTOR = uid('typed_constructor'),
	      DEF_CONSTRUCTOR = uid('def_constructor'),
	      ALL_CONSTRUCTORS = $typed.CONSTR,
	      TYPED_ARRAY = $typed.TYPED,
	      VIEW = $typed.VIEW,
	      WRONG_LENGTH = 'Wrong length!';

	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function () {
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function strictToLength(it, SAME) {
	    if (it === undefined) throw TypeError(WRONG_LENGTH);
	    var number = +it,
	        length = toLength(it);
	    if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function toOffset(it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function validate(it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function allocate(C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    }return new C(length);
	  };

	  var speciesFromList = function speciesFromList(O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function fromList(C, list) {
	    var index = 0,
	        length = list.length,
	        result = allocate(C, length);
	    while (length > index) {
	      result[index] = list[index++];
	    }return result;
	  };

	  var addGetter = function addGetter(it, key, internal) {
	    dP(it, key, { get: function get() {
	        return this._d[internal];
	      } });
	  };

	  var $from = function from(source /*, mapfn, thisArg */) {
	    var O = toObject(source),
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        iterFn = getIterFn(O),
	        i,
	        length,
	        values,
	        result,
	        step,
	        iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      }O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of() /*...items*/{
	    var index = 0,
	        length = arguments.length,
	        result = allocate(this, length);
	    while (length > index) {
	      result[index] = arguments[index++];
	    }return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
	    arrayToLocaleString.call(new Uint8Array(1));
	  });

	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */) {
	      // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) {
	      // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
	      // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this,
	          length = validate(that).length,
	          middle = Math.floor(length / 2),
	          index = 0,
	          value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      }return that;
	    },
	    some: function some(callbackfn /*, thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this),
	          length = O.length,
	          $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
	    }
	  };

	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1),
	        length = this.length,
	        src = toObject(arrayLike),
	        len = toLength(src.length),
	        index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) {
	      this[offset + index] = src[index++];
	    }
	  };

	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function isTAIndex(target, key) {
	    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
	    // TODO: add validation descriptor w/o calling accessors
	    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });

	  if (fails(function () {
	    arrayToString.call({});
	  })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function constructor() {/* noop */},
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function get() {
	      return this[TYPED_ARRAY];
	    }
	  });

	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
	        ISNT_UINT8 = NAME != 'Uint8Array',
	        GETTER = 'get' + KEY,
	        SETTER = 'set' + KEY,
	        TypedArray = global[NAME],
	        Base = TypedArray || {},
	        TAC = TypedArray && getPrototypeOf(TypedArray),
	        FORCED = !TypedArray || !$typed.ABV,
	        O = {},
	        TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function getter(that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function setter(that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function addElement(that, index) {
	      dP(that, index, {
	        get: function get() {
	          return getter(this, index);
	        },
	        set: function set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0,
	            offset = 0,
	            buffer,
	            byteLength,
	            length,
	            klass;
	        if (!isObject(data)) {
	          length = strictToLength(data, true);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) {
	          addElement(that, index++);
	        }
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!$iterDetect(function (iter) {
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR],
	        CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
	        $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function get() {
	          return NAME;
	        }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });

	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });

	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () {/* empty */};

/***/ },
/* 231 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.uint8-array.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/*!*****************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 233 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.int16-array.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 234 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.uint16-array.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 235 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.int32-array.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 236 */
/*!**********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.uint32-array.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 237 */
/*!***********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.float32-array.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 238 */
/*!***********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.typed.float64-array.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_typed-array */ 230)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 239 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.apply.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    rApply = (__webpack_require__(/*! ./_global */ 11).Reflect || {}).apply,
	    fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ 14)(function () {
	  rApply(function () {});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target),
	        L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 240 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.construct.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(/*! ./_export */ 15),
	    create = __webpack_require__(/*! ./_object-create */ 53),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    fails = __webpack_require__(/*! ./_fails */ 14),
	    bind = __webpack_require__(/*! ./_bind */ 84),
	    rConstruct = (__webpack_require__(/*! ./_global */ 11).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() {}
	  return !(rConstruct(function () {}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () {});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();
	        case 1:
	          return new Target(args[0]);
	        case 2:
	          return new Target(args[0], args[1]);
	        case 3:
	          return new Target(args[0], args[1], args[2]);
	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype,
	        instance = create(isObject(proto) ? proto : Object.prototype),
	        result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 241 */
/*!***************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.define-property.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(/*! ./_object-dp */ 18),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 14)(function () {
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 242 */
/*!***************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.delete-property.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    gOPD = __webpack_require__(/*! ./_object-gopd */ 58).f,
	    anObject = __webpack_require__(/*! ./_an-object */ 19);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 243 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.enumerate.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)

	var $export = __webpack_require__(/*! ./_export */ 15),
	    anObject = __webpack_require__(/*! ./_an-object */ 19);
	var Enumerate = function Enumerate(iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0; // next index
	  var keys = this._k = [] // keys
	  ,
	      key;
	  for (key in iterated) {
	    keys.push(key);
	  }
	};
	__webpack_require__(/*! ./_iter-create */ 137)(Enumerate, 'Object', function () {
	  var that = this,
	      keys = that._k,
	      key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 244 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.get.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(/*! ./_object-gopd */ 58),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    has = __webpack_require__(/*! ./_has */ 12),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    isObject = __webpack_require__(/*! ./_is-object */ 20),
	    anObject = __webpack_require__(/*! ./_an-object */ 19);

	function get(target, propertyKey /*, receiver*/) {
	  var receiver = arguments.length < 3 ? target : arguments[2],
	      desc,
	      proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', { get: get });

/***/ },
/* 245 */
/*!***************************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \***************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(/*! ./_object-gopd */ 58),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    anObject = __webpack_require__(/*! ./_an-object */ 19);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 246 */
/*!****************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    getProto = __webpack_require__(/*! ./_object-gpo */ 66),
	    anObject = __webpack_require__(/*! ./_an-object */ 19);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 247 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.has.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

/***/ },
/* 248 */
/*!*************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.is-extensible.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 249 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.own-keys.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ 250) });

/***/ },
/* 250 */
/*!*********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_own-keys.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(/*! ./_object-gopn */ 57),
	    gOPS = __webpack_require__(/*! ./_object-gops */ 50),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    Reflect = __webpack_require__(/*! ./_global */ 11).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it)),
	      getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 251 */
/*!******************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 252 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.set.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(/*! ./_object-dp */ 18),
	    gOPD = __webpack_require__(/*! ./_object-gopd */ 58),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    has = __webpack_require__(/*! ./_has */ 12),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    createDesc = __webpack_require__(/*! ./_property-desc */ 24),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    isObject = __webpack_require__(/*! ./_is-object */ 20);

	function set(target, propertyKey, V /*, receiver*/) {
	  var receiver = arguments.length < 4 ? target : arguments[3],
	      ownDesc = gOPD.f(anObject(target), propertyKey),
	      existingDescriptor,
	      proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', { set: set });

/***/ },
/* 253 */
/*!****************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(/*! ./_export */ 15),
	    setProto = __webpack_require__(/*! ./_set-proto */ 80);

	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 254 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.array.includes.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $includes = __webpack_require__(/*! ./_array-includes */ 43)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(/*! ./_add-to-unscopables */ 193)('includes');

/***/ },
/* 255 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.string.at.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $at = __webpack_require__(/*! ./_string-at */ 134)(true);

	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});

/***/ },
/* 256 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.string.pad-start.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $pad = __webpack_require__(/*! ./_string-pad */ 257);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 257 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_string-pad.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(/*! ./_to-length */ 44),
	    repeat = __webpack_require__(/*! ./_string-repeat */ 98),
	    defined = __webpack_require__(/*! ./_defined */ 42);

	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that)),
	      stringLength = S.length,
	      fillStr = fillString === undefined ? ' ' : String(fillString),
	      intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength,
	      stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 258 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.string.pad-end.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $pad = __webpack_require__(/*! ./_string-pad */ 257);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 259 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.string.trim-left.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim

	__webpack_require__(/*! ./_string-trim */ 90)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 260 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.string.trim-right.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim

	__webpack_require__(/*! ./_string-trim */ 90)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 261 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.string.match-all.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/

	var $export = __webpack_require__(/*! ./_export */ 15),
	    defined = __webpack_require__(/*! ./_defined */ 42),
	    toLength = __webpack_require__(/*! ./_to-length */ 44),
	    isRegExp = __webpack_require__(/*! ./_is-regexp */ 141),
	    getFlags = __webpack_require__(/*! ./_flags */ 203),
	    RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(/*! ./_iter-create */ 137)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this),
	        flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
	        rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 262 */
/*!*************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.symbol.async-iterator.js ***!
  \*************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_wks-define */ 34)('asyncIterator');

/***/ },
/* 263 */
/*!*********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.symbol.observable.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ./_wks-define */ 34)('observable');

/***/ },
/* 264 */
/*!***************************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \***************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(/*! ./_export */ 15),
	    ownKeys = __webpack_require__(/*! ./_own-keys */ 250),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    gOPD = __webpack_require__(/*! ./_object-gopd */ 58),
	    createProperty = __webpack_require__(/*! ./_create-property */ 170);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object),
	        getDesc = gOPD.f,
	        keys = ownKeys(O),
	        result = {},
	        i = 0,
	        key;
	    while (keys.length > i) {
	      createProperty(result, key = keys[i++], getDesc(O, key));
	    }return result;
	  }
	});

/***/ },
/* 265 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.object.values.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(/*! ./_export */ 15),
	    $values = __webpack_require__(/*! ./_object-to-array */ 266)(false);

	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

/***/ },
/* 266 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-to-array.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getKeys = __webpack_require__(/*! ./_object-keys */ 37),
	    toIObject = __webpack_require__(/*! ./_to-iobject */ 39),
	    isEnum = __webpack_require__(/*! ./_object-pie */ 51).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it),
	        keys = getKeys(O),
	        length = keys.length,
	        i = 0,
	        result = [],
	        key;
	    while (length > i) {
	      if (isEnum.call(O, key = keys[i++])) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }return result;
	  };
	};

/***/ },
/* 267 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.object.entries.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(/*! ./_export */ 15),
	    $entries = __webpack_require__(/*! ./_object-to-array */ 266)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

/***/ },
/* 268 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.object.define-getter.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    $defineProperty = __webpack_require__(/*! ./_object-dp */ 18);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(/*! ./_descriptors */ 13) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 269), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});

/***/ },
/* 269 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_object-forced-pam.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(/*! ./_library */ 35) || !__webpack_require__(/*! ./_fails */ 14)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function () {/* empty */});
	  delete __webpack_require__(/*! ./_global */ 11)[K];
	});

/***/ },
/* 270 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.object.define-setter.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    $defineProperty = __webpack_require__(/*! ./_object-dp */ 18);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(/*! ./_descriptors */ 13) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 269), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});

/***/ },
/* 271 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.object.lookup-getter.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 58).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(/*! ./_descriptors */ 13) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 269), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 272 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.object.lookup-setter.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    toObject = __webpack_require__(/*! ./_to-object */ 65),
	    toPrimitive = __webpack_require__(/*! ./_to-primitive */ 23),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 58).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(/*! ./_descriptors */ 13) && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ 269), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 273 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.map.to-json.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ 274)('Map') });

/***/ },
/* 274 */
/*!*******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_collection-to-json.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(/*! ./_classof */ 82),
	    from = __webpack_require__(/*! ./_array-from-iterable */ 275);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 275 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_array-from-iterable.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var forOf = __webpack_require__(/*! ./_for-of */ 213);

	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};

/***/ },
/* 276 */
/*!***************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.set.to-json.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ 274)('Set') });

/***/ },
/* 277 */
/*!*****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.system.global.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ 11) });

/***/ },
/* 278 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.error.is-error.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(/*! ./_export */ 15),
	    cof = __webpack_require__(/*! ./_cof */ 41);

	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 279 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.math.iaddh.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 280 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.math.isubh.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 281 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.math.imulh.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >> 16,
	        v1 = $v >> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 282 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.math.umulh.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(/*! ./_export */ 15);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >>> 16,
	        v1 = $v >>> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 283 */
/*!***************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.define-metadata.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	  } });

/***/ },
/* 284 */
/*!*********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_metadata.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Map = __webpack_require__(/*! ./es6.map */ 218),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    shared = __webpack_require__(/*! ./_shared */ 30)('metadata'),
	    store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ 222))());

	var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  }return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
	      keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) {
	    keys.push(key);
	  });
	  return keys;
	};
	var toMetaKey = function toMetaKey(it) {
	  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
	};
	var exp = function exp(O) {
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 285 */
/*!***************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.delete-metadata.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    toMetaKey = metadata.key,
	    getOrCreateMetadataMap = metadata.map,
	    store = metadata.store;

	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
	        metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	    if (metadataMap.size) return true;
	    var targetMetadata = store.get(target);
	    targetMetadata['delete'](targetKey);
	    return !!targetMetadata.size || store['delete'](target);
	  } });

/***/ },
/* 286 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.get-metadata.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    ordinaryHasOwnMetadata = metadata.has,
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;

	var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 287 */
/*!*****************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Set = __webpack_require__(/*! ./es6.set */ 221),
	    from = __webpack_require__(/*! ./_array-from-iterable */ 275),
	    metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;

	var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P),
	      parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
	    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ },
/* 288 */
/*!****************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;

	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 289 */
/*!*********************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;

	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
	    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ },
/* 290 */
/*!************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.has-metadata.js ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 66),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;

	var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 291 */
/*!****************************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;

	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 292 */
/*!********************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.reflect.metadata.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var metadata = __webpack_require__(/*! ./_metadata */ 284),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	    return function decorator(target, targetKey) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
	    };
	  } });

/***/ },
/* 293 */
/*!********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.asap.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(/*! ./_export */ 15),
	    microtask = __webpack_require__(/*! ./_microtask */ 216)(),
	    process = __webpack_require__(/*! ./_global */ 11).process,
	    isNode = __webpack_require__(/*! ./_cof */ 41)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 294 */
/*!**************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/es7.observable.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable

	var $export = __webpack_require__(/*! ./_export */ 15),
	    global = __webpack_require__(/*! ./_global */ 11),
	    core = __webpack_require__(/*! ./_core */ 16),
	    microtask = __webpack_require__(/*! ./_microtask */ 216)(),
	    OBSERVABLE = __webpack_require__(/*! ./_wks */ 32)('observable'),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28),
	    anObject = __webpack_require__(/*! ./_an-object */ 19),
	    anInstance = __webpack_require__(/*! ./_an-instance */ 212),
	    redefineAll = __webpack_require__(/*! ./_redefine-all */ 217),
	    hide = __webpack_require__(/*! ./_hide */ 17),
	    forOf = __webpack_require__(/*! ./_for-of */ 213),
	    RETURN = forOf.RETURN;

	var getMethod = function getMethod(fn) {
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function cleanupSubscription(subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function subscriptionClosed(subscription) {
	  return subscription._o === undefined;
	};

	var closeSubscription = function closeSubscription(subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function Subscription(observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer),
	        subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
	        subscription.unsubscribe();
	      };else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  }if (subscriptionClosed(this)) cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() {
	    closeSubscription(this);
	  }
	});

	var SubscriptionObserver = function SubscriptionObserver(subscription) {
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    }cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function next(value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
	      items[i] = arguments[i++];
	    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var i = 0; i < items.length; ++i) {
	            observer.next(items[i]);
	            if (done) return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function () {
	  return this;
	});

	$export($export.G, { Observable: $Observable });

	__webpack_require__(/*! ./_set-species */ 199)('Observable');

/***/ },
/* 295 */
/*!**********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/web.timers.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(/*! ./_global */ 11),
	    $export = __webpack_require__(/*! ./_export */ 15),
	    invoke = __webpack_require__(/*! ./_invoke */ 85),
	    partial = __webpack_require__(/*! ./_partial */ 296),
	    navigator = global.navigator,
	    MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function wrap(set) {
	  return MSIE ? function (fn, time /*, ...args */) {
	    return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 296 */
/*!********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_partial.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var path = __webpack_require__(/*! ./_path */ 297),
	    invoke = __webpack_require__(/*! ./_invoke */ 85),
	    aFunction = __webpack_require__(/*! ./_a-function */ 28);
	module.exports = function () /* ...pargs */{
	  var fn = aFunction(this),
	      length = arguments.length,
	      pargs = Array(length),
	      i = 0,
	      _ = path._,
	      holder = false;
	  while (length > i) {
	    if ((pargs[i] = arguments[i++]) === _) holder = true;
	  }return function () /* ...args */{
	    var that = this,
	        aLen = arguments.length,
	        j = 0,
	        k = 0,
	        args;
	    if (!holder && !aLen) return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if (holder) for (; length > j; j++) {
	      if (args[j] === _) args[j] = arguments[k++];
	    }while (aLen > k) {
	      args.push(arguments[k++]);
	    }return invoke(fn, args, that);
	  };
	};

/***/ },
/* 297 */
/*!*****************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_path.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(/*! ./_global */ 11);

/***/ },
/* 298 */
/*!*************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/web.immediate.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $export = __webpack_require__(/*! ./_export */ 15),
	    $task = __webpack_require__(/*! ./_task */ 215);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 299 */
/*!****************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/web.dom.iterable.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $iterators = __webpack_require__(/*! ./es6.array.iterator */ 200),
	    redefine = __webpack_require__(/*! ./_redefine */ 25),
	    global = __webpack_require__(/*! ./_global */ 11),
	    hide = __webpack_require__(/*! ./_hide */ 17),
	    Iterators = __webpack_require__(/*! ./_iterators */ 136),
	    wks = __webpack_require__(/*! ./_wks */ 32),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;

	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 300 */
/*!***********************************************************!*\
  !*** ./~/babel-polyfill/~/regenerator-runtime/runtime.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(/*! ./../../../webpack/buildin/module.js */ 301)(module), __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 302)))

/***/ },
/* 301 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 302 */
/*!**********************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/process/browser.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 303 */
/*!********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/fn/regexp/escape.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ../../modules/core.regexp.escape */ 304);
	module.exports = __webpack_require__(/*! ../../modules/_core */ 16).RegExp.escape;

/***/ },
/* 304 */
/*!******************************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/core.regexp.escape.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(/*! ./_export */ 15),
	    $re = __webpack_require__(/*! ./_replacer */ 305)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', { escape: function escape(it) {
	    return $re(it);
	  } });

/***/ },
/* 305 */
/*!*********************************************************!*\
  !*** ./~/babel-polyfill/~/core-js/modules/_replacer.js ***!
  \*********************************************************/
/***/ function(module, exports) {

	"use strict";

	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 306 */
/*!**********************************!*\
  !*** ./~/dom4/build/dom4.max.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	Copyright (C) 2013-2015 by Andrea Giammarchi - @WebReflection

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

	*/
	(function (window) {
	  'use strict';
	  /* jshint loopfunc: true, noempty: false*/
	  // http://www.w3.org/TR/dom/#element

	  function createDocumentFragment() {
	    return document.createDocumentFragment();
	  }

	  function createElement(nodeName) {
	    return document.createElement(nodeName);
	  }

	  function enoughArguments(length, name) {
	    if (!length) throw new Error('Failed to construct ' + name + ': 1 argument required, but only 0 present.');
	  }

	  function mutationMacro(nodes) {
	    if (nodes.length === 1) {
	      return textNodeIfString(nodes[0]);
	    }
	    for (var fragment = createDocumentFragment(), list = slice.call(nodes), i = 0; i < nodes.length; i++) {
	      fragment.appendChild(textNodeIfString(list[i]));
	    }
	    return fragment;
	  }

	  function textNodeIfString(node) {
	    return typeof node === 'string' ? document.createTextNode(node) : node;
	  }

	  for (var head, property, TemporaryPrototype, TemporaryTokenList, wrapVerifyToken, document = window.document, hOP = Object.prototype.hasOwnProperty, defineProperty = Object.defineProperty || function (object, property, descriptor) {
	    if (hOP.call(descriptor, 'value')) {
	      object[property] = descriptor.value;
	    } else {
	      if (hOP.call(descriptor, 'get')) object.__defineGetter__(property, descriptor.get);
	      if (hOP.call(descriptor, 'set')) object.__defineSetter__(property, descriptor.set);
	    }
	    return object;
	  }, indexOf = [].indexOf || function indexOf(value) {
	    var length = this.length;
	    while (length--) {
	      if (this[length] === value) {
	        break;
	      }
	    }
	    return length;
	  },
	  // http://www.w3.org/TR/domcore/#domtokenlist
	  verifyToken = function verifyToken(token) {
	    if (!token) {
	      throw 'SyntaxError';
	    } else if (spaces.test(token)) {
	      throw 'InvalidCharacterError';
	    }
	    return token;
	  }, DOMTokenList = function DOMTokenList(node) {
	    var noClassName = typeof node.className === 'undefined',
	        className = noClassName ? node.getAttribute('class') || '' : node.className,
	        isSVG = noClassName || (typeof className === 'undefined' ? 'undefined' : _typeof(className)) === 'object',
	        value = (isSVG ? noClassName ? className : className.baseVal : className).replace(trim, '');
	    if (value.length) {
	      properties.push.apply(this, value.split(spaces));
	    }
	    this._isSVG = isSVG;
	    this._ = node;
	  }, classListDescriptor = {
	    get: function get() {
	      return new DOMTokenList(this);
	    },
	    set: function set() {}
	  }, uid = 'dom4-tmp-'.concat(Math.random() * +new Date()).replace('.', '-'), trim = /^\s+|\s+$/g, spaces = /\s+/, SPACE = '\x20', CLASS_LIST = 'classList', toggle = function toggle(token, force) {
	    if (this.contains(token)) {
	      if (!force) {
	        // force is not true (either false or omitted)
	        this.remove(token);
	      }
	    } else if (force === undefined || force) {
	      force = true;
	      this.add(token);
	    }
	    return !!force;
	  }, DocumentFragmentPrototype = window.DocumentFragment && DocumentFragment.prototype, Node = window.Node, NodePrototype = (Node || Element).prototype, CharacterData = window.CharacterData || Node, CharacterDataPrototype = CharacterData && CharacterData.prototype, DocumentType = window.DocumentType, DocumentTypePrototype = DocumentType && DocumentType.prototype, ElementPrototype = (window.Element || Node || window.HTMLElement).prototype, HTMLSelectElement = window.HTMLSelectElement || createElement('select').constructor, selectRemove = HTMLSelectElement.prototype.remove, ShadowRoot = window.ShadowRoot, SVGElement = window.SVGElement,
	  // normalizes multiple ids as CSS query
	  idSpaceFinder = / /g, idSpaceReplacer = '\\ ', createQueryMethod = function createQueryMethod(methodName) {
	    var createArray = methodName === 'querySelectorAll';
	    return function (css) {
	      var a,
	          i,
	          id,
	          query,
	          nl,
	          selectors,
	          node = this.parentNode;
	      if (node) {
	        for (id = this.getAttribute('id') || uid, query = id === uid ? id : id.replace(idSpaceFinder, idSpaceReplacer), selectors = css.split(','), i = 0; i < selectors.length; i++) {
	          selectors[i] = '#' + query + ' ' + selectors[i];
	        }
	        css = selectors.join(',');
	      }
	      if (id === uid) this.setAttribute('id', id);
	      nl = (node || this)[methodName](css);
	      if (id === uid) this.removeAttribute('id');
	      // return a list
	      if (createArray) {
	        i = nl.length;
	        a = new Array(i);
	        while (i--) {
	          a[i] = nl[i];
	        }
	      }
	      // return node or null
	      else {
	          a = nl;
	        }
	      return a;
	    };
	  }, addQueryAndAll = function addQueryAndAll(where) {
	    if (!('query' in where)) {
	      where.query = ElementPrototype.query;
	    }
	    if (!('queryAll' in where)) {
	      where.queryAll = ElementPrototype.queryAll;
	    }
	  }, properties = ['matches', ElementPrototype.matchesSelector || ElementPrototype.webkitMatchesSelector || ElementPrototype.khtmlMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || function matches(selector) {
	    var parentNode = this.parentNode;
	    return !!parentNode && -1 < indexOf.call(parentNode.querySelectorAll(selector), this);
	  }, 'closest', function closest(selector) {
	    var parentNode = this,
	        matches;
	    while (
	    // document has no .matches
	    (matches = parentNode && parentNode.matches) && !parentNode.matches(selector)) {
	      parentNode = parentNode.parentNode;
	    }
	    return matches ? parentNode : null;
	  }, 'prepend', function prepend() {
	    var firstChild = this.firstChild,
	        node = mutationMacro(arguments);
	    if (firstChild) {
	      this.insertBefore(node, firstChild);
	    } else {
	      this.appendChild(node);
	    }
	  }, 'append', function append() {
	    this.appendChild(mutationMacro(arguments));
	  }, 'before', function before() {
	    var parentNode = this.parentNode;
	    if (parentNode) {
	      parentNode.insertBefore(mutationMacro(arguments), this);
	    }
	  }, 'after', function after() {
	    var parentNode = this.parentNode,
	        nextSibling = this.nextSibling,
	        node = mutationMacro(arguments);
	    if (parentNode) {
	      if (nextSibling) {
	        parentNode.insertBefore(node, nextSibling);
	      } else {
	        parentNode.appendChild(node);
	      }
	    }
	  },
	  // WARNING - DEPRECATED - use .replaceWith() instead
	  'replace', function replace() {
	    this.replaceWith.apply(this, arguments);
	  }, 'replaceWith', function replaceWith() {
	    var parentNode = this.parentNode;
	    if (parentNode) {
	      parentNode.replaceChild(mutationMacro(arguments), this);
	    }
	  }, 'remove', function remove() {
	    var parentNode = this.parentNode;
	    if (parentNode) {
	      parentNode.removeChild(this);
	    }
	  }, 'query', createQueryMethod('querySelector'), 'queryAll', createQueryMethod('querySelectorAll')], slice = properties.slice, i = properties.length; i; i -= 2) {
	    property = properties[i - 2];
	    if (!(property in ElementPrototype)) {
	      ElementPrototype[property] = properties[i - 1];
	    }
	    if (property === 'remove') {
	      // see https://github.com/WebReflection/dom4/issues/19
	      HTMLSelectElement.prototype[property] = function () {
	        return 0 < arguments.length ? selectRemove.apply(this, arguments) : ElementPrototype.remove.call(this);
	      };
	    }
	    // see https://github.com/WebReflection/dom4/issues/18
	    if (/^(?:before|after|replace|replaceWith|remove)$/.test(property)) {
	      if (CharacterData && !(property in CharacterDataPrototype)) {
	        CharacterDataPrototype[property] = properties[i - 1];
	      }
	      if (DocumentType && !(property in DocumentTypePrototype)) {
	        DocumentTypePrototype[property] = properties[i - 1];
	      }
	    }
	    // see https://github.com/WebReflection/dom4/pull/26
	    if (/^(?:append|prepend)$/.test(property)) {
	      if (DocumentFragmentPrototype) {
	        if (!(property in DocumentFragmentPrototype)) {
	          DocumentFragmentPrototype[property] = properties[i - 1];
	        }
	      } else {
	        try {
	          createDocumentFragment().constructor.prototype[property] = properties[i - 1];
	        } catch (o_O) {}
	      }
	    }
	  }

	  // bring query and queryAll to the document too
	  addQueryAndAll(document);

	  // brings query and queryAll to fragments as well
	  if (DocumentFragmentPrototype) {
	    addQueryAndAll(DocumentFragmentPrototype);
	  } else {
	    try {
	      addQueryAndAll(createDocumentFragment().constructor.prototype);
	    } catch (o_O) {}
	  }

	  // bring query and queryAll to the ShadowRoot too
	  if (ShadowRoot) {
	    addQueryAndAll(ShadowRoot.prototype);
	  }

	  // most likely an IE9 only issue
	  // see https://github.com/WebReflection/dom4/issues/6
	  if (!createElement('a').matches('a')) {
	    ElementPrototype[property] = function (matches) {
	      return function (selector) {
	        return matches.call(this.parentNode ? this : createDocumentFragment().appendChild(this), selector);
	      };
	    }(ElementPrototype[property]);
	  }

	  // used to fix both old webkit and SVG
	  DOMTokenList.prototype = {
	    length: 0,
	    add: function add() {
	      for (var j = 0, token; j < arguments.length; j++) {
	        token = arguments[j];
	        if (!this.contains(token)) {
	          properties.push.call(this, property);
	        }
	      }
	      if (this._isSVG) {
	        this._.setAttribute('class', '' + this);
	      } else {
	        this._.className = '' + this;
	      }
	    },
	    contains: function (indexOf) {
	      return function contains(token) {
	        i = indexOf.call(this, property = verifyToken(token));
	        return -1 < i;
	      };
	    }([].indexOf || function (token) {
	      i = this.length;
	      while (i-- && this[i] !== token) {}
	      return i;
	    }),
	    item: function item(i) {
	      return this[i] || null;
	    },
	    remove: function remove() {
	      for (var j = 0, token; j < arguments.length; j++) {
	        token = arguments[j];
	        if (this.contains(token)) {
	          properties.splice.call(this, i, 1);
	        }
	      }
	      if (this._isSVG) {
	        this._.setAttribute('class', '' + this);
	      } else {
	        this._.className = '' + this;
	      }
	    },
	    toggle: toggle,
	    toString: function toString() {
	      return properties.join.call(this, SPACE);
	    }
	  };

	  if (SVGElement && !(CLASS_LIST in SVGElement.prototype)) {
	    defineProperty(SVGElement.prototype, CLASS_LIST, classListDescriptor);
	  }

	  // http://www.w3.org/TR/dom/#domtokenlist
	  // iOS 5.1 has completely screwed this property
	  // classList in ElementPrototype is false
	  // but it's actually there as getter
	  if (!(CLASS_LIST in document.documentElement)) {
	    defineProperty(ElementPrototype, CLASS_LIST, classListDescriptor);
	  } else {
	    // iOS 5.1 and Nokia ASHA do not support multiple add or remove
	    // trying to detect and fix that in here
	    TemporaryTokenList = createElement('div')[CLASS_LIST];
	    TemporaryTokenList.add('a', 'b', 'a');
	    if ('a\x20b' != TemporaryTokenList) {
	      // no other way to reach original methods in iOS 5.1
	      TemporaryPrototype = TemporaryTokenList.constructor.prototype;
	      if (!('add' in TemporaryPrototype)) {
	        // ASHA double fails in here
	        TemporaryPrototype = window.TemporaryTokenList.prototype;
	      }
	      wrapVerifyToken = function wrapVerifyToken(original) {
	        return function () {
	          var i = 0;
	          while (i < arguments.length) {
	            original.call(this, arguments[i++]);
	          }
	        };
	      };
	      TemporaryPrototype.add = wrapVerifyToken(TemporaryPrototype.add);
	      TemporaryPrototype.remove = wrapVerifyToken(TemporaryPrototype.remove);
	      // toggle is broken too ^_^ ... let's fix it
	      TemporaryPrototype.toggle = toggle;
	    }
	  }

	  if (!('contains' in NodePrototype)) {
	    defineProperty(NodePrototype, 'contains', {
	      value: function value(el) {
	        while (el && el !== this) {
	          el = el.parentNode;
	        }return this === el;
	      }
	    });
	  }

	  if (!('head' in document)) {
	    defineProperty(document, 'head', {
	      get: function get() {
	        return head || (head = document.getElementsByTagName('head')[0]);
	      }
	    });
	  }

	  // requestAnimationFrame partial polyfill
	  (function () {
	    for (var raf, rAF = window.requestAnimationFrame, cAF = window.cancelAnimationFrame, prefixes = ['o', 'ms', 'moz', 'webkit'], i = prefixes.length; !cAF && i--;) {
	      rAF = rAF || window[prefixes[i] + 'RequestAnimationFrame'];
	      cAF = window[prefixes[i] + 'CancelAnimationFrame'] || window[prefixes[i] + 'CancelRequestAnimationFrame'];
	    }
	    if (!cAF) {
	      // some FF apparently implemented rAF but no cAF 
	      if (rAF) {
	        raf = rAF;
	        rAF = function rAF(callback) {
	          var goOn = true;
	          raf(function () {
	            if (goOn) callback.apply(this, arguments);
	          });
	          return function () {
	            goOn = false;
	          };
	        };
	        cAF = function cAF(id) {
	          id();
	        };
	      } else {
	        rAF = function rAF(callback) {
	          return setTimeout(callback, 15, 15);
	        };
	        cAF = function cAF(id) {
	          clearTimeout(id);
	        };
	      }
	    }
	    window.requestAnimationFrame = rAF;
	    window.cancelAnimationFrame = cAF;
	  })();

	  // http://www.w3.org/TR/dom/#customevent
	  try {
	    new window.CustomEvent('?');
	  } catch (o_O) {
	    window.CustomEvent = function (eventName, defaultInitDict) {

	      // the infamous substitute
	      function CustomEvent(type, eventInitDict) {
	        /*jshint eqnull:true */
	        var event = document.createEvent(eventName);
	        if (typeof type != 'string') {
	          throw new Error('An event name must be provided');
	        }
	        if (eventName == 'Event') {
	          event.initCustomEvent = initCustomEvent;
	        }
	        if (eventInitDict == null) {
	          eventInitDict = defaultInitDict;
	        }
	        event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
	        return event;
	      }

	      // attached at runtime
	      function initCustomEvent(type, bubbles, cancelable, detail) {
	        /*jshint validthis:true*/
	        this.initEvent(type, bubbles, cancelable);
	        this.detail = detail;
	      }

	      // that's it
	      return CustomEvent;
	    }(
	    // is this IE9 or IE10 ?
	    // where CustomEvent is there
	    // but not usable as construtor ?
	    window.CustomEvent ?
	    // use the CustomEvent interface in such case
	    'CustomEvent' : 'Event',
	    // otherwise the common compatible one
	    {
	      bubbles: false,
	      cancelable: false,
	      detail: null
	    });
	  }

	  // window.Event as constructor
	  try {
	    new Event('_');
	  } catch (o_O) {
	    /* jshint -W022 */
	    o_O = function ($Event) {
	      function Event(type, init) {
	        enoughArguments(arguments.length, 'Event');
	        var out = document.createEvent('Event');
	        if (!init) init = {};
	        out.initEvent(type, !!init.bubbles, !!init.cancelable);
	        return out;
	      }
	      Event.prototype = $Event.prototype;
	      return Event;
	    }(window.Event || function Event() {});
	    defineProperty(window, 'Event', { value: o_O });
	    // Android 4 gotcha
	    if (Event !== o_O) Event = o_O;
	  }

	  // window.KeyboardEvent as constructor
	  try {
	    new KeyboardEvent('_', {});
	  } catch (o_O) {
	    /* jshint -W022 */
	    o_O = function ($KeyboardEvent) {
	      // code inspired by https://gist.github.com/termi/4654819
	      var initType = 0,
	          defaults = {
	        char: '',
	        key: '',
	        location: 0,
	        ctrlKey: false,
	        shiftKey: false,
	        altKey: false,
	        metaKey: false,
	        altGraphKey: false,
	        repeat: false,
	        locale: navigator.language,
	        detail: 0,
	        bubbles: false,
	        cancelable: false,
	        keyCode: 0,
	        charCode: 0,
	        which: 0
	      },
	          eventType;
	      try {
	        var e = document.createEvent('KeyboardEvent');
	        e.initKeyboardEvent('keyup', false, false, window, '+', 3, true, false, true, false, false);
	        initType = (e.keyIdentifier || e.key) == '+' && (e.keyLocation || e.location) == 3 && (e.ctrlKey ? e.altKey ? 1 : 3 : e.shiftKey ? 2 : 4) || 9;
	      } catch (o_O) {}
	      eventType = 0 < initType ? 'KeyboardEvent' : 'Event';

	      function getModifier(init) {
	        for (var out = [], keys = ['ctrlKey', 'Control', 'shiftKey', 'Shift', 'altKey', 'Alt', 'metaKey', 'Meta', 'altGraphKey', 'AltGraph'], i = 0; i < keys.length; i += 2) {
	          if (init[keys[i]]) out.push(keys[i + 1]);
	        }
	        return out.join(' ');
	      }

	      function withDefaults(target, source) {
	        for (var key in source) {
	          if (source.hasOwnProperty(key) && !source.hasOwnProperty.call(target, key)) target[key] = source[key];
	        }
	        return target;
	      }

	      function withInitValues(key, out, init) {
	        try {
	          out[key] = init[key];
	        } catch (o_O) {}
	      }

	      function KeyboardEvent(type, init) {
	        enoughArguments(arguments.length, 'KeyboardEvent');
	        init = withDefaults(init || {}, defaults);
	        var out = document.createEvent(eventType),
	            ctrlKey = init.ctrlKey,
	            shiftKey = init.shiftKey,
	            altKey = init.altKey,
	            metaKey = init.metaKey,
	            altGraphKey = init.altGraphKey,
	            modifiers = initType > 3 ? getModifier(init) : null,
	            key = String(init.key),
	            chr = String(init.char),
	            location = init.location,
	            keyCode = init.keyCode || (init.keyCode = key) && key.charCodeAt(0) || 0,
	            charCode = init.charCode || (init.charCode = chr) && chr.charCodeAt(0) || 0,
	            bubbles = init.bubbles,
	            cancelable = init.cancelable,
	            repeat = init.repeat,
	            locale = init.locale,
	            view = init.view || window,
	            args;
	        if (!init.which) init.which = init.keyCode;
	        if ('initKeyEvent' in out) {
	          out.initKeyEvent(type, bubbles, cancelable, view, ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
	        } else if (0 < initType && 'initKeyboardEvent' in out) {
	          args = [type, bubbles, cancelable, view];
	          switch (initType) {
	            case 1:
	              args.push(key, location, ctrlKey, shiftKey, altKey, metaKey, altGraphKey);
	              break;
	            case 2:
	              args.push(ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
	              break;
	            case 3:
	              args.push(key, location, ctrlKey, altKey, shiftKey, metaKey, altGraphKey);
	              break;
	            case 4:
	              args.push(key, location, modifiers, repeat, locale);
	              break;
	            default:
	              args.push(char, key, location, modifiers, repeat, locale);
	          }
	          out.initKeyboardEvent.apply(out, args);
	        } else {
	          out.initEvent(type, bubbles, cancelable);
	        }
	        for (key in out) {
	          if (defaults.hasOwnProperty(key) && out[key] !== init[key]) {
	            withInitValues(key, out, init);
	          }
	        }
	        return out;
	      }
	      KeyboardEvent.prototype = $KeyboardEvent.prototype;
	      return KeyboardEvent;
	    }(window.KeyboardEvent || function KeyboardEvent() {});
	    defineProperty(window, 'KeyboardEvent', { value: o_O });
	    // Android 4 gotcha
	    if (KeyboardEvent !== o_O) KeyboardEvent = o_O;
	  }

	  // window.MouseEvent as constructor
	  try {
	    new MouseEvent('_', {});
	  } catch (o_O) {
	    /* jshint -W022 */
	    o_O = function ($MouseEvent) {
	      function MouseEvent(type, init) {
	        enoughArguments(arguments.length, 'MouseEvent');
	        var out = document.createEvent('MouseEvent');
	        if (!init) init = {};
	        out.initMouseEvent(type, !!init.bubbles, !!init.cancelable, init.view || window, init.detail || 1, init.screenX || 0, init.screenY || 0, init.clientX || 0, init.clientY || 0, !!init.ctrlKey, !!init.altKey, !!init.shiftKey, !!init.metaKey, init.button || 0, init.relatedTarget || null);
	        return out;
	      }
	      MouseEvent.prototype = $MouseEvent.prototype;
	      return MouseEvent;
	    }(window.MouseEvent || function MouseEvent() {});
	    defineProperty(window, 'MouseEvent', { value: o_O });
	    // Android 4 gotcha
	    if (MouseEvent !== o_O) MouseEvent = o_O;
	  }
	})(window);(function (global) {
	  'use strict';

	  // a WeakMap fallback for DOM nodes only used as key

	  var DOMMap = global.WeakMap || function () {

	    var counter = 0,
	        dispatched = false,
	        drop = false,
	        value;

	    function dispatch(key, ce, shouldDrop) {
	      drop = shouldDrop;
	      dispatched = false;
	      value = undefined;
	      key.dispatchEvent(ce);
	    }

	    function Handler(value) {
	      this.value = value;
	    }

	    Handler.prototype.handleEvent = function handleEvent(e) {
	      dispatched = true;
	      if (drop) {
	        e.currentTarget.removeEventListener(e.type, this, false);
	      } else {
	        value = this.value;
	      }
	    };

	    function DOMMap() {
	      counter++; // make id clashing highly improbable
	      this.__ce__ = new Event('@DOMMap:' + counter + Math.random());
	    }

	    DOMMap.prototype = {
	      'constructor': DOMMap,
	      'delete': function del(key) {
	        return dispatch(key, this.__ce__, true), dispatched;
	      },
	      'get': function get(key) {
	        dispatch(key, this.__ce__, false);
	        var v = value;
	        value = undefined;
	        return v;
	      },
	      'has': function has(key) {
	        return dispatch(key, this.__ce__, false), dispatched;
	      },
	      'set': function set(key, value) {
	        dispatch(key, this.__ce__, true);
	        key.addEventListener(this.__ce__.type, new Handler(value), false);
	        return this;
	      }
	    };

	    return DOMMap;
	  }();

	  function Dict() {}
	  Dict.prototype = (Object.create || Object)(null);

	  // https://dom.spec.whatwg.org/#interface-eventtarget

	  function createEventListener(type, callback, options) {
	    function eventListener(e) {
	      if (eventListener.once) {
	        e.currentTarget.removeEventListener(e.type, callback, eventListener);
	        eventListener.removed = true;
	      }
	      if (eventListener.passive) {
	        e.preventDefault = createEventListener.preventDefault;
	      }
	      if (typeof eventListener.callback === 'function') {
	        /* jshint validthis: true */
	        eventListener.callback.call(this, e);
	      } else if (eventListener.callback) {
	        eventListener.callback.handleEvent(e);
	      }
	      if (eventListener.passive) {
	        delete e.preventDefault;
	      }
	    }
	    eventListener.type = type;
	    eventListener.callback = callback;
	    eventListener.capture = !!options.capture;
	    eventListener.passive = !!options.passive;
	    eventListener.once = !!options.once;
	    // currently pointless but specs say to use it, so ...
	    eventListener.removed = false;
	    return eventListener;
	  }

	  createEventListener.preventDefault = function preventDefault() {};

	  var Event = global.CustomEvent,
	      hOP = Object.prototype.hasOwnProperty,
	      dE = global.dispatchEvent,
	      aEL = global.addEventListener,
	      rEL = global.removeEventListener,
	      counter = 0,
	      increment = function increment() {
	    counter++;
	  },
	      indexOf = [].indexOf || function indexOf(value) {
	    var length = this.length;
	    while (length--) {
	      if (this[length] === value) {
	        break;
	      }
	    }
	    return length;
	  },
	      getListenerKey = function getListenerKey(options) {
	    return ''.concat(options.capture ? '1' : '0', options.passive ? '1' : '0', options.once ? '1' : '0');
	  },
	      augment,
	      proto;

	  try {
	    aEL('_', increment, { once: true });
	    dE(new Event('_'));
	    dE(new Event('_'));
	    rEL('_', increment, { once: true });
	  } catch (o_O) {}

	  if (counter !== 1) {
	    (function () {
	      var dm = new DOMMap();
	      function createAEL(aEL) {
	        return function addEventListener(type, handler, options) {
	          if (options && typeof options !== 'boolean') {
	            var info = dm.get(this),
	                key = getListenerKey(options),
	                i,
	                tmp,
	                wrap;
	            if (!info) dm.set(this, info = new Dict());
	            if (!(type in info)) info[type] = {
	              handler: [],
	              wrap: []
	            };
	            tmp = info[type];
	            i = indexOf.call(tmp.handler, handler);
	            if (i < 0) {
	              i = tmp.handler.push(handler) - 1;
	              tmp.wrap[i] = wrap = new Dict();
	            } else {
	              wrap = tmp.wrap[i];
	            }
	            if (!(key in wrap)) {
	              wrap[key] = createEventListener(type, handler, options);
	              aEL.call(this, type, wrap[key], wrap[key].capture);
	            }
	          } else {
	            aEL.call(this, type, handler, options);
	          }
	        };
	      }
	      function createREL(rEL) {
	        return function removeEventListener(type, handler, options) {
	          if (options && typeof options !== 'boolean') {
	            var info = dm.get(this),
	                key,
	                i,
	                tmp,
	                wrap;
	            if (info && type in info) {
	              tmp = info[type];
	              i = indexOf.call(tmp.handler, handler);
	              if (-1 < i) {
	                key = getListenerKey(options);
	                wrap = tmp.wrap[i];
	                if (key in wrap) {
	                  rEL.call(this, type, wrap[key], wrap[key].capture);
	                  delete wrap[key];
	                  // return if there are other wraps
	                  for (key in wrap) {
	                    return;
	                  } // otherwise remove all the things
	                  tmp.handler.splice(i, 1);
	                  tmp.wrap.splice(i, 1);
	                  // if there are no other handlers
	                  if (tmp.handler.length === 0)
	                    // drop the info[type] entirely
	                    delete info[type];
	                }
	              }
	            }
	          } else {
	            rEL.call(this, type, handler, options);
	          }
	        };
	      }

	      augment = function augment(Constructor) {
	        if (!Constructor) return;
	        var proto = Constructor.prototype;
	        proto.addEventListener = createAEL(proto.addEventListener);
	        proto.removeEventListener = createREL(proto.removeEventListener);
	      };

	      if (global.EventTarget) {
	        augment(EventTarget);
	      } else {
	        augment(global.Text);
	        augment(global.Element || global.HTMLElement);
	        augment(global.HTMLDocument);
	        augment(global.Window || { prototype: global });
	        augment(global.XMLHttpRequest);
	      }
	    })();
	  }
	})(self);

/***/ },
/* 307 */
/*!*************************!*\
  !*** ./shim/shim.id.js ***!
  \*************************/
/***/ function(module, exports) {

	'use strict';

	/**
	 * Element.prototype.id implementation
	 *
	 * @polyfill
	 */
	var _window = window;
	var Element = _window.Element;
	var document = _window.document;


	if (!Element.prototype.hasOwnProperty('id')) {
	    Object.defineProperty(Element.prototype, 'id', {
	        set: function set(id) {
	            this.setAttribute('id', id);
	        },
	        get: function get() {
	            return this.getAttribute('id');
	        }
	    });
	    document.getElementById = function (id) {
	        return document.querySelector('[id=' + id + ']');
	    };
	}

/***/ },
/* 308 */
/*!********************************!*\
  !*** ./shim/shim.classname.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';

	/**
	 * Element.prototype.className implementation
	 *
	 * @polyfill
	 */
	var _window = window;
	var Element = _window.Element;
	var document = _window.document;


	if (!Element.prototype.hasOwnProperty('className')) {
	    Object.defineProperty(Element.prototype, 'className', {
	        enumerable: true,
	        set: function set(className) {
	            this.setAttribute('class', className);
	        },
	        get: function get() {
	            return this.getAttribute('class');
	        }
	    });
	    document.getElementsByClassName = function (className) {
	        return document.querySelectorAll('[class~=' + className + ']');
	    };
	}

/***/ },
/* 309 */
/*!********************************!*\
  !*** ./shim/shim.classlist.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';

	/**
	 * https://github.com/remy/polyfills/blob/master/classList.js
	 * copy-paste + fixes
	 */
	(function () {

	    if (window.Element.prototype.hasOwnProperty('classList')) return;

	    var prototype = Array.prototype,
	        push = prototype.push,
	        splice = prototype.splice,
	        join = prototype.join;

	    function DOMTokenList(el) {
	        this.el = el;
	        // The className needs to be trimmed and split on whitespace
	        // to retrieve a list of classes.
	        var classes = el.className.replace(/^\s+|\s+$/g, '').split(/\s+/);
	        for (var i = 0; i < classes.length; i++) {
	            push.call(this, classes[i]);
	        }
	    };

	    DOMTokenList.prototype = {
	        add: function add(token) {
	            if (this.contains(token)) return;
	            push.call(this, token);
	            this.el.className = this.toString();
	        },
	        contains: function contains(token) {
	            return this.el.className.indexOf(token) != -1;
	        },
	        item: function item(index) {
	            return this[index] || null;
	        },
	        remove: function remove(token) {
	            if (!this.contains(token)) return;
	            for (var i = 0; i < this.length; i++) {
	                if (this[i] == token) break;
	            }
	            splice.call(this, i, 1);
	            this.el.className = this.toString();
	        },
	        toString: function toString() {
	            return join.call(this, ' ');
	        },
	        toggle: function toggle(token) {
	            if (!this.contains(token)) {
	                this.add(token);
	            } else {
	                this.remove(token);
	            }

	            return this.contains(token);
	        }
	    };

	    window.DOMTokenList = DOMTokenList;

	    function defineElementGetter(obj, prop, getter) {
	        if (Object.defineProperty) {
	            Object.defineProperty(obj, prop, {
	                get: getter
	            });
	        } else {
	            obj.__defineGetter__(prop, getter);
	        }
	    }

	    defineElementGetter(Element.prototype, 'classList', function () {
	        return new DOMTokenList(this);
	    });
	})();

/***/ },
/* 310 */
/*!*****************************!*\
  !*** ./shim/shim.hidden.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';

	/**
	 * HTMLElement.prototype.hidden implementation
	 *
	 * @polyfill
	 */
	var _window = window;
	var HTMLElement = _window.HTMLElement;
	var document = _window.document;


	if (!HTMLElement.prototype.hasOwnProperty('hidden')) {
	    Object.defineProperty(HTMLElement.prototype, 'hidden', {
	        set: function set(hidden) {
	            hidden ? this.setAttribute('hidden', '') : this.removeAttribute('hidden');
	        },
	        get: function get() {
	            return this.hasAttribute('hidden');
	        }
	    });
	    var root = document.head || document.body;
	    var displaynone = style('[hidden]{display:none}');
	    if (root) root.appendChild(displaynone);
	}

	function style(textContent) {
	    var style = document.createElement('style');
	    style.textContent = textContent;
	    return style;
	}

/***/ },
/* 311 */
/*!****************************!*\
  !*** ./shim/shim.click.js ***!
  \****************************/
/***/ function(module, exports) {

	'use strict';

	/**
	 * Element.prototype.onclick invoke on Element.prototype.click call
	 * Event system normalization for MSIE 11
	 *
	 * @polyfill
	 */
	var span = document.createElement('span');
	if ('click' in span && 'onclick' in span) {
	    var called = null;
	    span.onclick = function (event) {
	        return called = event;
	    };
	    span.click();
	    if (!called) {
	        (function () {
	            var proto = HTMLElement.prototype;
	            var _click = proto.click;
	            proto.click = function () {
	                _click.call(this);
	                if ('onclick' in this && typeof this.onclick === 'function') {
	                    var event = document.createEvent('Event');
	                    event.initEvent('click', true, true);
	                    this.onclick(event);
	                }
	            };
	        })();
	    }
	}

/***/ },
/* 312 */
/*!***************************!*\
  !*** ./shim/shim.head.js ***!
  \***************************/
/***/ function(module, exports) {

	'use strict';

	/**
	 * Document.prototype.head getter implementation
	 *
	 * @get {HTMLHeadElement} head
	 * @polyfill
	 */
	var _window = window;
	var prototype = _window.HTMLDocument.prototype;


	if (!('head' in prototype)) {
	    Object.defineProperty(prototype, 'head', {
	        get: function get() {
	            return document.getElementsByTagName('head')[0];
	        }
	    });
	}

/***/ },
/* 313 */
/*!**********************************!*\
  !*** ./lib/window.htmlmodule.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(/*! ../shim */ 7);

	var _index = __webpack_require__(/*! ./index */ 1);

	var htmlmodule = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	window.htmlmodule = htmlmodule;

/***/ }
/******/ ]);