/** função de debug no documento */
function debug(msg) {
    // localiza a seção de depueração do documento ao analisar os atributos de identificação
    let log = document.getElementById("debuglog");

    // caso não exista, cria um
    if (!log) {
        log = document.createElement("div");
        log.id = "debuglog";
        log.innerHTML = "<h1>Debug Log</h1>";
        document.body.appendChild(log); // adiciona ao final do documento
    }

    // agora, coloca a mensagem em seu próprio <pre> e anexa no log
    let pre = document.createElement("pre");
    let text = document.createTextNode(msg);

    pre.appendChild(text);
    log.appendChild(pre);
}