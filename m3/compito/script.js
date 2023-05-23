"use strict";
let inp_1 = document.getElementById('input-1');
let inp_2 = document.getElementById('input-2');
const calcBestPlayer = function (num_1, num_2, rand) {
    let abs_1 = Math.abs(num_1 - rand);
    let abs_2 = Math.abs(num_2 - rand);
    return abs_1 < abs_2 ? 1 : 2;
};
const calcResult = function (g1, g2) {
    const random = Math.floor(Math.random() * 101);
    let g1_h = document.getElementById('g-1');
    let g2_h = document.getElementById('g-1');
    let p = document.getElementById('p-container');
    let p_res = document.getElementById('num-res');
    let p_cont = document.getElementById('contentino');
    if (g1 === random) {
        g1_h === null || g1_h === void 0 ? void 0 : g1_h.classList.add('setWinner');
        p === null || p === void 0 ? void 0 : p.classList.remove('opacity-0');
        p.innerHTML = `Il vincitore è Giocatore 1!`;
        setTimeout(() => {
            g1_h === null || g1_h === void 0 ? void 0 : g1_h.classList.remove('setWinner');
        }, 3000);
    }
    else if (g2 === random) {
        g2_h === null || g2_h === void 0 ? void 0 : g2_h.classList.add('setWinner');
        p === null || p === void 0 ? void 0 : p.classList.remove('opacity-0');
        p.innerHTML = `Il vincitore è Giocatore 2!`;
        setTimeout(() => {
            g2_h === null || g2_h === void 0 ? void 0 : g2_h.classList.remove('setWinner');
        }, 3000);
    }
    else {
        p === null || p === void 0 ? void 0 : p.classList.remove('opacity-0');
        p.innerHTML = `Vi ho fregati entrambi ahahahaa!`;
        p_cont === null || p_cont === void 0 ? void 0 : p_cont.classList.remove('opacity-0');
        p_cont.innerText = `Ci si è avvicinato di più il Giocatore ${calcBestPlayer(g1, g2, random)}`;
    }
    p_res === null || p_res === void 0 ? void 0 : p_res.classList.remove('opacity-0');
    p_res.innerText = `Numero ${random}`;
    setTimeout(() => {
        p === null || p === void 0 ? void 0 : p.classList.add('opacity-0');
        p_res === null || p_res === void 0 ? void 0 : p_res.classList.add('opacity-0');
        p_cont === null || p_cont === void 0 ? void 0 : p_cont.classList.add('opacity-0');
        inp_1.value = '';
        inp_2.value = '';
    }, 3000);
};
let btn = document.getElementById('btn-set');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
    calcResult(Number(inp_1 === null || inp_1 === void 0 ? void 0 : inp_1.value), Number(inp_2 === null || inp_2 === void 0 ? void 0 : inp_2.value));
});
