function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'Criança-Homen.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'Jovem-Homen.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'Adulto-Homen.jpg')
            }else {
                img.setAttribute('src', 'Idoso-Homen.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'Criança-Mulher.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'Jovem-Mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'Adulto-Mulher.jpg')
            }else {
                img.setAttribute('src', 'Idosa-Mulher.jpg')   
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
     }
}