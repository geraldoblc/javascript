function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagem/homem6.jpg')
            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src', 'imagem/homem15.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/homem30.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/homem60.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagem/mulher6.jpg')
            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src', 'imagem/mulher15.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/mulher30.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/mulher60.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img)
    }
}