let inp_1:HTMLInputElement|null = document.getElementById('input-1') as HTMLInputElement|null;
let inp_2:HTMLInputElement|null = document.getElementById('input-2') as HTMLInputElement|null;

const calcBestPlayer = function(num_1:number, num_2:number, rand:number):number {
    let abs_1:number = Math.abs(num_1 - rand);
    let abs_2:number = Math.abs(num_2 - rand);
    return abs_1 < abs_2 ? 1 : 2;
}

const calcResult = function(g1:number, g2:number):void {
    const random:number = Math.floor(Math.random() * 101);
    let g1_h:HTMLElement|null = document.getElementById('g-1');
    let g2_h:HTMLElement|null = document.getElementById('g-1');
    let p:HTMLElement|null = document.getElementById('p-container');
    let p_res:HTMLElement|null = document.getElementById('num-res');
    let p_cont:HTMLElement|null = document.getElementById('contentino');

    if (g1 === random) {
        g1_h?.classList.add('setWinner');
        p?.classList.remove('opacity-0');
        p!.innerHTML = `Il vincitore è Giocatore 1!`;
        setTimeout(() => {
            g1_h?.classList.remove('setWinner');
        }, 3000);
    } else if (g2 === random) {
        g2_h?.classList.add('setWinner');
        p?.classList.remove('opacity-0');
        p!.innerHTML = `Il vincitore è Giocatore 2!`;
        setTimeout(() => {
            g2_h?.classList.remove('setWinner');
        }, 3000);
    } else {
        p?.classList.remove('opacity-0');
        p!.innerHTML = `Vi ho fregati entrambi ahahahaa!`;
        p_cont?.classList.remove('opacity-0');
        p_cont!.innerText = `Ci si è avvicinato di più il Giocatore ${calcBestPlayer(g1, g2, random)}`;
    }
    p_res?.classList.remove('opacity-0');
    p_res!.innerText = `Numero ${random}`;
    setTimeout(() => {
        p?.classList.add('opacity-0');
        p_res?.classList.add('opacity-0');
        p_cont?.classList.add('opacity-0');
        inp_1!.value = '';
        inp_2!.value = '';
    }, 3000);
}

let btn:HTMLElement|null = document.getElementById('btn-set');
btn?.addEventListener('click', ():void => {
    calcResult(Number(inp_1?.value), Number(inp_2?.value));
})
