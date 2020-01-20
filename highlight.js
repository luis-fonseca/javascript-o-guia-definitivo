/** destaca "e" ao definir uma classe CSS */
/** pressume-se que já exista uma classe CSS */
function highlight(e) {
    /** define ou anexa o atributo da classe HTML */
    if (!e.className) {
        e.className = "hilite";
    } else {
        e.className += " hilite";
    }
}