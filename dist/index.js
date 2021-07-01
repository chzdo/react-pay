

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function PayButton(_a) {
    var buttonStyle = _a.buttonStyle, verifying = _a.verifying, VerifyComponent = _a.VerifyComponent, text = _a.text, action = _a.action;
    return React__namespace.createElement("button", { style: buttonStyle || {}, disabled: verifying || false, onClick: function (e) {
            e.preventDefault();
            action();
        } }, verifying ? (VerifyComponent != undefined ? React__namespace.createElement(VerifyComponent, null) : 'Verifying Payment') : (text || "Pay"));
}

function onPay(_a) {
    var verify = _a.verify, setVerify = _a.setVerify, onSuccess = _a.onSuccess, type = _a.type;
    return function (ref) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var resp, params, r, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resp = ref;
                        params = type == 'flutter' ? resp.transaction_id : resp.reference;
                        if (!verify) return [3 /*break*/, 6];
                        setVerify(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch((verify === null || verify === void 0 ? void 0 : verify.url) + "?tx_ref=" + params || "", verify === null || verify === void 0 ? void 0 : verify.options)];
                    case 2:
                        r = _a.sent();
                        return [4 /*yield*/, r.json()];
                    case 3:
                        resp = _a.sent();
                        resp.OriginalResponse = ref;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        resp = e_1;
                        return [3 /*break*/, 5];
                    case 5:
                        setVerify(false);
                        _a.label = 6;
                    case 6:
                        onSuccess(resp);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
}

function useLoadScript(url) {
    var cached = [];
    var _a = React.useState({
        loaded: false,
        error: false
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        if (cached.includes(url)) {
            setState(function (e) { return (__assign(__assign({}, e), { loaded: true, error: false })); });
            console.log('alredy loaded');
        }
        else {
            cached.push(url);
            var script_1 = document.createElement('script');
            script_1.src = url;
            script_1.async = true;
            var onScriptLoad_1 = function () {
                console.log(' loaded');
                setState(function (e) { return (__assign(__assign({}, e), { loaded: true, error: false })); });
            };
            var onScriptError_1 = function () {
                console.log('error');
                var index = cached.indexOf(url);
                if (index >= 0)
                    cached.splice(index, 1);
                script_1.remove();
                setState(function (e) { return (__assign(__assign({}, e), { loaded: true, error: true })); });
            };
            script_1.addEventListener('load', onScriptLoad_1);
            script_1.addEventListener('complete', onScriptLoad_1);
            script_1.addEventListener('error', onScriptError_1);
            document.body.appendChild(script_1);
            return function () {
                script_1.removeEventListener('load', onScriptLoad_1);
                script_1.removeEventListener('error', onScriptError_1);
            };
        }
    }, [url]);
    return [state.loaded, state.error];
}

function PayStack(_a) {
    var onSuccess = _a.onSuccess, onClose = _a.onClose, buttonStyle = _a.buttonStyle, text = _a.text, config = _a.config, publicKey = _a.publicKey, currency = _a.currency, verify = _a.verify, reference = _a.reference, rest = __rest(_a, ["onSuccess", "onClose", "buttonStyle", "text", "config", "publicKey", "currency", "verify", "reference"]);
    var _b = React.useState({
        email: config.email,
        amount: config.amount,
    }); _b[0]; var setState = _b[1];
    var _c = React.useState(false), verifying = _c[0], setVerify = _c[1];
    var _d = useLoadScript('https://js.paystack.co/v1/inline.js'), loaded = _d[0], error = _d[1];
    React.useEffect(function () {
        if (!error) {
            setState(function (c) { return (__assign(__assign(__assign({}, c), config), rest)); });
        }
    }, [config]);
    if (error) {
        throw new Error('could not load paystack');
    }
    function action() {
        var type = "paystack";
        var c = __assign(__assign(__assign({ key: publicKey }, config), rest), { currency: currency || "NGN", ref: reference || '' + Math.floor((Math.random() * 1000000000) + 1), callback: onPay({ verify: verify, onSuccess: onSuccess, setVerify: setVerify, type: type }), onClose: onClose });
        var handler = window.globalThis.PaystackPop.setup(c);
        handler && handler.openIframe();
    }
    return React__default['default'].createElement(React__default['default'].Fragment, null, loaded ?
        React__default['default'].createElement(PayButton, { buttonStyle: buttonStyle, text: text, VerifyComponent: verify === null || verify === void 0 ? void 0 : verify.Component, verifying: verifying, action: action })
        : React__default['default'].createElement(React__default['default'].Fragment, null, " "));
}

exports.default = PayStack;
//# sourceMappingURL=index.js.map
