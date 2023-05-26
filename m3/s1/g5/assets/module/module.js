"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.byid = exports.createEl = void 0;
function createEl(name, classes, text, id) {
    var el = document.createElement(name);
    classes ? classes.forEach(function (cl) { return el.classList.add(cl); }) : 0;
    text ? (el.textContent = text) : 0;
    id ? (el.id = id) : 0;
    return el;
}
exports.createEl = createEl;
function byid(id) {
    return document.getElementById(id);
}
exports.byid = byid;
