export const showCloseIcon = (show, close, el1, el2) => {

    el1.current.setAttribute("style", `display: ${show};`);
    el2.current.setAttribute("style", `display: ${close};`);

    return el1, el2;

}