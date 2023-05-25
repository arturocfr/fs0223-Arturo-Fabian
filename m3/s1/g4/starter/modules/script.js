"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEl = void 0;
function createEl(_tagName, _classes, _text) {
    var el = document.createElement(_tagName);
    _classes ? _classes.forEach(function (cl) { return el.classList.add(cl); }) : 0;
    _text ? (el.innerText = _text) : 0;
    return el;
}
exports.createEl = createEl;
