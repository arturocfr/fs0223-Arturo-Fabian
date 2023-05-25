export function createEl(
    _tagName: string,
    _classes?: string[],
    _text?: string
): HTMLElement {
    let el = document.createElement(_tagName);
    _classes ? _classes.forEach((cl) => el.classList.add(cl)) : 0;
    _text ? (el.innerText = _text) : 0;
    return el;
}