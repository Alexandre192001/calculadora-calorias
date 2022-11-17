const btnCalcular = document.querySelector(".btn-calcular")

btnCalcular.addEventListener("click", () => {
    const idade = getInputNumberValue("idade")
    const peso = getInputNumberValue("peso")
    const altura = getInputNumberValue("altura")
    const genero = getSelectValue("genero")
    const nivelAtt = getSelectValue("nivel-atividade-fisica")

    const tmb = (
        genero === "Mulher" ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) : (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade)))

    const maintenance = Math.round((tmb * Number(nivelAtt)))
    const loseWeight = maintenance - 450;
    const gaiWeight = maintenance + 450;

    const layoutResult = `
    
                <div class="resultado-values">
                    <p>Seu Metabolismo basal é de
                        <span class="result-calorias">${tmb}</span> calorias
                    </p>
                </div>
                <div class="resultado-values">
                    <p> Para manter o seu peso você precisa consumir em média
                        <span class="result-manter_peso">${maintenance}</span> calorias
                    </p>
                </div>
                <div class="resultado-values">
                    <p>Para perder peso você precisa consumir em média
                        <span class="result-perder_peso">${loseWeight}</span> calorias
                    </p>
                </div>
                <div class="resultado-values">
                    <p>Para ganhar peso você precisa consumir em média
                        <span class="result-ganhar_peso">${gaiWeight}</span> calorias
                    </p>
                </div>
    `
    let containerDados = document.querySelector(".container-resultado-wrapper")
    containerDados.innerHTML= layoutResult

})

function getSelectValue(id) {
    const select = document.getElementById(id)
    return select.options[select.selectedIndex].value
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value)
}