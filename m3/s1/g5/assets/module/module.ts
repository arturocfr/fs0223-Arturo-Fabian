export function createEl(
    name: string,
    classes?: string[],
    text?: string,
    id?: string
): HTMLElement {
    let el: HTMLElement = document.createElement(name);
    classes ? classes.forEach((cl) => el.classList.add(cl)) : 0;
    text ? (el.textContent = text) : 0;
    id ? (el.id = id) : 0;
    return el;
}

export function byid(id: string): HTMLElement | null {
    return document.getElementById(id);
}