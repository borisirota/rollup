(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.exposedInternals = {})));
}(this, function (exports) { 'use strict';

	const a = 1;
	const b = 2;

	exports.a = a;
	exports.b = b;

}));