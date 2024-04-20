"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return(AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s));
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
var __accessCheck = function(obj, member, msg) {
    if (!member.has(obj)) throw TypeError("Cannot " + msg);
};
var __privateGet = function(obj, member, getter) {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = function(obj, member, value) {
    if (member.has(obj)) throw TypeError("Cannot add the same private member more than once");
    _instanceof(member, WeakSet) ? member.add(obj) : member.set(obj, value);
};
var __privateSet = function(obj, member, value, setter) {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
};
// node_modules/fast-glob/out/utils/array.js
var require_array = __commonJS({
    "node_modules/fast-glob/out/utils/array.js": function(exports) {
        "use strict";
        var flatten = function flatten(items) {
            return items.reduce(function(collection, item) {
                return [].concat(collection, item);
            }, []);
        };
        var splitWhen = function splitWhen(items, predicate) {
            var result = [
                []
            ];
            var groupIndex = 0;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var item = _step.value;
                    if (predicate(item)) {
                        groupIndex++;
                        result[groupIndex] = [];
                    } else {
                        result[groupIndex].push(item);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return result;
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.splitWhen = exports.flatten = void 0;
        exports.flatten = flatten;
        exports.splitWhen = splitWhen;
    }
});
// node_modules/fast-glob/out/utils/errno.js
var require_errno = __commonJS({
    "node_modules/fast-glob/out/utils/errno.js": function(exports) {
        "use strict";
        var isEnoentCodeError = function isEnoentCodeError(error) {
            return error.code === "ENOENT";
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.isEnoentCodeError = void 0;
        exports.isEnoentCodeError = isEnoentCodeError;
    }
});
// node_modules/fast-glob/out/utils/fs.js
var require_fs = __commonJS({
    "node_modules/fast-glob/out/utils/fs.js": function(exports) {
        "use strict";
        var createDirentFromStats = function createDirentFromStats(name, stats) {
            return new DirentFromStats(name, stats);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createDirentFromStats = void 0;
        var DirentFromStats = function DirentFromStats(name, stats) {
            _class_call_check(this, DirentFromStats);
            this.name = name;
            this.isBlockDevice = stats.isBlockDevice.bind(stats);
            this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
            this.isDirectory = stats.isDirectory.bind(stats);
            this.isFIFO = stats.isFIFO.bind(stats);
            this.isFile = stats.isFile.bind(stats);
            this.isSocket = stats.isSocket.bind(stats);
            this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
        };
        exports.createDirentFromStats = createDirentFromStats;
    }
});
// node_modules/fast-glob/out/utils/path.js
var require_path = __commonJS({
    "node_modules/fast-glob/out/utils/path.js": function(exports) {
        "use strict";
        var unixify = function unixify(filepath) {
            return filepath.replace(/\\/g, "/");
        };
        var makeAbsolute = function makeAbsolute(cwd, filepath) {
            return path4.resolve(cwd, filepath);
        };
        var removeLeadingDotSegment = function removeLeadingDotSegment(entry) {
            if (entry.charAt(0) === ".") {
                var secondCharactery = entry.charAt(1);
                if (secondCharactery === "/" || secondCharactery === "\\") {
                    return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
                }
            }
            return entry;
        };
        var escapeWindowsPath = function escapeWindowsPath(pattern) {
            return pattern.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
        };
        var escapePosixPath = function escapePosixPath(pattern) {
            return pattern.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
        };
        var convertWindowsPathToPattern = function convertWindowsPathToPattern(filepath) {
            return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
        };
        var convertPosixPathToPattern = function convertPosixPathToPattern(filepath) {
            return escapePosixPath(filepath);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.convertPosixPathToPattern = exports.convertWindowsPathToPattern = exports.convertPathToPattern = exports.escapePosixPath = exports.escapeWindowsPath = exports.escape = exports.removeLeadingDotSegment = exports.makeAbsolute = exports.unixify = void 0;
        var os = require("os");
        var path4 = require("path");
        var IS_WINDOWS_PLATFORM = os.platform() === "win32";
        var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
        var POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
        var WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()[\]{}]|^!|[!+@](?=\())/g;
        var DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
        var WINDOWS_BACKSLASHES_RE = /\\(?![!()+@[\]{}])/g;
        exports.unixify = unixify;
        exports.makeAbsolute = makeAbsolute;
        exports.removeLeadingDotSegment = removeLeadingDotSegment;
        exports.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
        exports.escapeWindowsPath = escapeWindowsPath;
        exports.escapePosixPath = escapePosixPath;
        exports.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
        exports.convertWindowsPathToPattern = convertWindowsPathToPattern;
        exports.convertPosixPathToPattern = convertPosixPathToPattern;
    }
});
// node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
    "node_modules/is-extglob/index.js": function(exports, module2) {
        "use strict";
        module2.exports = function isExtglob(str) {
            if (typeof str !== "string" || str === "") {
                return false;
            }
            var match;
            while(match = /(\\).|([@?!+*]\(.*\))/g.exec(str)){
                if (match[2]) return true;
                str = str.slice(match.index + match[0].length);
            }
            return false;
        };
    }
});
// node_modules/is-glob/index.js
var require_is_glob = __commonJS({
    "node_modules/is-glob/index.js": function(exports, module2) {
        "use strict";
        var isExtglob = require_is_extglob();
        var chars = {
            "{": "}",
            "(": ")",
            "[": "]"
        };
        var strictCheck = function strictCheck(str) {
            if (str[0] === "!") {
                return true;
            }
            var index = 0;
            var pipeIndex = -2;
            var closeSquareIndex = -2;
            var closeCurlyIndex = -2;
            var closeParenIndex = -2;
            var backSlashIndex = -2;
            while(index < str.length){
                if (str[index] === "*") {
                    return true;
                }
                if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
                    return true;
                }
                if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
                    if (closeSquareIndex < index) {
                        closeSquareIndex = str.indexOf("]", index);
                    }
                    if (closeSquareIndex > index) {
                        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
                            return true;
                        }
                        backSlashIndex = str.indexOf("\\", index);
                        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
                            return true;
                        }
                    }
                }
                if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
                    closeCurlyIndex = str.indexOf("}", index);
                    if (closeCurlyIndex > index) {
                        backSlashIndex = str.indexOf("\\", index);
                        if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
                            return true;
                        }
                    }
                }
                if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
                    closeParenIndex = str.indexOf(")", index);
                    if (closeParenIndex > index) {
                        backSlashIndex = str.indexOf("\\", index);
                        if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                            return true;
                        }
                    }
                }
                if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
                    if (pipeIndex < index) {
                        pipeIndex = str.indexOf("|", index);
                    }
                    if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
                        closeParenIndex = str.indexOf(")", pipeIndex);
                        if (closeParenIndex > pipeIndex) {
                            backSlashIndex = str.indexOf("\\", pipeIndex);
                            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                                return true;
                            }
                        }
                    }
                }
                if (str[index] === "\\") {
                    var open = str[index + 1];
                    index += 2;
                    var close = chars[open];
                    if (close) {
                        var n = str.indexOf(close, index);
                        if (n !== -1) {
                            index = n + 1;
                        }
                    }
                    if (str[index] === "!") {
                        return true;
                    }
                } else {
                    index++;
                }
            }
            return false;
        };
        var relaxedCheck = function relaxedCheck(str) {
            if (str[0] === "!") {
                return true;
            }
            var index = 0;
            while(index < str.length){
                if (/[*?{}()[\]]/.test(str[index])) {
                    return true;
                }
                if (str[index] === "\\") {
                    var open = str[index + 1];
                    index += 2;
                    var close = chars[open];
                    if (close) {
                        var n = str.indexOf(close, index);
                        if (n !== -1) {
                            index = n + 1;
                        }
                    }
                    if (str[index] === "!") {
                        return true;
                    }
                } else {
                    index++;
                }
            }
            return false;
        };
        module2.exports = function isGlob(str, options) {
            if (typeof str !== "string" || str === "") {
                return false;
            }
            if (isExtglob(str)) {
                return true;
            }
            var check = strictCheck;
            if (options && options.strict === false) {
                check = relaxedCheck;
            }
            return check(str);
        };
    }
});
// node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
    "node_modules/glob-parent/index.js": function(exports, module2) {
        "use strict";
        var isGlob = require_is_glob();
        var pathPosixDirname = require("path").posix.dirname;
        var isWin32 = require("os").platform() === "win32";
        var slash2 = "/";
        var backslash = /\\/g;
        var enclosure = /[\{\[].*[\}\]]$/;
        var globby2 = /(^|[^\\])([\{\[]|\([^\)]+$)/;
        var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
        module2.exports = function globParent(str, opts) {
            var options = Object.assign({
                flipBackslashes: true
            }, opts);
            if (options.flipBackslashes && isWin32 && str.indexOf(slash2) < 0) {
                str = str.replace(backslash, slash2);
            }
            if (enclosure.test(str)) {
                str += slash2;
            }
            str += "a";
            do {
                str = pathPosixDirname(str);
            }while (isGlob(str) || globby2.test(str));
            return str.replace(escaped, "$1");
        };
    }
});
// node_modules/braces/lib/utils.js
var require_utils = __commonJS({
    "node_modules/braces/lib/utils.js": function(exports) {
        "use strict";
        exports.isInteger = function(num) {
            if (typeof num === "number") {
                return Number.isInteger(num);
            }
            if (typeof num === "string" && num.trim() !== "") {
                return Number.isInteger(Number(num));
            }
            return false;
        };
        exports.find = function(node, type) {
            return node.nodes.find(function(node2) {
                return node2.type === type;
            });
        };
        exports.exceedsLimit = function(min, max) {
            var step = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, limit = arguments.length > 3 ? arguments[3] : void 0;
            if (limit === false) return false;
            if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
            return (Number(max) - Number(min)) / Number(step) >= limit;
        };
        exports.escapeNode = function(block) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, type = arguments.length > 2 ? arguments[2] : void 0;
            var node = block.nodes[n];
            if (!node) return;
            if (type && node.type === type || node.type === "open" || node.type === "close") {
                if (node.escaped !== true) {
                    node.value = "\\" + node.value;
                    node.escaped = true;
                }
            }
        };
        exports.encloseBrace = function(node) {
            if (node.type !== "brace") return false;
            if (node.commas >> 0 + node.ranges >> 0 === 0) {
                node.invalid = true;
                return true;
            }
            return false;
        };
        exports.isInvalidBrace = function(block) {
            if (block.type !== "brace") return false;
            if (block.invalid === true || block.dollar) return true;
            if (block.commas >> 0 + block.ranges >> 0 === 0) {
                block.invalid = true;
                return true;
            }
            if (block.open !== true || block.close !== true) {
                block.invalid = true;
                return true;
            }
            return false;
        };
        exports.isOpenOrClose = function(node) {
            if (node.type === "open" || node.type === "close") {
                return true;
            }
            return node.open === true || node.close === true;
        };
        exports.reduce = function(nodes) {
            return nodes.reduce(function(acc, node) {
                if (node.type === "text") acc.push(node.value);
                if (node.type === "range") node.type = "text";
                return acc;
            }, []);
        };
        exports.flatten = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var result = [];
            var flat = function(arr) {
                for(var i = 0; i < arr.length; i++){
                    var ele = arr[i];
                    Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
                }
                return result;
            };
            flat(args);
            return result;
        };
    }
});
// node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
    "node_modules/braces/lib/stringify.js": function(exports, module2) {
        "use strict";
        var utils = require_utils();
        module2.exports = function(ast) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var stringify = function(node) {
                var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
                var invalidNode = node.invalid === true && options.escapeInvalid === true;
                var output = "";
                if (node.value) {
                    if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
                        return "\\" + node.value;
                    }
                    return node.value;
                }
                if (node.value) {
                    return node.value;
                }
                if (node.nodes) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = node.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var child = _step.value;
                            output += stringify(child);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                return output;
            };
            return stringify(ast);
        };
    }
});
// node_modules/is-number/index.js
var require_is_number = __commonJS({
    "node_modules/is-number/index.js": function(exports, module2) {
        "use strict";
        module2.exports = function(num) {
            if (typeof num === "number") {
                return num - num === 0;
            }
            if (typeof num === "string" && num.trim() !== "") {
                return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
            }
            return false;
        };
    }
});
// node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
    "node_modules/to-regex-range/index.js": function(exports, module2) {
        "use strict";
        var collatePatterns = function collatePatterns(neg, pos, options) {
            var onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
            var onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
            var intersected = filterPatterns(neg, pos, "-?", true, options) || [];
            var subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
            return subpatterns.join("|");
        };
        var splitToRanges = function splitToRanges(min, max) {
            var nines = 1;
            var zeros = 1;
            var stop = countNines(min, nines);
            var stops = /* @__PURE__ */ new Set([
                max
            ]);
            while(min <= stop && stop <= max){
                stops.add(stop);
                nines += 1;
                stop = countNines(min, nines);
            }
            stop = countZeros(max + 1, zeros) - 1;
            while(min < stop && stop <= max){
                stops.add(stop);
                zeros += 1;
                stop = countZeros(max + 1, zeros) - 1;
            }
            stops = _to_consumable_array(stops);
            stops.sort(compare);
            return stops;
        };
        var rangeToPattern = function rangeToPattern(start, stop, options) {
            if (start === stop) {
                return {
                    pattern: start,
                    count: [],
                    digits: 0
                };
            }
            var zipped = zip(start, stop);
            var digits = zipped.length;
            var pattern = "";
            var count = 0;
            for(var i = 0; i < digits; i++){
                var _zipped_i = _sliced_to_array(zipped[i], 2), startDigit = _zipped_i[0], stopDigit = _zipped_i[1];
                if (startDigit === stopDigit) {
                    pattern += startDigit;
                } else if (startDigit !== "0" || stopDigit !== "9") {
                    pattern += toCharacterClass(startDigit, stopDigit, options);
                } else {
                    count++;
                }
            }
            if (count) {
                pattern += options.shorthand === true ? "\\d" : "[0-9]";
            }
            return {
                pattern: pattern,
                count: [
                    count
                ],
                digits: digits
            };
        };
        var splitToPatterns = function splitToPatterns(min, max, tok, options) {
            var ranges = splitToRanges(min, max);
            var tokens = [];
            var start = min;
            var prev;
            for(var i = 0; i < ranges.length; i++){
                var max2 = ranges[i];
                var obj = rangeToPattern(String(start), String(max2), options);
                var zeros = "";
                if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
                    if (prev.count.length > 1) {
                        prev.count.pop();
                    }
                    prev.count.push(obj.count[0]);
                    prev.string = prev.pattern + toQuantifier(prev.count);
                    start = max2 + 1;
                    continue;
                }
                if (tok.isPadded) {
                    zeros = padZeros(max2, tok, options);
                }
                obj.string = zeros + obj.pattern + toQuantifier(obj.count);
                tokens.push(obj);
                start = max2 + 1;
                prev = obj;
            }
            return tokens;
        };
        var filterPatterns = function filterPatterns(arr, comparison, prefix, intersection, options) {
            var result = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var ele = _step.value;
                    var string = ele.string;
                    if (!intersection && !contains(comparison, "string", string)) {
                        result.push(prefix + string);
                    }
                    if (intersection && contains(comparison, "string", string)) {
                        result.push(prefix + string);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return result;
        };
        var zip = function zip(a, b) {
            var arr = [];
            for(var i = 0; i < a.length; i++)arr.push([
                a[i],
                b[i]
            ]);
            return arr;
        };
        var compare = function compare(a, b) {
            return a > b ? 1 : b > a ? -1 : 0;
        };
        var contains = function contains(arr, key, val) {
            return arr.some(function(ele) {
                return ele[key] === val;
            });
        };
        var countNines = function countNines(min, len) {
            return Number(String(min).slice(0, -len) + "9".repeat(len));
        };
        var countZeros = function countZeros(integer, zeros) {
            return integer - integer % Math.pow(10, zeros);
        };
        var toQuantifier = function toQuantifier(digits) {
            var _digits = _sliced_to_array(digits, 2), tmp = _digits[0], start = tmp === void 0 ? 0 : tmp, tmp1 = _digits[1], stop = tmp1 === void 0 ? "" : tmp1;
            if (stop || start > 1) {
                return "{".concat(start + (stop ? "," + stop : ""), "}");
            }
            return "";
        };
        var toCharacterClass = function toCharacterClass(a, b, options) {
            return "[".concat(a).concat(b - a === 1 ? "" : "-").concat(b, "]");
        };
        var hasPadding = function hasPadding(str) {
            return /^-?(0+)\d/.test(str);
        };
        var padZeros = function padZeros(value, tok, options) {
            if (!tok.isPadded) {
                return value;
            }
            var diff = Math.abs(tok.maxLen - String(value).length);
            var relax = options.relaxZeros !== false;
            switch(diff){
                case 0:
                    return "";
                case 1:
                    return relax ? "0?" : "0";
                case 2:
                    return relax ? "0{0,2}" : "00";
                default:
                    {
                        return relax ? "0{0,".concat(diff, "}") : "0{".concat(diff, "}");
                    }
            }
        };
        var isNumber = require_is_number();
        var toRegexRange = function(min, max, options) {
            if (isNumber(min) === false) {
                throw new TypeError("toRegexRange: expected the first argument to be a number");
            }
            if (max === void 0 || min === max) {
                return String(min);
            }
            if (isNumber(max) === false) {
                throw new TypeError("toRegexRange: expected the second argument to be a number.");
            }
            var opts = _object_spread({
                relaxZeros: true
            }, options);
            if (typeof opts.strictZeros === "boolean") {
                opts.relaxZeros = opts.strictZeros === false;
            }
            var relax = String(opts.relaxZeros);
            var shorthand = String(opts.shorthand);
            var capture = String(opts.capture);
            var wrap = String(opts.wrap);
            var cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
            if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
                return toRegexRange.cache[cacheKey].result;
            }
            var a = Math.min(min, max);
            var b = Math.max(min, max);
            if (Math.abs(a - b) === 1) {
                var result = min + "|" + max;
                if (opts.capture) {
                    return "(".concat(result, ")");
                }
                if (opts.wrap === false) {
                    return result;
                }
                return "(?:".concat(result, ")");
            }
            var isPadded = hasPadding(min) || hasPadding(max);
            var state = {
                min: min,
                max: max,
                a: a,
                b: b
            };
            var positives = [];
            var negatives = [];
            if (isPadded) {
                state.isPadded = isPadded;
                state.maxLen = String(state.max).length;
            }
            if (a < 0) {
                var newMin = b < 0 ? Math.abs(b) : 1;
                negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
                a = state.a = 0;
            }
            if (b >= 0) {
                positives = splitToPatterns(a, b, state, opts);
            }
            state.negatives = negatives;
            state.positives = positives;
            state.result = collatePatterns(negatives, positives, opts);
            if (opts.capture === true) {
                state.result = "(".concat(state.result, ")");
            } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
                state.result = "(?:".concat(state.result, ")");
            }
            toRegexRange.cache[cacheKey] = state;
            return state.result;
        };
        toRegexRange.cache = {};
        toRegexRange.clearCache = function() {
            return toRegexRange.cache = {};
        };
        module2.exports = toRegexRange;
    }
});
// node_modules/fill-range/index.js
var require_fill_range = __commonJS({
    "node_modules/fill-range/index.js": function(exports, module2) {
        "use strict";
        var util = require("util");
        var toRegexRange = require_to_regex_range();
        var isObject = function(val) {
            return val !== null && typeof val === "object" && !Array.isArray(val);
        };
        var transform = function(toNumber) {
            return function(value) {
                return toNumber === true ? Number(value) : String(value);
            };
        };
        var isValidValue = function(value) {
            return typeof value === "number" || typeof value === "string" && value !== "";
        };
        var isNumber = function(num) {
            return Number.isInteger(+num);
        };
        var zeros = function(input) {
            var value = "".concat(input);
            var index = -1;
            if (value[0] === "-") value = value.slice(1);
            if (value === "0") return false;
            while(value[++index] === "0");
            return index > 0;
        };
        var stringify = function(start, end, options) {
            if (typeof start === "string" || typeof end === "string") {
                return true;
            }
            return options.stringify === true;
        };
        var pad = function(input, maxLength, toNumber) {
            if (maxLength > 0) {
                var dash = input[0] === "-" ? "-" : "";
                if (dash) input = input.slice(1);
                input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
            }
            if (toNumber === false) {
                return String(input);
            }
            return input;
        };
        var toMaxLen = function(input, maxLength) {
            var negative = input[0] === "-" ? "-" : "";
            if (negative) {
                input = input.slice(1);
                maxLength--;
            }
            while(input.length < maxLength)input = "0" + input;
            return negative ? "-" + input : input;
        };
        var toSequence = function(parts, options) {
            parts.negatives.sort(function(a, b) {
                return a < b ? -1 : a > b ? 1 : 0;
            });
            parts.positives.sort(function(a, b) {
                return a < b ? -1 : a > b ? 1 : 0;
            });
            var prefix = options.capture ? "" : "?:";
            var positives = "";
            var negatives = "";
            var result;
            if (parts.positives.length) {
                positives = parts.positives.join("|");
            }
            if (parts.negatives.length) {
                negatives = "-(".concat(prefix).concat(parts.negatives.join("|"), ")");
            }
            if (positives && negatives) {
                result = "".concat(positives, "|").concat(negatives);
            } else {
                result = positives || negatives;
            }
            if (options.wrap) {
                return "(".concat(prefix).concat(result, ")");
            }
            return result;
        };
        var toRange = function(a, b, isNumbers, options) {
            if (isNumbers) {
                return toRegexRange(a, b, _object_spread({
                    wrap: false
                }, options));
            }
            var start = String.fromCharCode(a);
            if (a === b) return start;
            var stop = String.fromCharCode(b);
            return "[".concat(start, "-").concat(stop, "]");
        };
        var toRegex = function(start, end, options) {
            if (Array.isArray(start)) {
                var wrap = options.wrap === true;
                var prefix = options.capture ? "" : "?:";
                return wrap ? "(".concat(prefix).concat(start.join("|"), ")") : start.join("|");
            }
            return toRegexRange(start, end, options);
        };
        var rangeError = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _util;
            return new RangeError("Invalid range arguments: " + (_util = util).inspect.apply(_util, _to_consumable_array(args)));
        };
        var invalidRange = function(start, end, options) {
            if (options.strictRanges === true) throw rangeError([
                start,
                end
            ]);
            return [];
        };
        var invalidStep = function(step, options) {
            if (options.strictRanges === true) {
                throw new TypeError('Expected step "'.concat(step, '" to be a number'));
            }
            return [];
        };
        var fillNumbers = function(start, end) {
            var step = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            var a = Number(start);
            var b = Number(end);
            if (!Number.isInteger(a) || !Number.isInteger(b)) {
                if (options.strictRanges === true) throw rangeError([
                    start,
                    end
                ]);
                return [];
            }
            if (a === 0) a = 0;
            if (b === 0) b = 0;
            var descending = a > b;
            var startString = String(start);
            var endString = String(end);
            var stepString = String(step);
            step = Math.max(Math.abs(step), 1);
            var padded = zeros(startString) || zeros(endString) || zeros(stepString);
            var maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
            var toNumber = padded === false && stringify(start, end, options) === false;
            var format = options.transform || transform(toNumber);
            if (options.toRegex && step === 1) {
                return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
            }
            var parts = {
                negatives: [],
                positives: []
            };
            var push = function(num) {
                return parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
            };
            var range = [];
            var index = 0;
            while(descending ? a >= b : a <= b){
                if (options.toRegex === true && step > 1) {
                    push(a);
                } else {
                    range.push(pad(format(a, index), maxLen, toNumber));
                }
                a = descending ? a - step : a + step;
                index++;
            }
            if (options.toRegex === true) {
                return step > 1 ? toSequence(parts, options) : toRegex(range, null, _object_spread({
                    wrap: false
                }, options));
            }
            return range;
        };
        var fillLetters = function(start, end) {
            var step = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
                return invalidRange(start, end, options);
            }
            var format = options.transform || function(val) {
                return String.fromCharCode(val);
            };
            var a = "".concat(start).charCodeAt(0);
            var b = "".concat(end).charCodeAt(0);
            var descending = a > b;
            var min = Math.min(a, b);
            var max = Math.max(a, b);
            if (options.toRegex && step === 1) {
                return toRange(min, max, false, options);
            }
            var range = [];
            var index = 0;
            while(descending ? a >= b : a <= b){
                range.push(format(a, index));
                a = descending ? a - step : a + step;
                index++;
            }
            if (options.toRegex === true) {
                return toRegex(range, null, {
                    wrap: false,
                    options: options
                });
            }
            return range;
        };
        var fill = function(start, end, step) {
            var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            if (end == null && isValidValue(start)) {
                return [
                    start
                ];
            }
            if (!isValidValue(start) || !isValidValue(end)) {
                return invalidRange(start, end, options);
            }
            if (typeof step === "function") {
                return fill(start, end, 1, {
                    transform: step
                });
            }
            if (isObject(step)) {
                return fill(start, end, 0, step);
            }
            var opts = _object_spread({}, options);
            if (opts.capture === true) opts.wrap = true;
            step = step || opts.step || 1;
            if (!isNumber(step)) {
                if (step != null && !isObject(step)) return invalidStep(step, opts);
                return fill(start, end, 1, step);
            }
            if (isNumber(start) && isNumber(end)) {
                return fillNumbers(start, end, step, opts);
            }
            return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
        };
        module2.exports = fill;
    }
});
// node_modules/braces/lib/compile.js
var require_compile = __commonJS({
    "node_modules/braces/lib/compile.js": function(exports, module2) {
        "use strict";
        var fill = require_fill_range();
        var utils = require_utils();
        var compile = function(ast) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var walk = function(node) {
                var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var invalidBlock = utils.isInvalidBrace(parent);
                var invalidNode = node.invalid === true && options.escapeInvalid === true;
                var invalid = invalidBlock === true || invalidNode === true;
                var prefix = options.escapeInvalid === true ? "\\" : "";
                var output = "";
                if (node.isOpen === true) {
                    return prefix + node.value;
                }
                if (node.isClose === true) {
                    return prefix + node.value;
                }
                if (node.type === "open") {
                    return invalid ? prefix + node.value : "(";
                }
                if (node.type === "close") {
                    return invalid ? prefix + node.value : ")";
                }
                if (node.type === "comma") {
                    return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
                }
                if (node.value) {
                    return node.value;
                }
                if (node.nodes && node.ranges > 0) {
                    var args = utils.reduce(node.nodes);
                    var range = fill.apply(void 0, _to_consumable_array(args).concat([
                        _object_spread_props(_object_spread({}, options), {
                            wrap: false,
                            toRegex: true
                        })
                    ]));
                    if (range.length !== 0) {
                        return args.length > 1 && range.length > 1 ? "(".concat(range, ")") : range;
                    }
                }
                if (node.nodes) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = node.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var child = _step.value;
                            output += walk(child, node);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                return output;
            };
            return walk(ast);
        };
        module2.exports = compile;
    }
});
// node_modules/braces/lib/expand.js
var require_expand = __commonJS({
    "node_modules/braces/lib/expand.js": function(exports, module2) {
        "use strict";
        var fill = require_fill_range();
        var stringify = require_stringify();
        var utils = require_utils();
        var append = function() {
            var queue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", stash = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", enclose = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            var result = [];
            queue = [].concat(queue);
            stash = [].concat(stash);
            if (!stash.length) return queue;
            if (!queue.length) {
                return enclose ? utils.flatten(stash).map(function(ele) {
                    return "{".concat(ele, "}");
                }) : stash;
            }
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = queue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var item = _step.value;
                    if (Array.isArray(item)) {
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = item[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var value = _step1.value;
                                result.push(append(value, stash, enclose));
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    } else {
                        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                        try {
                            for(var _iterator2 = stash[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                var ele = _step2.value;
                                if (enclose === true && typeof ele === "string") ele = "{".concat(ele, "}");
                                result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                    _iterator2.return();
                                }
                            } finally{
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return utils.flatten(result);
        };
        var expand = function(ast) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
            var walk = function(node) {
                var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                node.queue = [];
                var p = parent;
                var q = parent.queue;
                while(p.type !== "brace" && p.type !== "root" && p.parent){
                    p = p.parent;
                    q = p.queue;
                }
                if (node.invalid || node.dollar) {
                    q.push(append(q.pop(), stringify(node, options)));
                    return;
                }
                if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
                    q.push(append(q.pop(), [
                        "{}"
                    ]));
                    return;
                }
                if (node.nodes && node.ranges > 0) {
                    var _utils;
                    var args = utils.reduce(node.nodes);
                    if ((_utils = utils).exceedsLimit.apply(_utils, _to_consumable_array(args).concat([
                        options.step,
                        rangeLimit
                    ]))) {
                        throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
                    }
                    var range = fill.apply(void 0, _to_consumable_array(args).concat([
                        options
                    ]));
                    if (range.length === 0) {
                        range = stringify(node, options);
                    }
                    q.push(append(q.pop(), range));
                    node.nodes = [];
                    return;
                }
                var enclose = utils.encloseBrace(node);
                var queue = node.queue;
                var block = node;
                while(block.type !== "brace" && block.type !== "root" && block.parent){
                    block = block.parent;
                    queue = block.queue;
                }
                for(var i = 0; i < node.nodes.length; i++){
                    var child = node.nodes[i];
                    if (child.type === "comma" && node.type === "brace") {
                        if (i === 1) queue.push("");
                        queue.push("");
                        continue;
                    }
                    if (child.type === "close") {
                        q.push(append(q.pop(), queue, enclose));
                        continue;
                    }
                    if (child.value && child.type !== "open") {
                        queue.push(append(queue.pop(), child.value));
                        continue;
                    }
                    if (child.nodes) {
                        walk(child, node);
                    }
                }
                return queue;
            };
            return utils.flatten(walk(ast));
        };
        module2.exports = expand;
    }
});
// node_modules/braces/lib/constants.js
var require_constants = __commonJS({
    "node_modules/braces/lib/constants.js": function(exports, module2) {
        "use strict";
        module2.exports = {
            MAX_LENGTH: 1024 * 64,
            // Digits
            CHAR_0: "0",
            /* 0 */ CHAR_9: "9",
            /* 9 */ // Alphabet chars.
            CHAR_UPPERCASE_A: "A",
            /* A */ CHAR_LOWERCASE_A: "a",
            /* a */ CHAR_UPPERCASE_Z: "Z",
            /* Z */ CHAR_LOWERCASE_Z: "z",
            /* z */ CHAR_LEFT_PARENTHESES: "(",
            /* ( */ CHAR_RIGHT_PARENTHESES: ")",
            /* ) */ CHAR_ASTERISK: "*",
            /* * */ // Non-alphabetic chars.
            CHAR_AMPERSAND: "&",
            /* & */ CHAR_AT: "@",
            /* @ */ CHAR_BACKSLASH: "\\",
            /* \ */ CHAR_BACKTICK: "`",
            /* ` */ CHAR_CARRIAGE_RETURN: "\r",
            /* \r */ CHAR_CIRCUMFLEX_ACCENT: "^",
            /* ^ */ CHAR_COLON: ":",
            /* : */ CHAR_COMMA: ",",
            /* , */ CHAR_DOLLAR: "$",
            /* . */ CHAR_DOT: ".",
            /* . */ CHAR_DOUBLE_QUOTE: '"',
            /* " */ CHAR_EQUAL: "=",
            /* = */ CHAR_EXCLAMATION_MARK: "!",
            /* ! */ CHAR_FORM_FEED: "\f",
            /* \f */ CHAR_FORWARD_SLASH: "/",
            /* / */ CHAR_HASH: "#",
            /* # */ CHAR_HYPHEN_MINUS: "-",
            /* - */ CHAR_LEFT_ANGLE_BRACKET: "<",
            /* < */ CHAR_LEFT_CURLY_BRACE: "{",
            /* { */ CHAR_LEFT_SQUARE_BRACKET: "[",
            /* [ */ CHAR_LINE_FEED: "\n",
            /* \n */ CHAR_NO_BREAK_SPACE: "\xa0",
            /* \u00A0 */ CHAR_PERCENT: "%",
            /* % */ CHAR_PLUS: "+",
            /* + */ CHAR_QUESTION_MARK: "?",
            /* ? */ CHAR_RIGHT_ANGLE_BRACKET: ">",
            /* > */ CHAR_RIGHT_CURLY_BRACE: "}",
            /* } */ CHAR_RIGHT_SQUARE_BRACKET: "]",
            /* ] */ CHAR_SEMICOLON: ";",
            /* ; */ CHAR_SINGLE_QUOTE: "'",
            /* ' */ CHAR_SPACE: " ",
            /*   */ CHAR_TAB: "	",
            /* \t */ CHAR_UNDERSCORE: "_",
            /* _ */ CHAR_VERTICAL_LINE: "|",
            /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
        };
    }
});
// node_modules/braces/lib/parse.js
var require_parse = __commonJS({
    "node_modules/braces/lib/parse.js": function(exports, module2) {
        "use strict";
        var stringify = require_stringify();
        var _require_constants = require_constants(), MAX_LENGTH = _require_constants.MAX_LENGTH, CHAR_BACKSLASH = _require_constants.CHAR_BACKSLASH, /* \ */ CHAR_BACKTICK = _require_constants.CHAR_BACKTICK, /* ` */ CHAR_COMMA = _require_constants.CHAR_COMMA, /* , */ CHAR_DOT = _require_constants.CHAR_DOT, /* . */ CHAR_LEFT_PARENTHESES = _require_constants.CHAR_LEFT_PARENTHESES, /* ( */ CHAR_RIGHT_PARENTHESES = _require_constants.CHAR_RIGHT_PARENTHESES, /* ) */ CHAR_LEFT_CURLY_BRACE = _require_constants.CHAR_LEFT_CURLY_BRACE, /* { */ CHAR_RIGHT_CURLY_BRACE = _require_constants.CHAR_RIGHT_CURLY_BRACE, /* } */ CHAR_LEFT_SQUARE_BRACKET = _require_constants.CHAR_LEFT_SQUARE_BRACKET, /* [ */ CHAR_RIGHT_SQUARE_BRACKET = _require_constants.CHAR_RIGHT_SQUARE_BRACKET, /* ] */ CHAR_DOUBLE_QUOTE = _require_constants.CHAR_DOUBLE_QUOTE, /* " */ CHAR_SINGLE_QUOTE = _require_constants.CHAR_SINGLE_QUOTE, /* ' */ CHAR_NO_BREAK_SPACE = _require_constants.CHAR_NO_BREAK_SPACE, CHAR_ZERO_WIDTH_NOBREAK_SPACE = _require_constants.CHAR_ZERO_WIDTH_NOBREAK_SPACE;
        var parse = function(input) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (typeof input !== "string") {
                throw new TypeError("Expected a string");
            }
            var opts = options || {};
            var max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
            if (input.length > max) {
                throw new SyntaxError("Input length (".concat(input.length, "), exceeds max characters (").concat(max, ")"));
            }
            var ast = {
                type: "root",
                input: input,
                nodes: []
            };
            var stack = [
                ast
            ];
            var block = ast;
            var prev = ast;
            var brackets = 0;
            var length = input.length;
            var index = 0;
            var depth = 0;
            var value;
            var memo = {};
            var advance = function() {
                return input[index++];
            };
            var push = function(node) {
                if (node.type === "text" && prev.type === "dot") {
                    prev.type = "text";
                }
                if (prev && prev.type === "text" && node.type === "text") {
                    prev.value += node.value;
                    return;
                }
                block.nodes.push(node);
                node.parent = block;
                node.prev = prev;
                prev = node;
                return node;
            };
            push({
                type: "bos"
            });
            while(index < length){
                block = stack[stack.length - 1];
                value = advance();
                if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
                    continue;
                }
                if (value === CHAR_BACKSLASH) {
                    push({
                        type: "text",
                        value: (options.keepEscaping ? value : "") + advance()
                    });
                    continue;
                }
                if (value === CHAR_RIGHT_SQUARE_BRACKET) {
                    push({
                        type: "text",
                        value: "\\" + value
                    });
                    continue;
                }
                if (value === CHAR_LEFT_SQUARE_BRACKET) {
                    brackets++;
                    var closed = true;
                    var next = void 0;
                    while(index < length && (next = advance())){
                        value += next;
                        if (next === CHAR_LEFT_SQUARE_BRACKET) {
                            brackets++;
                            continue;
                        }
                        if (next === CHAR_BACKSLASH) {
                            value += advance();
                            continue;
                        }
                        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                            brackets--;
                            if (brackets === 0) {
                                break;
                            }
                        }
                    }
                    push({
                        type: "text",
                        value: value
                    });
                    continue;
                }
                if (value === CHAR_LEFT_PARENTHESES) {
                    block = push({
                        type: "paren",
                        nodes: []
                    });
                    stack.push(block);
                    push({
                        type: "text",
                        value: value
                    });
                    continue;
                }
                if (value === CHAR_RIGHT_PARENTHESES) {
                    if (block.type !== "paren") {
                        push({
                            type: "text",
                            value: value
                        });
                        continue;
                    }
                    block = stack.pop();
                    push({
                        type: "text",
                        value: value
                    });
                    block = stack[stack.length - 1];
                    continue;
                }
                if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
                    var open = value;
                    var next1 = void 0;
                    if (options.keepQuotes !== true) {
                        value = "";
                    }
                    while(index < length && (next1 = advance())){
                        if (next1 === CHAR_BACKSLASH) {
                            value += next1 + advance();
                            continue;
                        }
                        if (next1 === open) {
                            if (options.keepQuotes === true) value += next1;
                            break;
                        }
                        value += next1;
                    }
                    push({
                        type: "text",
                        value: value
                    });
                    continue;
                }
                if (value === CHAR_LEFT_CURLY_BRACE) {
                    depth++;
                    var dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
                    var brace = {
                        type: "brace",
                        open: true,
                        close: false,
                        dollar: dollar,
                        depth: depth,
                        commas: 0,
                        ranges: 0,
                        nodes: []
                    };
                    block = push(brace);
                    stack.push(block);
                    push({
                        type: "open",
                        value: value
                    });
                    continue;
                }
                if (value === CHAR_RIGHT_CURLY_BRACE) {
                    if (block.type !== "brace") {
                        push({
                            type: "text",
                            value: value
                        });
                        continue;
                    }
                    var type = "close";
                    block = stack.pop();
                    block.close = true;
                    push({
                        type: type,
                        value: value
                    });
                    depth--;
                    block = stack[stack.length - 1];
                    continue;
                }
                if (value === CHAR_COMMA && depth > 0) {
                    if (block.ranges > 0) {
                        block.ranges = 0;
                        var open1 = block.nodes.shift();
                        block.nodes = [
                            open1,
                            {
                                type: "text",
                                value: stringify(block)
                            }
                        ];
                    }
                    push({
                        type: "comma",
                        value: value
                    });
                    block.commas++;
                    continue;
                }
                if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
                    var siblings = block.nodes;
                    if (depth === 0 || siblings.length === 0) {
                        push({
                            type: "text",
                            value: value
                        });
                        continue;
                    }
                    if (prev.type === "dot") {
                        block.range = [];
                        prev.value += value;
                        prev.type = "range";
                        if (block.nodes.length !== 3 && block.nodes.length !== 5) {
                            block.invalid = true;
                            block.ranges = 0;
                            prev.type = "text";
                            continue;
                        }
                        block.ranges++;
                        block.args = [];
                        continue;
                    }
                    if (prev.type === "range") {
                        siblings.pop();
                        var before = siblings[siblings.length - 1];
                        before.value += prev.value + value;
                        prev = before;
                        block.ranges--;
                        continue;
                    }
                    push({
                        type: "dot",
                        value: value
                    });
                    continue;
                }
                push({
                    type: "text",
                    value: value
                });
            }
            do {
                block = stack.pop();
                if (block.type !== "root") {
                    var _parent_nodes;
                    block.nodes.forEach(function(node) {
                        if (!node.nodes) {
                            if (node.type === "open") node.isOpen = true;
                            if (node.type === "close") node.isClose = true;
                            if (!node.nodes) node.type = "text";
                            node.invalid = true;
                        }
                    });
                    var parent = stack[stack.length - 1];
                    var index2 = parent.nodes.indexOf(block);
                    (_parent_nodes = parent.nodes).splice.apply(_parent_nodes, [
                        index2,
                        1
                    ].concat(_to_consumable_array(block.nodes)));
                }
            }while (stack.length > 0);
            push({
                type: "eos"
            });
            return ast;
        };
        module2.exports = parse;
    }
});
// node_modules/braces/index.js
var require_braces = __commonJS({
    "node_modules/braces/index.js": function(exports, module2) {
        "use strict";
        var stringify = require_stringify();
        var compile = require_compile();
        var expand = require_expand();
        var parse = require_parse();
        var braces = function(input) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var output = [];
            if (Array.isArray(input)) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var pattern = _step.value;
                        var result = braces.create(pattern, options);
                        if (Array.isArray(result)) {
                            var _output;
                            (_output = output).push.apply(_output, _to_consumable_array(result));
                        } else {
                            output.push(result);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else {
                output = [].concat(braces.create(input, options));
            }
            if (options && options.expand === true && options.nodupes === true) {
                output = _to_consumable_array(new Set(output));
            }
            return output;
        };
        braces.parse = function(input) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return parse(input, options);
        };
        braces.stringify = function(input) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (typeof input === "string") {
                return stringify(braces.parse(input, options), options);
            }
            return stringify(input, options);
        };
        braces.compile = function(input) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (typeof input === "string") {
                input = braces.parse(input, options);
            }
            return compile(input, options);
        };
        braces.expand = function(input) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (typeof input === "string") {
                input = braces.parse(input, options);
            }
            var result = expand(input, options);
            if (options.noempty === true) {
                result = result.filter(Boolean);
            }
            if (options.nodupes === true) {
                result = _to_consumable_array(new Set(result));
            }
            return result;
        };
        braces.create = function(input) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (input === "" || input.length < 3) {
                return [
                    input
                ];
            }
            return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
        };
        module2.exports = braces;
    }
});
// node_modules/picomatch/lib/constants.js
var require_constants2 = __commonJS({
    "node_modules/picomatch/lib/constants.js": function(exports, module2) {
        "use strict";
        var path4 = require("path");
        var WIN_SLASH = "\\\\/";
        var WIN_NO_SLASH = "[^".concat(WIN_SLASH, "]");
        var DOT_LITERAL = "\\.";
        var PLUS_LITERAL = "\\+";
        var QMARK_LITERAL = "\\?";
        var SLASH_LITERAL = "\\/";
        var ONE_CHAR = "(?=.)";
        var QMARK = "[^/]";
        var END_ANCHOR = "(?:".concat(SLASH_LITERAL, "|$)");
        var START_ANCHOR = "(?:^|".concat(SLASH_LITERAL, ")");
        var DOTS_SLASH = "".concat(DOT_LITERAL, "{1,2}").concat(END_ANCHOR);
        var NO_DOT = "(?!".concat(DOT_LITERAL, ")");
        var NO_DOTS = "(?!".concat(START_ANCHOR).concat(DOTS_SLASH, ")");
        var NO_DOT_SLASH = "(?!".concat(DOT_LITERAL, "{0,1}").concat(END_ANCHOR, ")");
        var NO_DOTS_SLASH = "(?!".concat(DOTS_SLASH, ")");
        var QMARK_NO_DOT = "[^.".concat(SLASH_LITERAL, "]");
        var STAR = "".concat(QMARK, "*?");
        var POSIX_CHARS = {
            DOT_LITERAL: DOT_LITERAL,
            PLUS_LITERAL: PLUS_LITERAL,
            QMARK_LITERAL: QMARK_LITERAL,
            SLASH_LITERAL: SLASH_LITERAL,
            ONE_CHAR: ONE_CHAR,
            QMARK: QMARK,
            END_ANCHOR: END_ANCHOR,
            DOTS_SLASH: DOTS_SLASH,
            NO_DOT: NO_DOT,
            NO_DOTS: NO_DOTS,
            NO_DOT_SLASH: NO_DOT_SLASH,
            NO_DOTS_SLASH: NO_DOTS_SLASH,
            QMARK_NO_DOT: QMARK_NO_DOT,
            STAR: STAR,
            START_ANCHOR: START_ANCHOR
        };
        var WINDOWS_CHARS = _object_spread_props(_object_spread({}, POSIX_CHARS), {
            SLASH_LITERAL: "[".concat(WIN_SLASH, "]"),
            QMARK: WIN_NO_SLASH,
            STAR: "".concat(WIN_NO_SLASH, "*?"),
            DOTS_SLASH: "".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$)"),
            NO_DOT: "(?!".concat(DOT_LITERAL, ")"),
            NO_DOTS: "(?!(?:^|[".concat(WIN_SLASH, "])").concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
            NO_DOT_SLASH: "(?!".concat(DOT_LITERAL, "{0,1}(?:[").concat(WIN_SLASH, "]|$))"),
            NO_DOTS_SLASH: "(?!".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
            QMARK_NO_DOT: "[^.".concat(WIN_SLASH, "]"),
            START_ANCHOR: "(?:^|[".concat(WIN_SLASH, "])"),
            END_ANCHOR: "(?:[".concat(WIN_SLASH, "]|$)")
        });
        var POSIX_REGEX_SOURCE = {
            alnum: "a-zA-Z0-9",
            alpha: "a-zA-Z",
            ascii: "\\x00-\\x7F",
            blank: " \\t",
            cntrl: "\\x00-\\x1F\\x7F",
            digit: "0-9",
            graph: "\\x21-\\x7E",
            lower: "a-z",
            print: "\\x20-\\x7E ",
            punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
            space: " \\t\\r\\n\\v\\f",
            upper: "A-Z",
            word: "A-Za-z0-9_",
            xdigit: "A-Fa-f0-9"
        };
        module2.exports = {
            MAX_LENGTH: 1024 * 64,
            POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE,
            // regular expressions
            REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
            REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
            REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
            REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
            REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
            REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
            // Replace globs with equivalent patterns to reduce parsing time.
            REPLACEMENTS: {
                "***": "*",
                "**/**": "**",
                "**/**/**": "**"
            },
            // Digits
            CHAR_0: 48,
            /* 0 */ CHAR_9: 57,
            /* 9 */ // Alphabet chars.
            CHAR_UPPERCASE_A: 65,
            /* A */ CHAR_LOWERCASE_A: 97,
            /* a */ CHAR_UPPERCASE_Z: 90,
            /* Z */ CHAR_LOWERCASE_Z: 122,
            /* z */ CHAR_LEFT_PARENTHESES: 40,
            /* ( */ CHAR_RIGHT_PARENTHESES: 41,
            /* ) */ CHAR_ASTERISK: 42,
            /* * */ // Non-alphabetic chars.
            CHAR_AMPERSAND: 38,
            /* & */ CHAR_AT: 64,
            /* @ */ CHAR_BACKWARD_SLASH: 92,
            /* \ */ CHAR_CARRIAGE_RETURN: 13,
            /* \r */ CHAR_CIRCUMFLEX_ACCENT: 94,
            /* ^ */ CHAR_COLON: 58,
            /* : */ CHAR_COMMA: 44,
            /* , */ CHAR_DOT: 46,
            /* . */ CHAR_DOUBLE_QUOTE: 34,
            /* " */ CHAR_EQUAL: 61,
            /* = */ CHAR_EXCLAMATION_MARK: 33,
            /* ! */ CHAR_FORM_FEED: 12,
            /* \f */ CHAR_FORWARD_SLASH: 47,
            /* / */ CHAR_GRAVE_ACCENT: 96,
            /* ` */ CHAR_HASH: 35,
            /* # */ CHAR_HYPHEN_MINUS: 45,
            /* - */ CHAR_LEFT_ANGLE_BRACKET: 60,
            /* < */ CHAR_LEFT_CURLY_BRACE: 123,
            /* { */ CHAR_LEFT_SQUARE_BRACKET: 91,
            /* [ */ CHAR_LINE_FEED: 10,
            /* \n */ CHAR_NO_BREAK_SPACE: 160,
            /* \u00A0 */ CHAR_PERCENT: 37,
            /* % */ CHAR_PLUS: 43,
            /* + */ CHAR_QUESTION_MARK: 63,
            /* ? */ CHAR_RIGHT_ANGLE_BRACKET: 62,
            /* > */ CHAR_RIGHT_CURLY_BRACE: 125,
            /* } */ CHAR_RIGHT_SQUARE_BRACKET: 93,
            /* ] */ CHAR_SEMICOLON: 59,
            /* ; */ CHAR_SINGLE_QUOTE: 39,
            /* ' */ CHAR_SPACE: 32,
            /*   */ CHAR_TAB: 9,
            /* \t */ CHAR_UNDERSCORE: 95,
            /* _ */ CHAR_VERTICAL_LINE: 124,
            /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
            /* \uFEFF */ SEP: path4.sep,
            /**
       * Create EXTGLOB_CHARS
       */ extglobChars: function extglobChars(chars) {
                return {
                    "!": {
                        type: "negate",
                        open: "(?:(?!(?:",
                        close: "))".concat(chars.STAR, ")")
                    },
                    "?": {
                        type: "qmark",
                        open: "(?:",
                        close: ")?"
                    },
                    "+": {
                        type: "plus",
                        open: "(?:",
                        close: ")+"
                    },
                    "*": {
                        type: "star",
                        open: "(?:",
                        close: ")*"
                    },
                    "@": {
                        type: "at",
                        open: "(?:",
                        close: ")"
                    }
                };
            },
            /**
       * Create GLOB_CHARS
       */ globChars: function globChars(win32) {
                return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
            }
        };
    }
});
// node_modules/picomatch/lib/utils.js
var require_utils2 = __commonJS({
    "node_modules/picomatch/lib/utils.js": function(exports) {
        "use strict";
        var path4 = require("path");
        var win32 = process.platform === "win32";
        var _require_constants2 = require_constants2(), REGEX_BACKSLASH = _require_constants2.REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH = _require_constants2.REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS = _require_constants2.REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL = _require_constants2.REGEX_SPECIAL_CHARS_GLOBAL;
        exports.isObject = function(val) {
            return val !== null && typeof val === "object" && !Array.isArray(val);
        };
        exports.hasRegexChars = function(str) {
            return REGEX_SPECIAL_CHARS.test(str);
        };
        exports.isRegexChar = function(str) {
            return str.length === 1 && exports.hasRegexChars(str);
        };
        exports.escapeRegex = function(str) {
            return str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
        };
        exports.toPosixSlashes = function(str) {
            return str.replace(REGEX_BACKSLASH, "/");
        };
        exports.removeBackslashes = function(str) {
            return str.replace(REGEX_REMOVE_BACKSLASH, function(match) {
                return match === "\\" ? "" : match;
            });
        };
        exports.supportsLookbehinds = function() {
            var segs = process.version.slice(1).split(".").map(Number);
            if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
                return true;
            }
            return false;
        };
        exports.isWindows = function(options) {
            if (options && typeof options.windows === "boolean") {
                return options.windows;
            }
            return win32 === true || path4.sep === "\\";
        };
        exports.escapeLast = function(input, char, lastIdx) {
            var idx = input.lastIndexOf(char, lastIdx);
            if (idx === -1) return input;
            if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
            return "".concat(input.slice(0, idx), "\\").concat(input.slice(idx));
        };
        exports.removePrefix = function(input) {
            var state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var output = input;
            if (output.startsWith("./")) {
                output = output.slice(2);
                state.prefix = "./";
            }
            return output;
        };
        exports.wrapOutput = function(input) {
            var state = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var prepend = options.contains ? "" : "^";
            var append = options.contains ? "" : "$";
            var output = "".concat(prepend, "(?:").concat(input, ")").concat(append);
            if (state.negated === true) {
                output = "(?:^(?!".concat(output, ").*$)");
            }
            return output;
        };
    }
});
// node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
    "node_modules/picomatch/lib/scan.js": function(exports, module2) {
        "use strict";
        var utils = require_utils2();
        var _require_constants2 = require_constants2(), CHAR_ASTERISK = _require_constants2.CHAR_ASTERISK, /* * */ CHAR_AT = _require_constants2.CHAR_AT, /* @ */ CHAR_BACKWARD_SLASH = _require_constants2.CHAR_BACKWARD_SLASH, /* \ */ CHAR_COMMA = _require_constants2.CHAR_COMMA, /* , */ CHAR_DOT = _require_constants2.CHAR_DOT, /* . */ CHAR_EXCLAMATION_MARK = _require_constants2.CHAR_EXCLAMATION_MARK, /* ! */ CHAR_FORWARD_SLASH = _require_constants2.CHAR_FORWARD_SLASH, /* / */ CHAR_LEFT_CURLY_BRACE = _require_constants2.CHAR_LEFT_CURLY_BRACE, /* { */ CHAR_LEFT_PARENTHESES = _require_constants2.CHAR_LEFT_PARENTHESES, /* ( */ CHAR_LEFT_SQUARE_BRACKET = _require_constants2.CHAR_LEFT_SQUARE_BRACKET, /* [ */ CHAR_PLUS = _require_constants2.CHAR_PLUS, /* + */ CHAR_QUESTION_MARK = _require_constants2.CHAR_QUESTION_MARK, /* ? */ CHAR_RIGHT_CURLY_BRACE = _require_constants2.CHAR_RIGHT_CURLY_BRACE, /* } */ CHAR_RIGHT_PARENTHESES = _require_constants2.CHAR_RIGHT_PARENTHESES, /* ) */ CHAR_RIGHT_SQUARE_BRACKET = _require_constants2.CHAR_RIGHT_SQUARE_BRACKET;
        var isPathSeparator = function(code) {
            return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
        };
        var depth = function(token) {
            if (token.isPrefix !== true) {
                token.depth = token.isGlobstar ? Infinity : 1;
            }
        };
        var scan = function(input, options) {
            var opts = options || {};
            var length = input.length - 1;
            var scanToEnd = opts.parts === true || opts.scanToEnd === true;
            var slashes = [];
            var tokens = [];
            var parts = [];
            var str = input;
            var index = -1;
            var start = 0;
            var lastIndex = 0;
            var isBrace = false;
            var isBracket = false;
            var isGlob = false;
            var isExtglob = false;
            var isGlobstar = false;
            var braceEscaped = false;
            var backslashes = false;
            var negated = false;
            var negatedExtglob = false;
            var finished2 = false;
            var braces = 0;
            var prev;
            var code;
            var token = {
                value: "",
                depth: 0,
                isGlob: false
            };
            var eos = function() {
                return index >= length;
            };
            var peek = function() {
                return str.charCodeAt(index + 1);
            };
            var advance = function() {
                prev = code;
                return str.charCodeAt(++index);
            };
            while(index < length){
                code = advance();
                var next = void 0;
                if (code === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    code = advance();
                    if (code === CHAR_LEFT_CURLY_BRACE) {
                        braceEscaped = true;
                    }
                    continue;
                }
                if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
                    braces++;
                    while(eos() !== true && (code = advance())){
                        if (code === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = true;
                            advance();
                            continue;
                        }
                        if (code === CHAR_LEFT_CURLY_BRACE) {
                            braces++;
                            continue;
                        }
                        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                            isBrace = token.isBrace = true;
                            isGlob = token.isGlob = true;
                            finished2 = true;
                            if (scanToEnd === true) {
                                continue;
                            }
                            break;
                        }
                        if (braceEscaped !== true && code === CHAR_COMMA) {
                            isBrace = token.isBrace = true;
                            isGlob = token.isGlob = true;
                            finished2 = true;
                            if (scanToEnd === true) {
                                continue;
                            }
                            break;
                        }
                        if (code === CHAR_RIGHT_CURLY_BRACE) {
                            braces--;
                            if (braces === 0) {
                                braceEscaped = false;
                                isBrace = token.isBrace = true;
                                finished2 = true;
                                break;
                            }
                        }
                    }
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (code === CHAR_FORWARD_SLASH) {
                    slashes.push(index);
                    tokens.push(token);
                    token = {
                        value: "",
                        depth: 0,
                        isGlob: false
                    };
                    if (finished2 === true) continue;
                    if (prev === CHAR_DOT && index === start + 1) {
                        start += 2;
                        continue;
                    }
                    lastIndex = index + 1;
                    continue;
                }
                if (opts.noext !== true) {
                    var isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
                    if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
                        isGlob = token.isGlob = true;
                        isExtglob = token.isExtglob = true;
                        finished2 = true;
                        if (code === CHAR_EXCLAMATION_MARK && index === start) {
                            negatedExtglob = true;
                        }
                        if (scanToEnd === true) {
                            while(eos() !== true && (code = advance())){
                                if (code === CHAR_BACKWARD_SLASH) {
                                    backslashes = token.backslashes = true;
                                    code = advance();
                                    continue;
                                }
                                if (code === CHAR_RIGHT_PARENTHESES) {
                                    isGlob = token.isGlob = true;
                                    finished2 = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                }
                if (code === CHAR_ASTERISK) {
                    if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
                    isGlob = token.isGlob = true;
                    finished2 = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (code === CHAR_QUESTION_MARK) {
                    isGlob = token.isGlob = true;
                    finished2 = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (code === CHAR_LEFT_SQUARE_BRACKET) {
                    while(eos() !== true && (next = advance())){
                        if (next === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = true;
                            advance();
                            continue;
                        }
                        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                            isBracket = token.isBracket = true;
                            isGlob = token.isGlob = true;
                            finished2 = true;
                            break;
                        }
                    }
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
                    negated = token.negated = true;
                    start++;
                    continue;
                }
                if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
                    isGlob = token.isGlob = true;
                    if (scanToEnd === true) {
                        while(eos() !== true && (code = advance())){
                            if (code === CHAR_LEFT_PARENTHESES) {
                                backslashes = token.backslashes = true;
                                code = advance();
                                continue;
                            }
                            if (code === CHAR_RIGHT_PARENTHESES) {
                                finished2 = true;
                                break;
                            }
                        }
                        continue;
                    }
                    break;
                }
                if (isGlob === true) {
                    finished2 = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
            }
            if (opts.noext === true) {
                isExtglob = false;
                isGlob = false;
            }
            var base = str;
            var prefix = "";
            var glob = "";
            if (start > 0) {
                prefix = str.slice(0, start);
                str = str.slice(start);
                lastIndex -= start;
            }
            if (base && isGlob === true && lastIndex > 0) {
                base = str.slice(0, lastIndex);
                glob = str.slice(lastIndex);
            } else if (isGlob === true) {
                base = "";
                glob = str;
            } else {
                base = str;
            }
            if (base && base !== "" && base !== "/" && base !== str) {
                if (isPathSeparator(base.charCodeAt(base.length - 1))) {
                    base = base.slice(0, -1);
                }
            }
            if (opts.unescape === true) {
                if (glob) glob = utils.removeBackslashes(glob);
                if (base && backslashes === true) {
                    base = utils.removeBackslashes(base);
                }
            }
            var state = {
                prefix: prefix,
                input: input,
                start: start,
                base: base,
                glob: glob,
                isBrace: isBrace,
                isBracket: isBracket,
                isGlob: isGlob,
                isExtglob: isExtglob,
                isGlobstar: isGlobstar,
                negated: negated,
                negatedExtglob: negatedExtglob
            };
            if (opts.tokens === true) {
                state.maxDepth = 0;
                if (!isPathSeparator(code)) {
                    tokens.push(token);
                }
                state.tokens = tokens;
            }
            if (opts.parts === true || opts.tokens === true) {
                var prevIndex;
                for(var idx = 0; idx < slashes.length; idx++){
                    var n = prevIndex ? prevIndex + 1 : start;
                    var i = slashes[idx];
                    var value = input.slice(n, i);
                    if (opts.tokens) {
                        if (idx === 0 && start !== 0) {
                            tokens[idx].isPrefix = true;
                            tokens[idx].value = prefix;
                        } else {
                            tokens[idx].value = value;
                        }
                        depth(tokens[idx]);
                        state.maxDepth += tokens[idx].depth;
                    }
                    if (idx !== 0 || value !== "") {
                        parts.push(value);
                    }
                    prevIndex = i;
                }
                if (prevIndex && prevIndex + 1 < input.length) {
                    var value1 = input.slice(prevIndex + 1);
                    parts.push(value1);
                    if (opts.tokens) {
                        tokens[tokens.length - 1].value = value1;
                        depth(tokens[tokens.length - 1]);
                        state.maxDepth += tokens[tokens.length - 1].depth;
                    }
                }
                state.slashes = slashes;
                state.parts = parts;
            }
            return state;
        };
        module2.exports = scan;
    }
});
// node_modules/picomatch/lib/parse.js
var require_parse2 = __commonJS({
    "node_modules/picomatch/lib/parse.js": function(exports, module2) {
        "use strict";
        var constants = require_constants2();
        var utils = require_utils2();
        var MAX_LENGTH = constants.MAX_LENGTH, POSIX_REGEX_SOURCE = constants.POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS = constants.REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF = constants.REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS = constants.REPLACEMENTS;
        var expandRange = function(args, options) {
            if (typeof options.expandRange === "function") {
                var _options;
                return (_options = options).expandRange.apply(_options, _to_consumable_array(args).concat([
                    options
                ]));
            }
            args.sort();
            var value = "[".concat(args.join("-"), "]");
            try {
                new RegExp(value);
            } catch (ex) {
                return args.map(function(v) {
                    return utils.escapeRegex(v);
                }).join("..");
            }
            return value;
        };
        var syntaxError = function(type, char) {
            return "Missing ".concat(type, ': "').concat(char, '" - use "\\\\').concat(char, '" to match literal characters');
        };
        var parse = function(input, options) {
            if (typeof input !== "string") {
                throw new TypeError("Expected a string");
            }
            input = REPLACEMENTS[input] || input;
            var opts = _object_spread({}, options);
            var max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
            var len = input.length;
            if (len > max) {
                throw new SyntaxError("Input length: ".concat(len, ", exceeds maximum allowed length: ").concat(max));
            }
            var bos = {
                type: "bos",
                value: "",
                output: opts.prepend || ""
            };
            var tokens = [
                bos
            ];
            var capture = opts.capture ? "" : "?:";
            var win32 = utils.isWindows(options);
            var PLATFORM_CHARS = constants.globChars(win32);
            var EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
            var DOT_LITERAL = PLATFORM_CHARS.DOT_LITERAL, PLUS_LITERAL = PLATFORM_CHARS.PLUS_LITERAL, SLASH_LITERAL = PLATFORM_CHARS.SLASH_LITERAL, ONE_CHAR = PLATFORM_CHARS.ONE_CHAR, DOTS_SLASH = PLATFORM_CHARS.DOTS_SLASH, NO_DOT = PLATFORM_CHARS.NO_DOT, NO_DOT_SLASH = PLATFORM_CHARS.NO_DOT_SLASH, NO_DOTS_SLASH = PLATFORM_CHARS.NO_DOTS_SLASH, QMARK = PLATFORM_CHARS.QMARK, QMARK_NO_DOT = PLATFORM_CHARS.QMARK_NO_DOT, STAR = PLATFORM_CHARS.STAR, START_ANCHOR = PLATFORM_CHARS.START_ANCHOR;
            var globstar = function(opts2) {
                return "(".concat(capture, "(?:(?!").concat(START_ANCHOR).concat(opts2.dot ? DOTS_SLASH : DOT_LITERAL, ").)*?)");
            };
            var nodot = opts.dot ? "" : NO_DOT;
            var qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
            var star = opts.bash === true ? globstar(opts) : STAR;
            if (opts.capture) {
                star = "(".concat(star, ")");
            }
            if (typeof opts.noext === "boolean") {
                opts.noextglob = opts.noext;
            }
            var state = {
                input: input,
                index: -1,
                start: 0,
                dot: opts.dot === true,
                consumed: "",
                output: "",
                prefix: "",
                backtrack: false,
                negated: false,
                brackets: 0,
                braces: 0,
                parens: 0,
                quotes: 0,
                globstar: false,
                tokens: tokens
            };
            input = utils.removePrefix(input, state);
            len = input.length;
            var extglobs = [];
            var braces = [];
            var stack = [];
            var prev = bos;
            var value;
            var eos = function() {
                return state.index === len - 1;
            };
            var peek = state.peek = function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
                return input[state.index + n];
            };
            var advance = state.advance = function() {
                return input[++state.index] || "";
            };
            var remaining = function() {
                return input.slice(state.index + 1);
            };
            var consume = function() {
                var value2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", num = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                state.consumed += value2;
                state.index += num;
            };
            var append = function(token) {
                state.output += token.output != null ? token.output : token.value;
                consume(token.value);
            };
            var negate = function() {
                var count = 1;
                while(peek() === "!" && (peek(2) !== "(" || peek(3) === "?")){
                    advance();
                    state.start++;
                    count++;
                }
                if (count % 2 === 0) {
                    return false;
                }
                state.negated = true;
                state.start++;
                return true;
            };
            var increment = function(type) {
                state[type]++;
                stack.push(type);
            };
            var decrement = function(type) {
                state[type]--;
                stack.pop();
            };
            var push = function(tok) {
                if (prev.type === "globstar") {
                    var isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
                    var isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
                    if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
                        state.output = state.output.slice(0, -prev.output.length);
                        prev.type = "star";
                        prev.value = "*";
                        prev.output = star;
                        state.output += prev.output;
                    }
                }
                if (extglobs.length && tok.type !== "paren") {
                    extglobs[extglobs.length - 1].inner += tok.value;
                }
                if (tok.value || tok.output) append(tok);
                if (prev && prev.type === "text" && tok.type === "text") {
                    prev.value += tok.value;
                    prev.output = (prev.output || "") + tok.value;
                    return;
                }
                tok.prev = prev;
                tokens.push(tok);
                prev = tok;
            };
            var extglobOpen = function(type, value2) {
                var token = _object_spread_props(_object_spread({}, EXTGLOB_CHARS[value2]), {
                    conditions: 1,
                    inner: ""
                });
                token.prev = prev;
                token.parens = state.parens;
                token.output = state.output;
                var output = (opts.capture ? "(" : "") + token.open;
                increment("parens");
                push({
                    type: type,
                    value: value2,
                    output: state.output ? "" : ONE_CHAR
                });
                push({
                    type: "paren",
                    extglob: true,
                    value: advance(),
                    output: output
                });
                extglobs.push(token);
            };
            var extglobClose = function(token) {
                var output = token.close + (opts.capture ? ")" : "");
                var rest;
                if (token.type === "negate") {
                    var extglobStar = star;
                    if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
                        extglobStar = globstar(opts);
                    }
                    if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
                        output = token.close = ")$))".concat(extglobStar);
                    }
                    if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
                        var expression = parse(rest, _object_spread_props(_object_spread({}, options), {
                            fastpaths: false
                        })).output;
                        output = token.close = ")".concat(expression, ")").concat(extglobStar, ")");
                    }
                    if (token.prev.type === "bos") {
                        state.negatedExtglob = true;
                    }
                }
                push({
                    type: "paren",
                    extglob: true,
                    value: value,
                    output: output
                });
                decrement("parens");
            };
            if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
                var backslashes = false;
                var output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, function(m, esc, chars, first, rest, index) {
                    if (first === "\\") {
                        backslashes = true;
                        return m;
                    }
                    if (first === "?") {
                        if (esc) {
                            return esc + first + (rest ? QMARK.repeat(rest.length) : "");
                        }
                        if (index === 0) {
                            return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
                        }
                        return QMARK.repeat(chars.length);
                    }
                    if (first === ".") {
                        return DOT_LITERAL.repeat(chars.length);
                    }
                    if (first === "*") {
                        if (esc) {
                            return esc + first + (rest ? star : "");
                        }
                        return star;
                    }
                    return esc ? m : "\\".concat(m);
                });
                if (backslashes === true) {
                    if (opts.unescape === true) {
                        output = output.replace(/\\/g, "");
                    } else {
                        output = output.replace(/\\+/g, function(m) {
                            return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
                        });
                    }
                }
                if (output === input && opts.contains === true) {
                    state.output = input;
                    return state;
                }
                state.output = utils.wrapOutput(output, state, options);
                return state;
            }
            while(!eos()){
                value = advance();
                if (value === "\x00") {
                    continue;
                }
                if (value === "\\") {
                    var next = peek();
                    if (next === "/" && opts.bash !== true) {
                        continue;
                    }
                    if (next === "." || next === ";") {
                        continue;
                    }
                    if (!next) {
                        value += "\\";
                        push({
                            type: "text",
                            value: value
                        });
                        continue;
                    }
                    var match = /^\\+/.exec(remaining());
                    var slashes = 0;
                    if (match && match[0].length > 2) {
                        slashes = match[0].length;
                        state.index += slashes;
                        if (slashes % 2 !== 0) {
                            value += "\\";
                        }
                    }
                    if (opts.unescape === true) {
                        value = advance();
                    } else {
                        value += advance();
                    }
                    if (state.brackets === 0) {
                        push({
                            type: "text",
                            value: value
                        });
                        continue;
                    }
                }
                if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
                    if (opts.posix !== false && value === ":") {
                        var inner = prev.value.slice(1);
                        if (inner.includes("[")) {
                            prev.posix = true;
                            if (inner.includes(":")) {
                                var idx = prev.value.lastIndexOf("[");
                                var pre = prev.value.slice(0, idx);
                                var rest2 = prev.value.slice(idx + 2);
                                var posix = POSIX_REGEX_SOURCE[rest2];
                                if (posix) {
                                    prev.value = pre + posix;
                                    state.backtrack = true;
                                    advance();
                                    if (!bos.output && tokens.indexOf(prev) === 1) {
                                        bos.output = ONE_CHAR;
                                    }
                                    continue;
                                }
                            }
                        }
                    }
                    if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
                        value = "\\".concat(value);
                    }
                    if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
                        value = "\\".concat(value);
                    }
                    if (opts.posix === true && value === "!" && prev.value === "[") {
                        value = "^";
                    }
                    prev.value += value;
                    append({
                        value: value
                    });
                    continue;
                }
                if (state.quotes === 1 && value !== '"') {
                    value = utils.escapeRegex(value);
                    prev.value += value;
                    append({
                        value: value
                    });
                    continue;
                }
                if (value === '"') {
                    state.quotes = state.quotes === 1 ? 0 : 1;
                    if (opts.keepQuotes === true) {
                        push({
                            type: "text",
                            value: value
                        });
                    }
                    continue;
                }
                if (value === "(") {
                    increment("parens");
                    push({
                        type: "paren",
                        value: value
                    });
                    continue;
                }
                if (value === ")") {
                    if (state.parens === 0 && opts.strictBrackets === true) {
                        throw new SyntaxError(syntaxError("opening", "("));
                    }
                    var extglob = extglobs[extglobs.length - 1];
                    if (extglob && state.parens === extglob.parens + 1) {
                        extglobClose(extglobs.pop());
                        continue;
                    }
                    push({
                        type: "paren",
                        value: value,
                        output: state.parens ? ")" : "\\)"
                    });
                    decrement("parens");
                    continue;
                }
                if (value === "[") {
                    if (opts.nobracket === true || !remaining().includes("]")) {
                        if (opts.nobracket !== true && opts.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("closing", "]"));
                        }
                        value = "\\".concat(value);
                    } else {
                        increment("brackets");
                    }
                    push({
                        type: "bracket",
                        value: value
                    });
                    continue;
                }
                if (value === "]") {
                    if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
                        push({
                            type: "text",
                            value: value,
                            output: "\\".concat(value)
                        });
                        continue;
                    }
                    if (state.brackets === 0) {
                        if (opts.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "["));
                        }
                        push({
                            type: "text",
                            value: value,
                            output: "\\".concat(value)
                        });
                        continue;
                    }
                    decrement("brackets");
                    var prevValue = prev.value.slice(1);
                    if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
                        value = "/".concat(value);
                    }
                    prev.value += value;
                    append({
                        value: value
                    });
                    if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
                        continue;
                    }
                    var escaped = utils.escapeRegex(prev.value);
                    state.output = state.output.slice(0, -prev.value.length);
                    if (opts.literalBrackets === true) {
                        state.output += escaped;
                        prev.value = escaped;
                        continue;
                    }
                    prev.value = "(".concat(capture).concat(escaped, "|").concat(prev.value, ")");
                    state.output += prev.value;
                    continue;
                }
                if (value === "{" && opts.nobrace !== true) {
                    increment("braces");
                    var open = {
                        type: "brace",
                        value: value,
                        output: "(",
                        outputIndex: state.output.length,
                        tokensIndex: state.tokens.length
                    };
                    braces.push(open);
                    push(open);
                    continue;
                }
                if (value === "}") {
                    var brace = braces[braces.length - 1];
                    if (opts.nobrace === true || !brace) {
                        push({
                            type: "text",
                            value: value,
                            output: value
                        });
                        continue;
                    }
                    var output1 = ")";
                    if (brace.dots === true) {
                        var arr = tokens.slice();
                        var range = [];
                        for(var i = arr.length - 1; i >= 0; i--){
                            tokens.pop();
                            if (arr[i].type === "brace") {
                                break;
                            }
                            if (arr[i].type !== "dots") {
                                range.unshift(arr[i].value);
                            }
                        }
                        output1 = expandRange(range, opts);
                        state.backtrack = true;
                    }
                    if (brace.comma !== true && brace.dots !== true) {
                        var out = state.output.slice(0, brace.outputIndex);
                        var toks = state.tokens.slice(brace.tokensIndex);
                        brace.value = brace.output = "\\{";
                        value = output1 = "\\}";
                        state.output = out;
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = toks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var t = _step.value;
                                state.output += t.output || t.value;
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                    push({
                        type: "brace",
                        value: value,
                        output: output1
                    });
                    decrement("braces");
                    braces.pop();
                    continue;
                }
                if (value === "|") {
                    if (extglobs.length > 0) {
                        extglobs[extglobs.length - 1].conditions++;
                    }
                    push({
                        type: "text",
                        value: value
                    });
                    continue;
                }
                if (value === ",") {
                    var output2 = value;
                    var brace1 = braces[braces.length - 1];
                    if (brace1 && stack[stack.length - 1] === "braces") {
                        brace1.comma = true;
                        output2 = "|";
                    }
                    push({
                        type: "comma",
                        value: value,
                        output: output2
                    });
                    continue;
                }
                if (value === "/") {
                    if (prev.type === "dot" && state.index === state.start + 1) {
                        state.start = state.index + 1;
                        state.consumed = "";
                        state.output = "";
                        tokens.pop();
                        prev = bos;
                        continue;
                    }
                    push({
                        type: "slash",
                        value: value,
                        output: SLASH_LITERAL
                    });
                    continue;
                }
                if (value === ".") {
                    if (state.braces > 0 && prev.type === "dot") {
                        if (prev.value === ".") prev.output = DOT_LITERAL;
                        var brace2 = braces[braces.length - 1];
                        prev.type = "dots";
                        prev.output += value;
                        prev.value += value;
                        brace2.dots = true;
                        continue;
                    }
                    if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
                        push({
                            type: "text",
                            value: value,
                            output: DOT_LITERAL
                        });
                        continue;
                    }
                    push({
                        type: "dot",
                        value: value,
                        output: DOT_LITERAL
                    });
                    continue;
                }
                if (value === "?") {
                    var isGroup = prev && prev.value === "(";
                    if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                        extglobOpen("qmark", value);
                        continue;
                    }
                    if (prev && prev.type === "paren") {
                        var next1 = peek();
                        var output3 = value;
                        if (next1 === "<" && !utils.supportsLookbehinds()) {
                            throw new Error("Node.js v10 or higher is required for regex lookbehinds");
                        }
                        if (prev.value === "(" && !/[!=<:]/.test(next1) || next1 === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                            output3 = "\\".concat(value);
                        }
                        push({
                            type: "text",
                            value: value,
                            output: output3
                        });
                        continue;
                    }
                    if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
                        push({
                            type: "qmark",
                            value: value,
                            output: QMARK_NO_DOT
                        });
                        continue;
                    }
                    push({
                        type: "qmark",
                        value: value,
                        output: QMARK
                    });
                    continue;
                }
                if (value === "!") {
                    if (opts.noextglob !== true && peek() === "(") {
                        if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
                            extglobOpen("negate", value);
                            continue;
                        }
                    }
                    if (opts.nonegate !== true && state.index === 0) {
                        negate();
                        continue;
                    }
                }
                if (value === "+") {
                    if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                        extglobOpen("plus", value);
                        continue;
                    }
                    if (prev && prev.value === "(" || opts.regex === false) {
                        push({
                            type: "plus",
                            value: value,
                            output: PLUS_LITERAL
                        });
                        continue;
                    }
                    if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
                        push({
                            type: "plus",
                            value: value
                        });
                        continue;
                    }
                    push({
                        type: "plus",
                        value: PLUS_LITERAL
                    });
                    continue;
                }
                if (value === "@") {
                    if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                        push({
                            type: "at",
                            extglob: true,
                            value: value,
                            output: ""
                        });
                        continue;
                    }
                    push({
                        type: "text",
                        value: value
                    });
                    continue;
                }
                if (value !== "*") {
                    if (value === "$" || value === "^") {
                        value = "\\".concat(value);
                    }
                    var match1 = REGEX_NON_SPECIAL_CHARS.exec(remaining());
                    if (match1) {
                        value += match1[0];
                        state.index += match1[0].length;
                    }
                    push({
                        type: "text",
                        value: value
                    });
                    continue;
                }
                if (prev && (prev.type === "globstar" || prev.star === true)) {
                    prev.type = "star";
                    prev.star = true;
                    prev.value += value;
                    prev.output = star;
                    state.backtrack = true;
                    state.globstar = true;
                    consume(value);
                    continue;
                }
                var rest = remaining();
                if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
                    extglobOpen("star", value);
                    continue;
                }
                if (prev.type === "star") {
                    if (opts.noglobstar === true) {
                        consume(value);
                        continue;
                    }
                    var prior = prev.prev;
                    var before = prior.prev;
                    var isStart = prior.type === "slash" || prior.type === "bos";
                    var afterStar = before && (before.type === "star" || before.type === "globstar");
                    if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
                        push({
                            type: "star",
                            value: value,
                            output: ""
                        });
                        continue;
                    }
                    var isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
                    var isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
                    if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
                        push({
                            type: "star",
                            value: value,
                            output: ""
                        });
                        continue;
                    }
                    while(rest.slice(0, 3) === "/**"){
                        var after = input[state.index + 4];
                        if (after && after !== "/") {
                            break;
                        }
                        rest = rest.slice(3);
                        consume("/**", 3);
                    }
                    if (prior.type === "bos" && eos()) {
                        prev.type = "globstar";
                        prev.value += value;
                        prev.output = globstar(opts);
                        state.output = prev.output;
                        state.globstar = true;
                        consume(value);
                        continue;
                    }
                    if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
                        state.output = state.output.slice(0, -(prior.output + prev.output).length);
                        prior.output = "(?:".concat(prior.output);
                        prev.type = "globstar";
                        prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
                        prev.value += value;
                        state.globstar = true;
                        state.output += prior.output + prev.output;
                        consume(value);
                        continue;
                    }
                    if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
                        var end = rest[1] !== void 0 ? "|$" : "";
                        state.output = state.output.slice(0, -(prior.output + prev.output).length);
                        prior.output = "(?:".concat(prior.output);
                        prev.type = "globstar";
                        prev.output = "".concat(globstar(opts)).concat(SLASH_LITERAL, "|").concat(SLASH_LITERAL).concat(end, ")");
                        prev.value += value;
                        state.output += prior.output + prev.output;
                        state.globstar = true;
                        consume(value + advance());
                        push({
                            type: "slash",
                            value: "/",
                            output: ""
                        });
                        continue;
                    }
                    if (prior.type === "bos" && rest[0] === "/") {
                        prev.type = "globstar";
                        prev.value += value;
                        prev.output = "(?:^|".concat(SLASH_LITERAL, "|").concat(globstar(opts)).concat(SLASH_LITERAL, ")");
                        state.output = prev.output;
                        state.globstar = true;
                        consume(value + advance());
                        push({
                            type: "slash",
                            value: "/",
                            output: ""
                        });
                        continue;
                    }
                    state.output = state.output.slice(0, -prev.output.length);
                    prev.type = "globstar";
                    prev.output = globstar(opts);
                    prev.value += value;
                    state.output += prev.output;
                    state.globstar = true;
                    consume(value);
                    continue;
                }
                var token = {
                    type: "star",
                    value: value,
                    output: star
                };
                if (opts.bash === true) {
                    token.output = ".*?";
                    if (prev.type === "bos" || prev.type === "slash") {
                        token.output = nodot + token.output;
                    }
                    push(token);
                    continue;
                }
                if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
                    token.output = value;
                    push(token);
                    continue;
                }
                if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
                    if (prev.type === "dot") {
                        state.output += NO_DOT_SLASH;
                        prev.output += NO_DOT_SLASH;
                    } else if (opts.dot === true) {
                        state.output += NO_DOTS_SLASH;
                        prev.output += NO_DOTS_SLASH;
                    } else {
                        state.output += nodot;
                        prev.output += nodot;
                    }
                    if (peek() !== "*") {
                        state.output += ONE_CHAR;
                        prev.output += ONE_CHAR;
                    }
                }
                push(token);
            }
            while(state.brackets > 0){
                if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                state.output = utils.escapeLast(state.output, "[");
                decrement("brackets");
            }
            while(state.parens > 0){
                if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                state.output = utils.escapeLast(state.output, "(");
                decrement("parens");
            }
            while(state.braces > 0){
                if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                state.output = utils.escapeLast(state.output, "{");
                decrement("braces");
            }
            if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
                push({
                    type: "maybe_slash",
                    value: "",
                    output: "".concat(SLASH_LITERAL, "?")
                });
            }
            if (state.backtrack === true) {
                state.output = "";
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = state.tokens[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var token1 = _step1.value;
                        state.output += token1.output != null ? token1.output : token1.value;
                        if (token1.suffix) {
                            state.output += token1.suffix;
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
            return state;
        };
        parse.fastpaths = function(input, options) {
            var opts = _object_spread({}, options);
            var max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
            var len = input.length;
            if (len > max) {
                throw new SyntaxError("Input length: ".concat(len, ", exceeds maximum allowed length: ").concat(max));
            }
            input = REPLACEMENTS[input] || input;
            var win32 = utils.isWindows(options);
            var _constants_globChars = constants.globChars(win32), DOT_LITERAL = _constants_globChars.DOT_LITERAL, SLASH_LITERAL = _constants_globChars.SLASH_LITERAL, ONE_CHAR = _constants_globChars.ONE_CHAR, DOTS_SLASH = _constants_globChars.DOTS_SLASH, NO_DOT = _constants_globChars.NO_DOT, NO_DOTS = _constants_globChars.NO_DOTS, NO_DOTS_SLASH = _constants_globChars.NO_DOTS_SLASH, STAR = _constants_globChars.STAR, START_ANCHOR = _constants_globChars.START_ANCHOR;
            var nodot = opts.dot ? NO_DOTS : NO_DOT;
            var slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
            var capture = opts.capture ? "" : "?:";
            var state = {
                negated: false,
                prefix: ""
            };
            var star = opts.bash === true ? ".*?" : STAR;
            if (opts.capture) {
                star = "(".concat(star, ")");
            }
            var globstar = function(opts2) {
                if (opts2.noglobstar === true) return star;
                return "(".concat(capture, "(?:(?!").concat(START_ANCHOR).concat(opts2.dot ? DOTS_SLASH : DOT_LITERAL, ").)*?)");
            };
            var create = function(str) {
                switch(str){
                    case "*":
                        return "".concat(nodot).concat(ONE_CHAR).concat(star);
                    case ".*":
                        return "".concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);
                    case "*.*":
                        return "".concat(nodot).concat(star).concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);
                    case "*/*":
                        return "".concat(nodot).concat(star).concat(SLASH_LITERAL).concat(ONE_CHAR).concat(slashDot).concat(star);
                    case "**":
                        return nodot + globstar(opts);
                    case "**/*":
                        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(slashDot).concat(ONE_CHAR).concat(star);
                    case "**/*.*":
                        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(slashDot).concat(star).concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);
                    case "**/.*":
                        return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);
                    default:
                        {
                            var match = /^(.*?)\.(\w+)$/.exec(str);
                            if (!match) return;
                            var source2 = create(match[1]);
                            if (!source2) return;
                            return source2 + DOT_LITERAL + match[2];
                        }
                }
            };
            var output = utils.removePrefix(input, state);
            var source = create(output);
            if (source && opts.strictSlashes !== true) {
                source += "".concat(SLASH_LITERAL, "?");
            }
            return source;
        };
        module2.exports = parse;
    }
});
// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
    "node_modules/picomatch/lib/picomatch.js": function(exports, module2) {
        "use strict";
        var path4 = require("path");
        var scan = require_scan();
        var parse = require_parse2();
        var utils = require_utils2();
        var constants = require_constants2();
        var isObject = function(val) {
            return val && typeof val === "object" && !Array.isArray(val);
        };
        var picomatch = function(glob, options) {
            var returnState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            if (Array.isArray(glob)) {
                var fns = glob.map(function(input) {
                    return picomatch(input, options, returnState);
                });
                var arrayMatcher = function(str) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = fns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var isMatch = _step.value;
                            var state2 = isMatch(str);
                            if (state2) return state2;
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return false;
                };
                return arrayMatcher;
            }
            var isState = isObject(glob) && glob.tokens && glob.input;
            if (glob === "" || typeof glob !== "string" && !isState) {
                throw new TypeError("Expected pattern to be a non-empty string");
            }
            var opts = options || {};
            var posix = utils.isWindows(options);
            var regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
            var state = regex.state;
            delete regex.state;
            var isIgnored = function() {
                return false;
            };
            if (opts.ignore) {
                var ignoreOpts = _object_spread_props(_object_spread({}, options), {
                    ignore: null,
                    onMatch: null,
                    onResult: null
                });
                isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
            }
            var matcher = function(input) {
                var returnObject = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var _picomatch_test = picomatch.test(input, regex, options, {
                    glob: glob,
                    posix: posix
                }), isMatch = _picomatch_test.isMatch, match = _picomatch_test.match, output = _picomatch_test.output;
                var result = {
                    glob: glob,
                    state: state,
                    regex: regex,
                    posix: posix,
                    input: input,
                    output: output,
                    match: match,
                    isMatch: isMatch
                };
                if (typeof opts.onResult === "function") {
                    opts.onResult(result);
                }
                if (isMatch === false) {
                    result.isMatch = false;
                    return returnObject ? result : false;
                }
                if (isIgnored(input)) {
                    if (typeof opts.onIgnore === "function") {
                        opts.onIgnore(result);
                    }
                    result.isMatch = false;
                    return returnObject ? result : false;
                }
                if (typeof opts.onMatch === "function") {
                    opts.onMatch(result);
                }
                return returnObject ? result : true;
            };
            if (returnState) {
                matcher.state = state;
            }
            return matcher;
        };
        picomatch.test = function(input, regex, options) {
            var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, glob = _ref.glob, posix = _ref.posix;
            if (typeof input !== "string") {
                throw new TypeError("Expected input to be a string");
            }
            if (input === "") {
                return {
                    isMatch: false,
                    output: ""
                };
            }
            var opts = options || {};
            var format = opts.format || (posix ? utils.toPosixSlashes : null);
            var match = input === glob;
            var output = match && format ? format(input) : input;
            if (match === false) {
                output = format ? format(input) : input;
                match = output === glob;
            }
            if (match === false || opts.capture === true) {
                if (opts.matchBase === true || opts.basename === true) {
                    match = picomatch.matchBase(input, regex, options, posix);
                } else {
                    match = regex.exec(output);
                }
            }
            return {
                isMatch: Boolean(match),
                match: match,
                output: output
            };
        };
        picomatch.matchBase = function(input, glob, options) {
            var posix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : utils.isWindows(options);
            var regex = _instanceof(glob, RegExp) ? glob : picomatch.makeRe(glob, options);
            return regex.test(path4.basename(input));
        };
        picomatch.isMatch = function(str, patterns, options) {
            return picomatch(patterns, options)(str);
        };
        picomatch.parse = function(pattern, options) {
            if (Array.isArray(pattern)) return pattern.map(function(p) {
                return picomatch.parse(p, options);
            });
            return parse(pattern, _object_spread_props(_object_spread({}, options), {
                fastpaths: false
            }));
        };
        picomatch.scan = function(input, options) {
            return scan(input, options);
        };
        picomatch.compileRe = function(state, options) {
            var returnOutput = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, returnState = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
            if (returnOutput === true) {
                return state.output;
            }
            var opts = options || {};
            var prepend = opts.contains ? "" : "^";
            var append = opts.contains ? "" : "$";
            var source = "".concat(prepend, "(?:").concat(state.output, ")").concat(append);
            if (state && state.negated === true) {
                source = "^(?!".concat(source, ").*$");
            }
            var regex = picomatch.toRegex(source, options);
            if (returnState === true) {
                regex.state = state;
            }
            return regex;
        };
        picomatch.makeRe = function(input) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, returnOutput = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, returnState = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
            if (!input || typeof input !== "string") {
                throw new TypeError("Expected a non-empty string");
            }
            var parsed = {
                negated: false,
                fastpaths: true
            };
            if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
                parsed.output = parse.fastpaths(input, options);
            }
            if (!parsed.output) {
                parsed = parse(input, options);
            }
            return picomatch.compileRe(parsed, options, returnOutput, returnState);
        };
        picomatch.toRegex = function(source, options) {
            try {
                var opts = options || {};
                return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
            } catch (err) {
                if (options && options.debug === true) throw err;
                return /$^/;
            }
        };
        picomatch.constants = constants;
        module2.exports = picomatch;
    }
});
// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
    "node_modules/picomatch/index.js": function(exports, module2) {
        "use strict";
        module2.exports = require_picomatch();
    }
});
// node_modules/micromatch/index.js
var require_micromatch = __commonJS({
    "node_modules/micromatch/index.js": function(exports, module2) {
        "use strict";
        var _picomatch, _picomatch1;
        var util = require("util");
        var braces = require_braces();
        var picomatch = require_picomatch2();
        var utils = require_utils2();
        var isEmptyString = function(val) {
            return val === "" || val === "./";
        };
        var micromatch = function(list, patterns, options) {
            patterns = [].concat(patterns);
            list = [].concat(list);
            var omit = /* @__PURE__ */ new Set();
            var keep = /* @__PURE__ */ new Set();
            var items = /* @__PURE__ */ new Set();
            var negatives = 0;
            var onResult = function(state) {
                items.add(state.output);
                if (options && options.onResult) {
                    options.onResult(state);
                }
            };
            for(var i = 0; i < patterns.length; i++){
                var isMatch = picomatch(String(patterns[i]), _object_spread_props(_object_spread({}, options), {
                    onResult: onResult
                }), true);
                var negated = isMatch.state.negated || isMatch.state.negatedExtglob;
                if (negated) negatives++;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        var matched = isMatch(item, true);
                        var match = negated ? !matched.isMatch : matched.isMatch;
                        if (!match) continue;
                        if (negated) {
                            omit.add(matched.output);
                        } else {
                            omit.delete(matched.output);
                            keep.add(matched.output);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            var result = negatives === patterns.length ? _to_consumable_array(items) : _to_consumable_array(keep);
            var matches = result.filter(function(item) {
                return !omit.has(item);
            });
            if (options && matches.length === 0) {
                if (options.failglob === true) {
                    throw new Error('No matches found for "'.concat(patterns.join(", "), '"'));
                }
                if (options.nonull === true || options.nullglob === true) {
                    return options.unescape ? patterns.map(function(p) {
                        return p.replace(/\\/g, "");
                    }) : patterns;
                }
            }
            return matches;
        };
        micromatch.match = micromatch;
        micromatch.matcher = function(pattern, options) {
            return picomatch(pattern, options);
        };
        micromatch.isMatch = function(str, patterns, options) {
            return picomatch(patterns, options)(str);
        };
        micromatch.any = micromatch.isMatch;
        micromatch.not = function(list, patterns) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            patterns = [].concat(patterns).map(String);
            var result = /* @__PURE__ */ new Set();
            var items = [];
            var onResult = function(state) {
                if (options.onResult) options.onResult(state);
                items.push(state.output);
            };
            var matches = new Set(micromatch(list, patterns, _object_spread_props(_object_spread({}, options), {
                onResult: onResult
            })));
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var item = _step.value;
                    if (!matches.has(item)) {
                        result.add(item);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return _to_consumable_array(result);
        };
        micromatch.contains = function(str, pattern, options) {
            if (typeof str !== "string") {
                throw new TypeError('Expected a string: "'.concat(util.inspect(str), '"'));
            }
            if (Array.isArray(pattern)) {
                return pattern.some(function(p) {
                    return micromatch.contains(str, p, options);
                });
            }
            if (typeof pattern === "string") {
                if (isEmptyString(str) || isEmptyString(pattern)) {
                    return false;
                }
                if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
                    return true;
                }
            }
            return micromatch.isMatch(str, pattern, _object_spread_props(_object_spread({}, options), {
                contains: true
            }));
        };
        micromatch.matchKeys = function(obj, patterns, options) {
            if (!utils.isObject(obj)) {
                throw new TypeError("Expected the first argument to be an object");
            }
            var keys = micromatch(Object.keys(obj), patterns, options);
            var res = {};
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var key = _step.value;
                    res[key] = obj[key];
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return res;
        };
        micromatch.some = function(list, patterns, options) {
            var items = [].concat(list);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var pattern = _step.value;
                    var isMatch = picomatch(String(pattern), options);
                    if (items.some(function(item) {
                        return isMatch(item);
                    })) {
                        return {
                            v: true
                        };
                    }
                };
                for(var _iterator = [].concat(patterns)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _ret = _loop();
                    if (_type_of(_ret) === "object") return _ret.v;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return false;
        };
        micromatch.every = function(list, patterns, options) {
            var items = [].concat(list);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var pattern = _step.value;
                    var isMatch = picomatch(String(pattern), options);
                    if (!items.every(function(item) {
                        return isMatch(item);
                    })) {
                        return {
                            v: false
                        };
                    }
                };
                for(var _iterator = [].concat(patterns)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _ret = _loop();
                    if (_type_of(_ret) === "object") return _ret.v;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return true;
        };
        micromatch.all = function(str, patterns, options) {
            if (typeof str !== "string") {
                throw new TypeError('Expected a string: "'.concat(util.inspect(str), '"'));
            }
            return [].concat(patterns).every(function(p) {
                return picomatch(p, options)(str);
            });
        };
        micromatch.capture = function(glob, input, options) {
            var posix = utils.isWindows(options);
            var regex = picomatch.makeRe(String(glob), _object_spread_props(_object_spread({}, options), {
                capture: true
            }));
            var match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
            if (match) {
                return match.slice(1).map(function(v) {
                    return v === void 0 ? "" : v;
                });
            }
        };
        micromatch.makeRe = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return (_picomatch = picomatch).makeRe.apply(_picomatch, _to_consumable_array(args));
        };
        micromatch.scan = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return (_picomatch1 = picomatch).scan.apply(_picomatch1, _to_consumable_array(args));
        };
        micromatch.parse = function(patterns, options) {
            var res = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = [].concat(patterns || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var pattern = _step.value;
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = braces(String(pattern), options)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var str = _step1.value;
                            res.push(picomatch.parse(str, options));
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return res;
        };
        micromatch.braces = function(pattern, options) {
            if (typeof pattern !== "string") throw new TypeError("Expected a string");
            if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
                return [
                    pattern
                ];
            }
            return braces(pattern, options);
        };
        micromatch.braceExpand = function(pattern, options) {
            if (typeof pattern !== "string") throw new TypeError("Expected a string");
            return micromatch.braces(pattern, _object_spread_props(_object_spread({}, options), {
                expand: true
            }));
        };
        module2.exports = micromatch;
    }
});
// node_modules/fast-glob/out/utils/pattern.js
var require_pattern = __commonJS({
    "node_modules/fast-glob/out/utils/pattern.js": function(exports) {
        "use strict";
        var isStaticPattern = function isStaticPattern(pattern) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return !isDynamicPattern2(pattern, options);
        };
        var isDynamicPattern2 = function isDynamicPattern2(pattern) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (pattern === "") {
                return false;
            }
            if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
                return true;
            }
            if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
                return true;
            }
            if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
                return true;
            }
            if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
                return true;
            }
            return false;
        };
        var hasBraceExpansion = function hasBraceExpansion(pattern) {
            var openingBraceIndex = pattern.indexOf("{");
            if (openingBraceIndex === -1) {
                return false;
            }
            var closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
            if (closingBraceIndex === -1) {
                return false;
            }
            var braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
            return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
        };
        var convertToPositivePattern = function convertToPositivePattern(pattern) {
            return isNegativePattern2(pattern) ? pattern.slice(1) : pattern;
        };
        var convertToNegativePattern = function convertToNegativePattern(pattern) {
            return "!" + pattern;
        };
        var isNegativePattern2 = function isNegativePattern2(pattern) {
            return pattern.startsWith("!") && pattern[1] !== "(";
        };
        var isPositivePattern = function isPositivePattern(pattern) {
            return !isNegativePattern2(pattern);
        };
        var getNegativePatterns = function getNegativePatterns(patterns) {
            return patterns.filter(isNegativePattern2);
        };
        var getPositivePatterns = function getPositivePatterns(patterns) {
            return patterns.filter(isPositivePattern);
        };
        var getPatternsInsideCurrentDirectory = function getPatternsInsideCurrentDirectory(patterns) {
            return patterns.filter(function(pattern) {
                return !isPatternRelatedToParentDirectory(pattern);
            });
        };
        var getPatternsOutsideCurrentDirectory = function getPatternsOutsideCurrentDirectory(patterns) {
            return patterns.filter(isPatternRelatedToParentDirectory);
        };
        var isPatternRelatedToParentDirectory = function isPatternRelatedToParentDirectory(pattern) {
            return pattern.startsWith("..") || pattern.startsWith("./..");
        };
        var getBaseDirectory = function getBaseDirectory(pattern) {
            return globParent(pattern, {
                flipBackslashes: false
            });
        };
        var hasGlobStar = function hasGlobStar(pattern) {
            return pattern.includes(GLOBSTAR);
        };
        var endsWithSlashGlobStar = function endsWithSlashGlobStar(pattern) {
            return pattern.endsWith("/" + GLOBSTAR);
        };
        var isAffectDepthOfReadingPattern = function isAffectDepthOfReadingPattern(pattern) {
            var basename = path4.basename(pattern);
            return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
        };
        var expandPatternsWithBraceExpansion = function expandPatternsWithBraceExpansion(patterns) {
            return patterns.reduce(function(collection, pattern) {
                return collection.concat(expandBraceExpansion(pattern));
            }, []);
        };
        var expandBraceExpansion = function expandBraceExpansion(pattern) {
            var patterns = micromatch.braces(pattern, {
                expand: true,
                nodupes: true,
                keepEscaping: true
            });
            patterns.sort(function(a, b) {
                return a.length - b.length;
            });
            return patterns.filter(function(pattern2) {
                return pattern2 !== "";
            });
        };
        var getPatternParts = function getPatternParts(pattern, options) {
            var parts = micromatch.scan(pattern, Object.assign(Object.assign({}, options), {
                parts: true
            })).parts;
            if (parts.length === 0) {
                parts = [
                    pattern
                ];
            }
            if (parts[0].startsWith("/")) {
                parts[0] = parts[0].slice(1);
                parts.unshift("");
            }
            return parts;
        };
        var makeRe = function makeRe(pattern, options) {
            return micromatch.makeRe(pattern, options);
        };
        var convertPatternsToRe = function convertPatternsToRe(patterns, options) {
            return patterns.map(function(pattern) {
                return makeRe(pattern, options);
            });
        };
        var matchAny = function matchAny(entry, patternsRe) {
            return patternsRe.some(function(patternRe) {
                return patternRe.test(entry);
            });
        };
        var removeDuplicateSlashes = function removeDuplicateSlashes(pattern) {
            return pattern.replace(DOUBLE_SLASH_RE, "/");
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.removeDuplicateSlashes = exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
        var path4 = require("path");
        var globParent = require_glob_parent();
        var micromatch = require_micromatch();
        var GLOBSTAR = "**";
        var ESCAPE_SYMBOL = "\\";
        var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
        var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
        var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
        var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
        var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
        var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
        exports.isStaticPattern = isStaticPattern;
        exports.isDynamicPattern = isDynamicPattern2;
        exports.convertToPositivePattern = convertToPositivePattern;
        exports.convertToNegativePattern = convertToNegativePattern;
        exports.isNegativePattern = isNegativePattern2;
        exports.isPositivePattern = isPositivePattern;
        exports.getNegativePatterns = getNegativePatterns;
        exports.getPositivePatterns = getPositivePatterns;
        exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
        exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
        exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
        exports.getBaseDirectory = getBaseDirectory;
        exports.hasGlobStar = hasGlobStar;
        exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
        exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
        exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
        exports.expandBraceExpansion = expandBraceExpansion;
        exports.getPatternParts = getPatternParts;
        exports.makeRe = makeRe;
        exports.convertPatternsToRe = convertPatternsToRe;
        exports.matchAny = matchAny;
        exports.removeDuplicateSlashes = removeDuplicateSlashes;
    }
});
// node_modules/merge2/index.js
var require_merge2 = __commonJS({
    "node_modules/merge2/index.js": function(exports, module2) {
        "use strict";
        var merge2 = function merge2() {
            var streamsQueue = [];
            var args = slice.call(arguments);
            var merging = false;
            var options = args[args.length - 1];
            if (options && !Array.isArray(options) && options.pipe == null) {
                args.pop();
            } else {
                options = {};
            }
            var doEnd = options.end !== false;
            var doPipeError = options.pipeError === true;
            if (options.objectMode == null) {
                options.objectMode = true;
            }
            if (options.highWaterMark == null) {
                options.highWaterMark = 64 * 1024;
            }
            var mergedStream = PassThrough(options);
            function addStream() {
                for(var i = 0, len = arguments.length; i < len; i++){
                    streamsQueue.push(pauseStreams(arguments[i], options));
                }
                mergeStream();
                return this;
            }
            function mergeStream() {
                if (merging) {
                    return;
                }
                merging = true;
                var streams = streamsQueue.shift();
                if (!streams) {
                    process.nextTick(endStream2);
                    return;
                }
                if (!Array.isArray(streams)) {
                    streams = [
                        streams
                    ];
                }
                var pipesCount = streams.length + 1;
                function next() {
                    if (--pipesCount > 0) {
                        return;
                    }
                    merging = false;
                    mergeStream();
                }
                function pipe(stream) {
                    function onend() {
                        stream.removeListener("merge2UnpipeEnd", onend);
                        stream.removeListener("end", onend);
                        if (doPipeError) {
                            stream.removeListener("error", onerror);
                        }
                        next();
                    }
                    function onerror(err) {
                        mergedStream.emit("error", err);
                    }
                    if (stream._readableState.endEmitted) {
                        return next();
                    }
                    stream.on("merge2UnpipeEnd", onend);
                    stream.on("end", onend);
                    if (doPipeError) {
                        stream.on("error", onerror);
                    }
                    stream.pipe(mergedStream, {
                        end: false
                    });
                    stream.resume();
                }
                for(var i = 0; i < streams.length; i++){
                    pipe(streams[i]);
                }
                next();
            }
            function endStream2() {
                merging = false;
                mergedStream.emit("queueDrain");
                if (doEnd) {
                    mergedStream.end();
                }
            }
            mergedStream.setMaxListeners(0);
            mergedStream.add = addStream;
            mergedStream.on("unpipe", function(stream) {
                stream.emit("merge2UnpipeEnd");
            });
            if (args.length) {
                addStream.apply(null, args);
            }
            return mergedStream;
        };
        var Stream = require("stream");
        var PassThrough = Stream.PassThrough;
        var slice = Array.prototype.slice;
        module2.exports = merge2;
        function pauseStreams(streams, options) {
            if (!Array.isArray(streams)) {
                if (!streams._readableState && streams.pipe) {
                    streams = streams.pipe(PassThrough(options));
                }
                if (!streams._readableState || !streams.pause || !streams.pipe) {
                    throw new Error("Only readable stream can be merged.");
                }
                streams.pause();
            } else {
                for(var i = 0, len = streams.length; i < len; i++){
                    streams[i] = pauseStreams(streams[i], options);
                }
            }
            return streams;
        }
    }
});
// node_modules/fast-glob/out/utils/stream.js
var require_stream = __commonJS({
    "node_modules/fast-glob/out/utils/stream.js": function(exports) {
        "use strict";
        var merge = function merge(streams) {
            var mergedStream = merge2(streams);
            streams.forEach(function(stream) {
                stream.once("error", function(error) {
                    return mergedStream.emit("error", error);
                });
            });
            mergedStream.once("close", function() {
                return propagateCloseEventToSources(streams);
            });
            mergedStream.once("end", function() {
                return propagateCloseEventToSources(streams);
            });
            return mergedStream;
        };
        var propagateCloseEventToSources = function propagateCloseEventToSources(streams) {
            streams.forEach(function(stream) {
                return stream.emit("close");
            });
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.merge = void 0;
        var merge2 = require_merge2();
        exports.merge = merge;
    }
});
// node_modules/fast-glob/out/utils/string.js
var require_string = __commonJS({
    "node_modules/fast-glob/out/utils/string.js": function(exports) {
        "use strict";
        var isString = function isString(input) {
            return typeof input === "string";
        };
        var isEmpty = function isEmpty(input) {
            return input === "";
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.isEmpty = exports.isString = void 0;
        exports.isString = isString;
        exports.isEmpty = isEmpty;
    }
});
// node_modules/fast-glob/out/utils/index.js
var require_utils3 = __commonJS({
    "node_modules/fast-glob/out/utils/index.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
        var array = require_array();
        exports.array = array;
        var errno = require_errno();
        exports.errno = errno;
        var fs6 = require_fs();
        exports.fs = fs6;
        var path4 = require_path();
        exports.path = path4;
        var pattern = require_pattern();
        exports.pattern = pattern;
        var stream = require_stream();
        exports.stream = stream;
        var string = require_string();
        exports.string = string;
    }
});
// node_modules/fast-glob/out/managers/tasks.js
var require_tasks = __commonJS({
    "node_modules/fast-glob/out/managers/tasks.js": function(exports) {
        "use strict";
        var generate = function generate(input, settings) {
            var patterns = processPatterns(input, settings);
            var ignore = processPatterns(settings.ignore, settings);
            var positivePatterns = getPositivePatterns(patterns);
            var negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
            var staticPatterns = positivePatterns.filter(function(pattern) {
                return utils.pattern.isStaticPattern(pattern, settings);
            });
            var dynamicPatterns = positivePatterns.filter(function(pattern) {
                return utils.pattern.isDynamicPattern(pattern, settings);
            });
            var staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns, /* dynamic */ false);
            var dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns, /* dynamic */ true);
            return staticTasks.concat(dynamicTasks);
        };
        var processPatterns = function processPatterns(input, settings) {
            var patterns = input;
            if (settings.braceExpansion) {
                patterns = utils.pattern.expandPatternsWithBraceExpansion(patterns);
            }
            if (settings.baseNameMatch) {
                patterns = patterns.map(function(pattern) {
                    return pattern.includes("/") ? pattern : "**/".concat(pattern);
                });
            }
            return patterns.map(function(pattern) {
                return utils.pattern.removeDuplicateSlashes(pattern);
            });
        };
        var convertPatternsToTasks = function convertPatternsToTasks(positive, negative, dynamic) {
            var _tasks;
            var tasks = [];
            var patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
            var patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
            var outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
            var insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
            (_tasks = tasks).push.apply(_tasks, _to_consumable_array(convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic)));
            if ("." in insideCurrentDirectoryGroup) {
                tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
            } else {
                var _tasks1;
                (_tasks1 = tasks).push.apply(_tasks1, _to_consumable_array(convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic)));
            }
            return tasks;
        };
        var getPositivePatterns = function getPositivePatterns(patterns) {
            return utils.pattern.getPositivePatterns(patterns);
        };
        var getNegativePatternsAsPositive = function getNegativePatternsAsPositive(patterns, ignore) {
            var negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
            var positive = negative.map(utils.pattern.convertToPositivePattern);
            return positive;
        };
        var groupPatternsByBaseDirectory = function groupPatternsByBaseDirectory(patterns) {
            var group = {};
            return patterns.reduce(function(collection, pattern) {
                var base = utils.pattern.getBaseDirectory(pattern);
                if (base in collection) {
                    collection[base].push(pattern);
                } else {
                    collection[base] = [
                        pattern
                    ];
                }
                return collection;
            }, group);
        };
        var convertPatternGroupsToTasks = function convertPatternGroupsToTasks(positive, negative, dynamic) {
            return Object.keys(positive).map(function(base) {
                return convertPatternGroupToTask(base, positive[base], negative, dynamic);
            });
        };
        var convertPatternGroupToTask = function convertPatternGroupToTask(base, positive, negative, dynamic) {
            return {
                dynamic: dynamic,
                positive: positive,
                negative: negative,
                base: base,
                patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
            };
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
        var utils = require_utils3();
        exports.generate = generate;
        exports.convertPatternsToTasks = convertPatternsToTasks;
        exports.getPositivePatterns = getPositivePatterns;
        exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
        exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
        exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
        exports.convertPatternGroupToTask = convertPatternGroupToTask;
    }
});
// node_modules/@nodelib/fs.stat/out/providers/async.js
var require_async = __commonJS({
    "node_modules/@nodelib/fs.stat/out/providers/async.js": function(exports) {
        "use strict";
        var read = function read(path4, settings, callback) {
            settings.fs.lstat(path4, function(lstatError, lstat) {
                if (lstatError !== null) {
                    callFailureCallback(callback, lstatError);
                    return;
                }
                if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
                    callSuccessCallback(callback, lstat);
                    return;
                }
                settings.fs.stat(path4, function(statError, stat) {
                    if (statError !== null) {
                        if (settings.throwErrorOnBrokenSymbolicLink) {
                            callFailureCallback(callback, statError);
                            return;
                        }
                        callSuccessCallback(callback, lstat);
                        return;
                    }
                    if (settings.markSymbolicLink) {
                        stat.isSymbolicLink = function() {
                            return true;
                        };
                    }
                    callSuccessCallback(callback, stat);
                });
            });
        };
        var callFailureCallback = function callFailureCallback(callback, error) {
            callback(error);
        };
        var callSuccessCallback = function callSuccessCallback(callback, result) {
            callback(null, result);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.read = void 0;
        exports.read = read;
    }
});
// node_modules/@nodelib/fs.stat/out/providers/sync.js
var require_sync = __commonJS({
    "node_modules/@nodelib/fs.stat/out/providers/sync.js": function(exports) {
        "use strict";
        var read = function read(path4, settings) {
            var lstat = settings.fs.lstatSync(path4);
            if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
                return lstat;
            }
            try {
                var stat = settings.fs.statSync(path4);
                if (settings.markSymbolicLink) {
                    stat.isSymbolicLink = function() {
                        return true;
                    };
                }
                return stat;
            } catch (error) {
                if (!settings.throwErrorOnBrokenSymbolicLink) {
                    return lstat;
                }
                throw error;
            }
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.read = void 0;
        exports.read = read;
    }
});
// node_modules/@nodelib/fs.stat/out/adapters/fs.js
var require_fs2 = __commonJS({
    "node_modules/@nodelib/fs.stat/out/adapters/fs.js": function(exports) {
        "use strict";
        var createFileSystemAdapter = function createFileSystemAdapter(fsMethods) {
            if (fsMethods === void 0) {
                return exports.FILE_SYSTEM_ADAPTER;
            }
            return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
        var fs6 = require("fs");
        exports.FILE_SYSTEM_ADAPTER = {
            lstat: fs6.lstat,
            stat: fs6.stat,
            lstatSync: fs6.lstatSync,
            statSync: fs6.statSync
        };
        exports.createFileSystemAdapter = createFileSystemAdapter;
    }
});
// node_modules/@nodelib/fs.stat/out/settings.js
var require_settings = __commonJS({
    "node_modules/@nodelib/fs.stat/out/settings.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var fs6 = require_fs2();
        var Settings = /*#__PURE__*/ function() {
            function Settings() {
                var _options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                _class_call_check(this, Settings);
                this._options = _options;
                this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
                this.fs = fs6.createFileSystemAdapter(this._options.fs);
                this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
                this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
            }
            _create_class(Settings, [
                {
                    key: "_getValue",
                    value: function _getValue(option, value) {
                        return option !== null && option !== void 0 ? option : value;
                    }
                }
            ]);
            return Settings;
        }();
        exports.default = Settings;
    }
});
// node_modules/@nodelib/fs.stat/out/index.js
var require_out = __commonJS({
    "node_modules/@nodelib/fs.stat/out/index.js": function(exports) {
        "use strict";
        var stat = function stat(path4, optionsOrSettingsOrCallback, callback) {
            if (typeof optionsOrSettingsOrCallback === "function") {
                async.read(path4, getSettings(), optionsOrSettingsOrCallback);
                return;
            }
            async.read(path4, getSettings(optionsOrSettingsOrCallback), callback);
        };
        var statSync = function statSync(path4, optionsOrSettings) {
            var settings = getSettings(optionsOrSettings);
            return sync.read(path4, settings);
        };
        var getSettings = function getSettings() {
            var settingsOrOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (_instanceof(settingsOrOptions, settings_1.default)) {
                return settingsOrOptions;
            }
            return new settings_1.default(settingsOrOptions);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.statSync = exports.stat = exports.Settings = void 0;
        var async = require_async();
        var sync = require_sync();
        var settings_1 = require_settings();
        exports.Settings = settings_1.default;
        exports.stat = stat;
        exports.statSync = statSync;
    }
});
// node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
    "node_modules/queue-microtask/index.js": function(exports, module2) {
        "use strict";
        var promise;
        module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : function(cb) {
            return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
                return setTimeout(function() {
                    throw err;
                }, 0);
            });
        };
    }
});
// node_modules/run-parallel/index.js
var require_run_parallel = __commonJS({
    "node_modules/run-parallel/index.js": function(exports, module2) {
        "use strict";
        var runParallel = function runParallel(tasks, cb) {
            var results, pending, keys;
            var isSync = true;
            if (Array.isArray(tasks)) {
                results = [];
                pending = tasks.length;
            } else {
                keys = Object.keys(tasks);
                results = {};
                pending = keys.length;
            }
            function done(err) {
                function end() {
                    if (cb) cb(err, results);
                    cb = null;
                }
                if (isSync) queueMicrotask2(end);
                else end();
            }
            function each(i, err, result) {
                results[i] = result;
                if (--pending === 0 || err) {
                    done(err);
                }
            }
            if (!pending) {
                done(null);
            } else if (keys) {
                keys.forEach(function(key) {
                    tasks[key](function(err, result) {
                        each(key, err, result);
                    });
                });
            } else {
                tasks.forEach(function(task, i) {
                    task(function(err, result) {
                        each(i, err, result);
                    });
                });
            }
            isSync = false;
        };
        module2.exports = runParallel;
        var queueMicrotask2 = require_queue_microtask();
    }
});
// node_modules/@nodelib/fs.scandir/out/constants.js
var require_constants3 = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/constants.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
        var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
        if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
            throw new Error("Unexpected behavior. The 'process.versions.node' variable has invalid value: ".concat(process.versions.node));
        }
        var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
        var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
        var SUPPORTED_MAJOR_VERSION = 10;
        var SUPPORTED_MINOR_VERSION = 10;
        var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
        var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
        exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
    }
});
// node_modules/@nodelib/fs.scandir/out/utils/fs.js
var require_fs3 = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/utils/fs.js": function(exports) {
        "use strict";
        var createDirentFromStats = function createDirentFromStats(name, stats) {
            return new DirentFromStats(name, stats);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createDirentFromStats = void 0;
        var DirentFromStats = function DirentFromStats(name, stats) {
            _class_call_check(this, DirentFromStats);
            this.name = name;
            this.isBlockDevice = stats.isBlockDevice.bind(stats);
            this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
            this.isDirectory = stats.isDirectory.bind(stats);
            this.isFIFO = stats.isFIFO.bind(stats);
            this.isFile = stats.isFile.bind(stats);
            this.isSocket = stats.isSocket.bind(stats);
            this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
        };
        exports.createDirentFromStats = createDirentFromStats;
    }
});
// node_modules/@nodelib/fs.scandir/out/utils/index.js
var require_utils4 = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/utils/index.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.fs = void 0;
        var fs6 = require_fs3();
        exports.fs = fs6;
    }
});
// node_modules/@nodelib/fs.scandir/out/providers/common.js
var require_common = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/providers/common.js": function(exports) {
        "use strict";
        var joinPathSegments = function joinPathSegments(a, b, separator) {
            if (a.endsWith(separator)) {
                return a + b;
            }
            return a + separator + b;
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.joinPathSegments = void 0;
        exports.joinPathSegments = joinPathSegments;
    }
});
// node_modules/@nodelib/fs.scandir/out/providers/async.js
var require_async2 = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/providers/async.js": function(exports) {
        "use strict";
        var read = function read(directory, settings, callback) {
            if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
                readdirWithFileTypes(directory, settings, callback);
                return;
            }
            readdir(directory, settings, callback);
        };
        var readdirWithFileTypes = function readdirWithFileTypes(directory, settings, callback) {
            settings.fs.readdir(directory, {
                withFileTypes: true
            }, function(readdirError, dirents) {
                if (readdirError !== null) {
                    callFailureCallback(callback, readdirError);
                    return;
                }
                var entries = dirents.map(function(dirent) {
                    return {
                        dirent: dirent,
                        name: dirent.name,
                        path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
                    };
                });
                if (!settings.followSymbolicLinks) {
                    callSuccessCallback(callback, entries);
                    return;
                }
                var tasks = entries.map(function(entry) {
                    return makeRplTaskEntry(entry, settings);
                });
                rpl(tasks, function(rplError, rplEntries) {
                    if (rplError !== null) {
                        callFailureCallback(callback, rplError);
                        return;
                    }
                    callSuccessCallback(callback, rplEntries);
                });
            });
        };
        var makeRplTaskEntry = function makeRplTaskEntry(entry, settings) {
            return function(done) {
                if (!entry.dirent.isSymbolicLink()) {
                    done(null, entry);
                    return;
                }
                settings.fs.stat(entry.path, function(statError, stats) {
                    if (statError !== null) {
                        if (settings.throwErrorOnBrokenSymbolicLink) {
                            done(statError);
                            return;
                        }
                        done(null, entry);
                        return;
                    }
                    entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
                    done(null, entry);
                });
            };
        };
        var readdir = function readdir(directory, settings, callback) {
            settings.fs.readdir(directory, function(readdirError, names) {
                if (readdirError !== null) {
                    callFailureCallback(callback, readdirError);
                    return;
                }
                var tasks = names.map(function(name) {
                    var path4 = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
                    return function(done) {
                        fsStat.stat(path4, settings.fsStatSettings, function(error, stats) {
                            if (error !== null) {
                                done(error);
                                return;
                            }
                            var entry = {
                                name: name,
                                path: path4,
                                dirent: utils.fs.createDirentFromStats(name, stats)
                            };
                            if (settings.stats) {
                                entry.stats = stats;
                            }
                            done(null, entry);
                        });
                    };
                });
                rpl(tasks, function(rplError, entries) {
                    if (rplError !== null) {
                        callFailureCallback(callback, rplError);
                        return;
                    }
                    callSuccessCallback(callback, entries);
                });
            });
        };
        var callFailureCallback = function callFailureCallback(callback, error) {
            callback(error);
        };
        var callSuccessCallback = function callSuccessCallback(callback, result) {
            callback(null, result);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
        var fsStat = require_out();
        var rpl = require_run_parallel();
        var constants_1 = require_constants3();
        var utils = require_utils4();
        var common = require_common();
        exports.read = read;
        exports.readdirWithFileTypes = readdirWithFileTypes;
        exports.readdir = readdir;
    }
});
// node_modules/@nodelib/fs.scandir/out/providers/sync.js
var require_sync2 = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/providers/sync.js": function(exports) {
        "use strict";
        var read = function read(directory, settings) {
            if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
                return readdirWithFileTypes(directory, settings);
            }
            return readdir(directory, settings);
        };
        var readdirWithFileTypes = function readdirWithFileTypes(directory, settings) {
            var dirents = settings.fs.readdirSync(directory, {
                withFileTypes: true
            });
            return dirents.map(function(dirent) {
                var entry = {
                    dirent: dirent,
                    name: dirent.name,
                    path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
                };
                if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
                    try {
                        var stats = settings.fs.statSync(entry.path);
                        entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
                    } catch (error) {
                        if (settings.throwErrorOnBrokenSymbolicLink) {
                            throw error;
                        }
                    }
                }
                return entry;
            });
        };
        var readdir = function readdir(directory, settings) {
            var names = settings.fs.readdirSync(directory);
            return names.map(function(name) {
                var entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
                var stats = fsStat.statSync(entryPath, settings.fsStatSettings);
                var entry = {
                    name: name,
                    path: entryPath,
                    dirent: utils.fs.createDirentFromStats(name, stats)
                };
                if (settings.stats) {
                    entry.stats = stats;
                }
                return entry;
            });
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
        var fsStat = require_out();
        var constants_1 = require_constants3();
        var utils = require_utils4();
        var common = require_common();
        exports.read = read;
        exports.readdirWithFileTypes = readdirWithFileTypes;
        exports.readdir = readdir;
    }
});
// node_modules/@nodelib/fs.scandir/out/adapters/fs.js
var require_fs4 = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/adapters/fs.js": function(exports) {
        "use strict";
        var createFileSystemAdapter = function createFileSystemAdapter(fsMethods) {
            if (fsMethods === void 0) {
                return exports.FILE_SYSTEM_ADAPTER;
            }
            return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
        var fs6 = require("fs");
        exports.FILE_SYSTEM_ADAPTER = {
            lstat: fs6.lstat,
            stat: fs6.stat,
            lstatSync: fs6.lstatSync,
            statSync: fs6.statSync,
            readdir: fs6.readdir,
            readdirSync: fs6.readdirSync
        };
        exports.createFileSystemAdapter = createFileSystemAdapter;
    }
});
// node_modules/@nodelib/fs.scandir/out/settings.js
var require_settings2 = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/settings.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var path4 = require("path");
        var fsStat = require_out();
        var fs6 = require_fs4();
        var Settings = /*#__PURE__*/ function() {
            function Settings() {
                var _options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                _class_call_check(this, Settings);
                this._options = _options;
                this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
                this.fs = fs6.createFileSystemAdapter(this._options.fs);
                this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path4.sep);
                this.stats = this._getValue(this._options.stats, false);
                this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
                this.fsStatSettings = new fsStat.Settings({
                    followSymbolicLink: this.followSymbolicLinks,
                    fs: this.fs,
                    throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
                });
            }
            _create_class(Settings, [
                {
                    key: "_getValue",
                    value: function _getValue(option, value) {
                        return option !== null && option !== void 0 ? option : value;
                    }
                }
            ]);
            return Settings;
        }();
        exports.default = Settings;
    }
});
// node_modules/@nodelib/fs.scandir/out/index.js
var require_out2 = __commonJS({
    "node_modules/@nodelib/fs.scandir/out/index.js": function(exports) {
        "use strict";
        var scandir = function scandir(path4, optionsOrSettingsOrCallback, callback) {
            if (typeof optionsOrSettingsOrCallback === "function") {
                async.read(path4, getSettings(), optionsOrSettingsOrCallback);
                return;
            }
            async.read(path4, getSettings(optionsOrSettingsOrCallback), callback);
        };
        var scandirSync = function scandirSync(path4, optionsOrSettings) {
            var settings = getSettings(optionsOrSettings);
            return sync.read(path4, settings);
        };
        var getSettings = function getSettings() {
            var settingsOrOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (_instanceof(settingsOrOptions, settings_1.default)) {
                return settingsOrOptions;
            }
            return new settings_1.default(settingsOrOptions);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Settings = exports.scandirSync = exports.scandir = void 0;
        var async = require_async2();
        var sync = require_sync2();
        var settings_1 = require_settings2();
        exports.Settings = settings_1.default;
        exports.scandir = scandir;
        exports.scandirSync = scandirSync;
    }
});
// node_modules/reusify/reusify.js
var require_reusify = __commonJS({
    "node_modules/reusify/reusify.js": function(exports, module2) {
        "use strict";
        var reusify = function reusify(Constructor) {
            var head = new Constructor();
            var tail = head;
            function get() {
                var current = head;
                if (current.next) {
                    head = current.next;
                } else {
                    head = new Constructor();
                    tail = head;
                }
                current.next = null;
                return current;
            }
            function release(obj) {
                tail.next = obj;
                tail = obj;
            }
            return {
                get: get,
                release: release
            };
        };
        module2.exports = reusify;
    }
});
// node_modules/fastq/queue.js
var require_queue = __commonJS({
    "node_modules/fastq/queue.js": function(exports, module2) {
        "use strict";
        var fastqueue = function fastqueue(context, worker, concurrency) {
            if (typeof context === "function") {
                concurrency = worker;
                worker = context;
                context = null;
            }
            if (concurrency < 1) {
                throw new Error("fastqueue concurrency must be greater than 1");
            }
            var cache = reusify(Task);
            var queueHead = null;
            var queueTail = null;
            var _running = 0;
            var errorHandler = null;
            var self = {
                push: push,
                drain: noop2,
                saturated: noop2,
                pause: pause,
                paused: false,
                concurrency: concurrency,
                running: running,
                resume: resume,
                idle: idle,
                length: length,
                getQueue: getQueue,
                unshift: unshift,
                empty: noop2,
                kill: kill,
                killAndDrain: killAndDrain,
                error: error
            };
            return self;
            function running() {
                return _running;
            }
            function pause() {
                self.paused = true;
            }
            function length() {
                var current = queueHead;
                var counter = 0;
                while(current){
                    current = current.next;
                    counter++;
                }
                return counter;
            }
            function getQueue() {
                var current = queueHead;
                var tasks = [];
                while(current){
                    tasks.push(current.value);
                    current = current.next;
                }
                return tasks;
            }
            function resume() {
                if (!self.paused) return;
                self.paused = false;
                for(var i = 0; i < self.concurrency; i++){
                    _running++;
                    release();
                }
            }
            function idle() {
                return _running === 0 && self.length() === 0;
            }
            function push(value, done) {
                var current = cache.get();
                current.context = context;
                current.release = release;
                current.value = value;
                current.callback = done || noop2;
                current.errorHandler = errorHandler;
                if (_running === self.concurrency || self.paused) {
                    if (queueTail) {
                        queueTail.next = current;
                        queueTail = current;
                    } else {
                        queueHead = current;
                        queueTail = current;
                        self.saturated();
                    }
                } else {
                    _running++;
                    worker.call(context, current.value, current.worked);
                }
            }
            function unshift(value, done) {
                var current = cache.get();
                current.context = context;
                current.release = release;
                current.value = value;
                current.callback = done || noop2;
                if (_running === self.concurrency || self.paused) {
                    if (queueHead) {
                        current.next = queueHead;
                        queueHead = current;
                    } else {
                        queueHead = current;
                        queueTail = current;
                        self.saturated();
                    }
                } else {
                    _running++;
                    worker.call(context, current.value, current.worked);
                }
            }
            function release(holder) {
                if (holder) {
                    cache.release(holder);
                }
                var next = queueHead;
                if (next) {
                    if (!self.paused) {
                        if (queueTail === queueHead) {
                            queueTail = null;
                        }
                        queueHead = next.next;
                        next.next = null;
                        worker.call(context, next.value, next.worked);
                        if (queueTail === null) {
                            self.empty();
                        }
                    } else {
                        _running--;
                    }
                } else if (--_running === 0) {
                    self.drain();
                }
            }
            function kill() {
                queueHead = null;
                queueTail = null;
                self.drain = noop2;
            }
            function killAndDrain() {
                queueHead = null;
                queueTail = null;
                self.drain();
                self.drain = noop2;
            }
            function error(handler) {
                errorHandler = handler;
            }
        };
        var noop2 = function noop2() {};
        var Task = function Task() {
            this.value = null;
            this.callback = noop2;
            this.next = null;
            this.release = noop2;
            this.context = null;
            this.errorHandler = null;
            var self = this;
            this.worked = function worked(err, result) {
                var callback = self.callback;
                var errorHandler = self.errorHandler;
                var val = self.value;
                self.value = null;
                self.callback = noop2;
                if (self.errorHandler) {
                    errorHandler(err, val);
                }
                callback.call(self.context, err, result);
                self.release(self);
            };
        };
        var queueAsPromised = function queueAsPromised(context, worker, concurrency) {
            if (typeof context === "function") {
                concurrency = worker;
                worker = context;
                context = null;
            }
            function asyncWrapper(arg, cb) {
                worker.call(this, arg).then(function(res) {
                    cb(null, res);
                }, cb);
            }
            var queue = fastqueue(context, asyncWrapper, concurrency);
            var pushCb = queue.push;
            var unshiftCb = queue.unshift;
            queue.push = push;
            queue.unshift = unshift;
            queue.drained = drained;
            return queue;
            function push(value) {
                var p = new Promise(function(resolve, reject) {
                    pushCb(value, function(err, result) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(result);
                    });
                });
                p.catch(noop2);
                return p;
            }
            function unshift(value) {
                var p = new Promise(function(resolve, reject) {
                    unshiftCb(value, function(err, result) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(result);
                    });
                });
                p.catch(noop2);
                return p;
            }
            function drained() {
                if (queue.idle()) {
                    return new Promise(function(resolve) {
                        resolve();
                    });
                }
                var previousDrain = queue.drain;
                var p = new Promise(function(resolve) {
                    queue.drain = function() {
                        previousDrain();
                        resolve();
                    };
                });
                return p;
            }
        };
        var reusify = require_reusify();
        module2.exports = fastqueue;
        module2.exports.promise = queueAsPromised;
    }
});
// node_modules/@nodelib/fs.walk/out/readers/common.js
var require_common2 = __commonJS({
    "node_modules/@nodelib/fs.walk/out/readers/common.js": function(exports) {
        "use strict";
        var isFatalError = function isFatalError(settings, error) {
            if (settings.errorFilter === null) {
                return true;
            }
            return !settings.errorFilter(error);
        };
        var isAppliedFilter = function isAppliedFilter(filter, value) {
            return filter === null || filter(value);
        };
        var replacePathSegmentSeparator = function replacePathSegmentSeparator(filepath, separator) {
            return filepath.split(/[/\\]/).join(separator);
        };
        var joinPathSegments = function joinPathSegments(a, b, separator) {
            if (a === "") {
                return b;
            }
            if (a.endsWith(separator)) {
                return a + b;
            }
            return a + separator + b;
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
        exports.isFatalError = isFatalError;
        exports.isAppliedFilter = isAppliedFilter;
        exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
        exports.joinPathSegments = joinPathSegments;
    }
});
// node_modules/@nodelib/fs.walk/out/readers/reader.js
var require_reader = __commonJS({
    "node_modules/@nodelib/fs.walk/out/readers/reader.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var common = require_common2();
        var Reader = function Reader(_root, _settings) {
            _class_call_check(this, Reader);
            this._root = _root;
            this._settings = _settings;
            this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
        };
        exports.default = Reader;
    }
});
// node_modules/@nodelib/fs.walk/out/readers/async.js
var require_async3 = __commonJS({
    "node_modules/@nodelib/fs.walk/out/readers/async.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var events_1 = require("events");
        var fsScandir = require_out2();
        var fastq = require_queue();
        var common = require_common2();
        var reader_1 = require_reader();
        var AsyncReader = /*#__PURE__*/ function(_reader_1_default) {
            _inherits(AsyncReader, _reader_1_default);
            var _super = _create_super(AsyncReader);
            function AsyncReader(_root, _settings) {
                _class_call_check(this, AsyncReader);
                var _this;
                _this = _super.call(this, _root, _settings);
                _this._settings = _settings;
                _this._scandir = fsScandir.scandir;
                _this._emitter = new events_1.EventEmitter();
                _this._queue = fastq(_this._worker.bind(_assert_this_initialized(_this)), _this._settings.concurrency);
                _this._isFatalError = false;
                _this._isDestroyed = false;
                _this._queue.drain = function() {
                    if (!_this._isFatalError) {
                        _this._emitter.emit("end");
                    }
                };
                return _this;
            }
            _create_class(AsyncReader, [
                {
                    key: "read",
                    value: function read() {
                        var _this = this;
                        this._isFatalError = false;
                        this._isDestroyed = false;
                        setImmediate(function() {
                            _this._pushToQueue(_this._root, _this._settings.basePath);
                        });
                        return this._emitter;
                    }
                },
                {
                    key: "isDestroyed",
                    get: function get() {
                        return this._isDestroyed;
                    }
                },
                {
                    key: "destroy",
                    value: function destroy() {
                        if (this._isDestroyed) {
                            throw new Error("The reader is already destroyed");
                        }
                        this._isDestroyed = true;
                        this._queue.killAndDrain();
                    }
                },
                {
                    key: "onEntry",
                    value: function onEntry(callback) {
                        this._emitter.on("entry", callback);
                    }
                },
                {
                    key: "onError",
                    value: function onError(callback) {
                        this._emitter.once("error", callback);
                    }
                },
                {
                    key: "onEnd",
                    value: function onEnd(callback) {
                        this._emitter.once("end", callback);
                    }
                },
                {
                    key: "_pushToQueue",
                    value: function _pushToQueue(directory, base) {
                        var _this = this;
                        var queueItem = {
                            directory: directory,
                            base: base
                        };
                        this._queue.push(queueItem, function(error) {
                            if (error !== null) {
                                _this._handleError(error);
                            }
                        });
                    }
                },
                {
                    key: "_worker",
                    value: function _worker(item, done) {
                        var _this = this;
                        this._scandir(item.directory, this._settings.fsScandirSettings, function(error, entries) {
                            if (error !== null) {
                                done(error, void 0);
                                return;
                            }
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var entry = _step.value;
                                    _this._handleEntry(entry, item.base);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                            done(null, void 0);
                        });
                    }
                },
                {
                    key: "_handleError",
                    value: function _handleError(error) {
                        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
                            return;
                        }
                        this._isFatalError = true;
                        this._isDestroyed = true;
                        this._emitter.emit("error", error);
                    }
                },
                {
                    key: "_handleEntry",
                    value: function _handleEntry(entry, base) {
                        if (this._isDestroyed || this._isFatalError) {
                            return;
                        }
                        var fullpath = entry.path;
                        if (base !== void 0) {
                            entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
                        }
                        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
                            this._emitEntry(entry);
                        }
                        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
                            this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
                        }
                    }
                },
                {
                    key: "_emitEntry",
                    value: function _emitEntry(entry) {
                        this._emitter.emit("entry", entry);
                    }
                }
            ]);
            return AsyncReader;
        }(reader_1.default);
        exports.default = AsyncReader;
    }
});
// node_modules/@nodelib/fs.walk/out/providers/async.js
var require_async4 = __commonJS({
    "node_modules/@nodelib/fs.walk/out/providers/async.js": function(exports) {
        "use strict";
        var callFailureCallback = function callFailureCallback(callback, error) {
            callback(error);
        };
        var callSuccessCallback = function callSuccessCallback(callback, entries) {
            callback(null, entries);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var async_1 = require_async3();
        var AsyncProvider = /*#__PURE__*/ function() {
            function AsyncProvider(_root, _settings) {
                _class_call_check(this, AsyncProvider);
                this._root = _root;
                this._settings = _settings;
                this._reader = new async_1.default(this._root, this._settings);
                this._storage = [];
            }
            _create_class(AsyncProvider, [
                {
                    key: "read",
                    value: function read(callback) {
                        var _this = this;
                        this._reader.onError(function(error) {
                            callFailureCallback(callback, error);
                        });
                        this._reader.onEntry(function(entry) {
                            _this._storage.push(entry);
                        });
                        this._reader.onEnd(function() {
                            callSuccessCallback(callback, _this._storage);
                        });
                        this._reader.read();
                    }
                }
            ]);
            return AsyncProvider;
        }();
        exports.default = AsyncProvider;
    }
});
// node_modules/@nodelib/fs.walk/out/providers/stream.js
var require_stream2 = __commonJS({
    "node_modules/@nodelib/fs.walk/out/providers/stream.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var stream_1 = require("stream");
        var async_1 = require_async3();
        var StreamProvider = /*#__PURE__*/ function() {
            function StreamProvider(_root, _settings) {
                var _this = this;
                _class_call_check(this, StreamProvider);
                this._root = _root;
                this._settings = _settings;
                this._reader = new async_1.default(this._root, this._settings);
                this._stream = new stream_1.Readable({
                    objectMode: true,
                    read: function() {},
                    destroy: function() {
                        if (!_this._reader.isDestroyed) {
                            _this._reader.destroy();
                        }
                    }
                });
            }
            _create_class(StreamProvider, [
                {
                    key: "read",
                    value: function read() {
                        var _this = this;
                        this._reader.onError(function(error) {
                            _this._stream.emit("error", error);
                        });
                        this._reader.onEntry(function(entry) {
                            _this._stream.push(entry);
                        });
                        this._reader.onEnd(function() {
                            _this._stream.push(null);
                        });
                        this._reader.read();
                        return this._stream;
                    }
                }
            ]);
            return StreamProvider;
        }();
        exports.default = StreamProvider;
    }
});
// node_modules/@nodelib/fs.walk/out/readers/sync.js
var require_sync3 = __commonJS({
    "node_modules/@nodelib/fs.walk/out/readers/sync.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var fsScandir = require_out2();
        var common = require_common2();
        var reader_1 = require_reader();
        var SyncReader = /*#__PURE__*/ function(_reader_1_default) {
            _inherits(SyncReader, _reader_1_default);
            var _super = _create_super(SyncReader);
            function SyncReader() {
                _class_call_check(this, SyncReader);
                var _this;
                _this = _super.call.apply(_super, [
                    this
                ].concat(Array.prototype.slice.call(arguments)));
                _this._scandir = fsScandir.scandirSync;
                _this._storage = [];
                _this._queue = /* @__PURE__ */ new Set();
                return _this;
            }
            _create_class(SyncReader, [
                {
                    key: "read",
                    value: function read() {
                        this._pushToQueue(this._root, this._settings.basePath);
                        this._handleQueue();
                        return this._storage;
                    }
                },
                {
                    key: "_pushToQueue",
                    value: function _pushToQueue(directory, base) {
                        this._queue.add({
                            directory: directory,
                            base: base
                        });
                    }
                },
                {
                    key: "_handleQueue",
                    value: function _handleQueue() {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = this._queue.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var item = _step.value;
                                this._handleDirectory(item.directory, item.base);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                },
                {
                    key: "_handleDirectory",
                    value: function _handleDirectory(directory, base) {
                        try {
                            var entries = this._scandir(directory, this._settings.fsScandirSettings);
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var entry = _step.value;
                                    this._handleEntry(entry, base);
                                }
                            } catch (err) {
                                _didIteratorError = true;
                                _iteratorError = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                            }
                        } catch (error) {
                            this._handleError(error);
                        }
                    }
                },
                {
                    key: "_handleError",
                    value: function _handleError(error) {
                        if (!common.isFatalError(this._settings, error)) {
                            return;
                        }
                        throw error;
                    }
                },
                {
                    key: "_handleEntry",
                    value: function _handleEntry(entry, base) {
                        var fullpath = entry.path;
                        if (base !== void 0) {
                            entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
                        }
                        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
                            this._pushToStorage(entry);
                        }
                        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
                            this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
                        }
                    }
                },
                {
                    key: "_pushToStorage",
                    value: function _pushToStorage(entry) {
                        this._storage.push(entry);
                    }
                }
            ]);
            return SyncReader;
        }(reader_1.default);
        exports.default = SyncReader;
    }
});
// node_modules/@nodelib/fs.walk/out/providers/sync.js
var require_sync4 = __commonJS({
    "node_modules/@nodelib/fs.walk/out/providers/sync.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var sync_1 = require_sync3();
        var SyncProvider = /*#__PURE__*/ function() {
            function SyncProvider(_root, _settings) {
                _class_call_check(this, SyncProvider);
                this._root = _root;
                this._settings = _settings;
                this._reader = new sync_1.default(this._root, this._settings);
            }
            _create_class(SyncProvider, [
                {
                    key: "read",
                    value: function read() {
                        return this._reader.read();
                    }
                }
            ]);
            return SyncProvider;
        }();
        exports.default = SyncProvider;
    }
});
// node_modules/@nodelib/fs.walk/out/settings.js
var require_settings3 = __commonJS({
    "node_modules/@nodelib/fs.walk/out/settings.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var path4 = require("path");
        var fsScandir = require_out2();
        var Settings = /*#__PURE__*/ function() {
            function Settings() {
                var _options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                _class_call_check(this, Settings);
                this._options = _options;
                this.basePath = this._getValue(this._options.basePath, void 0);
                this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
                this.deepFilter = this._getValue(this._options.deepFilter, null);
                this.entryFilter = this._getValue(this._options.entryFilter, null);
                this.errorFilter = this._getValue(this._options.errorFilter, null);
                this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path4.sep);
                this.fsScandirSettings = new fsScandir.Settings({
                    followSymbolicLinks: this._options.followSymbolicLinks,
                    fs: this._options.fs,
                    pathSegmentSeparator: this._options.pathSegmentSeparator,
                    stats: this._options.stats,
                    throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
                });
            }
            _create_class(Settings, [
                {
                    key: "_getValue",
                    value: function _getValue(option, value) {
                        return option !== null && option !== void 0 ? option : value;
                    }
                }
            ]);
            return Settings;
        }();
        exports.default = Settings;
    }
});
// node_modules/@nodelib/fs.walk/out/index.js
var require_out3 = __commonJS({
    "node_modules/@nodelib/fs.walk/out/index.js": function(exports) {
        "use strict";
        var walk = function walk(directory, optionsOrSettingsOrCallback, callback) {
            if (typeof optionsOrSettingsOrCallback === "function") {
                new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
                return;
            }
            new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
        };
        var walkSync = function walkSync(directory, optionsOrSettings) {
            var settings = getSettings(optionsOrSettings);
            var provider = new sync_1.default(directory, settings);
            return provider.read();
        };
        var walkStream = function walkStream(directory, optionsOrSettings) {
            var settings = getSettings(optionsOrSettings);
            var provider = new stream_1.default(directory, settings);
            return provider.read();
        };
        var getSettings = function getSettings() {
            var settingsOrOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (_instanceof(settingsOrOptions, settings_1.default)) {
                return settingsOrOptions;
            }
            return new settings_1.default(settingsOrOptions);
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
        var async_1 = require_async4();
        var stream_1 = require_stream2();
        var sync_1 = require_sync4();
        var settings_1 = require_settings3();
        exports.Settings = settings_1.default;
        exports.walk = walk;
        exports.walkSync = walkSync;
        exports.walkStream = walkStream;
    }
});
// node_modules/fast-glob/out/readers/reader.js
var require_reader2 = __commonJS({
    "node_modules/fast-glob/out/readers/reader.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var path4 = require("path");
        var fsStat = require_out();
        var utils = require_utils3();
        var Reader = /*#__PURE__*/ function() {
            function Reader(_settings) {
                _class_call_check(this, Reader);
                this._settings = _settings;
                this._fsStatSettings = new fsStat.Settings({
                    followSymbolicLink: this._settings.followSymbolicLinks,
                    fs: this._settings.fs,
                    throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
                });
            }
            _create_class(Reader, [
                {
                    key: "_getFullEntryPath",
                    value: function _getFullEntryPath(filepath) {
                        return path4.resolve(this._settings.cwd, filepath);
                    }
                },
                {
                    key: "_makeEntry",
                    value: function _makeEntry(stats, pattern) {
                        var entry = {
                            name: pattern,
                            path: pattern,
                            dirent: utils.fs.createDirentFromStats(pattern, stats)
                        };
                        if (this._settings.stats) {
                            entry.stats = stats;
                        }
                        return entry;
                    }
                },
                {
                    key: "_isFatalError",
                    value: function _isFatalError(error) {
                        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
                    }
                }
            ]);
            return Reader;
        }();
        exports.default = Reader;
    }
});
// node_modules/fast-glob/out/readers/stream.js
var require_stream3 = __commonJS({
    "node_modules/fast-glob/out/readers/stream.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var stream_1 = require("stream");
        var fsStat = require_out();
        var fsWalk = require_out3();
        var reader_1 = require_reader2();
        var ReaderStream = /*#__PURE__*/ function(_reader_1_default) {
            _inherits(ReaderStream, _reader_1_default);
            var _super = _create_super(ReaderStream);
            function ReaderStream() {
                _class_call_check(this, ReaderStream);
                var _this;
                _this = _super.call.apply(_super, [
                    this
                ].concat(Array.prototype.slice.call(arguments)));
                _this._walkStream = fsWalk.walkStream;
                _this._stat = fsStat.stat;
                return _this;
            }
            _create_class(ReaderStream, [
                {
                    key: "dynamic",
                    value: function dynamic(root, options) {
                        return this._walkStream(root, options);
                    }
                },
                {
                    key: "static",
                    value: function _static(patterns, options) {
                        var _this = this;
                        var filepaths = patterns.map(this._getFullEntryPath, this);
                        var stream = new stream_1.PassThrough({
                            objectMode: true
                        });
                        stream._write = function(index, _enc, done) {
                            return _this._getEntry(filepaths[index], patterns[index], options).then(function(entry) {
                                if (entry !== null && options.entryFilter(entry)) {
                                    stream.push(entry);
                                }
                                if (index === filepaths.length - 1) {
                                    stream.end();
                                }
                                done();
                            }).catch(done);
                        };
                        for(var i = 0; i < filepaths.length; i++){
                            stream.write(i);
                        }
                        return stream;
                    }
                },
                {
                    key: "_getEntry",
                    value: function _getEntry(filepath, pattern, options) {
                        var _this = this;
                        return this._getStat(filepath).then(function(stats) {
                            return _this._makeEntry(stats, pattern);
                        }).catch(function(error) {
                            if (options.errorFilter(error)) {
                                return null;
                            }
                            throw error;
                        });
                    }
                },
                {
                    key: "_getStat",
                    value: function _getStat(filepath) {
                        var _this = this;
                        return new Promise(function(resolve, reject) {
                            _this._stat(filepath, _this._fsStatSettings, function(error, stats) {
                                return error === null ? resolve(stats) : reject(error);
                            });
                        });
                    }
                }
            ]);
            return ReaderStream;
        }(reader_1.default);
        exports.default = ReaderStream;
    }
});
// node_modules/fast-glob/out/readers/async.js
var require_async5 = __commonJS({
    "node_modules/fast-glob/out/readers/async.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var fsWalk = require_out3();
        var reader_1 = require_reader2();
        var stream_1 = require_stream3();
        var ReaderAsync = /*#__PURE__*/ function(_reader_1_default) {
            _inherits(ReaderAsync, _reader_1_default);
            var _super = _create_super(ReaderAsync);
            function ReaderAsync() {
                _class_call_check(this, ReaderAsync);
                var _this;
                _this = _super.call.apply(_super, [
                    this
                ].concat(Array.prototype.slice.call(arguments)));
                _this._walkAsync = fsWalk.walk;
                _this._readerStream = new stream_1.default(_this._settings);
                return _this;
            }
            _create_class(ReaderAsync, [
                {
                    key: "dynamic",
                    value: function dynamic(root, options) {
                        var _this = this;
                        return new Promise(function(resolve, reject) {
                            _this._walkAsync(root, options, function(error, entries) {
                                if (error === null) {
                                    resolve(entries);
                                } else {
                                    reject(error);
                                }
                            });
                        });
                    }
                },
                {
                    key: "static",
                    value: function _static(patterns, options) {
                        var _this = this;
                        return _async_to_generator(function() {
                            var entries, stream;
                            return _ts_generator(this, function(_state) {
                                entries = [];
                                stream = _this._readerStream.static(patterns, options);
                                return [
                                    2,
                                    new Promise(function(resolve, reject) {
                                        stream.once("error", reject);
                                        stream.on("data", function(entry) {
                                            return entries.push(entry);
                                        });
                                        stream.once("end", function() {
                                            return resolve(entries);
                                        });
                                    })
                                ];
                            });
                        })();
                    }
                }
            ]);
            return ReaderAsync;
        }(reader_1.default);
        exports.default = ReaderAsync;
    }
});
// node_modules/fast-glob/out/providers/matchers/matcher.js
var require_matcher = __commonJS({
    "node_modules/fast-glob/out/providers/matchers/matcher.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var utils = require_utils3();
        var Matcher = /*#__PURE__*/ function() {
            function Matcher(_patterns, _settings, _micromatchOptions) {
                _class_call_check(this, Matcher);
                this._patterns = _patterns;
                this._settings = _settings;
                this._micromatchOptions = _micromatchOptions;
                this._storage = [];
                this._fillStorage();
            }
            _create_class(Matcher, [
                {
                    key: "_fillStorage",
                    value: function _fillStorage() {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = this._patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var pattern = _step.value;
                                var segments = this._getPatternSegments(pattern);
                                var sections = this._splitSegmentsIntoSections(segments);
                                this._storage.push({
                                    complete: sections.length <= 1,
                                    pattern: pattern,
                                    segments: segments,
                                    sections: sections
                                });
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                },
                {
                    key: "_getPatternSegments",
                    value: function _getPatternSegments(pattern) {
                        var _this = this;
                        var parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
                        return parts.map(function(part) {
                            var dynamic = utils.pattern.isDynamicPattern(part, _this._settings);
                            if (!dynamic) {
                                return {
                                    dynamic: false,
                                    pattern: part
                                };
                            }
                            return {
                                dynamic: true,
                                pattern: part,
                                patternRe: utils.pattern.makeRe(part, _this._micromatchOptions)
                            };
                        });
                    }
                },
                {
                    key: "_splitSegmentsIntoSections",
                    value: function _splitSegmentsIntoSections(segments) {
                        return utils.array.splitWhen(segments, function(segment) {
                            return segment.dynamic && utils.pattern.hasGlobStar(segment.pattern);
                        });
                    }
                }
            ]);
            return Matcher;
        }();
        exports.default = Matcher;
    }
});
// node_modules/fast-glob/out/providers/matchers/partial.js
var require_partial = __commonJS({
    "node_modules/fast-glob/out/providers/matchers/partial.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var matcher_1 = require_matcher();
        var PartialMatcher = /*#__PURE__*/ function(_matcher_1_default) {
            _inherits(PartialMatcher, _matcher_1_default);
            var _super = _create_super(PartialMatcher);
            function PartialMatcher() {
                _class_call_check(this, PartialMatcher);
                return _super.apply(this, arguments);
            }
            _create_class(PartialMatcher, [
                {
                    key: "match",
                    value: function match(filepath) {
                        var parts = filepath.split("/");
                        var levels = parts.length;
                        var patterns = this._storage.filter(function(info) {
                            return !info.complete || info.segments.length > levels;
                        });
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            var _loop = function() {
                                var pattern = _step.value;
                                var section = pattern.sections[0];
                                if (!pattern.complete && levels > section.length) {
                                    return {
                                        v: true
                                    };
                                }
                                var match = parts.every(function(part, index) {
                                    var segment = pattern.segments[index];
                                    if (segment.dynamic && segment.patternRe.test(part)) {
                                        return true;
                                    }
                                    if (!segment.dynamic && segment.pattern === part) {
                                        return true;
                                    }
                                    return false;
                                });
                                if (match) {
                                    return {
                                        v: true
                                    };
                                }
                            };
                            for(var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var _ret = _loop();
                                if (_type_of(_ret) === "object") return _ret.v;
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return false;
                    }
                }
            ]);
            return PartialMatcher;
        }(matcher_1.default);
        exports.default = PartialMatcher;
    }
});
// node_modules/fast-glob/out/providers/filters/deep.js
var require_deep = __commonJS({
    "node_modules/fast-glob/out/providers/filters/deep.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var utils = require_utils3();
        var partial_1 = require_partial();
        var DeepFilter = /*#__PURE__*/ function() {
            function DeepFilter(_settings, _micromatchOptions) {
                _class_call_check(this, DeepFilter);
                this._settings = _settings;
                this._micromatchOptions = _micromatchOptions;
            }
            _create_class(DeepFilter, [
                {
                    key: "getFilter",
                    value: function getFilter(basePath, positive, negative) {
                        var _this = this;
                        var matcher = this._getMatcher(positive);
                        var negativeRe = this._getNegativePatternsRe(negative);
                        return function(entry) {
                            return _this._filter(basePath, entry, matcher, negativeRe);
                        };
                    }
                },
                {
                    key: "_getMatcher",
                    value: function _getMatcher(patterns) {
                        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
                    }
                },
                {
                    key: "_getNegativePatternsRe",
                    value: function _getNegativePatternsRe(patterns) {
                        var affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
                        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
                    }
                },
                {
                    key: "_filter",
                    value: function _filter(basePath, entry, matcher, negativeRe) {
                        if (this._isSkippedByDeep(basePath, entry.path)) {
                            return false;
                        }
                        if (this._isSkippedSymbolicLink(entry)) {
                            return false;
                        }
                        var filepath = utils.path.removeLeadingDotSegment(entry.path);
                        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
                            return false;
                        }
                        return this._isSkippedByNegativePatterns(filepath, negativeRe);
                    }
                },
                {
                    key: "_isSkippedByDeep",
                    value: function _isSkippedByDeep(basePath, entryPath) {
                        if (this._settings.deep === Infinity) {
                            return false;
                        }
                        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
                    }
                },
                {
                    key: "_getEntryLevel",
                    value: function _getEntryLevel(basePath, entryPath) {
                        var entryPathDepth = entryPath.split("/").length;
                        if (basePath === "") {
                            return entryPathDepth;
                        }
                        var basePathDepth = basePath.split("/").length;
                        return entryPathDepth - basePathDepth;
                    }
                },
                {
                    key: "_isSkippedSymbolicLink",
                    value: function _isSkippedSymbolicLink(entry) {
                        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
                    }
                },
                {
                    key: "_isSkippedByPositivePatterns",
                    value: function _isSkippedByPositivePatterns(entryPath, matcher) {
                        return !this._settings.baseNameMatch && !matcher.match(entryPath);
                    }
                },
                {
                    key: "_isSkippedByNegativePatterns",
                    value: function _isSkippedByNegativePatterns(entryPath, patternsRe) {
                        return !utils.pattern.matchAny(entryPath, patternsRe);
                    }
                }
            ]);
            return DeepFilter;
        }();
        exports.default = DeepFilter;
    }
});
// node_modules/fast-glob/out/providers/filters/entry.js
var require_entry = __commonJS({
    "node_modules/fast-glob/out/providers/filters/entry.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var utils = require_utils3();
        var EntryFilter = /*#__PURE__*/ function() {
            function EntryFilter(_settings, _micromatchOptions) {
                _class_call_check(this, EntryFilter);
                this._settings = _settings;
                this._micromatchOptions = _micromatchOptions;
                this.index = /* @__PURE__ */ new Map();
            }
            _create_class(EntryFilter, [
                {
                    key: "getFilter",
                    value: function getFilter(positive, negative) {
                        var _this = this;
                        var positiveRe = utils.pattern.convertPatternsToRe(positive, this._micromatchOptions);
                        var negativeRe = utils.pattern.convertPatternsToRe(negative, Object.assign(Object.assign({}, this._micromatchOptions), {
                            dot: true
                        }));
                        return function(entry) {
                            return _this._filter(entry, positiveRe, negativeRe);
                        };
                    }
                },
                {
                    key: "_filter",
                    value: function _filter(entry, positiveRe, negativeRe) {
                        var filepath = utils.path.removeLeadingDotSegment(entry.path);
                        if (this._settings.unique && this._isDuplicateEntry(filepath)) {
                            return false;
                        }
                        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
                            return false;
                        }
                        if (this._isSkippedByAbsoluteNegativePatterns(filepath, negativeRe)) {
                            return false;
                        }
                        var isDirectory2 = entry.dirent.isDirectory();
                        var isMatched = this._isMatchToPatterns(filepath, positiveRe, isDirectory2) && !this._isMatchToPatterns(filepath, negativeRe, isDirectory2);
                        if (this._settings.unique && isMatched) {
                            this._createIndexRecord(filepath);
                        }
                        return isMatched;
                    }
                },
                {
                    key: "_isDuplicateEntry",
                    value: function _isDuplicateEntry(filepath) {
                        return this.index.has(filepath);
                    }
                },
                {
                    key: "_createIndexRecord",
                    value: function _createIndexRecord(filepath) {
                        this.index.set(filepath, void 0);
                    }
                },
                {
                    key: "_onlyFileFilter",
                    value: function _onlyFileFilter(entry) {
                        return this._settings.onlyFiles && !entry.dirent.isFile();
                    }
                },
                {
                    key: "_onlyDirectoryFilter",
                    value: function _onlyDirectoryFilter(entry) {
                        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
                    }
                },
                {
                    key: "_isSkippedByAbsoluteNegativePatterns",
                    value: function _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
                        if (!this._settings.absolute) {
                            return false;
                        }
                        var fullpath = utils.path.makeAbsolute(this._settings.cwd, entryPath);
                        return utils.pattern.matchAny(fullpath, patternsRe);
                    }
                },
                {
                    key: "_isMatchToPatterns",
                    value: function _isMatchToPatterns(filepath, patternsRe, isDirectory2) {
                        var isMatched = utils.pattern.matchAny(filepath, patternsRe);
                        if (!isMatched && isDirectory2) {
                            return utils.pattern.matchAny(filepath + "/", patternsRe);
                        }
                        return isMatched;
                    }
                }
            ]);
            return EntryFilter;
        }();
        exports.default = EntryFilter;
    }
});
// node_modules/fast-glob/out/providers/filters/error.js
var require_error = __commonJS({
    "node_modules/fast-glob/out/providers/filters/error.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var utils = require_utils3();
        var ErrorFilter = /*#__PURE__*/ function() {
            function ErrorFilter(_settings) {
                _class_call_check(this, ErrorFilter);
                this._settings = _settings;
            }
            _create_class(ErrorFilter, [
                {
                    key: "getFilter",
                    value: function getFilter() {
                        var _this = this;
                        return function(error) {
                            return _this._isNonFatalError(error);
                        };
                    }
                },
                {
                    key: "_isNonFatalError",
                    value: function _isNonFatalError(error) {
                        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
                    }
                }
            ]);
            return ErrorFilter;
        }();
        exports.default = ErrorFilter;
    }
});
// node_modules/fast-glob/out/providers/transformers/entry.js
var require_entry2 = __commonJS({
    "node_modules/fast-glob/out/providers/transformers/entry.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var utils = require_utils3();
        var EntryTransformer = /*#__PURE__*/ function() {
            function EntryTransformer(_settings) {
                _class_call_check(this, EntryTransformer);
                this._settings = _settings;
            }
            _create_class(EntryTransformer, [
                {
                    key: "getTransformer",
                    value: function getTransformer() {
                        var _this = this;
                        return function(entry) {
                            return _this._transform(entry);
                        };
                    }
                },
                {
                    key: "_transform",
                    value: function _transform(entry) {
                        var filepath = entry.path;
                        if (this._settings.absolute) {
                            filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
                            filepath = utils.path.unixify(filepath);
                        }
                        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
                            filepath += "/";
                        }
                        if (!this._settings.objectMode) {
                            return filepath;
                        }
                        return Object.assign(Object.assign({}, entry), {
                            path: filepath
                        });
                    }
                }
            ]);
            return EntryTransformer;
        }();
        exports.default = EntryTransformer;
    }
});
// node_modules/fast-glob/out/providers/provider.js
var require_provider = __commonJS({
    "node_modules/fast-glob/out/providers/provider.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var path4 = require("path");
        var deep_1 = require_deep();
        var entry_1 = require_entry();
        var error_1 = require_error();
        var entry_2 = require_entry2();
        var Provider = /*#__PURE__*/ function() {
            function Provider(_settings) {
                _class_call_check(this, Provider);
                this._settings = _settings;
                this.errorFilter = new error_1.default(this._settings);
                this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
                this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
                this.entryTransformer = new entry_2.default(this._settings);
            }
            _create_class(Provider, [
                {
                    key: "_getRootDirectory",
                    value: function _getRootDirectory(task) {
                        return path4.resolve(this._settings.cwd, task.base);
                    }
                },
                {
                    key: "_getReaderOptions",
                    value: function _getReaderOptions(task) {
                        var basePath = task.base === "." ? "" : task.base;
                        return {
                            basePath: basePath,
                            pathSegmentSeparator: "/",
                            concurrency: this._settings.concurrency,
                            deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
                            entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
                            errorFilter: this.errorFilter.getFilter(),
                            followSymbolicLinks: this._settings.followSymbolicLinks,
                            fs: this._settings.fs,
                            stats: this._settings.stats,
                            throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
                            transform: this.entryTransformer.getTransformer()
                        };
                    }
                },
                {
                    key: "_getMicromatchOptions",
                    value: function _getMicromatchOptions() {
                        return {
                            dot: this._settings.dot,
                            matchBase: this._settings.baseNameMatch,
                            nobrace: !this._settings.braceExpansion,
                            nocase: !this._settings.caseSensitiveMatch,
                            noext: !this._settings.extglob,
                            noglobstar: !this._settings.globstar,
                            posix: true,
                            strictSlashes: false
                        };
                    }
                }
            ]);
            return Provider;
        }();
        exports.default = Provider;
    }
});
// node_modules/fast-glob/out/providers/async.js
var require_async6 = __commonJS({
    "node_modules/fast-glob/out/providers/async.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var async_1 = require_async5();
        var provider_1 = require_provider();
        var ProviderAsync = /*#__PURE__*/ function(_provider_1_default) {
            _inherits(ProviderAsync, _provider_1_default);
            var _super = _create_super(ProviderAsync);
            function ProviderAsync() {
                _class_call_check(this, ProviderAsync);
                var _this;
                _this = _super.call.apply(_super, [
                    this
                ].concat(Array.prototype.slice.call(arguments)));
                _this._reader = new async_1.default(_this._settings);
                return _this;
            }
            _create_class(ProviderAsync, [
                {
                    key: "read",
                    value: function read(task) {
                        var _this = this;
                        return _async_to_generator(function() {
                            var root, options, entries;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        root = _this._getRootDirectory(task);
                                        options = _this._getReaderOptions(task);
                                        return [
                                            4,
                                            _this.api(root, task, options)
                                        ];
                                    case 1:
                                        entries = _state.sent();
                                        return [
                                            2,
                                            entries.map(function(entry) {
                                                return options.transform(entry);
                                            })
                                        ];
                                }
                            });
                        })();
                    }
                },
                {
                    key: "api",
                    value: function api(root, task, options) {
                        if (task.dynamic) {
                            return this._reader.dynamic(root, options);
                        }
                        return this._reader.static(task.patterns, options);
                    }
                }
            ]);
            return ProviderAsync;
        }(provider_1.default);
        exports.default = ProviderAsync;
    }
});
// node_modules/fast-glob/out/providers/stream.js
var require_stream4 = __commonJS({
    "node_modules/fast-glob/out/providers/stream.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var stream_1 = require("stream");
        var stream_2 = require_stream3();
        var provider_1 = require_provider();
        var ProviderStream = /*#__PURE__*/ function(_provider_1_default) {
            _inherits(ProviderStream, _provider_1_default);
            var _super = _create_super(ProviderStream);
            function ProviderStream() {
                _class_call_check(this, ProviderStream);
                var _this;
                _this = _super.call.apply(_super, [
                    this
                ].concat(Array.prototype.slice.call(arguments)));
                _this._reader = new stream_2.default(_this._settings);
                return _this;
            }
            _create_class(ProviderStream, [
                {
                    key: "read",
                    value: function read(task) {
                        var root = this._getRootDirectory(task);
                        var options = this._getReaderOptions(task);
                        var source = this.api(root, task, options);
                        var destination = new stream_1.Readable({
                            objectMode: true,
                            read: function() {}
                        });
                        source.once("error", function(error) {
                            return destination.emit("error", error);
                        }).on("data", function(entry) {
                            return destination.emit("data", options.transform(entry));
                        }).once("end", function() {
                            return destination.emit("end");
                        });
                        destination.once("close", function() {
                            return source.destroy();
                        });
                        return destination;
                    }
                },
                {
                    key: "api",
                    value: function api(root, task, options) {
                        if (task.dynamic) {
                            return this._reader.dynamic(root, options);
                        }
                        return this._reader.static(task.patterns, options);
                    }
                }
            ]);
            return ProviderStream;
        }(provider_1.default);
        exports.default = ProviderStream;
    }
});
// node_modules/fast-glob/out/readers/sync.js
var require_sync5 = __commonJS({
    "node_modules/fast-glob/out/readers/sync.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var fsStat = require_out();
        var fsWalk = require_out3();
        var reader_1 = require_reader2();
        var ReaderSync = /*#__PURE__*/ function(_reader_1_default) {
            _inherits(ReaderSync, _reader_1_default);
            var _super = _create_super(ReaderSync);
            function ReaderSync() {
                _class_call_check(this, ReaderSync);
                var _this;
                _this = _super.call.apply(_super, [
                    this
                ].concat(Array.prototype.slice.call(arguments)));
                _this._walkSync = fsWalk.walkSync;
                _this._statSync = fsStat.statSync;
                return _this;
            }
            _create_class(ReaderSync, [
                {
                    key: "dynamic",
                    value: function dynamic(root, options) {
                        return this._walkSync(root, options);
                    }
                },
                {
                    key: "static",
                    value: function _static(patterns, options) {
                        var entries = [];
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var pattern = _step.value;
                                var filepath = this._getFullEntryPath(pattern);
                                var entry = this._getEntry(filepath, pattern, options);
                                if (entry === null || !options.entryFilter(entry)) {
                                    continue;
                                }
                                entries.push(entry);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                        return entries;
                    }
                },
                {
                    key: "_getEntry",
                    value: function _getEntry(filepath, pattern, options) {
                        try {
                            var stats = this._getStat(filepath);
                            return this._makeEntry(stats, pattern);
                        } catch (error) {
                            if (options.errorFilter(error)) {
                                return null;
                            }
                            throw error;
                        }
                    }
                },
                {
                    key: "_getStat",
                    value: function _getStat(filepath) {
                        return this._statSync(filepath, this._fsStatSettings);
                    }
                }
            ]);
            return ReaderSync;
        }(reader_1.default);
        exports.default = ReaderSync;
    }
});
// node_modules/fast-glob/out/providers/sync.js
var require_sync6 = __commonJS({
    "node_modules/fast-glob/out/providers/sync.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var sync_1 = require_sync5();
        var provider_1 = require_provider();
        var ProviderSync = /*#__PURE__*/ function(_provider_1_default) {
            _inherits(ProviderSync, _provider_1_default);
            var _super = _create_super(ProviderSync);
            function ProviderSync() {
                _class_call_check(this, ProviderSync);
                var _this;
                _this = _super.call.apply(_super, [
                    this
                ].concat(Array.prototype.slice.call(arguments)));
                _this._reader = new sync_1.default(_this._settings);
                return _this;
            }
            _create_class(ProviderSync, [
                {
                    key: "read",
                    value: function read(task) {
                        var root = this._getRootDirectory(task);
                        var options = this._getReaderOptions(task);
                        var entries = this.api(root, task, options);
                        return entries.map(options.transform);
                    }
                },
                {
                    key: "api",
                    value: function api(root, task, options) {
                        if (task.dynamic) {
                            return this._reader.dynamic(root, options);
                        }
                        return this._reader.static(task.patterns, options);
                    }
                }
            ]);
            return ProviderSync;
        }(provider_1.default);
        exports.default = ProviderSync;
    }
});
// node_modules/fast-glob/out/settings.js
var require_settings4 = __commonJS({
    "node_modules/fast-glob/out/settings.js": function(exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
        var fs6 = require("fs");
        var os = require("os");
        var CPU_COUNT = Math.max(os.cpus().length, 1);
        exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
            lstat: fs6.lstat,
            lstatSync: fs6.lstatSync,
            stat: fs6.stat,
            statSync: fs6.statSync,
            readdir: fs6.readdir,
            readdirSync: fs6.readdirSync
        };
        var Settings = /*#__PURE__*/ function() {
            function Settings() {
                var _options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                _class_call_check(this, Settings);
                this._options = _options;
                this.absolute = this._getValue(this._options.absolute, false);
                this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
                this.braceExpansion = this._getValue(this._options.braceExpansion, true);
                this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
                this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
                this.cwd = this._getValue(this._options.cwd, process.cwd());
                this.deep = this._getValue(this._options.deep, Infinity);
                this.dot = this._getValue(this._options.dot, false);
                this.extglob = this._getValue(this._options.extglob, true);
                this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
                this.fs = this._getFileSystemMethods(this._options.fs);
                this.globstar = this._getValue(this._options.globstar, true);
                this.ignore = this._getValue(this._options.ignore, []);
                this.markDirectories = this._getValue(this._options.markDirectories, false);
                this.objectMode = this._getValue(this._options.objectMode, false);
                this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
                this.onlyFiles = this._getValue(this._options.onlyFiles, true);
                this.stats = this._getValue(this._options.stats, false);
                this.suppressErrors = this._getValue(this._options.suppressErrors, false);
                this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
                this.unique = this._getValue(this._options.unique, true);
                if (this.onlyDirectories) {
                    this.onlyFiles = false;
                }
                if (this.stats) {
                    this.objectMode = true;
                }
                this.ignore = [].concat(this.ignore);
            }
            _create_class(Settings, [
                {
                    key: "_getValue",
                    value: function _getValue(option, value) {
                        return option === void 0 ? value : option;
                    }
                },
                {
                    key: "_getFileSystemMethods",
                    value: function _getFileSystemMethods() {
                        var methods = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
                    }
                }
            ]);
            return Settings;
        }();
        exports.default = Settings;
    }
});
// node_modules/fast-glob/out/index.js
var require_out4 = __commonJS({
    "node_modules/fast-glob/out/index.js": function(exports, module2) {
        "use strict";
        var getWorks = function getWorks(source, _Provider, options) {
            var patterns = [].concat(source);
            var settings = new settings_1.default(options);
            var tasks = taskManager.generate(patterns, settings);
            var provider = new _Provider(settings);
            return tasks.map(provider.read, provider);
        };
        var assertPatternsInput2 = function assertPatternsInput2(input) {
            var source = [].concat(input);
            var isValidSource = source.every(function(item) {
                return utils.string.isString(item) && !utils.string.isEmpty(item);
            });
            if (!isValidSource) {
                throw new TypeError("Patterns must be a string (non empty) or an array of strings");
            }
        };
        var taskManager = require_tasks();
        var async_1 = require_async6();
        var stream_1 = require_stream4();
        var sync_1 = require_sync6();
        var settings_1 = require_settings4();
        var utils = require_utils3();
        function FastGlob(source, options) {
            return _FastGlob.apply(this, arguments);
        }
        function _FastGlob() {
            _FastGlob = _async_to_generator(function(source, options) {
                var works, result;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            assertPatternsInput2(source);
                            works = getWorks(source, async_1.default, options);
                            return [
                                4,
                                Promise.all(works)
                            ];
                        case 1:
                            result = _state.sent();
                            return [
                                2,
                                utils.array.flatten(result)
                            ];
                    }
                });
            });
            return _FastGlob.apply(this, arguments);
        }
        (function(FastGlob2) {
            var sync = function sync(source, options) {
                assertPatternsInput2(source);
                var works = getWorks(source, sync_1.default, options);
                return utils.array.flatten(works);
            };
            var stream = function stream(source, options) {
                assertPatternsInput2(source);
                var works = getWorks(source, stream_1.default, options);
                return utils.stream.merge(works);
            };
            var generateTasks2 = function generateTasks2(source, options) {
                assertPatternsInput2(source);
                var patterns = [].concat(source);
                var settings = new settings_1.default(options);
                return taskManager.generate(patterns, settings);
            };
            var isDynamicPattern2 = function isDynamicPattern2(source, options) {
                assertPatternsInput2(source);
                var settings = new settings_1.default(options);
                return utils.pattern.isDynamicPattern(source, settings);
            };
            var escapePath = function escapePath(source) {
                assertPatternsInput2(source);
                return utils.path.escape(source);
            };
            var convertPathToPattern2 = function convertPathToPattern2(source) {
                assertPatternsInput2(source);
                return utils.path.convertPathToPattern(source);
            };
            FastGlob2.glob = FastGlob2;
            FastGlob2.globSync = sync;
            FastGlob2.globStream = stream;
            FastGlob2.async = FastGlob2;
            FastGlob2.sync = sync;
            FastGlob2.stream = stream;
            FastGlob2.generateTasks = generateTasks2;
            FastGlob2.isDynamicPattern = isDynamicPattern2;
            FastGlob2.escapePath = escapePath;
            FastGlob2.convertPathToPattern = convertPathToPattern2;
            var posix;
            (function(posix2) {
                var escapePath2 = function escapePath2(source) {
                    assertPatternsInput2(source);
                    return utils.path.escapePosixPath(source);
                };
                var convertPathToPattern3 = function convertPathToPattern3(source) {
                    assertPatternsInput2(source);
                    return utils.path.convertPosixPathToPattern(source);
                };
                posix2.escapePath = escapePath2;
                posix2.convertPathToPattern = convertPathToPattern3;
            })(posix = FastGlob2.posix || (FastGlob2.posix = {}));
            var win32;
            (function(win322) {
                var escapePath2 = function escapePath2(source) {
                    assertPatternsInput2(source);
                    return utils.path.escapeWindowsPath(source);
                };
                var convertPathToPattern3 = function convertPathToPattern3(source) {
                    assertPatternsInput2(source);
                    return utils.path.convertWindowsPathToPattern(source);
                };
                win322.escapePath = escapePath2;
                win322.convertPathToPattern = convertPathToPattern3;
            })(win32 = FastGlob2.win32 || (FastGlob2.win32 = {}));
        })(FastGlob || (FastGlob = {}));
        module2.exports = FastGlob;
    }
});
// node_modules/ignore/index.js
var require_ignore = __commonJS({
    "node_modules/ignore/index.js": function(exports, module2) {
        "use strict";
        var makeArray = function makeArray(subject) {
            return Array.isArray(subject) ? subject : [
                subject
            ];
        };
        var EMPTY = "";
        var SPACE = " ";
        var ESCAPE = "\\";
        var REGEX_TEST_BLANK_LINE = /^\s+$/;
        var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
        var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
        var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
        var REGEX_SPLITALL_CRLF = /\r?\n/g;
        var REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
        var SLASH = "/";
        var TMP_KEY_IGNORE = "node-ignore";
        if (typeof Symbol !== "undefined") {
            TMP_KEY_IGNORE = Symbol.for("node-ignore");
        }
        var KEY_IGNORE = TMP_KEY_IGNORE;
        var define = function(object, key, value) {
            return Object.defineProperty(object, key, {
                value: value
            });
        };
        var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
        var RETURN_FALSE = function() {
            return false;
        };
        var sanitizeRange = function(range) {
            return range.replace(REGEX_REGEXP_RANGE, function(match, from, to) {
                return from.charCodeAt(0) <= to.charCodeAt(0) ? match : EMPTY;
            });
        };
        var cleanRangeBackSlash = function(slashes) {
            var length = slashes.length;
            return slashes.slice(0, length - length % 2);
        };
        var REPLACERS = [
            // > Trailing spaces are ignored unless they are quoted with backslash ("\")
            [
                // (a\ ) -> (a )
                // (a  ) -> (a)
                // (a \ ) -> (a  )
                /\\?\s+$/,
                function(match) {
                    return match.indexOf("\\") === 0 ? SPACE : EMPTY;
                }
            ],
            // replace (\ ) with ' '
            [
                /\\\s/g,
                function() {
                    return SPACE;
                }
            ],
            // Escape metacharacters
            // which is written down by users but means special for regular expressions.
            // > There are 12 characters with special meanings:
            // > - the backslash \,
            // > - the caret ^,
            // > - the dollar sign $,
            // > - the period or dot .,
            // > - the vertical bar or pipe symbol |,
            // > - the question mark ?,
            // > - the asterisk or star *,
            // > - the plus sign +,
            // > - the opening parenthesis (,
            // > - the closing parenthesis ),
            // > - and the opening square bracket [,
            // > - the opening curly brace {,
            // > These special characters are often called "metacharacters".
            [
                /[\\$.|*+(){^]/g,
                function(match) {
                    return "\\".concat(match);
                }
            ],
            [
                // > a question mark (?) matches a single character
                /(?!\\)\?/g,
                function() {
                    return "[^/]";
                }
            ],
            // leading slash
            [
                // > A leading slash matches the beginning of the pathname.
                // > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
                // A leading slash matches the beginning of the pathname
                /^\//,
                function() {
                    return "^";
                }
            ],
            // replace special metacharacter slash after the leading slash
            [
                /\//g,
                function() {
                    return "\\/";
                }
            ],
            [
                // > A leading "**" followed by a slash means match in all directories.
                // > For example, "**/foo" matches file or directory "foo" anywhere,
                // > the same as pattern "foo".
                // > "**/foo/bar" matches file or directory "bar" anywhere that is directly
                // >   under directory "foo".
                // Notice that the '*'s have been replaced as '\\*'
                /^\^*\\\*\\\*\\\//,
                // '**/foo' <-> 'foo'
                function() {
                    return "^(?:.*\\/)?";
                }
            ],
            // starting
            [
                // there will be no leading '/'
                //   (which has been replaced by section "leading slash")
                // If starts with '**', adding a '^' to the regular expression also works
                /^(?=[^^])/,
                function startingReplacer() {
                    return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
                }
            ],
            // two globstars
            [
                // Use lookahead assertions so that we could match more than one `'/**'`
                /\\\/\\\*\\\*(?=\\\/|$)/g,
                // Zero, one or several directories
                // should not use '*', or it will be replaced by the next replacer
                // Check if it is not the last `'/**'`
                function(_, index, str) {
                    return index + 6 < str.length ? "(?:\\/[^\\/]+)*" : "\\/.+";
                }
            ],
            // normal intermediate wildcards
            [
                // Never replace escaped '*'
                // ignore rule '\*' will match the path '*'
                // 'abc.*/' -> go
                // 'abc.*'  -> skip this rule,
                //    coz trailing single wildcard will be handed by [trailing wildcard]
                /(^|[^\\]+)(\\\*)+(?=.+)/g,
                // '*.js' matches '.js'
                // '*.js' doesn't match 'abc'
                function(_, p1, p2) {
                    var unescaped = p2.replace(/\\\*/g, "[^\\/]*");
                    return p1 + unescaped;
                }
            ],
            [
                // unescape, revert step 3 except for back slash
                // For example, if a user escape a '\\*',
                // after step 3, the result will be '\\\\\\*'
                /\\\\\\(?=[$.|*+(){^])/g,
                function() {
                    return ESCAPE;
                }
            ],
            [
                // '\\\\' -> '\\'
                /\\\\/g,
                function() {
                    return ESCAPE;
                }
            ],
            [
                // > The range notation, e.g. [a-zA-Z],
                // > can be used to match one of the characters in a range.
                // `\` is escaped by step 3
                /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
                function(match, leadEscape, range, endEscape, close) {
                    return leadEscape === ESCAPE ? "\\[".concat(range).concat(cleanRangeBackSlash(endEscape)).concat(close) : close === "]" ? endEscape.length % 2 === 0 ? "[".concat(sanitizeRange(range)).concat(endEscape, "]") : "[]" : "[]";
                }
            ],
            // ending
            [
                // 'js' will not match 'js.'
                // 'ab' will not match 'abc'
                /(?:[^*])$/,
                // WTF!
                // https://git-scm.com/docs/gitignore
                // changes in [2.22.1](https://git-scm.com/docs/gitignore/2.22.1)
                // which re-fixes #24, #38
                // > If there is a separator at the end of the pattern then the pattern
                // > will only match directories, otherwise the pattern can match both
                // > files and directories.
                // 'js*' will not match 'a.js'
                // 'js/' will not match 'a.js'
                // 'js' will match 'a.js' and 'a.js/'
                function(match) {
                    return /\/$/.test(match) ? "".concat(match, "$") : "".concat(match, "(?=$|\\/$)");
                }
            ],
            // trailing wildcard
            [
                /(\^|\\\/)?\\\*$/,
                function(_, p1) {
                    var prefix = p1 ? "".concat(p1, "[^/]+") : "[^/]*";
                    return "".concat(prefix, "(?=$|\\/$)");
                }
            ]
        ];
        var regexCache = /* @__PURE__ */ Object.create(null);
        var makeRegex = function(pattern, ignoreCase) {
            var source = regexCache[pattern];
            if (!source) {
                source = REPLACERS.reduce(function(prev, current) {
                    return prev.replace(current[0], current[1].bind(pattern));
                }, pattern);
                regexCache[pattern] = source;
            }
            return ignoreCase ? new RegExp(source, "i") : new RegExp(source);
        };
        var isString = function(subject) {
            return typeof subject === "string";
        };
        var checkPattern = function(pattern) {
            return pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern) && pattern.indexOf("#") !== 0;
        };
        var splitPattern = function(pattern) {
            return pattern.split(REGEX_SPLITALL_CRLF);
        };
        var IgnoreRule = function IgnoreRule(origin, pattern, negative, regex) {
            _class_call_check(this, IgnoreRule);
            this.origin = origin;
            this.pattern = pattern;
            this.negative = negative;
            this.regex = regex;
        };
        var createRule = function(pattern, ignoreCase) {
            var origin = pattern;
            var negative = false;
            if (pattern.indexOf("!") === 0) {
                negative = true;
                pattern = pattern.substr(1);
            }
            pattern = pattern.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
            var regex = makeRegex(pattern, ignoreCase);
            return new IgnoreRule(origin, pattern, negative, regex);
        };
        var throwError = function(message, Ctor) {
            throw new Ctor(message);
        };
        var checkPath = function(path4, originalPath, doThrow) {
            if (!isString(path4)) {
                return doThrow("path must be a string, but got `".concat(originalPath, "`"), TypeError);
            }
            if (!path4) {
                return doThrow("path must not be empty", TypeError);
            }
            if (checkPath.isNotRelative(path4)) {
                var r = "`path.relative()`d";
                return doThrow("path should be a ".concat(r, ' string, but got "').concat(originalPath, '"'), RangeError);
            }
            return true;
        };
        var isNotRelative = function(path4) {
            return REGEX_TEST_INVALID_PATH.test(path4);
        };
        checkPath.isNotRelative = isNotRelative;
        checkPath.convert = function(p) {
            return p;
        };
        var Ignore = /*#__PURE__*/ function() {
            function Ignore() {
                var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_ignorecase = _ref.ignorecase, ignorecase = _ref_ignorecase === void 0 ? true : _ref_ignorecase, _ref_ignoreCase = _ref.ignoreCase, ignoreCase = _ref_ignoreCase === void 0 ? ignorecase : _ref_ignoreCase, _ref_allowRelativePaths = _ref.allowRelativePaths, allowRelativePaths = _ref_allowRelativePaths === void 0 ? false : _ref_allowRelativePaths;
                _class_call_check(this, Ignore);
                define(this, KEY_IGNORE, true);
                this._rules = [];
                this._ignoreCase = ignoreCase;
                this._allowRelativePaths = allowRelativePaths;
                this._initCache();
            }
            _create_class(Ignore, [
                {
                    key: "_initCache",
                    value: function _initCache() {
                        this._ignoreCache = /* @__PURE__ */ Object.create(null);
                        this._testCache = /* @__PURE__ */ Object.create(null);
                    }
                },
                {
                    key: "_addPattern",
                    value: function _addPattern(pattern) {
                        if (pattern && pattern[KEY_IGNORE]) {
                            this._rules = this._rules.concat(pattern._rules);
                            this._added = true;
                            return;
                        }
                        if (checkPattern(pattern)) {
                            var rule = createRule(pattern, this._ignoreCase);
                            this._added = true;
                            this._rules.push(rule);
                        }
                    }
                },
                {
                    // @param {Array<string> | string | Ignore} pattern
                    key: "add",
                    value: function add(pattern) {
                        this._added = false;
                        makeArray(isString(pattern) ? splitPattern(pattern) : pattern).forEach(this._addPattern, this);
                        if (this._added) {
                            this._initCache();
                        }
                        return this;
                    }
                },
                {
                    // legacy
                    key: "addPattern",
                    value: function addPattern(pattern) {
                        return this.add(pattern);
                    }
                },
                {
                    //          |           ignored : unignored
                    // negative |   0:0   |   0:1   |   1:0   |   1:1
                    // -------- | ------- | ------- | ------- | --------
                    //     0    |  TEST   |  TEST   |  SKIP   |    X
                    //     1    |  TESTIF |  SKIP   |  TEST   |    X
                    // - SKIP: always skip
                    // - TEST: always test
                    // - TESTIF: only test if checkUnignored
                    // - X: that never happen
                    // @param {boolean} whether should check if the path is unignored,
                    //   setting `checkUnignored` to `false` could reduce additional
                    //   path matching.
                    // @returns {TestResult} true if a file is ignored
                    key: "_testOne",
                    value: function _testOne(path4, checkUnignored) {
                        var ignored = false;
                        var unignored = false;
                        this._rules.forEach(function(rule) {
                            var negative = rule.negative;
                            if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
                                return;
                            }
                            var matched = rule.regex.test(path4);
                            if (matched) {
                                ignored = !negative;
                                unignored = negative;
                            }
                        });
                        return {
                            ignored: ignored,
                            unignored: unignored
                        };
                    }
                },
                {
                    // @returns {TestResult}
                    key: "_test",
                    value: function _test(originalPath, cache, checkUnignored, slices) {
                        var path4 = originalPath && checkPath.convert(originalPath);
                        checkPath(path4, originalPath, this._allowRelativePaths ? RETURN_FALSE : throwError);
                        return this._t(path4, cache, checkUnignored, slices);
                    }
                },
                {
                    key: "_t",
                    value: function _t(path4, cache, checkUnignored, slices) {
                        if (path4 in cache) {
                            return cache[path4];
                        }
                        if (!slices) {
                            slices = path4.split(SLASH);
                        }
                        slices.pop();
                        if (!slices.length) {
                            return cache[path4] = this._testOne(path4, checkUnignored);
                        }
                        var parent = this._t(slices.join(SLASH) + SLASH, cache, checkUnignored, slices);
                        return cache[path4] = parent.ignored ? parent : this._testOne(path4, checkUnignored);
                    }
                },
                {
                    key: "ignores",
                    value: function ignores(path4) {
                        return this._test(path4, this._ignoreCache, false).ignored;
                    }
                },
                {
                    key: "createFilter",
                    value: function createFilter() {
                        var _this = this;
                        return function(path4) {
                            return !_this.ignores(path4);
                        };
                    }
                },
                {
                    key: "filter",
                    value: function filter(paths) {
                        return makeArray(paths).filter(this.createFilter());
                    }
                },
                {
                    // @returns {TestResult}
                    key: "test",
                    value: function test(path4) {
                        return this._test(path4, this._testCache, true);
                    }
                }
            ]);
            return Ignore;
        }();
        var factory = function(options) {
            return new Ignore(options);
        };
        var isPathValid = function(path4) {
            return checkPath(path4 && checkPath.convert(path4), path4, RETURN_FALSE);
        };
        factory.isPathValid = isPathValid;
        factory.default = factory;
        module2.exports = factory;
        if (// Detect `process` so that it can run in browsers.
        typeof process !== "undefined" && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === "win32")) {
            var makePosix = function(str) {
                return /^\\\\\?\\/.test(str) || RegExp('["<>|\\u0000-\\u001F]+', "u").test(str) ? str : str.replace(/\\/g, "/");
            };
            checkPath.convert = makePosix;
            var REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
            checkPath.isNotRelative = function(path4) {
                return REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path4) || isNotRelative(path4);
            };
        }
    }
});
// node_modules/universalify/index.js
var require_universalify = __commonJS({
    "node_modules/universalify/index.js": function(exports) {
        "use strict";
        exports.fromCallback = function(fn) {
            return Object.defineProperty(function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _this = this;
                if (typeof args[args.length - 1] === "function") fn.apply(this, args);
                else {
                    return new Promise(function(resolve, reject) {
                        var _fn;
                        (_fn = fn).call.apply(_fn, [
                            _this
                        ].concat(_to_consumable_array(args), [
                            function(err, res) {
                                return err != null ? reject(err) : resolve(res);
                            }
                        ]));
                    });
                }
            }, "name", {
                value: fn.name
            });
        };
        exports.fromPromise = function(fn) {
            return Object.defineProperty(function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var cb = args[args.length - 1];
                if (typeof cb !== "function") return fn.apply(this, args);
                else fn.apply(this, args.slice(0, -1)).then(function(r) {
                    return cb(null, r);
                }, cb);
            }, "name", {
                value: fn.name
            });
        };
    }
});
// node_modules/graceful-fs/polyfills.js
var require_polyfills = __commonJS({
    "node_modules/graceful-fs/polyfills.js": function(exports, module2) {
        "use strict";
        var patch = function patch(fs6) {
            if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
                patchLchmod(fs6);
            }
            if (!fs6.lutimes) {
                patchLutimes(fs6);
            }
            fs6.chown = chownFix(fs6.chown);
            fs6.fchown = chownFix(fs6.fchown);
            fs6.lchown = chownFix(fs6.lchown);
            fs6.chmod = chmodFix(fs6.chmod);
            fs6.fchmod = chmodFix(fs6.fchmod);
            fs6.lchmod = chmodFix(fs6.lchmod);
            fs6.chownSync = chownFixSync(fs6.chownSync);
            fs6.fchownSync = chownFixSync(fs6.fchownSync);
            fs6.lchownSync = chownFixSync(fs6.lchownSync);
            fs6.chmodSync = chmodFixSync(fs6.chmodSync);
            fs6.fchmodSync = chmodFixSync(fs6.fchmodSync);
            fs6.lchmodSync = chmodFixSync(fs6.lchmodSync);
            fs6.stat = statFix(fs6.stat);
            fs6.fstat = statFix(fs6.fstat);
            fs6.lstat = statFix(fs6.lstat);
            fs6.statSync = statFixSync(fs6.statSync);
            fs6.fstatSync = statFixSync(fs6.fstatSync);
            fs6.lstatSync = statFixSync(fs6.lstatSync);
            if (fs6.chmod && !fs6.lchmod) {
                fs6.lchmod = function(path4, mode, cb) {
                    if (cb) process.nextTick(cb);
                };
                fs6.lchmodSync = function() {};
            }
            if (fs6.chown && !fs6.lchown) {
                fs6.lchown = function(path4, uid, gid, cb) {
                    if (cb) process.nextTick(cb);
                };
                fs6.lchownSync = function() {};
            }
            if (platform === "win32") {
                fs6.rename = typeof fs6.rename !== "function" ? fs6.rename : function(fs$rename) {
                    function rename(from, to, cb) {
                        var start = Date.now();
                        var backoff = 0;
                        fs$rename(from, to, function CB(er) {
                            if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 6e4) {
                                setTimeout(function() {
                                    fs6.stat(to, function(stater, st) {
                                        if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);
                                        else cb(er);
                                    });
                                }, backoff);
                                if (backoff < 100) backoff += 10;
                                return;
                            }
                            if (cb) cb(er);
                        });
                    }
                    if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
                    return rename;
                }(fs6.rename);
            }
            fs6.read = typeof fs6.read !== "function" ? fs6.read : function(fs$read) {
                function read(fd, buffer, offset, length, position, callback_) {
                    var callback;
                    if (callback_ && typeof callback_ === "function") {
                        var eagCounter = 0;
                        callback = function(er, _, __) {
                            if (er && er.code === "EAGAIN" && eagCounter < 10) {
                                eagCounter++;
                                return fs$read.call(fs6, fd, buffer, offset, length, position, callback);
                            }
                            callback_.apply(this, arguments);
                        };
                    }
                    return fs$read.call(fs6, fd, buffer, offset, length, position, callback);
                }
                if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
                return read;
            }(fs6.read);
            fs6.readSync = typeof fs6.readSync !== "function" ? fs6.readSync : function(fs$readSync) {
                return function(fd, buffer, offset, length, position) {
                    var eagCounter = 0;
                    while(true){
                        try {
                            return fs$readSync.call(fs6, fd, buffer, offset, length, position);
                        } catch (er) {
                            if (er.code === "EAGAIN" && eagCounter < 10) {
                                eagCounter++;
                                continue;
                            }
                            throw er;
                        }
                    }
                };
            }(fs6.readSync);
            function patchLchmod(fs7) {
                fs7.lchmod = function(path4, mode, callback) {
                    fs7.open(path4, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
                        if (err) {
                            if (callback) callback(err);
                            return;
                        }
                        fs7.fchmod(fd, mode, function(err2) {
                            fs7.close(fd, function(err22) {
                                if (callback) callback(err2 || err22);
                            });
                        });
                    });
                };
                fs7.lchmodSync = function(path4, mode) {
                    var fd = fs7.openSync(path4, constants.O_WRONLY | constants.O_SYMLINK, mode);
                    var threw = true;
                    var ret;
                    try {
                        ret = fs7.fchmodSync(fd, mode);
                        threw = false;
                    } finally{
                        if (threw) {
                            try {
                                fs7.closeSync(fd);
                            } catch (er) {}
                        } else {
                            fs7.closeSync(fd);
                        }
                    }
                    return ret;
                };
            }
            function patchLutimes(fs7) {
                if (constants.hasOwnProperty("O_SYMLINK") && fs7.futimes) {
                    fs7.lutimes = function(path4, at, mt, cb) {
                        fs7.open(path4, constants.O_SYMLINK, function(er, fd) {
                            if (er) {
                                if (cb) cb(er);
                                return;
                            }
                            fs7.futimes(fd, at, mt, function(er2) {
                                fs7.close(fd, function(er22) {
                                    if (cb) cb(er2 || er22);
                                });
                            });
                        });
                    };
                    fs7.lutimesSync = function(path4, at, mt) {
                        var fd = fs7.openSync(path4, constants.O_SYMLINK);
                        var ret;
                        var threw = true;
                        try {
                            ret = fs7.futimesSync(fd, at, mt);
                            threw = false;
                        } finally{
                            if (threw) {
                                try {
                                    fs7.closeSync(fd);
                                } catch (er) {}
                            } else {
                                fs7.closeSync(fd);
                            }
                        }
                        return ret;
                    };
                } else if (fs7.futimes) {
                    fs7.lutimes = function(_a, _b, _c, cb) {
                        if (cb) process.nextTick(cb);
                    };
                    fs7.lutimesSync = function() {};
                }
            }
            function chmodFix(orig) {
                if (!orig) return orig;
                return function(target, mode, cb) {
                    return orig.call(fs6, target, mode, function(er) {
                        if (chownErOk(er)) er = null;
                        if (cb) cb.apply(this, arguments);
                    });
                };
            }
            function chmodFixSync(orig) {
                if (!orig) return orig;
                return function(target, mode) {
                    try {
                        return orig.call(fs6, target, mode);
                    } catch (er) {
                        if (!chownErOk(er)) throw er;
                    }
                };
            }
            function chownFix(orig) {
                if (!orig) return orig;
                return function(target, uid, gid, cb) {
                    return orig.call(fs6, target, uid, gid, function(er) {
                        if (chownErOk(er)) er = null;
                        if (cb) cb.apply(this, arguments);
                    });
                };
            }
            function chownFixSync(orig) {
                if (!orig) return orig;
                return function(target, uid, gid) {
                    try {
                        return orig.call(fs6, target, uid, gid);
                    } catch (er) {
                        if (!chownErOk(er)) throw er;
                    }
                };
            }
            function statFix(orig) {
                if (!orig) return orig;
                return function(target, options, cb) {
                    if (typeof options === "function") {
                        cb = options;
                        options = null;
                    }
                    function callback(er, stats) {
                        if (stats) {
                            if (stats.uid < 0) stats.uid += 4294967296;
                            if (stats.gid < 0) stats.gid += 4294967296;
                        }
                        if (cb) cb.apply(this, arguments);
                    }
                    return options ? orig.call(fs6, target, options, callback) : orig.call(fs6, target, callback);
                };
            }
            function statFixSync(orig) {
                if (!orig) return orig;
                return function(target, options) {
                    var stats = options ? orig.call(fs6, target, options) : orig.call(fs6, target);
                    if (stats) {
                        if (stats.uid < 0) stats.uid += 4294967296;
                        if (stats.gid < 0) stats.gid += 4294967296;
                    }
                    return stats;
                };
            }
            function chownErOk(er) {
                if (!er) return true;
                if (er.code === "ENOSYS") return true;
                var nonroot = !process.getuid || process.getuid() !== 0;
                if (nonroot) {
                    if (er.code === "EINVAL" || er.code === "EPERM") return true;
                }
                return false;
            }
        };
        var constants = require("constants");
        var origCwd = process.cwd;
        var cwd = null;
        var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
        process.cwd = function() {
            if (!cwd) cwd = origCwd.call(process);
            return cwd;
        };
        try {
            process.cwd();
        } catch (er) {}
        if (typeof process.chdir === "function") {
            chdir = process.chdir;
            process.chdir = function(d) {
                cwd = null;
                chdir.call(process, d);
            };
            if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
        }
        var chdir;
        module2.exports = patch;
    }
});
// node_modules/graceful-fs/legacy-streams.js
var require_legacy_streams = __commonJS({
    "node_modules/graceful-fs/legacy-streams.js": function(exports, module2) {
        "use strict";
        var legacy = function legacy(fs6) {
            return {
                ReadStream: ReadStream,
                WriteStream: WriteStream
            };
            function ReadStream(path4, options) {
                if (!_instanceof(this, ReadStream)) return new ReadStream(path4, options);
                Stream.call(this);
                var self = this;
                this.path = path4;
                this.fd = null;
                this.readable = true;
                this.paused = false;
                this.flags = "r";
                this.mode = 438;
                this.bufferSize = 64 * 1024;
                options = options || {};
                var keys = Object.keys(options);
                for(var index = 0, length = keys.length; index < length; index++){
                    var key = keys[index];
                    this[key] = options[key];
                }
                if (this.encoding) this.setEncoding(this.encoding);
                if (this.start !== void 0) {
                    if ("number" !== typeof this.start) {
                        throw TypeError("start must be a Number");
                    }
                    if (this.end === void 0) {
                        this.end = Infinity;
                    } else if ("number" !== typeof this.end) {
                        throw TypeError("end must be a Number");
                    }
                    if (this.start > this.end) {
                        throw new Error("start must be <= end");
                    }
                    this.pos = this.start;
                }
                if (this.fd !== null) {
                    process.nextTick(function() {
                        self._read();
                    });
                    return;
                }
                fs6.open(this.path, this.flags, this.mode, function(err, fd) {
                    if (err) {
                        self.emit("error", err);
                        self.readable = false;
                        return;
                    }
                    self.fd = fd;
                    self.emit("open", fd);
                    self._read();
                });
            }
            function WriteStream(path4, options) {
                if (!_instanceof(this, WriteStream)) return new WriteStream(path4, options);
                Stream.call(this);
                this.path = path4;
                this.fd = null;
                this.writable = true;
                this.flags = "w";
                this.encoding = "binary";
                this.mode = 438;
                this.bytesWritten = 0;
                options = options || {};
                var keys = Object.keys(options);
                for(var index = 0, length = keys.length; index < length; index++){
                    var key = keys[index];
                    this[key] = options[key];
                }
                if (this.start !== void 0) {
                    if ("number" !== typeof this.start) {
                        throw TypeError("start must be a Number");
                    }
                    if (this.start < 0) {
                        throw new Error("start must be >= zero");
                    }
                    this.pos = this.start;
                }
                this.busy = false;
                this._queue = [];
                if (this.fd === null) {
                    this._open = fs6.open;
                    this._queue.push([
                        this._open,
                        this.path,
                        this.flags,
                        this.mode,
                        void 0
                    ]);
                    this.flush();
                }
            }
        };
        var Stream = require("stream").Stream;
        module2.exports = legacy;
    }
});
// node_modules/graceful-fs/clone.js
var require_clone = __commonJS({
    "node_modules/graceful-fs/clone.js": function(exports, module2) {
        "use strict";
        var clone = function clone(obj) {
            if (obj === null || typeof obj !== "object") return obj;
            if (_instanceof(obj, Object)) var copy = {
                __proto__: getPrototypeOf(obj)
            };
            else var copy = /* @__PURE__ */ Object.create(null);
            Object.getOwnPropertyNames(obj).forEach(function(key) {
                Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
            });
            return copy;
        };
        module2.exports = clone;
        var getPrototypeOf = Object.getPrototypeOf || function(obj) {
            return obj.__proto__;
        };
    }
});
// node_modules/graceful-fs/graceful-fs.js
var require_graceful_fs = __commonJS({
    "node_modules/graceful-fs/graceful-fs.js": function(exports, module2) {
        "use strict";
        var noop2 = function noop2() {};
        var publishQueue = function publishQueue(context, queue2) {
            Object.defineProperty(context, gracefulQueue, {
                get: function get() {
                    return queue2;
                }
            });
        };
        var enqueue = function enqueue(elem) {
            debug("ENQUEUE", elem[0].name, elem[1]);
            fs6[gracefulQueue].push(elem);
            retry();
        };
        var resetQueue = function resetQueue() {
            var now = Date.now();
            for(var i = 0; i < fs6[gracefulQueue].length; ++i){
                if (fs6[gracefulQueue][i].length > 2) {
                    fs6[gracefulQueue][i][3] = now;
                    fs6[gracefulQueue][i][4] = now;
                }
            }
            retry();
        };
        var fs6 = require("fs");
        var polyfills = require_polyfills();
        var legacy = require_legacy_streams();
        var clone = require_clone();
        var util = require("util");
        var gracefulQueue;
        var previousSymbol;
        if (typeof Symbol === "function" && typeof Symbol.for === "function") {
            gracefulQueue = Symbol.for("graceful-fs.queue");
            previousSymbol = Symbol.for("graceful-fs.previous");
        } else {
            gracefulQueue = "___graceful-fs.queue";
            previousSymbol = "___graceful-fs.previous";
        }
        var debug = noop2;
        if (util.debuglog) debug = util.debuglog("gfs4");
        else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) debug = function debug() {
            var m = util.format.apply(util, arguments);
            m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
            console.error(m);
        };
        if (!fs6[gracefulQueue]) {
            queue = global[gracefulQueue] || [];
            publishQueue(fs6, queue);
            fs6.close = function(fs$close) {
                var close = function close(fd, cb) {
                    return fs$close.call(fs6, fd, function(err) {
                        if (!err) {
                            resetQueue();
                        }
                        if (typeof cb === "function") cb.apply(this, arguments);
                    });
                };
                Object.defineProperty(close, previousSymbol, {
                    value: fs$close
                });
                return close;
            }(fs6.close);
            fs6.closeSync = function(fs$closeSync) {
                var closeSync = function closeSync(fd) {
                    fs$closeSync.apply(fs6, arguments);
                    resetQueue();
                };
                Object.defineProperty(closeSync, previousSymbol, {
                    value: fs$closeSync
                });
                return closeSync;
            }(fs6.closeSync);
            if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
                process.on("exit", function() {
                    debug(fs6[gracefulQueue]);
                    require("assert").equal(fs6[gracefulQueue].length, 0);
                });
            }
        }
        var queue;
        if (!global[gracefulQueue]) {
            publishQueue(global, fs6[gracefulQueue]);
        }
        module2.exports = patch(clone(fs6));
        if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs6.__patched) {
            module2.exports = patch(fs6);
            fs6.__patched = true;
        }
        function patch(fs7) {
            polyfills(fs7);
            fs7.gracefulify = patch;
            fs7.createReadStream = createReadStream;
            fs7.createWriteStream = createWriteStream;
            var fs$readFile = fs7.readFile;
            fs7.readFile = readFile;
            function readFile(path4, options, cb) {
                if (typeof options === "function") cb = options, options = null;
                return go$readFile(path4, options, cb);
                function go$readFile(path5, options2, cb2, startTime) {
                    return fs$readFile(path5, options2, function(err) {
                        if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                            go$readFile,
                            [
                                path5,
                                options2,
                                cb2
                            ],
                            err,
                            startTime || Date.now(),
                            Date.now()
                        ]);
                        else {
                            if (typeof cb2 === "function") cb2.apply(this, arguments);
                        }
                    });
                }
            }
            var fs$writeFile = fs7.writeFile;
            fs7.writeFile = writeFile;
            function writeFile(path4, data, options, cb) {
                if (typeof options === "function") cb = options, options = null;
                return go$writeFile(path4, data, options, cb);
                function go$writeFile(path5, data2, options2, cb2, startTime) {
                    return fs$writeFile(path5, data2, options2, function(err) {
                        if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                            go$writeFile,
                            [
                                path5,
                                data2,
                                options2,
                                cb2
                            ],
                            err,
                            startTime || Date.now(),
                            Date.now()
                        ]);
                        else {
                            if (typeof cb2 === "function") cb2.apply(this, arguments);
                        }
                    });
                }
            }
            var fs$appendFile = fs7.appendFile;
            if (fs$appendFile) fs7.appendFile = appendFile;
            function appendFile(path4, data, options, cb) {
                if (typeof options === "function") cb = options, options = null;
                return go$appendFile(path4, data, options, cb);
                function go$appendFile(path5, data2, options2, cb2, startTime) {
                    return fs$appendFile(path5, data2, options2, function(err) {
                        if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                            go$appendFile,
                            [
                                path5,
                                data2,
                                options2,
                                cb2
                            ],
                            err,
                            startTime || Date.now(),
                            Date.now()
                        ]);
                        else {
                            if (typeof cb2 === "function") cb2.apply(this, arguments);
                        }
                    });
                }
            }
            var fs$copyFile = fs7.copyFile;
            if (fs$copyFile) fs7.copyFile = copyFile;
            function copyFile(src, dest, flags, cb) {
                if (typeof flags === "function") {
                    cb = flags;
                    flags = 0;
                }
                return go$copyFile(src, dest, flags, cb);
                function go$copyFile(src2, dest2, flags2, cb2, startTime) {
                    return fs$copyFile(src2, dest2, flags2, function(err) {
                        if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                            go$copyFile,
                            [
                                src2,
                                dest2,
                                flags2,
                                cb2
                            ],
                            err,
                            startTime || Date.now(),
                            Date.now()
                        ]);
                        else {
                            if (typeof cb2 === "function") cb2.apply(this, arguments);
                        }
                    });
                }
            }
            var fs$readdir = fs7.readdir;
            fs7.readdir = readdir;
            var noReaddirOptionVersions = /^v[0-5]\./;
            function readdir(path4, options, cb) {
                if (typeof options === "function") cb = options, options = null;
                var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path5, options2, cb2, startTime) {
                    return fs$readdir(path5, fs$readdirCallback(path5, options2, cb2, startTime));
                } : function go$readdir2(path5, options2, cb2, startTime) {
                    return fs$readdir(path5, options2, fs$readdirCallback(path5, options2, cb2, startTime));
                };
                return go$readdir(path4, options, cb);
                function fs$readdirCallback(path5, options2, cb2, startTime) {
                    return function(err, files) {
                        if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                            go$readdir,
                            [
                                path5,
                                options2,
                                cb2
                            ],
                            err,
                            startTime || Date.now(),
                            Date.now()
                        ]);
                        else {
                            if (files && files.sort) files.sort();
                            if (typeof cb2 === "function") cb2.call(this, err, files);
                        }
                    };
                }
            }
            if (process.version.substr(0, 4) === "v0.8") {
                var legStreams = legacy(fs7);
                ReadStream = legStreams.ReadStream;
                WriteStream = legStreams.WriteStream;
            }
            var fs$ReadStream = fs7.ReadStream;
            if (fs$ReadStream) {
                ReadStream.prototype = Object.create(fs$ReadStream.prototype);
                ReadStream.prototype.open = ReadStream$open;
            }
            var fs$WriteStream = fs7.WriteStream;
            if (fs$WriteStream) {
                WriteStream.prototype = Object.create(fs$WriteStream.prototype);
                WriteStream.prototype.open = WriteStream$open;
            }
            Object.defineProperty(fs7, "ReadStream", {
                get: function get() {
                    return ReadStream;
                },
                set: function set(val) {
                    ReadStream = val;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(fs7, "WriteStream", {
                get: function get() {
                    return WriteStream;
                },
                set: function set(val) {
                    WriteStream = val;
                },
                enumerable: true,
                configurable: true
            });
            var FileReadStream = ReadStream;
            Object.defineProperty(fs7, "FileReadStream", {
                get: function get() {
                    return FileReadStream;
                },
                set: function set(val) {
                    FileReadStream = val;
                },
                enumerable: true,
                configurable: true
            });
            var FileWriteStream = WriteStream;
            Object.defineProperty(fs7, "FileWriteStream", {
                get: function get() {
                    return FileWriteStream;
                },
                set: function set(val) {
                    FileWriteStream = val;
                },
                enumerable: true,
                configurable: true
            });
            function ReadStream(path4, options) {
                if (_instanceof(this, ReadStream)) return fs$ReadStream.apply(this, arguments), this;
                else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
            }
            function ReadStream$open() {
                var that = this;
                open(that.path, that.flags, that.mode, function(err, fd) {
                    if (err) {
                        if (that.autoClose) that.destroy();
                        that.emit("error", err);
                    } else {
                        that.fd = fd;
                        that.emit("open", fd);
                        that.read();
                    }
                });
            }
            function WriteStream(path4, options) {
                if (_instanceof(this, WriteStream)) return fs$WriteStream.apply(this, arguments), this;
                else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
            }
            function WriteStream$open() {
                var that = this;
                open(that.path, that.flags, that.mode, function(err, fd) {
                    if (err) {
                        that.destroy();
                        that.emit("error", err);
                    } else {
                        that.fd = fd;
                        that.emit("open", fd);
                    }
                });
            }
            function createReadStream(path4, options) {
                return new fs7.ReadStream(path4, options);
            }
            function createWriteStream(path4, options) {
                return new fs7.WriteStream(path4, options);
            }
            var fs$open = fs7.open;
            fs7.open = open;
            function open(path4, flags, mode, cb) {
                if (typeof mode === "function") cb = mode, mode = null;
                return go$open(path4, flags, mode, cb);
                function go$open(path5, flags2, mode2, cb2, startTime) {
                    return fs$open(path5, flags2, mode2, function(err, fd) {
                        if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                            go$open,
                            [
                                path5,
                                flags2,
                                mode2,
                                cb2
                            ],
                            err,
                            startTime || Date.now(),
                            Date.now()
                        ]);
                        else {
                            if (typeof cb2 === "function") cb2.apply(this, arguments);
                        }
                    });
                }
            }
            return fs7;
        }
        var retryTimer;
        function retry() {
            clearTimeout(retryTimer);
            retryTimer = void 0;
            if (fs6[gracefulQueue].length === 0) return;
            var elem = fs6[gracefulQueue].shift();
            var fn = elem[0];
            var args = elem[1];
            var err = elem[2];
            var startTime = elem[3];
            var lastTime = elem[4];
            if (startTime === void 0) {
                debug("RETRY", fn.name, args);
                fn.apply(null, args);
            } else if (Date.now() - startTime >= 6e4) {
                debug("TIMEOUT", fn.name, args);
                var cb = args.pop();
                if (typeof cb === "function") cb.call(null, err);
            } else {
                var sinceAttempt = Date.now() - lastTime;
                var sinceStart = Math.max(lastTime - startTime, 1);
                var desiredDelay = Math.min(sinceStart * 1.2, 100);
                if (sinceAttempt >= desiredDelay) {
                    debug("RETRY", fn.name, args);
                    fn.apply(null, args.concat([
                        startTime
                    ]));
                } else {
                    fs6[gracefulQueue].push(elem);
                }
            }
            if (retryTimer === void 0) {
                retryTimer = setTimeout(retry, 0);
            }
        }
    }
});
// node_modules/fs-extra/lib/fs/index.js
var require_fs5 = __commonJS({
    "node_modules/fs-extra/lib/fs/index.js": function(exports) {
        "use strict";
        var u = require_universalify().fromCallback;
        var fs6 = require_graceful_fs();
        var api = [
            "access",
            "appendFile",
            "chmod",
            "chown",
            "close",
            "copyFile",
            "fchmod",
            "fchown",
            "fdatasync",
            "fstat",
            "fsync",
            "ftruncate",
            "futimes",
            "lchmod",
            "lchown",
            "link",
            "lstat",
            "mkdir",
            "mkdtemp",
            "open",
            "opendir",
            "readdir",
            "readFile",
            "readlink",
            "realpath",
            "rename",
            "rm",
            "rmdir",
            "stat",
            "symlink",
            "truncate",
            "unlink",
            "utimes",
            "writeFile"
        ].filter(function(key) {
            return typeof fs6[key] === "function";
        });
        Object.assign(exports, fs6);
        api.forEach(function(method) {
            exports[method] = u(fs6[method]);
        });
        exports.exists = function(filename, callback) {
            if (typeof callback === "function") {
                return fs6.exists(filename, callback);
            }
            return new Promise(function(resolve) {
                return fs6.exists(filename, resolve);
            });
        };
        exports.read = function(fd, buffer, offset, length, position, callback) {
            if (typeof callback === "function") {
                return fs6.read(fd, buffer, offset, length, position, callback);
            }
            return new Promise(function(resolve, reject) {
                fs6.read(fd, buffer, offset, length, position, function(err, bytesRead, buffer2) {
                    if (err) return reject(err);
                    resolve({
                        bytesRead: bytesRead,
                        buffer: buffer2
                    });
                });
            });
        };
        exports.write = function(fd, buffer) {
            for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                args[_key - 2] = arguments[_key];
            }
            if (typeof args[args.length - 1] === "function") {
                var _fs6;
                return (_fs6 = fs6).write.apply(_fs6, [
                    fd,
                    buffer
                ].concat(_to_consumable_array(args)));
            }
            return new Promise(function(resolve, reject) {
                var _fs6;
                (_fs6 = fs6).write.apply(_fs6, [
                    fd,
                    buffer
                ].concat(_to_consumable_array(args), [
                    function(err, bytesWritten, buffer2) {
                        if (err) return reject(err);
                        resolve({
                            bytesWritten: bytesWritten,
                            buffer: buffer2
                        });
                    }
                ]));
            });
        };
        exports.readv = function(fd, buffers) {
            for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                args[_key - 2] = arguments[_key];
            }
            if (typeof args[args.length - 1] === "function") {
                var _fs6;
                return (_fs6 = fs6).readv.apply(_fs6, [
                    fd,
                    buffers
                ].concat(_to_consumable_array(args)));
            }
            return new Promise(function(resolve, reject) {
                var _fs6;
                (_fs6 = fs6).readv.apply(_fs6, [
                    fd,
                    buffers
                ].concat(_to_consumable_array(args), [
                    function(err, bytesRead, buffers2) {
                        if (err) return reject(err);
                        resolve({
                            bytesRead: bytesRead,
                            buffers: buffers2
                        });
                    }
                ]));
            });
        };
        exports.writev = function(fd, buffers) {
            for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                args[_key - 2] = arguments[_key];
            }
            if (typeof args[args.length - 1] === "function") {
                var _fs6;
                return (_fs6 = fs6).writev.apply(_fs6, [
                    fd,
                    buffers
                ].concat(_to_consumable_array(args)));
            }
            return new Promise(function(resolve, reject) {
                var _fs6;
                (_fs6 = fs6).writev.apply(_fs6, [
                    fd,
                    buffers
                ].concat(_to_consumable_array(args), [
                    function(err, bytesWritten, buffers2) {
                        if (err) return reject(err);
                        resolve({
                            bytesWritten: bytesWritten,
                            buffers: buffers2
                        });
                    }
                ]));
            });
        };
        if (typeof fs6.realpath.native === "function") {
            exports.realpath.native = u(fs6.realpath.native);
        } else {
            process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003");
        }
    }
});
// node_modules/fs-extra/lib/mkdirs/utils.js
var require_utils5 = __commonJS({
    "node_modules/fs-extra/lib/mkdirs/utils.js": function(exports, module2) {
        "use strict";
        var path4 = require("path");
        module2.exports.checkPath = function checkPath(pth) {
            if (process.platform === "win32") {
                var pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path4.parse(pth).root, ""));
                if (pathHasInvalidWinCharacters) {
                    var error = new Error("Path contains invalid characters: ".concat(pth));
                    error.code = "EINVAL";
                    throw error;
                }
            }
        };
    }
});
// node_modules/fs-extra/lib/mkdirs/make-dir.js
var require_make_dir = __commonJS({
    "node_modules/fs-extra/lib/mkdirs/make-dir.js": function(exports, module2) {
        "use strict";
        var fs6 = require_fs5();
        var checkPath = require_utils5().checkPath;
        var getMode = function(options) {
            var defaults = {
                mode: 511
            };
            if (typeof options === "number") return options;
            return _object_spread({}, defaults, options).mode;
        };
        module2.exports.makeDir = function() {
            var _ref = _async_to_generator(function(dir, options) {
                return _ts_generator(this, function(_state) {
                    checkPath(dir);
                    return [
                        2,
                        fs6.mkdir(dir, {
                            mode: getMode(options),
                            recursive: true
                        })
                    ];
                });
            });
            return function(dir, options) {
                return _ref.apply(this, arguments);
            };
        }();
        module2.exports.makeDirSync = function(dir, options) {
            checkPath(dir);
            return fs6.mkdirSync(dir, {
                mode: getMode(options),
                recursive: true
            });
        };
    }
});
// node_modules/fs-extra/lib/mkdirs/index.js
var require_mkdirs = __commonJS({
    "node_modules/fs-extra/lib/mkdirs/index.js": function(exports, module2) {
        "use strict";
        var u = require_universalify().fromPromise;
        var _require_make_dir = require_make_dir(), _makeDir = _require_make_dir.makeDir, makeDirSync = _require_make_dir.makeDirSync;
        var makeDir = u(_makeDir);
        module2.exports = {
            mkdirs: makeDir,
            mkdirsSync: makeDirSync,
            // alias
            mkdirp: makeDir,
            mkdirpSync: makeDirSync,
            ensureDir: makeDir,
            ensureDirSync: makeDirSync
        };
    }
});
// node_modules/fs-extra/lib/path-exists/index.js
var require_path_exists = __commonJS({
    "node_modules/fs-extra/lib/path-exists/index.js": function(exports, module2) {
        "use strict";
        var pathExists = function pathExists(path4) {
            return fs6.access(path4).then(function() {
                return true;
            }).catch(function() {
                return false;
            });
        };
        var u = require_universalify().fromPromise;
        var fs6 = require_fs5();
        module2.exports = {
            pathExists: u(pathExists),
            pathExistsSync: fs6.existsSync
        };
    }
});
// node_modules/fs-extra/lib/util/utimes.js
var require_utimes = __commonJS({
    "node_modules/fs-extra/lib/util/utimes.js": function(exports, module2) {
        "use strict";
        var utimesMillisSync = function utimesMillisSync(path4, atime, mtime) {
            var fd = fs6.openSync(path4, "r+");
            fs6.futimesSync(fd, atime, mtime);
            return fs6.closeSync(fd);
        };
        var fs6 = require_fs5();
        var u = require_universalify().fromPromise;
        function utimesMillis(path4, atime, mtime) {
            return _utimesMillis.apply(this, arguments);
        }
        function _utimesMillis() {
            _utimesMillis = _async_to_generator(function(path4, atime, mtime) {
                var fd, closeErr, e;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                fs6.open(path4, "r+")
                            ];
                        case 1:
                            fd = _state.sent();
                            closeErr = null;
                            _state.label = 2;
                        case 2:
                            _state.trys.push([
                                2,
                                ,
                                4,
                                8
                            ]);
                            return [
                                4,
                                fs6.futimes(fd, atime, mtime)
                            ];
                        case 3:
                            _state.sent();
                            return [
                                3,
                                8
                            ];
                        case 4:
                            _state.trys.push([
                                4,
                                6,
                                ,
                                7
                            ]);
                            return [
                                4,
                                fs6.close(fd)
                            ];
                        case 5:
                            _state.sent();
                            return [
                                3,
                                7
                            ];
                        case 6:
                            e = _state.sent();
                            closeErr = e;
                            return [
                                3,
                                7
                            ];
                        case 7:
                            return [
                                7
                            ];
                        case 8:
                            if (closeErr) {
                                throw closeErr;
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return _utimesMillis.apply(this, arguments);
        }
        module2.exports = {
            utimesMillis: u(utimesMillis),
            utimesMillisSync: utimesMillisSync
        };
    }
});
// node_modules/fs-extra/lib/util/stat.js
var require_stat = __commonJS({
    "node_modules/fs-extra/lib/util/stat.js": function(exports, module2) {
        "use strict";
        var getStats = function getStats(src, dest, opts) {
            var statFunc = opts.dereference ? function(file) {
                return fs6.stat(file, {
                    bigint: true
                });
            } : function(file) {
                return fs6.lstat(file, {
                    bigint: true
                });
            };
            return Promise.all([
                statFunc(src),
                statFunc(dest).catch(function(err) {
                    if (err.code === "ENOENT") return null;
                    throw err;
                })
            ]).then(function(param) {
                var _param = _sliced_to_array(param, 2), srcStat = _param[0], destStat = _param[1];
                return {
                    srcStat: srcStat,
                    destStat: destStat
                };
            });
        };
        var getStatsSync = function getStatsSync(src, dest, opts) {
            var destStat;
            var statFunc = opts.dereference ? function(file) {
                return fs6.statSync(file, {
                    bigint: true
                });
            } : function(file) {
                return fs6.lstatSync(file, {
                    bigint: true
                });
            };
            var srcStat = statFunc(src);
            try {
                destStat = statFunc(dest);
            } catch (err) {
                if (err.code === "ENOENT") return {
                    srcStat: srcStat,
                    destStat: null
                };
                throw err;
            }
            return {
                srcStat: srcStat,
                destStat: destStat
            };
        };
        var checkPathsSync = function checkPathsSync(src, dest, funcName, opts) {
            var _getStatsSync = getStatsSync(src, dest, opts), srcStat = _getStatsSync.srcStat, destStat = _getStatsSync.destStat;
            if (destStat) {
                if (areIdentical(srcStat, destStat)) {
                    var srcBaseName = path4.basename(src);
                    var destBaseName = path4.basename(dest);
                    if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
                        return {
                            srcStat: srcStat,
                            destStat: destStat,
                            isChangingCase: true
                        };
                    }
                    throw new Error("Source and destination must not be the same.");
                }
                if (srcStat.isDirectory() && !destStat.isDirectory()) {
                    throw new Error("Cannot overwrite non-directory '".concat(dest, "' with directory '").concat(src, "'."));
                }
                if (!srcStat.isDirectory() && destStat.isDirectory()) {
                    throw new Error("Cannot overwrite directory '".concat(dest, "' with non-directory '").concat(src, "'."));
                }
            }
            if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
                throw new Error(errMsg(src, dest, funcName));
            }
            return {
                srcStat: srcStat,
                destStat: destStat
            };
        };
        var areIdentical = function areIdentical(srcStat, destStat) {
            return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
        };
        var isSrcSubdir = function isSrcSubdir(src, dest) {
            var srcArr = path4.resolve(src).split(path4.sep).filter(function(i) {
                return i;
            });
            var destArr = path4.resolve(dest).split(path4.sep).filter(function(i) {
                return i;
            });
            return srcArr.every(function(cur, i) {
                return destArr[i] === cur;
            });
        };
        var errMsg = function errMsg(src, dest, funcName) {
            return "Cannot ".concat(funcName, " '").concat(src, "' to a subdirectory of itself, '").concat(dest, "'.");
        };
        var fs6 = require_fs5();
        var path4 = require("path");
        var u = require_universalify().fromPromise;
        function checkPaths(src, dest, funcName, opts) {
            return _checkPaths.apply(this, arguments);
        }
        function _checkPaths() {
            _checkPaths = _async_to_generator(function(src, dest, funcName, opts) {
                var _ref, srcStat, destStat, srcBaseName, destBaseName;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getStats(src, dest, opts)
                            ];
                        case 1:
                            _ref = _state.sent(), srcStat = _ref.srcStat, destStat = _ref.destStat;
                            if (destStat) {
                                if (areIdentical(srcStat, destStat)) {
                                    srcBaseName = path4.basename(src);
                                    destBaseName = path4.basename(dest);
                                    if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
                                        return [
                                            2,
                                            {
                                                srcStat: srcStat,
                                                destStat: destStat,
                                                isChangingCase: true
                                            }
                                        ];
                                    }
                                    throw new Error("Source and destination must not be the same.");
                                }
                                if (srcStat.isDirectory() && !destStat.isDirectory()) {
                                    throw new Error("Cannot overwrite non-directory '".concat(dest, "' with directory '").concat(src, "'."));
                                }
                                if (!srcStat.isDirectory() && destStat.isDirectory()) {
                                    throw new Error("Cannot overwrite directory '".concat(dest, "' with non-directory '").concat(src, "'."));
                                }
                            }
                            if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
                                throw new Error(errMsg(src, dest, funcName));
                            }
                            return [
                                2,
                                {
                                    srcStat: srcStat,
                                    destStat: destStat
                                }
                            ];
                    }
                });
            });
            return _checkPaths.apply(this, arguments);
        }
        function checkParentPaths(src, srcStat, dest, funcName) {
            return _checkParentPaths.apply(this, arguments);
        }
        function _checkParentPaths() {
            _checkParentPaths = _async_to_generator(function(src, srcStat, dest, funcName) {
                var srcParent, destParent, destStat, err;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            srcParent = path4.resolve(path4.dirname(src));
                            destParent = path4.resolve(path4.dirname(dest));
                            if (destParent === srcParent || destParent === path4.parse(destParent).root) return [
                                2
                            ];
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4,
                                fs6.stat(destParent, {
                                    bigint: true
                                })
                            ];
                        case 2:
                            destStat = _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 3:
                            err = _state.sent();
                            if (err.code === "ENOENT") return [
                                2
                            ];
                            throw err;
                        case 4:
                            if (areIdentical(srcStat, destStat)) {
                                throw new Error(errMsg(src, dest, funcName));
                            }
                            return [
                                2,
                                checkParentPaths(src, srcStat, destParent, funcName)
                            ];
                    }
                });
            });
            return _checkParentPaths.apply(this, arguments);
        }
        function checkParentPathsSync(src, srcStat, dest, funcName) {
            var srcParent = path4.resolve(path4.dirname(src));
            var destParent = path4.resolve(path4.dirname(dest));
            if (destParent === srcParent || destParent === path4.parse(destParent).root) return;
            var destStat;
            try {
                destStat = fs6.statSync(destParent, {
                    bigint: true
                });
            } catch (err) {
                if (err.code === "ENOENT") return;
                throw err;
            }
            if (areIdentical(srcStat, destStat)) {
                throw new Error(errMsg(src, dest, funcName));
            }
            return checkParentPathsSync(src, srcStat, destParent, funcName);
        }
        module2.exports = {
            // checkPaths
            checkPaths: u(checkPaths),
            checkPathsSync: checkPathsSync,
            // checkParent
            checkParentPaths: u(checkParentPaths),
            checkParentPathsSync: checkParentPathsSync,
            // Misc
            isSrcSubdir: isSrcSubdir,
            areIdentical: areIdentical
        };
    }
});
// node_modules/fs-extra/lib/copy/copy.js
var require_copy = __commonJS({
    "node_modules/fs-extra/lib/copy/copy.js": function(exports, module2) {
        "use strict";
        var fileIsNotWritable = function fileIsNotWritable(srcMode) {
            return (srcMode & 128) === 0;
        };
        var makeFileWritable = function makeFileWritable(dest, srcMode) {
            return fs6.chmod(dest, srcMode | 128);
        };
        var fs6 = require_fs5();
        var path4 = require("path");
        var mkdirs = require_mkdirs().mkdirs;
        var pathExists = require_path_exists().pathExists;
        var utimesMillis = require_utimes().utimesMillis;
        var stat = require_stat();
        function copy(src, dest) {
            return _copy.apply(this, arguments);
        }
        function _copy() {
            _copy = _async_to_generator(function(src, dest) {
                var opts, _ref, srcStat, destStat, include, destParent, dirExists;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            opts = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                            if (typeof opts === "function") {
                                opts = {
                                    filter: opts
                                };
                            }
                            opts.clobber = "clobber" in opts ? !!opts.clobber : true;
                            opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
                            if (opts.preserveTimestamps && process.arch === "ia32") {
                                process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n	see https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0001");
                            }
                            return [
                                4,
                                stat.checkPaths(src, dest, "copy", opts)
                            ];
                        case 1:
                            _ref = _state.sent(), srcStat = _ref.srcStat, destStat = _ref.destStat;
                            return [
                                4,
                                stat.checkParentPaths(src, srcStat, dest, "copy")
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                runFilter(src, dest, opts)
                            ];
                        case 3:
                            include = _state.sent();
                            if (!include) return [
                                2
                            ];
                            destParent = path4.dirname(dest);
                            return [
                                4,
                                pathExists(destParent)
                            ];
                        case 4:
                            dirExists = _state.sent();
                            if (!!dirExists) return [
                                3,
                                6
                            ];
                            return [
                                4,
                                mkdirs(destParent)
                            ];
                        case 5:
                            _state.sent();
                            _state.label = 6;
                        case 6:
                            return [
                                4,
                                getStatsAndPerformCopy(destStat, src, dest, opts)
                            ];
                        case 7:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return _copy.apply(this, arguments);
        }
        function runFilter(src, dest, opts) {
            return _runFilter.apply(this, arguments);
        }
        function _runFilter() {
            _runFilter = _async_to_generator(function(src, dest, opts) {
                return _ts_generator(this, function(_state) {
                    if (!opts.filter) return [
                        2,
                        true
                    ];
                    return [
                        2,
                        opts.filter(src, dest)
                    ];
                });
            });
            return _runFilter.apply(this, arguments);
        }
        function getStatsAndPerformCopy(destStat, src, dest, opts) {
            return _getStatsAndPerformCopy.apply(this, arguments);
        }
        function _getStatsAndPerformCopy() {
            _getStatsAndPerformCopy = _async_to_generator(function(destStat, src, dest, opts) {
                var statFn, srcStat;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            statFn = opts.dereference ? fs6.stat : fs6.lstat;
                            return [
                                4,
                                statFn(src)
                            ];
                        case 1:
                            srcStat = _state.sent();
                            if (srcStat.isDirectory()) return [
                                2,
                                onDir(srcStat, destStat, src, dest, opts)
                            ];
                            if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return [
                                2,
                                onFile(srcStat, destStat, src, dest, opts)
                            ];
                            if (srcStat.isSymbolicLink()) return [
                                2,
                                onLink(destStat, src, dest, opts)
                            ];
                            if (srcStat.isSocket()) throw new Error("Cannot copy a socket file: ".concat(src));
                            if (srcStat.isFIFO()) throw new Error("Cannot copy a FIFO pipe: ".concat(src));
                            throw new Error("Unknown file: ".concat(src));
                    }
                });
            });
            return _getStatsAndPerformCopy.apply(this, arguments);
        }
        function onFile(srcStat, destStat, src, dest, opts) {
            return _onFile.apply(this, arguments);
        }
        function _onFile() {
            _onFile = _async_to_generator(function(srcStat, destStat, src, dest, opts) {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!destStat) return [
                                2,
                                copyFile(srcStat, src, dest, opts)
                            ];
                            if (!opts.overwrite) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                fs6.unlink(dest)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2,
                                copyFile(srcStat, src, dest, opts)
                            ];
                        case 2:
                            if (opts.errorOnExist) {
                                throw new Error("'".concat(dest, "' already exists"));
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return _onFile.apply(this, arguments);
        }
        function copyFile(srcStat, src, dest, opts) {
            return _copyFile.apply(this, arguments);
        }
        function _copyFile() {
            _copyFile = _async_to_generator(function(srcStat, src, dest, opts) {
                var updatedSrcStat;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                fs6.copyFile(src, dest)
                            ];
                        case 1:
                            _state.sent();
                            if (!opts.preserveTimestamps) return [
                                3,
                                6
                            ];
                            if (!fileIsNotWritable(srcStat.mode)) return [
                                3,
                                3
                            ];
                            return [
                                4,
                                makeFileWritable(dest, srcStat.mode)
                            ];
                        case 2:
                            _state.sent();
                            _state.label = 3;
                        case 3:
                            return [
                                4,
                                fs6.stat(src)
                            ];
                        case 4:
                            updatedSrcStat = _state.sent();
                            return [
                                4,
                                utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime)
                            ];
                        case 5:
                            _state.sent();
                            _state.label = 6;
                        case 6:
                            return [
                                2,
                                fs6.chmod(dest, srcStat.mode)
                            ];
                    }
                });
            });
            return _copyFile.apply(this, arguments);
        }
        function onDir(srcStat, destStat, src, dest, opts) {
            return _onDir.apply(this, arguments);
        }
        function _onDir() {
            _onDir = _async_to_generator(function(srcStat, destStat, src, dest, opts) {
                var items;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!!destStat) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                fs6.mkdir(dest)
                            ];
                        case 1:
                            _state.sent();
                            _state.label = 2;
                        case 2:
                            return [
                                4,
                                fs6.readdir(src)
                            ];
                        case 3:
                            items = _state.sent();
                            return [
                                4,
                                Promise.all(items.map(function() {
                                    var _ref = _async_to_generator(function(item) {
                                        var srcItem, destItem, include, _ref, destStat2;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    srcItem = path4.join(src, item);
                                                    destItem = path4.join(dest, item);
                                                    return [
                                                        4,
                                                        runFilter(srcItem, destItem, opts)
                                                    ];
                                                case 1:
                                                    include = _state.sent();
                                                    if (!include) return [
                                                        2
                                                    ];
                                                    return [
                                                        4,
                                                        stat.checkPaths(srcItem, destItem, "copy", opts)
                                                    ];
                                                case 2:
                                                    _ref = _state.sent(), destStat2 = _ref.destStat;
                                                    return [
                                                        2,
                                                        getStatsAndPerformCopy(destStat2, srcItem, destItem, opts)
                                                    ];
                                            }
                                        });
                                    });
                                    return function(item) {
                                        return _ref.apply(this, arguments);
                                    };
                                }()))
                            ];
                        case 4:
                            _state.sent();
                            if (!!destStat) return [
                                3,
                                6
                            ];
                            return [
                                4,
                                fs6.chmod(dest, srcStat.mode)
                            ];
                        case 5:
                            _state.sent();
                            _state.label = 6;
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            });
            return _onDir.apply(this, arguments);
        }
        function onLink(destStat, src, dest, opts) {
            return _onLink.apply(this, arguments);
        }
        function _onLink() {
            _onLink = _async_to_generator(function(destStat, src, dest, opts) {
                var resolvedSrc, resolvedDest, e;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                fs6.readlink(src)
                            ];
                        case 1:
                            resolvedSrc = _state.sent();
                            if (opts.dereference) {
                                resolvedSrc = path4.resolve(process.cwd(), resolvedSrc);
                            }
                            if (!destStat) {
                                return [
                                    2,
                                    fs6.symlink(resolvedSrc, dest)
                                ];
                            }
                            resolvedDest = null;
                            _state.label = 2;
                        case 2:
                            _state.trys.push([
                                2,
                                4,
                                ,
                                5
                            ]);
                            return [
                                4,
                                fs6.readlink(dest)
                            ];
                        case 3:
                            resolvedDest = _state.sent();
                            return [
                                3,
                                5
                            ];
                        case 4:
                            e = _state.sent();
                            if (e.code === "EINVAL" || e.code === "UNKNOWN") return [
                                2,
                                fs6.symlink(resolvedSrc, dest)
                            ];
                            throw e;
                        case 5:
                            if (opts.dereference) {
                                resolvedDest = path4.resolve(process.cwd(), resolvedDest);
                            }
                            if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
                                throw new Error("Cannot copy '".concat(resolvedSrc, "' to a subdirectory of itself, '").concat(resolvedDest, "'."));
                            }
                            if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
                                throw new Error("Cannot overwrite '".concat(resolvedDest, "' with '").concat(resolvedSrc, "'."));
                            }
                            return [
                                4,
                                fs6.unlink(dest)
                            ];
                        case 6:
                            _state.sent();
                            return [
                                2,
                                fs6.symlink(resolvedSrc, dest)
                            ];
                    }
                });
            });
            return _onLink.apply(this, arguments);
        }
        module2.exports = copy;
    }
});
// node_modules/fs-extra/lib/copy/copy-sync.js
var require_copy_sync = __commonJS({
    "node_modules/fs-extra/lib/copy/copy-sync.js": function(exports, module2) {
        "use strict";
        var copySync = function copySync(src, dest, opts) {
            if (typeof opts === "function") {
                opts = {
                    filter: opts
                };
            }
            opts = opts || {};
            opts.clobber = "clobber" in opts ? !!opts.clobber : true;
            opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
            if (opts.preserveTimestamps && process.arch === "ia32") {
                process.emitWarning("Using the preserveTimestamps option in 32-bit node is not recommended;\n\n	see https://github.com/jprichardson/node-fs-extra/issues/269", "Warning", "fs-extra-WARN0002");
            }
            var _stat_checkPathsSync = stat.checkPathsSync(src, dest, "copy", opts), srcStat = _stat_checkPathsSync.srcStat, destStat = _stat_checkPathsSync.destStat;
            stat.checkParentPathsSync(src, srcStat, dest, "copy");
            if (opts.filter && !opts.filter(src, dest)) return;
            var destParent = path4.dirname(dest);
            if (!fs6.existsSync(destParent)) mkdirsSync(destParent);
            return getStats(destStat, src, dest, opts);
        };
        var getStats = function getStats(destStat, src, dest, opts) {
            var statSync = opts.dereference ? fs6.statSync : fs6.lstatSync;
            var srcStat = statSync(src);
            if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);
            else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);
            else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);
            else if (srcStat.isSocket()) throw new Error("Cannot copy a socket file: ".concat(src));
            else if (srcStat.isFIFO()) throw new Error("Cannot copy a FIFO pipe: ".concat(src));
            throw new Error("Unknown file: ".concat(src));
        };
        var onFile = function onFile(srcStat, destStat, src, dest, opts) {
            if (!destStat) return copyFile(srcStat, src, dest, opts);
            return mayCopyFile(srcStat, src, dest, opts);
        };
        var mayCopyFile = function mayCopyFile(srcStat, src, dest, opts) {
            if (opts.overwrite) {
                fs6.unlinkSync(dest);
                return copyFile(srcStat, src, dest, opts);
            } else if (opts.errorOnExist) {
                throw new Error("'".concat(dest, "' already exists"));
            }
        };
        var copyFile = function copyFile(srcStat, src, dest, opts) {
            fs6.copyFileSync(src, dest);
            if (opts.preserveTimestamps) handleTimestamps(srcStat.mode, src, dest);
            return setDestMode(dest, srcStat.mode);
        };
        var handleTimestamps = function handleTimestamps(srcMode, src, dest) {
            if (fileIsNotWritable(srcMode)) makeFileWritable(dest, srcMode);
            return setDestTimestamps(src, dest);
        };
        var fileIsNotWritable = function fileIsNotWritable(srcMode) {
            return (srcMode & 128) === 0;
        };
        var makeFileWritable = function makeFileWritable(dest, srcMode) {
            return setDestMode(dest, srcMode | 128);
        };
        var setDestMode = function setDestMode(dest, srcMode) {
            return fs6.chmodSync(dest, srcMode);
        };
        var setDestTimestamps = function setDestTimestamps(src, dest) {
            var updatedSrcStat = fs6.statSync(src);
            return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
        };
        var onDir = function onDir(srcStat, destStat, src, dest, opts) {
            if (!destStat) return mkDirAndCopy(srcStat.mode, src, dest, opts);
            return copyDir(src, dest, opts);
        };
        var mkDirAndCopy = function mkDirAndCopy(srcMode, src, dest, opts) {
            fs6.mkdirSync(dest);
            copyDir(src, dest, opts);
            return setDestMode(dest, srcMode);
        };
        var copyDir = function copyDir(src, dest, opts) {
            fs6.readdirSync(src).forEach(function(item) {
                return copyDirItem(item, src, dest, opts);
            });
        };
        var copyDirItem = function copyDirItem(item, src, dest, opts) {
            var srcItem = path4.join(src, item);
            var destItem = path4.join(dest, item);
            if (opts.filter && !opts.filter(srcItem, destItem)) return;
            var destStat = stat.checkPathsSync(srcItem, destItem, "copy", opts).destStat;
            return getStats(destStat, srcItem, destItem, opts);
        };
        var onLink = function onLink(destStat, src, dest, opts) {
            var resolvedSrc = fs6.readlinkSync(src);
            if (opts.dereference) {
                resolvedSrc = path4.resolve(process.cwd(), resolvedSrc);
            }
            if (!destStat) {
                return fs6.symlinkSync(resolvedSrc, dest);
            } else {
                var resolvedDest;
                try {
                    resolvedDest = fs6.readlinkSync(dest);
                } catch (err) {
                    if (err.code === "EINVAL" || err.code === "UNKNOWN") return fs6.symlinkSync(resolvedSrc, dest);
                    throw err;
                }
                if (opts.dereference) {
                    resolvedDest = path4.resolve(process.cwd(), resolvedDest);
                }
                if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
                    throw new Error("Cannot copy '".concat(resolvedSrc, "' to a subdirectory of itself, '").concat(resolvedDest, "'."));
                }
                if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
                    throw new Error("Cannot overwrite '".concat(resolvedDest, "' with '").concat(resolvedSrc, "'."));
                }
                return copyLink(resolvedSrc, dest);
            }
        };
        var copyLink = function copyLink(resolvedSrc, dest) {
            fs6.unlinkSync(dest);
            return fs6.symlinkSync(resolvedSrc, dest);
        };
        var fs6 = require_graceful_fs();
        var path4 = require("path");
        var mkdirsSync = require_mkdirs().mkdirsSync;
        var utimesMillisSync = require_utimes().utimesMillisSync;
        var stat = require_stat();
        module2.exports = copySync;
    }
});
// node_modules/fs-extra/lib/copy/index.js
var require_copy2 = __commonJS({
    "node_modules/fs-extra/lib/copy/index.js": function(exports, module2) {
        "use strict";
        var u = require_universalify().fromPromise;
        module2.exports = {
            copy: u(require_copy()),
            copySync: require_copy_sync()
        };
    }
});
// node_modules/fs-extra/lib/remove/index.js
var require_remove = __commonJS({
    "node_modules/fs-extra/lib/remove/index.js": function(exports, module2) {
        "use strict";
        var remove = function remove(path4, callback) {
            fs6.rm(path4, {
                recursive: true,
                force: true
            }, callback);
        };
        var removeSync = function removeSync(path4) {
            fs6.rmSync(path4, {
                recursive: true,
                force: true
            });
        };
        var fs6 = require_graceful_fs();
        var u = require_universalify().fromCallback;
        module2.exports = {
            remove: u(remove),
            removeSync: removeSync
        };
    }
});
// node_modules/fs-extra/lib/empty/index.js
var require_empty = __commonJS({
    "node_modules/fs-extra/lib/empty/index.js": function(exports, module2) {
        "use strict";
        var emptyDirSync = function emptyDirSync(dir) {
            var items;
            try {
                items = fs6.readdirSync(dir);
            } catch (e) {
                return mkdir.mkdirsSync(dir);
            }
            items.forEach(function(item) {
                item = path4.join(dir, item);
                remove.removeSync(item);
            });
        };
        var u = require_universalify().fromPromise;
        var fs6 = require_fs5();
        var path4 = require("path");
        var mkdir = require_mkdirs();
        var remove = require_remove();
        var emptyDir = u(function() {
            var _emptyDir2 = _async_to_generator(function(dir) {
                var items, e;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                fs6.readdir(dir)
                            ];
                        case 1:
                            items = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 2:
                            e = _state.sent();
                            return [
                                2,
                                mkdir.mkdirs(dir)
                            ];
                        case 3:
                            return [
                                2,
                                Promise.all(items.map(function(item) {
                                    return remove.remove(path4.join(dir, item));
                                }))
                            ];
                    }
                });
            });
            function emptyDir2(dir) {
                return _emptyDir2.apply(this, arguments);
            }
            return emptyDir2;
        }());
        module2.exports = {
            emptyDirSync: emptyDirSync,
            emptydirSync: emptyDirSync,
            emptyDir: emptyDir,
            emptydir: emptyDir
        };
    }
});
// node_modules/fs-extra/lib/ensure/file.js
var require_file = __commonJS({
    "node_modules/fs-extra/lib/ensure/file.js": function(exports, module2) {
        "use strict";
        var createFileSync = function createFileSync(file) {
            var stats;
            try {
                stats = fs6.statSync(file);
            } catch (e) {}
            if (stats && stats.isFile()) return;
            var dir = path4.dirname(file);
            try {
                if (!fs6.statSync(dir).isDirectory()) {
                    fs6.readdirSync(dir);
                }
            } catch (err) {
                if (err && err.code === "ENOENT") mkdir.mkdirsSync(dir);
                else throw err;
            }
            fs6.writeFileSync(file, "");
        };
        var u = require_universalify().fromPromise;
        var path4 = require("path");
        var fs6 = require_fs5();
        var mkdir = require_mkdirs();
        function createFile(file) {
            return _createFile.apply(this, arguments);
        }
        function _createFile() {
            _createFile = _async_to_generator(function(file) {
                var stats, e, dir, dirStats, err;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                fs6.stat(file)
                            ];
                        case 1:
                            stats = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 2:
                            e = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 3:
                            if (stats && stats.isFile()) return [
                                2
                            ];
                            dir = path4.dirname(file);
                            dirStats = null;
                            _state.label = 4;
                        case 4:
                            _state.trys.push([
                                4,
                                6,
                                ,
                                11
                            ]);
                            return [
                                4,
                                fs6.stat(dir)
                            ];
                        case 5:
                            dirStats = _state.sent();
                            return [
                                3,
                                11
                            ];
                        case 6:
                            err = _state.sent();
                            if (!(err.code === "ENOENT")) return [
                                3,
                                9
                            ];
                            return [
                                4,
                                mkdir.mkdirs(dir)
                            ];
                        case 7:
                            _state.sent();
                            return [
                                4,
                                fs6.writeFile(file, "")
                            ];
                        case 8:
                            _state.sent();
                            return [
                                2
                            ];
                        case 9:
                            throw err;
                        case 10:
                            return [
                                3,
                                11
                            ];
                        case 11:
                            if (!dirStats.isDirectory()) return [
                                3,
                                13
                            ];
                            return [
                                4,
                                fs6.writeFile(file, "")
                            ];
                        case 12:
                            _state.sent();
                            return [
                                3,
                                15
                            ];
                        case 13:
                            return [
                                4,
                                fs6.readdir(dir)
                            ];
                        case 14:
                            _state.sent();
                            _state.label = 15;
                        case 15:
                            return [
                                2
                            ];
                    }
                });
            });
            return _createFile.apply(this, arguments);
        }
        module2.exports = {
            createFile: u(createFile),
            createFileSync: createFileSync
        };
    }
});
// node_modules/fs-extra/lib/ensure/link.js
var require_link = __commonJS({
    "node_modules/fs-extra/lib/ensure/link.js": function(exports, module2) {
        "use strict";
        var createLinkSync = function createLinkSync(srcpath, dstpath) {
            var dstStat;
            try {
                dstStat = fs6.lstatSync(dstpath);
            } catch (e) {}
            try {
                var srcStat = fs6.lstatSync(srcpath);
                if (dstStat && areIdentical(srcStat, dstStat)) return;
            } catch (err) {
                err.message = err.message.replace("lstat", "ensureLink");
                throw err;
            }
            var dir = path4.dirname(dstpath);
            var dirExists = fs6.existsSync(dir);
            if (dirExists) return fs6.linkSync(srcpath, dstpath);
            mkdir.mkdirsSync(dir);
            return fs6.linkSync(srcpath, dstpath);
        };
        var u = require_universalify().fromPromise;
        var path4 = require("path");
        var fs6 = require_fs5();
        var mkdir = require_mkdirs();
        var pathExists = require_path_exists().pathExists;
        var areIdentical = require_stat().areIdentical;
        function createLink(srcpath, dstpath) {
            return _createLink.apply(this, arguments);
        }
        function _createLink() {
            _createLink = _async_to_generator(function(srcpath, dstpath) {
                var dstStat, e, srcStat, err, dir, dirExists;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                fs6.lstat(dstpath)
                            ];
                        case 1:
                            dstStat = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 2:
                            e = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 3:
                            _state.trys.push([
                                3,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4,
                                fs6.lstat(srcpath)
                            ];
                        case 4:
                            srcStat = _state.sent();
                            return [
                                3,
                                6
                            ];
                        case 5:
                            err = _state.sent();
                            err.message = err.message.replace("lstat", "ensureLink");
                            throw err;
                        case 6:
                            if (dstStat && areIdentical(srcStat, dstStat)) return [
                                2
                            ];
                            dir = path4.dirname(dstpath);
                            return [
                                4,
                                pathExists(dir)
                            ];
                        case 7:
                            dirExists = _state.sent();
                            if (!!dirExists) return [
                                3,
                                9
                            ];
                            return [
                                4,
                                mkdir.mkdirs(dir)
                            ];
                        case 8:
                            _state.sent();
                            _state.label = 9;
                        case 9:
                            return [
                                4,
                                fs6.link(srcpath, dstpath)
                            ];
                        case 10:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return _createLink.apply(this, arguments);
        }
        module2.exports = {
            createLink: u(createLink),
            createLinkSync: createLinkSync
        };
    }
});
// node_modules/fs-extra/lib/ensure/symlink-paths.js
var require_symlink_paths = __commonJS({
    "node_modules/fs-extra/lib/ensure/symlink-paths.js": function(exports, module2) {
        "use strict";
        var symlinkPathsSync = function symlinkPathsSync(srcpath, dstpath) {
            if (path4.isAbsolute(srcpath)) {
                var exists2 = fs6.existsSync(srcpath);
                if (!exists2) throw new Error("absolute srcpath does not exist");
                return {
                    toCwd: srcpath,
                    toDst: srcpath
                };
            }
            var dstdir = path4.dirname(dstpath);
            var relativeToDst = path4.join(dstdir, srcpath);
            var exists = fs6.existsSync(relativeToDst);
            if (exists) {
                return {
                    toCwd: relativeToDst,
                    toDst: srcpath
                };
            }
            var srcExists = fs6.existsSync(srcpath);
            if (!srcExists) throw new Error("relative srcpath does not exist");
            return {
                toCwd: srcpath,
                toDst: path4.relative(dstdir, srcpath)
            };
        };
        var path4 = require("path");
        var fs6 = require_fs5();
        var pathExists = require_path_exists().pathExists;
        var u = require_universalify().fromPromise;
        function symlinkPaths(srcpath, dstpath) {
            return _symlinkPaths.apply(this, arguments);
        }
        function _symlinkPaths() {
            _symlinkPaths = _async_to_generator(function(srcpath, dstpath) {
                var err, dstdir, relativeToDst, exists, err1;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!path4.isAbsolute(srcpath)) return [
                                3,
                                5
                            ];
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4,
                                fs6.lstat(srcpath)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 3:
                            err = _state.sent();
                            err.message = err.message.replace("lstat", "ensureSymlink");
                            throw err;
                        case 4:
                            return [
                                2,
                                {
                                    toCwd: srcpath,
                                    toDst: srcpath
                                }
                            ];
                        case 5:
                            dstdir = path4.dirname(dstpath);
                            relativeToDst = path4.join(dstdir, srcpath);
                            return [
                                4,
                                pathExists(relativeToDst)
                            ];
                        case 6:
                            exists = _state.sent();
                            if (exists) {
                                return [
                                    2,
                                    {
                                        toCwd: relativeToDst,
                                        toDst: srcpath
                                    }
                                ];
                            }
                            _state.label = 7;
                        case 7:
                            _state.trys.push([
                                7,
                                9,
                                ,
                                10
                            ]);
                            return [
                                4,
                                fs6.lstat(srcpath)
                            ];
                        case 8:
                            _state.sent();
                            return [
                                3,
                                10
                            ];
                        case 9:
                            err1 = _state.sent();
                            err1.message = err1.message.replace("lstat", "ensureSymlink");
                            throw err1;
                        case 10:
                            return [
                                2,
                                {
                                    toCwd: srcpath,
                                    toDst: path4.relative(dstdir, srcpath)
                                }
                            ];
                    }
                });
            });
            return _symlinkPaths.apply(this, arguments);
        }
        module2.exports = {
            symlinkPaths: u(symlinkPaths),
            symlinkPathsSync: symlinkPathsSync
        };
    }
});
// node_modules/fs-extra/lib/ensure/symlink-type.js
var require_symlink_type = __commonJS({
    "node_modules/fs-extra/lib/ensure/symlink-type.js": function(exports, module2) {
        "use strict";
        var symlinkTypeSync = function symlinkTypeSync(srcpath, type) {
            if (type) return type;
            var stats;
            try {
                stats = fs6.lstatSync(srcpath);
            } catch (e) {
                return "file";
            }
            return stats && stats.isDirectory() ? "dir" : "file";
        };
        var fs6 = require_fs5();
        var u = require_universalify().fromPromise;
        function symlinkType(srcpath, type) {
            return _symlinkType.apply(this, arguments);
        }
        function _symlinkType() {
            _symlinkType = _async_to_generator(function(srcpath, type) {
                var stats, e;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (type) return [
                                2,
                                type
                            ];
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4,
                                fs6.lstat(srcpath)
                            ];
                        case 2:
                            stats = _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 3:
                            e = _state.sent();
                            return [
                                2,
                                "file"
                            ];
                        case 4:
                            return [
                                2,
                                stats && stats.isDirectory() ? "dir" : "file"
                            ];
                    }
                });
            });
            return _symlinkType.apply(this, arguments);
        }
        module2.exports = {
            symlinkType: u(symlinkType),
            symlinkTypeSync: symlinkTypeSync
        };
    }
});
// node_modules/fs-extra/lib/ensure/symlink.js
var require_symlink = __commonJS({
    "node_modules/fs-extra/lib/ensure/symlink.js": function(exports, module2) {
        "use strict";
        var createSymlinkSync = function createSymlinkSync(srcpath, dstpath, type) {
            var stats;
            try {
                stats = fs6.lstatSync(dstpath);
            } catch (e) {}
            if (stats && stats.isSymbolicLink()) {
                var srcStat = fs6.statSync(srcpath);
                var dstStat = fs6.statSync(dstpath);
                if (areIdentical(srcStat, dstStat)) return;
            }
            var relative = symlinkPathsSync(srcpath, dstpath);
            srcpath = relative.toDst;
            type = symlinkTypeSync(relative.toCwd, type);
            var dir = path4.dirname(dstpath);
            var exists = fs6.existsSync(dir);
            if (exists) return fs6.symlinkSync(srcpath, dstpath, type);
            mkdirsSync(dir);
            return fs6.symlinkSync(srcpath, dstpath, type);
        };
        var u = require_universalify().fromPromise;
        var path4 = require("path");
        var fs6 = require_fs5();
        var _require_mkdirs = require_mkdirs(), mkdirs = _require_mkdirs.mkdirs, mkdirsSync = _require_mkdirs.mkdirsSync;
        var _require_symlink_paths = require_symlink_paths(), symlinkPaths = _require_symlink_paths.symlinkPaths, symlinkPathsSync = _require_symlink_paths.symlinkPathsSync;
        var _require_symlink_type = require_symlink_type(), symlinkType = _require_symlink_type.symlinkType, symlinkTypeSync = _require_symlink_type.symlinkTypeSync;
        var pathExists = require_path_exists().pathExists;
        var areIdentical = require_stat().areIdentical;
        function createSymlink(srcpath, dstpath, type) {
            return _createSymlink.apply(this, arguments);
        }
        function _createSymlink() {
            _createSymlink = _async_to_generator(function(srcpath, dstpath, type) {
                var stats, e, _ref, srcStat, dstStat, relative, toType, dir;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            return [
                                4,
                                fs6.lstat(dstpath)
                            ];
                        case 1:
                            stats = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 2:
                            e = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 3:
                            if (!(stats && stats.isSymbolicLink())) return [
                                3,
                                5
                            ];
                            return [
                                4,
                                Promise.all([
                                    fs6.stat(srcpath),
                                    fs6.stat(dstpath)
                                ])
                            ];
                        case 4:
                            _ref = _sliced_to_array.apply(void 0, [
                                _state.sent(),
                                2
                            ]), srcStat = _ref[0], dstStat = _ref[1];
                            if (areIdentical(srcStat, dstStat)) return [
                                2
                            ];
                            _state.label = 5;
                        case 5:
                            return [
                                4,
                                symlinkPaths(srcpath, dstpath)
                            ];
                        case 6:
                            relative = _state.sent();
                            srcpath = relative.toDst;
                            return [
                                4,
                                symlinkType(relative.toCwd, type)
                            ];
                        case 7:
                            toType = _state.sent();
                            dir = path4.dirname(dstpath);
                            return [
                                4,
                                pathExists(dir)
                            ];
                        case 8:
                            if (!!_state.sent()) return [
                                3,
                                10
                            ];
                            return [
                                4,
                                mkdirs(dir)
                            ];
                        case 9:
                            _state.sent();
                            _state.label = 10;
                        case 10:
                            return [
                                2,
                                fs6.symlink(srcpath, dstpath, toType)
                            ];
                    }
                });
            });
            return _createSymlink.apply(this, arguments);
        }
        module2.exports = {
            createSymlink: u(createSymlink),
            createSymlinkSync: createSymlinkSync
        };
    }
});
// node_modules/fs-extra/lib/ensure/index.js
var require_ensure = __commonJS({
    "node_modules/fs-extra/lib/ensure/index.js": function(exports, module2) {
        "use strict";
        var _require_file = require_file(), createFile = _require_file.createFile, createFileSync = _require_file.createFileSync;
        var _require_link = require_link(), createLink = _require_link.createLink, createLinkSync = _require_link.createLinkSync;
        var _require_symlink = require_symlink(), createSymlink = _require_symlink.createSymlink, createSymlinkSync = _require_symlink.createSymlinkSync;
        module2.exports = {
            // file
            createFile: createFile,
            createFileSync: createFileSync,
            ensureFile: createFile,
            ensureFileSync: createFileSync,
            // link
            createLink: createLink,
            createLinkSync: createLinkSync,
            ensureLink: createLink,
            ensureLinkSync: createLinkSync,
            // symlink
            createSymlink: createSymlink,
            createSymlinkSync: createSymlinkSync,
            ensureSymlink: createSymlink,
            ensureSymlinkSync: createSymlinkSync
        };
    }
});
// node_modules/jsonfile/utils.js
var require_utils6 = __commonJS({
    "node_modules/jsonfile/utils.js": function(exports, module2) {
        "use strict";
        var stringify = function stringify(obj) {
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_EOL = _ref.EOL, EOL = _ref_EOL === void 0 ? "\n" : _ref_EOL, _ref_finalEOL = _ref.finalEOL, finalEOL = _ref_finalEOL === void 0 ? true : _ref_finalEOL, _ref_replacer = _ref.replacer, replacer = _ref_replacer === void 0 ? null : _ref_replacer, spaces = _ref.spaces;
            var EOF = finalEOL ? EOL : "";
            var str = JSON.stringify(obj, replacer, spaces);
            return str.replace(/\n/g, EOL) + EOF;
        };
        var stripBom = function stripBom(content) {
            if (Buffer.isBuffer(content)) content = content.toString("utf8");
            return content.replace(/^\uFEFF/, "");
        };
        module2.exports = {
            stringify: stringify,
            stripBom: stripBom
        };
    }
});
// node_modules/jsonfile/index.js
var require_jsonfile = __commonJS({
    "node_modules/jsonfile/index.js": function(exports, module2) {
        "use strict";
        var readFileSync = function readFileSync(file) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (typeof options === "string") {
                options = {
                    encoding: options
                };
            }
            var fs6 = options.fs || _fs;
            var shouldThrow = "throws" in options ? options.throws : true;
            try {
                var content = fs6.readFileSync(file, options);
                content = stripBom(content);
                return JSON.parse(content, options.reviver);
            } catch (err) {
                if (shouldThrow) {
                    err.message = "".concat(file, ": ").concat(err.message);
                    throw err;
                } else {
                    return null;
                }
            }
        };
        var writeFileSync = function writeFileSync(file, obj) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var fs6 = options.fs || _fs;
            var str = stringify(obj, options);
            return fs6.writeFileSync(file, str, options);
        };
        var _fs;
        try {
            _fs = require_graceful_fs();
        } catch (_) {
            _fs = require("fs");
        }
        var universalify = require_universalify();
        var _require_utils6 = require_utils6(), stringify = _require_utils6.stringify, stripBom = _require_utils6.stripBom;
        function _readFile(file) {
            return __readFile.apply(this, arguments);
        }
        function __readFile() {
            __readFile = _async_to_generator(function(file) {
                var options, fs6, shouldThrow, data, obj;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            options = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {};
                            if (typeof options === "string") {
                                options = {
                                    encoding: options
                                };
                            }
                            fs6 = options.fs || _fs;
                            shouldThrow = "throws" in options ? options.throws : true;
                            return [
                                4,
                                universalify.fromCallback(fs6.readFile)(file, options)
                            ];
                        case 1:
                            data = _state.sent();
                            data = stripBom(data);
                            try {
                                obj = JSON.parse(data, options ? options.reviver : null);
                            } catch (err) {
                                if (shouldThrow) {
                                    err.message = "".concat(file, ": ").concat(err.message);
                                    throw err;
                                } else {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                            }
                            return [
                                2,
                                obj
                            ];
                    }
                });
            });
            return __readFile.apply(this, arguments);
        }
        var readFile = universalify.fromPromise(_readFile);
        function _writeFile(file, obj) {
            return __writeFile.apply(this, arguments);
        }
        function __writeFile() {
            __writeFile = _async_to_generator(function(file, obj) {
                var options, fs6, str;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            options = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                            fs6 = options.fs || _fs;
                            str = stringify(obj, options);
                            return [
                                4,
                                universalify.fromCallback(fs6.writeFile)(file, str, options)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return __writeFile.apply(this, arguments);
        }
        var writeFile = universalify.fromPromise(_writeFile);
        var jsonfile = {
            readFile: readFile,
            readFileSync: readFileSync,
            writeFile: writeFile,
            writeFileSync: writeFileSync
        };
        module2.exports = jsonfile;
    }
});
// node_modules/fs-extra/lib/json/jsonfile.js
var require_jsonfile2 = __commonJS({
    "node_modules/fs-extra/lib/json/jsonfile.js": function(exports, module2) {
        "use strict";
        var jsonFile = require_jsonfile();
        module2.exports = {
            // jsonfile exports
            readJson: jsonFile.readFile,
            readJsonSync: jsonFile.readFileSync,
            writeJson: jsonFile.writeFile,
            writeJsonSync: jsonFile.writeFileSync
        };
    }
});
// node_modules/fs-extra/lib/output-file/index.js
var require_output_file = __commonJS({
    "node_modules/fs-extra/lib/output-file/index.js": function(exports, module2) {
        "use strict";
        var outputFileSync = function outputFileSync(file) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            var _fs6;
            var dir = path4.dirname(file);
            if (!fs6.existsSync(dir)) {
                mkdir.mkdirsSync(dir);
            }
            (_fs6 = fs6).writeFileSync.apply(_fs6, [
                file
            ].concat(_to_consumable_array(args)));
        };
        var u = require_universalify().fromPromise;
        var fs6 = require_fs5();
        var path4 = require("path");
        var mkdir = require_mkdirs();
        var pathExists = require_path_exists().pathExists;
        function outputFile(file, data) {
            return _outputFile.apply(this, arguments);
        }
        function _outputFile() {
            _outputFile = _async_to_generator(function(file, data) {
                var encoding, dir;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            encoding = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : "utf-8";
                            dir = path4.dirname(file);
                            return [
                                4,
                                pathExists(dir)
                            ];
                        case 1:
                            if (!!_state.sent()) return [
                                3,
                                3
                            ];
                            return [
                                4,
                                mkdir.mkdirs(dir)
                            ];
                        case 2:
                            _state.sent();
                            _state.label = 3;
                        case 3:
                            return [
                                2,
                                fs6.writeFile(file, data, encoding)
                            ];
                    }
                });
            });
            return _outputFile.apply(this, arguments);
        }
        module2.exports = {
            outputFile: u(outputFile),
            outputFileSync: outputFileSync
        };
    }
});
// node_modules/fs-extra/lib/json/output-json.js
var require_output_json = __commonJS({
    "node_modules/fs-extra/lib/json/output-json.js": function(exports, module2) {
        "use strict";
        var stringify = require_utils6().stringify;
        var outputFile = require_output_file().outputFile;
        function outputJson(file, data) {
            return _outputJson.apply(this, arguments);
        }
        function _outputJson() {
            _outputJson = _async_to_generator(function(file, data) {
                var options, str;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            options = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                            str = stringify(data, options);
                            return [
                                4,
                                outputFile(file, str, options)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            });
            return _outputJson.apply(this, arguments);
        }
        module2.exports = outputJson;
    }
});
// node_modules/fs-extra/lib/json/output-json-sync.js
var require_output_json_sync = __commonJS({
    "node_modules/fs-extra/lib/json/output-json-sync.js": function(exports, module2) {
        "use strict";
        var outputJsonSync = function outputJsonSync(file, data, options) {
            var str = stringify(data, options);
            outputFileSync(file, str, options);
        };
        var stringify = require_utils6().stringify;
        var outputFileSync = require_output_file().outputFileSync;
        module2.exports = outputJsonSync;
    }
});
// node_modules/fs-extra/lib/json/index.js
var require_json = __commonJS({
    "node_modules/fs-extra/lib/json/index.js": function(exports, module2) {
        "use strict";
        var u = require_universalify().fromPromise;
        var jsonFile = require_jsonfile2();
        jsonFile.outputJson = u(require_output_json());
        jsonFile.outputJsonSync = require_output_json_sync();
        jsonFile.outputJSON = jsonFile.outputJson;
        jsonFile.outputJSONSync = jsonFile.outputJsonSync;
        jsonFile.writeJSON = jsonFile.writeJson;
        jsonFile.writeJSONSync = jsonFile.writeJsonSync;
        jsonFile.readJSON = jsonFile.readJson;
        jsonFile.readJSONSync = jsonFile.readJsonSync;
        module2.exports = jsonFile;
    }
});
// node_modules/fs-extra/lib/move/move.js
var require_move = __commonJS({
    "node_modules/fs-extra/lib/move/move.js": function(exports, module2) {
        "use strict";
        var fs6 = require_fs5();
        var path4 = require("path");
        var copy = require_copy2().copy;
        var remove = require_remove().remove;
        var mkdirp = require_mkdirs().mkdirp;
        var pathExists = require_path_exists().pathExists;
        var stat = require_stat();
        function move(src, dest) {
            return _move.apply(this, arguments);
        }
        function _move() {
            _move = _async_to_generator(function(src, dest) {
                var opts, overwrite, _ref, srcStat, _ref_isChangingCase, isChangingCase, destParent, parsedParentPath;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            opts = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : {};
                            overwrite = opts.overwrite || opts.clobber || false;
                            return [
                                4,
                                stat.checkPaths(src, dest, "move", opts)
                            ];
                        case 1:
                            _ref = _state.sent(), srcStat = _ref.srcStat, _ref_isChangingCase = _ref.isChangingCase, isChangingCase = _ref_isChangingCase === void 0 ? false : _ref_isChangingCase;
                            return [
                                4,
                                stat.checkParentPaths(src, srcStat, dest, "move")
                            ];
                        case 2:
                            _state.sent();
                            destParent = path4.dirname(dest);
                            parsedParentPath = path4.parse(destParent);
                            if (!(parsedParentPath.root !== destParent)) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                mkdirp(destParent)
                            ];
                        case 3:
                            _state.sent();
                            _state.label = 4;
                        case 4:
                            return [
                                2,
                                doRename(src, dest, overwrite, isChangingCase)
                            ];
                    }
                });
            });
            return _move.apply(this, arguments);
        }
        function doRename(src, dest, overwrite, isChangingCase) {
            return _doRename.apply(this, arguments);
        }
        function _doRename() {
            _doRename = _async_to_generator(function(src, dest, overwrite, isChangingCase) {
                var err;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!!isChangingCase) return [
                                3,
                                4
                            ];
                            if (!overwrite) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                remove(dest)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 2:
                            return [
                                4,
                                pathExists(dest)
                            ];
                        case 3:
                            if (_state.sent()) {
                                throw new Error("dest already exists.");
                            }
                            _state.label = 4;
                        case 4:
                            _state.trys.push([
                                4,
                                6,
                                ,
                                8
                            ]);
                            return [
                                4,
                                fs6.rename(src, dest)
                            ];
                        case 5:
                            _state.sent();
                            return [
                                3,
                                8
                            ];
                        case 6:
                            err = _state.sent();
                            if (err.code !== "EXDEV") {
                                throw err;
                            }
                            return [
                                4,
                                moveAcrossDevice(src, dest, overwrite)
                            ];
                        case 7:
                            _state.sent();
                            return [
                                3,
                                8
                            ];
                        case 8:
                            return [
                                2
                            ];
                    }
                });
            });
            return _doRename.apply(this, arguments);
        }
        function moveAcrossDevice(src, dest, overwrite) {
            return _moveAcrossDevice.apply(this, arguments);
        }
        function _moveAcrossDevice() {
            _moveAcrossDevice = _async_to_generator(function(src, dest, overwrite) {
                var opts;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            opts = {
                                overwrite: overwrite,
                                errorOnExist: true,
                                preserveTimestamps: true
                            };
                            return [
                                4,
                                copy(src, dest, opts)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2,
                                remove(src)
                            ];
                    }
                });
            });
            return _moveAcrossDevice.apply(this, arguments);
        }
        module2.exports = move;
    }
});
// node_modules/fs-extra/lib/move/move-sync.js
var require_move_sync = __commonJS({
    "node_modules/fs-extra/lib/move/move-sync.js": function(exports, module2) {
        "use strict";
        var moveSync = function moveSync(src, dest, opts) {
            opts = opts || {};
            var overwrite = opts.overwrite || opts.clobber || false;
            var _stat_checkPathsSync = stat.checkPathsSync(src, dest, "move", opts), srcStat = _stat_checkPathsSync.srcStat, _stat_checkPathsSync_isChangingCase = _stat_checkPathsSync.isChangingCase, isChangingCase = _stat_checkPathsSync_isChangingCase === void 0 ? false : _stat_checkPathsSync_isChangingCase;
            stat.checkParentPathsSync(src, srcStat, dest, "move");
            if (!isParentRoot(dest)) mkdirpSync(path4.dirname(dest));
            return doRename(src, dest, overwrite, isChangingCase);
        };
        var isParentRoot = function isParentRoot(dest) {
            var parent = path4.dirname(dest);
            var parsedPath = path4.parse(parent);
            return parsedPath.root === parent;
        };
        var doRename = function doRename(src, dest, overwrite, isChangingCase) {
            if (isChangingCase) return rename(src, dest, overwrite);
            if (overwrite) {
                removeSync(dest);
                return rename(src, dest, overwrite);
            }
            if (fs6.existsSync(dest)) throw new Error("dest already exists.");
            return rename(src, dest, overwrite);
        };
        var rename = function rename(src, dest, overwrite) {
            try {
                fs6.renameSync(src, dest);
            } catch (err) {
                if (err.code !== "EXDEV") throw err;
                return moveAcrossDevice(src, dest, overwrite);
            }
        };
        var moveAcrossDevice = function moveAcrossDevice(src, dest, overwrite) {
            var opts = {
                overwrite: overwrite,
                errorOnExist: true,
                preserveTimestamps: true
            };
            copySync(src, dest, opts);
            return removeSync(src);
        };
        var fs6 = require_graceful_fs();
        var path4 = require("path");
        var copySync = require_copy2().copySync;
        var removeSync = require_remove().removeSync;
        var mkdirpSync = require_mkdirs().mkdirpSync;
        var stat = require_stat();
        module2.exports = moveSync;
    }
});
// node_modules/fs-extra/lib/move/index.js
var require_move2 = __commonJS({
    "node_modules/fs-extra/lib/move/index.js": function(exports, module2) {
        "use strict";
        var u = require_universalify().fromPromise;
        module2.exports = {
            move: u(require_move()),
            moveSync: require_move_sync()
        };
    }
});
// node_modules/fs-extra/lib/index.js
var require_lib = __commonJS({
    "node_modules/fs-extra/lib/index.js": function(exports, module2) {
        "use strict";
        module2.exports = _object_spread({}, require_fs5(), require_copy2(), require_empty(), require_ensure(), require_json(), require_mkdirs(), require_move2(), require_output_file(), require_path_exists(), require_remove());
    }
});
// libs/index.ts
var libs_exports = {};
__export(libs_exports, {
    default: function() {
        return DynamicPublicDirectory;
    }
});
module.exports = __toCommonJS(libs_exports);
// libs/server.ts
var import_fs2 = __toESM(require("fs"));
var import_mime_types = __toESM(require("mime-types"));
// node_modules/globby/index.js
var import_node_process2 = __toESM(require("process"), 1);
var import_node_fs2 = __toESM(require("fs"), 1);
var import_node_path2 = __toESM(require("path"), 1);
// node_modules/@sindresorhus/merge-streams/index.js
var import_node_events = require("events");
var import_node_stream = require("stream");
var import_promises = require("stream/promises");
function mergeStreams(streams) {
    if (!Array.isArray(streams)) {
        throw new TypeError("Expected an array, got `".concat(typeof streams === "undefined" ? "undefined" : _type_of(streams), "`."));
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = streams[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var stream = _step.value;
            validateStream(stream);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var objectMode = streams.some(function(param) {
        var readableObjectMode = param.readableObjectMode;
        return readableObjectMode;
    });
    var highWaterMark = getHighWaterMark(streams, objectMode);
    var passThroughStream = new MergedStream({
        objectMode: objectMode,
        writableHighWaterMark: highWaterMark,
        readableHighWaterMark: highWaterMark
    });
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = streams[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var stream1 = _step1.value;
            passThroughStream.add(stream1);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    if (streams.length === 0) {
        endStream(passThroughStream);
    }
    return passThroughStream;
}
var getHighWaterMark = function(streams, objectMode) {
    var _Math;
    if (streams.length === 0) {
        return 16384;
    }
    var highWaterMarks = streams.filter(function(param) {
        var readableObjectMode = param.readableObjectMode;
        return readableObjectMode === objectMode;
    }).map(function(param) {
        var readableHighWaterMark = param.readableHighWaterMark;
        return readableHighWaterMark;
    });
    return (_Math = Math).max.apply(_Math, _to_consumable_array(highWaterMarks));
};
var _streams, _ended, _aborted, _onFinished;
var MergedStream = /*#__PURE__*/ function(_import_node_stream_PassThrough) {
    _inherits(MergedStream, _import_node_stream_PassThrough);
    var _super = _create_super(MergedStream);
    function MergedStream() {
        _class_call_check(this, MergedStream);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        __privateAdd(_assert_this_initialized(_this), _streams, /* @__PURE__ */ new Set([]));
        __privateAdd(_assert_this_initialized(_this), _ended, /* @__PURE__ */ new Set([]));
        __privateAdd(_assert_this_initialized(_this), _aborted, /* @__PURE__ */ new Set([]));
        __privateAdd(_assert_this_initialized(_this), _onFinished, void 0);
        return _this;
    }
    _create_class(MergedStream, [
        {
            key: "add",
            value: function add(stream) {
                validateStream(stream);
                if (__privateGet(this, _streams).has(stream)) {
                    return;
                }
                __privateGet(this, _streams).add(stream);
                var __privateGet1;
                (__privateGet1 = __privateGet(this, _onFinished)) !== null && __privateGet1 !== void 0 ? __privateGet1 : __privateSet(this, _onFinished, onMergedStreamFinished(this, __privateGet(this, _streams)));
                endWhenStreamsDone({
                    passThroughStream: this,
                    stream: stream,
                    streams: __privateGet(this, _streams),
                    ended: __privateGet(this, _ended),
                    aborted: __privateGet(this, _aborted),
                    onFinished: __privateGet(this, _onFinished)
                });
                stream.pipe(this, {
                    end: false
                });
            }
        },
        {
            key: "remove",
            value: function remove(stream) {
                validateStream(stream);
                if (!__privateGet(this, _streams).has(stream)) {
                    return false;
                }
                stream.unpipe(this);
                return true;
            }
        }
    ]);
    return MergedStream;
}(import_node_stream.PassThrough);
_streams = new WeakMap();
_ended = new WeakMap();
_aborted = new WeakMap();
_onFinished = new WeakMap();
var onMergedStreamFinished = function() {
    var _ref = _async_to_generator(function(passThroughStream, streams) {
        var controller;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_COUNT);
                    controller = new AbortController();
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        3,
                        4
                    ]);
                    return [
                        4,
                        Promise.race([
                            onMergedStreamEnd(passThroughStream, controller),
                            onInputStreamsUnpipe(passThroughStream, streams, controller)
                        ])
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    controller.abort();
                    updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_COUNT);
                    return [
                        7
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function onMergedStreamFinished(passThroughStream, streams) {
        return _ref.apply(this, arguments);
    };
}();
var onMergedStreamEnd = function() {
    var _ref = _async_to_generator(function(passThroughStream, param) {
        var signal;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    signal = param.signal;
                    return [
                        4,
                        (0, import_promises.finished)(passThroughStream, {
                            signal: signal,
                            cleanup: true
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function onMergedStreamEnd(passThroughStream, _) {
        return _ref.apply(this, arguments);
    };
}();
var onInputStreamsUnpipe = function() {
    var _ref = _async_to_generator(function(passThroughStream, streams, param) {
        var signal, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _value1, unpipedStream, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    signal = param.signal;
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        12
                    ]);
                    _iterator = _async_iterator((0, import_node_events.on)(passThroughStream, "unpipe", {
                        signal: signal
                    }));
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        _iterator.next()
                    ];
                case 3:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        5
                    ];
                    _value = _step.value;
                    _value1 = _sliced_to_array(_value, 1), unpipedStream = _value1[0];
                    if (streams.has(unpipedStream)) {
                        unpipedStream.emit(unpipeEvent);
                    }
                    _state.label = 4;
                case 4:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        12
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        12
                    ];
                case 7:
                    _state.trys.push([
                        7,
                        ,
                        10,
                        11
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        3,
                        11
                    ];
                case 10:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        7
                    ];
                case 12:
                    return [
                        2
                    ];
            }
        });
    });
    return function onInputStreamsUnpipe(passThroughStream, streams, _) {
        return _ref.apply(this, arguments);
    };
}();
var validateStream = function(stream) {
    var _stream;
    if (typeof ((_stream = stream) === null || _stream === void 0 ? void 0 : _stream.pipe) !== "function") {
        throw new TypeError("Expected a readable stream, got: `".concat(typeof stream === "undefined" ? "undefined" : _type_of(stream), "`."));
    }
};
var endWhenStreamsDone = function() {
    var _ref = _async_to_generator(function(param) {
        var passThroughStream, stream, streams, ended, aborted, onFinished, controller;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    passThroughStream = param.passThroughStream, stream = param.stream, streams = param.streams, ended = param.ended, aborted = param.aborted, onFinished = param.onFinished;
                    updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_PER_STREAM);
                    controller = new AbortController();
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        ,
                        3,
                        4
                    ]);
                    return [
                        4,
                        Promise.race([
                            afterMergedStreamFinished(onFinished, stream),
                            onInputStreamEnd({
                                passThroughStream: passThroughStream,
                                stream: stream,
                                streams: streams,
                                ended: ended,
                                aborted: aborted,
                                controller: controller
                            }),
                            onInputStreamUnpipe({
                                stream: stream,
                                streams: streams,
                                ended: ended,
                                aborted: aborted,
                                controller: controller
                            })
                        ])
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    controller.abort();
                    updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_PER_STREAM);
                    return [
                        7
                    ];
                case 4:
                    if (streams.size === ended.size + aborted.size) {
                        if (ended.size === 0 && aborted.size > 0) {
                            abortStream(passThroughStream);
                        } else {
                            endStream(passThroughStream);
                        }
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function endWhenStreamsDone(_) {
        return _ref.apply(this, arguments);
    };
}();
var isAbortError = function(error) {
    var _error;
    return ((_error = error) === null || _error === void 0 ? void 0 : _error.code) === "ERR_STREAM_PREMATURE_CLOSE";
};
var afterMergedStreamFinished = function() {
    var _ref = _async_to_generator(function(onFinished, stream) {
        var error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        onFinished
                    ];
                case 1:
                    _state.sent();
                    abortStream(stream);
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    if (isAbortError(error)) {
                        abortStream(stream);
                    } else {
                        errorStream(stream, error);
                    }
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function afterMergedStreamFinished(onFinished, stream) {
        return _ref.apply(this, arguments);
    };
}();
var onInputStreamEnd = function() {
    var _ref = _async_to_generator(function(param) {
        var passThroughStream, stream, streams, ended, aborted, signal, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    passThroughStream = param.passThroughStream, stream = param.stream, streams = param.streams, ended = param.ended, aborted = param.aborted, signal = param.controller.signal;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        (0, import_promises.finished)(stream, {
                            signal: signal,
                            cleanup: true,
                            readable: true,
                            writable: false
                        })
                    ];
                case 2:
                    _state.sent();
                    if (streams.has(stream)) {
                        ended.add(stream);
                    }
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    if (signal.aborted || !streams.has(stream)) {
                        return [
                            2
                        ];
                    }
                    if (isAbortError(error)) {
                        aborted.add(stream);
                    } else {
                        errorStream(passThroughStream, error);
                    }
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function onInputStreamEnd(_) {
        return _ref.apply(this, arguments);
    };
}();
var onInputStreamUnpipe = function() {
    var _ref = _async_to_generator(function(param) {
        var stream, streams, ended, aborted, signal;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    stream = param.stream, streams = param.streams, ended = param.ended, aborted = param.aborted, signal = param.controller.signal;
                    return [
                        4,
                        (0, import_node_events.once)(stream, unpipeEvent, {
                            signal: signal
                        })
                    ];
                case 1:
                    _state.sent();
                    streams.delete(stream);
                    ended.delete(stream);
                    aborted.delete(stream);
                    return [
                        2
                    ];
            }
        });
    });
    return function onInputStreamUnpipe(_) {
        return _ref.apply(this, arguments);
    };
}();
var unpipeEvent = Symbol("unpipe");
var endStream = function(stream) {
    if (stream.writable) {
        stream.end();
    }
};
var abortStream = function(stream) {
    if (stream.readable || stream.writable) {
        stream.destroy();
    }
};
var errorStream = function(stream, error) {
    if (!stream.destroyed) {
        stream.once("error", noop);
        stream.destroy(error);
    }
};
var noop = function() {};
var updateMaxListeners = function(passThroughStream, increment) {
    var maxListeners = passThroughStream.getMaxListeners();
    if (maxListeners !== 0 && maxListeners !== Number.POSITIVE_INFINITY) {
        passThroughStream.setMaxListeners(maxListeners + increment);
    }
};
var PASSTHROUGH_LISTENERS_COUNT = 2;
var PASSTHROUGH_LISTENERS_PER_STREAM = 1;
// node_modules/globby/index.js
var import_fast_glob2 = __toESM(require_out4(), 1);
// node_modules/globby/node_modules/path-type/index.js
var import_fs = __toESM(require("fs"), 1);
function isType(fsStatType, statsMethodName, filePath) {
    return _isType.apply(this, arguments);
}
function _isType() {
    _isType = _async_to_generator(function(fsStatType, statsMethodName, filePath) {
        var stats, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (typeof filePath !== "string") {
                        throw new TypeError("Expected a string, got ".concat(typeof filePath === "undefined" ? "undefined" : _type_of(filePath)));
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        import_fs.promises[fsStatType](filePath)
                    ];
                case 2:
                    stats = _state.sent();
                    return [
                        2,
                        stats[statsMethodName]()
                    ];
                case 3:
                    error = _state.sent();
                    if (error.code === "ENOENT") {
                        return [
                            2,
                            false
                        ];
                    }
                    throw error;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _isType.apply(this, arguments);
}
function isTypeSync(fsStatType, statsMethodName, filePath) {
    if (typeof filePath !== "string") {
        throw new TypeError("Expected a string, got ".concat(typeof filePath === "undefined" ? "undefined" : _type_of(filePath)));
    }
    try {
        return import_fs.default[fsStatType](filePath)[statsMethodName]();
    } catch (error) {
        if (error.code === "ENOENT") {
            return false;
        }
        throw error;
    }
}
var isFile = isType.bind(null, "stat", "isFile");
var isDirectory = isType.bind(null, "stat", "isDirectory");
var isSymlink = isType.bind(null, "lstat", "isSymbolicLink");
var isFileSync = isTypeSync.bind(null, "statSync", "isFile");
var isDirectorySync = isTypeSync.bind(null, "statSync", "isDirectory");
var isSymlinkSync = isTypeSync.bind(null, "lstatSync", "isSymbolicLink");
// node_modules/unicorn-magic/node.js
var import_node_url = require("url");
function toPath(urlOrPath) {
    return _instanceof(urlOrPath, URL) ? (0, import_node_url.fileURLToPath)(urlOrPath) : urlOrPath;
}
// node_modules/globby/ignore.js
var import_node_process = __toESM(require("process"), 1);
var import_node_fs = __toESM(require("fs"), 1);
var import_promises2 = __toESM(require("fs/promises"), 1);
var import_node_path = __toESM(require("path"), 1);
var import_fast_glob = __toESM(require_out4(), 1);
var import_ignore = __toESM(require_ignore(), 1);
// node_modules/globby/node_modules/slash/index.js
function slash(path4) {
    var isExtendedLengthPath = path4.startsWith("\\\\?\\");
    if (isExtendedLengthPath) {
        return path4;
    }
    return path4.replace(/\\/g, "/");
}
// node_modules/globby/utilities.js
var isNegativePattern = function(pattern) {
    return pattern[0] === "!";
};
// node_modules/globby/ignore.js
var defaultIgnoredDirectories = [
    "**/node_modules",
    "**/flow-typed",
    "**/coverage",
    "**/.git"
];
var ignoreFilesGlobOptions = {
    absolute: true,
    dot: true
};
var GITIGNORE_FILES_PATTERN = "**/.gitignore";
var applyBaseToPattern = function(pattern, base) {
    return isNegativePattern(pattern) ? "!" + import_node_path.default.posix.join(base, pattern.slice(1)) : import_node_path.default.posix.join(base, pattern);
};
var parseIgnoreFile = function(file, cwd) {
    var base = slash(import_node_path.default.relative(cwd, import_node_path.default.dirname(file.filePath)));
    return file.content.split(/\r?\n/).filter(function(line) {
        return line && !line.startsWith("#");
    }).map(function(pattern) {
        return applyBaseToPattern(pattern, base);
    });
};
var toRelativePath = function(fileOrDirectory, cwd) {
    cwd = slash(cwd);
    if (import_node_path.default.isAbsolute(fileOrDirectory)) {
        if (slash(fileOrDirectory).startsWith(cwd)) {
            return import_node_path.default.relative(cwd, fileOrDirectory);
        }
        throw new Error("Path ".concat(fileOrDirectory, " is not in cwd ").concat(cwd));
    }
    return fileOrDirectory;
};
var getIsIgnoredPredicate = function(files, cwd) {
    var patterns = files.flatMap(function(file) {
        return parseIgnoreFile(file, cwd);
    });
    var ignores = (0, import_ignore.default)().add(patterns);
    return function(fileOrDirectory) {
        fileOrDirectory = toPath(fileOrDirectory);
        fileOrDirectory = toRelativePath(fileOrDirectory, cwd);
        return fileOrDirectory ? ignores.ignores(slash(fileOrDirectory)) : false;
    };
};
var _toPath, _options_ignore;
var normalizeOptions = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        cwd: (_toPath = toPath(options.cwd)) !== null && _toPath !== void 0 ? _toPath : import_node_process.default.cwd(),
        suppressErrors: Boolean(options.suppressErrors),
        deep: typeof options.deep === "number" ? options.deep : Number.POSITIVE_INFINITY,
        ignore: _to_consumable_array((_options_ignore = options.ignore) !== null && _options_ignore !== void 0 ? _options_ignore : []).concat(_to_consumable_array(defaultIgnoredDirectories))
    };
};
var isIgnoredByIgnoreFiles = function() {
    var _ref = _async_to_generator(function(patterns, options) {
        var _normalizeOptions, cwd, suppressErrors, deep, ignore, paths, files;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _normalizeOptions = normalizeOptions(options), cwd = _normalizeOptions.cwd, suppressErrors = _normalizeOptions.suppressErrors, deep = _normalizeOptions.deep, ignore = _normalizeOptions.ignore;
                    return [
                        4,
                        (0, import_fast_glob.default)(patterns, _object_spread({
                            cwd: cwd,
                            suppressErrors: suppressErrors,
                            deep: deep,
                            ignore: ignore
                        }, ignoreFilesGlobOptions))
                    ];
                case 1:
                    paths = _state.sent();
                    return [
                        4,
                        Promise.all(paths.map(function() {
                            var _ref = _async_to_generator(function(filePath) {
                                var _tmp;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            _tmp = {
                                                filePath: filePath
                                            };
                                            return [
                                                4,
                                                import_promises2.default.readFile(filePath, "utf8")
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                (_tmp.content = _state.sent(), _tmp)
                                            ];
                                    }
                                });
                            });
                            return function(filePath) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 2:
                    files = _state.sent();
                    return [
                        2,
                        getIsIgnoredPredicate(files, cwd)
                    ];
            }
        });
    });
    return function isIgnoredByIgnoreFiles(patterns, options) {
        return _ref.apply(this, arguments);
    };
}();
var isIgnoredByIgnoreFilesSync = function(patterns, options) {
    var _normalizeOptions = normalizeOptions(options), cwd = _normalizeOptions.cwd, suppressErrors = _normalizeOptions.suppressErrors, deep = _normalizeOptions.deep, ignore = _normalizeOptions.ignore;
    var paths = import_fast_glob.default.sync(patterns, _object_spread({
        cwd: cwd,
        suppressErrors: suppressErrors,
        deep: deep,
        ignore: ignore
    }, ignoreFilesGlobOptions));
    var files = paths.map(function(filePath) {
        return {
            filePath: filePath,
            content: import_node_fs.default.readFileSync(filePath, "utf8")
        };
    });
    return getIsIgnoredPredicate(files, cwd);
};
// node_modules/globby/index.js
var assertPatternsInput = function(patterns) {
    if (patterns.some(function(pattern) {
        return typeof pattern !== "string";
    })) {
        throw new TypeError("Patterns must be a string or an array of strings");
    }
};
var normalizePathForDirectoryGlob = function(filePath, cwd) {
    var path4 = isNegativePattern(filePath) ? filePath.slice(1) : filePath;
    return import_node_path2.default.isAbsolute(path4) ? path4 : import_node_path2.default.join(cwd, path4);
};
var getDirectoryGlob = function(param) {
    var directoryPath = param.directoryPath, files = param.files, extensions = param.extensions;
    var _extensions;
    var extensionGlob = ((_extensions = extensions) === null || _extensions === void 0 ? void 0 : _extensions.length) > 0 ? ".".concat(extensions.length > 1 ? "{".concat(extensions.join(","), "}") : extensions[0]) : "";
    return files ? files.map(function(file) {
        return import_node_path2.default.posix.join(directoryPath, "**/".concat(import_node_path2.default.extname(file) ? file : "".concat(file).concat(extensionGlob)));
    }) : [
        import_node_path2.default.posix.join(directoryPath, "**".concat(extensionGlob ? "/*".concat(extensionGlob) : ""))
    ];
};
var directoryToGlob = function() {
    var _ref = _async_to_generator(function(directoryPaths) {
        var _ref, _ref_cwd, cwd, files, extensions, globs;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ref = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : {}, _ref_cwd = _ref.cwd, cwd = _ref_cwd === void 0 ? import_node_process2.default.cwd() : _ref_cwd, files = _ref.files, extensions = _ref.extensions;
                    return [
                        4,
                        Promise.all(directoryPaths.map(function() {
                            var _ref = _async_to_generator(function(directoryPath) {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                isDirectory(normalizePathForDirectoryGlob(directoryPath, cwd))
                                            ];
                                        case 1:
                                            return [
                                                2,
                                                _state.sent() ? getDirectoryGlob({
                                                    directoryPath: directoryPath,
                                                    files: files,
                                                    extensions: extensions
                                                }) : directoryPath
                                            ];
                                    }
                                });
                            });
                            return function(directoryPath) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    globs = _state.sent();
                    return [
                        2,
                        globs.flat()
                    ];
            }
        });
    });
    return function directoryToGlob(directoryPaths) {
        return _ref.apply(this, arguments);
    };
}();
var directoryToGlobSync = function(directoryPaths) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_cwd = _ref.cwd, cwd = _ref_cwd === void 0 ? import_node_process2.default.cwd() : _ref_cwd, files = _ref.files, extensions = _ref.extensions;
    return directoryPaths.flatMap(function(directoryPath) {
        return isDirectorySync(normalizePathForDirectoryGlob(directoryPath, cwd)) ? getDirectoryGlob({
            directoryPath: directoryPath,
            files: files,
            extensions: extensions
        }) : directoryPath;
    });
};
var toPatternsArray = function(patterns) {
    patterns = _to_consumable_array(new Set([
        patterns
    ].flat()));
    assertPatternsInput(patterns);
    return patterns;
};
var checkCwdOption = function(cwd) {
    if (!cwd) {
        return;
    }
    var stat;
    try {
        stat = import_node_fs2.default.statSync(cwd);
    } catch (e) {
        return;
    }
    if (!stat.isDirectory()) {
        throw new Error("The `cwd` option must be a path to a directory");
    }
};
var normalizeOptions2 = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _options_ignore, _options_expandDirectories;
    options = _object_spread_props(_object_spread({}, options), {
        ignore: (_options_ignore = options.ignore) !== null && _options_ignore !== void 0 ? _options_ignore : [],
        expandDirectories: (_options_expandDirectories = options.expandDirectories) !== null && _options_expandDirectories !== void 0 ? _options_expandDirectories : true,
        cwd: toPath(options.cwd)
    });
    checkCwdOption(options.cwd);
    return options;
};
var normalizeArguments = function(function_) {
    return function() {
        var _ref = _async_to_generator(function(patterns, options) {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    function_(toPatternsArray(patterns), normalizeOptions2(options))
                ];
            });
        });
        return function(patterns, options) {
            return _ref.apply(this, arguments);
        };
    }();
};
var normalizeArgumentsSync = function(function_) {
    return function(patterns, options) {
        return function_(toPatternsArray(patterns), normalizeOptions2(options));
    };
};
var getIgnoreFilesPatterns = function(options) {
    var ignoreFiles = options.ignoreFiles, gitignore = options.gitignore;
    var patterns = ignoreFiles ? toPatternsArray(ignoreFiles) : [];
    if (gitignore) {
        patterns.push(GITIGNORE_FILES_PATTERN);
    }
    return patterns;
};
var getFilter = function() {
    var _ref = _async_to_generator(function(options) {
        var ignoreFilesPatterns, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    ignoreFilesPatterns = getIgnoreFilesPatterns(options);
                    _tmp = ignoreFilesPatterns.length > 0;
                    if (!_tmp) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        isIgnoredByIgnoreFiles(ignoreFilesPatterns, options)
                    ];
                case 1:
                    _tmp = _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        createFilterFunction.apply(void 0, [
                            _tmp
                        ])
                    ];
            }
        });
    });
    return function getFilter(options) {
        return _ref.apply(this, arguments);
    };
}();
var getFilterSync = function(options) {
    var ignoreFilesPatterns = getIgnoreFilesPatterns(options);
    return createFilterFunction(ignoreFilesPatterns.length > 0 && isIgnoredByIgnoreFilesSync(ignoreFilesPatterns, options));
};
var createFilterFunction = function(isIgnored) {
    var seen = /* @__PURE__ */ new Set();
    return function(fastGlobResult) {
        var _fastGlobResult_path;
        var pathKey = import_node_path2.default.normalize((_fastGlobResult_path = fastGlobResult.path) !== null && _fastGlobResult_path !== void 0 ? _fastGlobResult_path : fastGlobResult);
        if (seen.has(pathKey) || isIgnored && isIgnored(pathKey)) {
            return false;
        }
        seen.add(pathKey);
        return true;
    };
};
var unionFastGlobResults = function(results, filter) {
    return results.flat().filter(function(fastGlobResult) {
        return filter(fastGlobResult);
    });
};
var convertNegativePatterns = function(patterns, options) {
    var _loop = function() {
        var index = patterns.findIndex(function(pattern) {
            return isNegativePattern(pattern);
        });
        if (index === -1) {
            tasks.push({
                patterns: patterns,
                options: options
            });
            return "break";
        }
        var ignorePattern = patterns[index].slice(1);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var task = _step.value;
                task.options.ignore.push(ignorePattern);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (index !== 0) {
            tasks.push({
                patterns: patterns.slice(0, index),
                options: _object_spread_props(_object_spread({}, options), {
                    ignore: _to_consumable_array(options.ignore).concat([
                        ignorePattern
                    ])
                })
            });
        }
        patterns = patterns.slice(index + 1);
    };
    var tasks = [];
    while(patterns.length > 0){
        var _ret = _loop();
        if (_ret === "break") break;
    }
    return tasks;
};
var normalizeExpandDirectoriesOption = function(options, cwd) {
    return _object_spread({}, cwd ? {
        cwd: cwd
    } : {}, Array.isArray(options) ? {
        files: options
    } : options);
};
var generateTasks = function() {
    var _ref = _async_to_generator(function(patterns, options) {
        var globTasks, cwd, expandDirectories, directoryToGlobOptions;
        return _ts_generator(this, function(_state) {
            globTasks = convertNegativePatterns(patterns, options);
            cwd = options.cwd, expandDirectories = options.expandDirectories;
            if (!expandDirectories) {
                return [
                    2,
                    globTasks
                ];
            }
            directoryToGlobOptions = normalizeExpandDirectoriesOption(expandDirectories, cwd);
            return [
                2,
                Promise.all(globTasks.map(function() {
                    var _ref = _async_to_generator(function(task) {
                        var patterns2, options2, ref;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    patterns2 = task.patterns, options2 = task.options;
                                    return [
                                        4,
                                        Promise.all([
                                            directoryToGlob(patterns2, directoryToGlobOptions),
                                            directoryToGlob(options2.ignore, {
                                                cwd: cwd
                                            })
                                        ])
                                    ];
                                case 1:
                                    ref = _sliced_to_array.apply(void 0, [
                                        _state.sent(),
                                        2
                                    ]), patterns2 = ref[0], options2.ignore = ref[1], ref;
                                    return [
                                        2,
                                        {
                                            patterns: patterns2,
                                            options: options2
                                        }
                                    ];
                            }
                        });
                    });
                    return function(task) {
                        return _ref.apply(this, arguments);
                    };
                }()))
            ];
        });
    });
    return function generateTasks(patterns, options) {
        return _ref.apply(this, arguments);
    };
}();
var generateTasksSync = function(patterns, options) {
    var globTasks = convertNegativePatterns(patterns, options);
    var cwd = options.cwd, expandDirectories = options.expandDirectories;
    if (!expandDirectories) {
        return globTasks;
    }
    var directoryToGlobSyncOptions = normalizeExpandDirectoriesOption(expandDirectories, cwd);
    return globTasks.map(function(task) {
        var patterns2 = task.patterns, options2 = task.options;
        patterns2 = directoryToGlobSync(patterns2, directoryToGlobSyncOptions);
        options2.ignore = directoryToGlobSync(options2.ignore, {
            cwd: cwd
        });
        return {
            patterns: patterns2,
            options: options2
        };
    });
};
var globby = normalizeArguments(function() {
    var _ref = _async_to_generator(function(patterns, options) {
        var _ref, tasks, filter, results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all([
                            generateTasks(patterns, options),
                            getFilter(options)
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        2
                    ]), tasks = _ref[0], filter = _ref[1];
                    return [
                        4,
                        Promise.all(tasks.map(function(task) {
                            return (0, import_fast_glob2.default)(task.patterns, task.options);
                        }))
                    ];
                case 2:
                    results = _state.sent();
                    return [
                        2,
                        unionFastGlobResults(results, filter)
                    ];
            }
        });
    });
    return function(patterns, options) {
        return _ref.apply(this, arguments);
    };
}());
var globbySync = normalizeArgumentsSync(function(patterns, options) {
    var tasks = generateTasksSync(patterns, options);
    var filter = getFilterSync(options);
    var results = tasks.map(function(task) {
        return import_fast_glob2.default.sync(task.patterns, task.options);
    });
    return unionFastGlobResults(results, filter);
});
var globbyStream = normalizeArgumentsSync(function(patterns, options) {
    var tasks = generateTasksSync(patterns, options);
    var filter = getFilterSync(options);
    var streams = tasks.map(function(task) {
        return import_fast_glob2.default.stream(task.patterns, task.options);
    });
    var stream = mergeStreams(streams).filter(function(fastGlobResult) {
        return filter(fastGlobResult);
    });
    return stream;
});
var isDynamicPattern = normalizeArgumentsSync(function(patterns, options) {
    return patterns.some(function(pattern) {
        return import_fast_glob2.default.isDynamicPattern(pattern, options);
    });
});
var generateGlobTasks = normalizeArguments(generateTasks);
var generateGlobTasksSync = normalizeArgumentsSync(generateTasksSync);
var convertPathToPattern = import_fast_glob2.default.convertPathToPattern;
// libs/server.ts
var import_path = __toESM(require("path"));
var mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".json": "application/json",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".eot": "font/eot",
    ".otf": "font/otf",
    ".wasm": "application/wasm",
    ".mjs": "text/javascript",
    ".txt": "text/plain",
    ".xml": "text/xml",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".webp": "image/webp",
    ".wgsl": "text/wgsl",
    ".ico": "image/x-icon",
    ".tiff": "image/tiff",
    ".gz": "application/gzip",
    ".zip": "application/zip",
    ".rar": "application/x-rar-compressed",
    ".7z": "application/x-7z-compressed"
};
function getContentType(file) {
    return import_mime_types.default.lookup(file);
}
function handleWriteToServe(res, contentType, path4) {
    res.setHeader("Cache-Control", "max-age=31536000, immutable");
    res.setHeader("Content-Type", contentType);
    res.write(import_fs2.default.readFileSync(path4));
    res.end();
}
var postfixRE = RegExp("[?#].*$", "s");
var sepRE = /\\|\//g;
function toFilePath() {
    var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return url.replace(postfixRE, "").replace(sepRE, import_path.default.sep);
}
function ServerMiddleWare(server, options) {
    return _ServerMiddleWare.apply(this, arguments);
}
function _ServerMiddleWare() {
    _ServerMiddleWare = _async_to_generator(function(server, options) {
        var optionInfo, cwd, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    optionInfo = [];
                    cwd = process.cwd();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _loop = function() {
                        var option, matchedPaths, files;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    option = _step.value;
                                    return [
                                        4,
                                        globby(option.src, _object_spread_props(_object_spread({
                                            expandDirectories: false,
                                            onlyFiles: false
                                        }, option.globbyOption), {
                                            objectMode: true
                                        }))
                                    ];
                                case 1:
                                    matchedPaths = _state.sent();
                                    files = matchedPaths.map(function(file) {
                                        return {
                                            src: import_path.default.join(cwd, file.path),
                                            dest: import_path.default.normalize(import_path.default.join(option.dest || "", import_path.default.parse(file.path).base)),
                                            dir: file.dirent.isDirectory()
                                        };
                                    });
                                    console.log("files", files);
                                    optionInfo.push(_object_spread_props(_object_spread({}, option), {
                                        files: files
                                    }));
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    _iterator = options[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    return [
                        5,
                        _ts_values(_loop())
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2,
                        function() {
                            server.middlewares.use(function() {
                                var _ref = _async_to_generator(function(req, res, next) {
                                    var relativePath, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, _ret;
                                    return _ts_generator(this, function(_state) {
                                        relativePath = toFilePath(req.originalUrl);
                                        console.log("relativePath", relativePath);
                                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                        try {
                                            _loop = function() {
                                                var info = _step.value;
                                                var file = info.files.find(function(item) {
                                                    return relativePath.indexOf(item.dest) != -1;
                                                });
                                                console.log("file", file);
                                                if (file) {
                                                    var filepath = file.src;
                                                    if (file.dir) {
                                                        filepath = import_path.default.join(file.src, relativePath.replace(file.dest, ""));
                                                        if (!import_fs2.default.existsSync(filepath)) return "continue";
                                                    }
                                                    var extension = filepath.substring(filepath.lastIndexOf("."));
                                                    var contentType = _object_spread({}, info.mimeTypes, mimeTypes)[extension] || getContentType(filepath);
                                                    if (info.ssr) {
                                                        res.addListener("pipe", function() {
                                                            handleWriteToServe(res, contentType, filepath);
                                                        });
                                                    } else {
                                                        handleWriteToServe(res, contentType, filepath);
                                                    }
                                                    return "break";
                                                }
                                            };
                                            for(_iterator = optionInfo[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                _ret = _loop();
                                                if (_ret === "break") break;
                                            }
                                        } catch (err) {
                                            _didIteratorError = true;
                                            _iteratorError = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                                    _iterator.return();
                                                }
                                            } finally{
                                                if (_didIteratorError) {
                                                    throw _iteratorError;
                                                }
                                            }
                                        }
                                        next();
                                        return [
                                            2
                                        ];
                                    });
                                });
                                return function(req, res, next) {
                                    return _ref.apply(this, arguments);
                                };
                            }());
                        }
                    ];
            }
        });
    });
    return _ServerMiddleWare.apply(this, arguments);
}
// libs/build.ts
var import_fs_extra = __toESM(require_lib());
var import_path2 = __toESM(require("path"));
function buildMiddleWare(viteOptions, options) {
    return _buildMiddleWare.apply(this, arguments);
}
function _buildMiddleWare() {
    _buildMiddleWare = _async_to_generator(function(viteOptions, options) {
        var cwd, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, option, matchedPaths, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, matchedPath, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!viteOptions.dir) throw new Error("options.dir is undefined");
                    cwd = process.cwd();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = options[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    option = _step.value;
                    if (option.noBuildCopy) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        globby(option.src, _object_spread({
                            expandDirectories: false,
                            onlyFiles: false
                        }, option.globbyOption))
                    ];
                case 3:
                    matchedPaths = _state.sent();
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator1 = matchedPaths[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            matchedPath = _step1.value;
                            import_fs_extra.default.copySync(import_path2.default.join(cwd, matchedPath), import_path2.default.join(viteOptions.dir, option.dest || "", import_path2.default.parse(matchedPath).base));
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    });
    return _buildMiddleWare.apply(this, arguments);
}
// libs/index.ts
function DynamicPublicDirectory(options) {
    return {
        configureServer: function configureServer(server) {
            return ServerMiddleWare(server, options);
        },
        writeBundle: function writeBundle(viteOptions) {
            return _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                buildMiddleWare(viteOptions, options)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        },
        name: "dynamic assets"
    };
} /*! Bundled license information:

is-extglob/index.js:
  (*!
   * is-extglob <https://github.com/jonschlinkert/is-extglob>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-glob/index.js:
  (*!
   * is-glob <https://github.com/jonschlinkert/is-glob>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-number/index.js:
  (*!
   * is-number <https://github.com/jonschlinkert/is-number>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

to-regex-range/index.js:
  (*!
   * to-regex-range <https://github.com/micromatch/to-regex-range>
   *
   * Copyright (c) 2015-present, Jon Schlinkert.
   * Released under the MIT License.
   *)

fill-range/index.js:
  (*!
   * fill-range <https://github.com/jonschlinkert/fill-range>
   *
   * Copyright (c) 2014-present, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

run-parallel/index.js:
  (*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/ 
