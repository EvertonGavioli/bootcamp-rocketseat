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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//#region Exercício 1\nconsole.log(\"Exercício 1 ---------------------------------\"); //1. - Classes\n\nvar Usuario =\n/*#__PURE__*/\nfunction () {\n  function Usuario(email, senha) {\n    _classCallCheck(this, Usuario);\n\n    this.email = email;\n    this.senha = senha;\n    this.admin = false;\n  }\n\n  _createClass(Usuario, [{\n    key: \"setAdmin\",\n    value: function setAdmin() {\n      this.admin = true;\n    }\n  }, {\n    key: \"isAdmin\",\n    value: function isAdmin() {\n      return this.admin ? true : false;\n    }\n  }]);\n\n  return Usuario;\n}();\n\nvar Admin =\n/*#__PURE__*/\nfunction (_Usuario) {\n  _inherits(Admin, _Usuario);\n\n  function Admin(email, senha) {\n    var _this;\n\n    _classCallCheck(this, Admin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));\n\n    _this.setAdmin();\n\n    return _this;\n  }\n\n  return Admin;\n}(Usuario);\n\nvar User1 = new Usuario(\"email@teste.com\", \"senha123\");\nvar Adm1 = new Admin(\"email@teste.com\", \"senha123\");\nconsole.log(User1.isAdmin());\nconsole.log(Adm1.isAdmin()); //#endregion\n//#region Exercício 2\n\nconsole.log(\"Exercício 2 ---------------------------------\");\nvar usuarios = [{\n  nome: \"Diego\",\n  idade: 23,\n  empresa: \"Rocketseat\"\n}, {\n  nome: \"Gabriel\",\n  idade: 15,\n  empresa: \"Rocketseat\"\n}, {\n  nome: \"Lucas\",\n  idade: 30,\n  empresa: \"Facebook\"\n}]; //2.1 - map\n\nvar idades = usuarios.map(function (users) {\n  return users.idade;\n});\nconsole.log(idades); //2.2 - filter\n\nvar filter = usuarios.filter(function (users) {\n  return users.empresa === \"Rocketseat\" && users.idade > 18;\n});\nconsole.log(filter); //2.3 - find\n\nvar find = usuarios.find(function (users) {\n  return users.empresa === \"Google\";\n});\nconsole.log(find); //2.4 - map.filter\n\nvar aux1 = usuarios.map(function (users) {\n  users.idade *= 2;\n  return users;\n}).filter(function (users) {\n  return users.idade < 50;\n});\nconsole.log(aux1); //#endregion\n//#region Exercício 3\n\nconsole.log(\"Exercício 3 ---------------------------------\"); //3.1 - arrow functions\n\nvar arr = [1, 2, 3, 4, 5];\nvar newArr = arr.map(function (iten) {\n  return iten + 10;\n});\nconsole.log(newArr); //3.2 - arrow functions\n\nvar usuario = {\n  nome: \"Diego\",\n  idade: 23\n};\n\nvar mostraIdade = function mostraIdade(user) {\n  return user.idade;\n};\n\nconsole.log(mostraIdade(usuario)); //3.3 - arrow functions\n\nvar nome = \"Diego\";\nvar idade = 23;\n\nvar mostraUsuario = function mostraUsuario(nome, idade) {\n  return {\n    nome: nome,\n    idade: idade\n  };\n};\n\nconsole.log(mostraUsuario(nome, idade));\nconsole.log(mostraUsuario(nome)); //3.4 - arrow functions\n\nvar promise = function promise() {\n  return new Promise(function (resolve, reject) {\n    return resolve(\"Sucess!!!\");\n  });\n};\n\npromise().then(function (resolve) {//console.log(resolve);\n}); //#endregion\n//#region Exercício 4\n\nconsole.log(\"Exercício 4 ---------------------------------\"); //4.1 - Desestruturação Simples\n\nvar empresa = {\n  nome: \"Rocketseat\",\n  endereco: {\n    cidade: \"Rio do Sul\",\n    estado: \"SC\"\n  }\n};\nvar nomeEmp = empresa.nome,\n    _empresa$endereco = empresa.endereco,\n    cidade = _empresa$endereco.cidade,\n    estado = _empresa$endereco.estado;\nconsole.log(nomeEmp);\nconsole.log(cidade);\nconsole.log(estado); //4.2 - Desetruturação parâmetros\n\nfunction mostraInfo() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usuario,\n      nome = _ref.nome,\n      idade = _ref.idade;\n\n  return \"\".concat(nome, \" tem \").concat(idade, \" anos.\");\n}\n\nconsole.log(mostraInfo({\n  nome: \"Diego\",\n  idade: 23\n})); //#endregion\n//#region Exercício 5\n\nconsole.log(\"Exercício 5 ---------------------------------\"); //5.1 - Rest\n\nvar arr2 = [1, 2, 3, 4, 5, 6];\nvar x = arr2[0],\n    y = arr2.slice(1);\nconsole.log(x);\nconsole.log(y);\n\nvar soma = function soma() {\n  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {\n    numbers[_key] = arguments[_key];\n  }\n\n  return numbers.reduce(function (a, b) {\n    return a + b;\n  });\n};\n\nconsole.log(soma(1, 2, 3, 4, 5, 6));\nconsole.log(soma(1, 2)); //5.2 - Spread\n\nvar usuarioSpread = {\n  nome: \"Diego\",\n  idade: 23,\n  endereco: {\n    cidade: \"Rio do Sul\",\n    uf: \"SC\",\n    pais: \"Brasil\"\n  }\n};\n\nvar usuario2 = _objectSpread({}, usuarioSpread, {\n  nome: \"Gabriel\"\n});\n\nconsole.log(usuario2);\n\nvar usuario3 = _objectSpread({}, usuarioSpread, {\n  endereco: _objectSpread({}, usuarioSpread.endereco, {\n    cidade: \"Lontras\"\n  })\n});\n\nconsole.log(usuario3); //#endregion\n//#region Exercício 6\n\nconsole.log(\"Exercício 6 ---------------------------------\"); //6.1 - Template Lierals\n\nvar usuarioTL = \"Diego\";\nvar idadeTL = 23;\nconsole.log(\"O usu\\xE1rio \".concat(usuarioTL, \" possui \").concat(idadeTL, \" anos\")); //#endregion\n//#region Exercício 7\n\nconsole.log(\"Exercício 7 ---------------------------------\"); //7.1 - Object Short Syntax\n\nvar nomeOSS = \"Diego\";\nvar idadeOSS = 23;\nvar usuarioOSS = {\n  nomeOSS: nomeOSS,\n  idadeOSS: idadeOSS,\n  cidadeOSS: \"Rio do Sul\"\n};\nconsole.log(usuarioOSS); //#endregion\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });