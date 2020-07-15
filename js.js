/* DARK MODE - HTML e CSS tbm */
function dark() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList=='dark-mode') {
        document.getElementById('lamp-dark').src='imagens/lamp-off.png'
    } else (document.getElementById('lamp-dark').src='imagens/lamp-on.png')
}


 /*logo que aparece passando mouse em cima dos menus*/
function fotoMenu(tipo){
    document.getElementById('figura').src = tipo;
}