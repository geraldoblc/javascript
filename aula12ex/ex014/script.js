function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagem/manha.jpg'
        document.body.style.background = '#fbd386'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'imagem/tarde.jpg'
        document.body.style.background = '#b97867'
    } else {
        // BOA NOITE!
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#83618e'
    }
}