'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Http = core.registerPlugin('Http', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.HttpWeb()),
});

class HttpWeb extends core.WebPlugin {
    async get(options) {
        return {
            response: options
        };
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HttpWeb: HttpWeb
});

exports.Http = Http;
//# sourceMappingURL=plugin.cjs.js.map
