/** oculta e reutiliza o espaço ou deixa o elemento invisível */
function hide(e, reflow) {
    if (reflow) {
        e.style.display = "none";       // oculta e utiliza o espaço
    } else {
        e.style.visibility = "hidden";  // torna invisível, mas deixa espaço
    }
}