'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Es6;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            Es6 = function () {
                function Es6() {
                    _classCallCheck(this, Es6);
                }

                _createClass(Es6, [{
                    key: 'say',
                    value: function say() {
                        console.log('this is es6 code');
                    }
                }]);

                return Es6;
            }();

            _export('default', Es6);
        }
    };
});
