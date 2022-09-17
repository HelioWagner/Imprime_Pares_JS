//adicionando click na tag de botoes
document.querySelectorAll(".botao_valores").forEach((value) => {
    value.addEventListener("click", buscaPares)
})
document.querySelectorAll(".limpar__valores").forEach((value) => {
    value.addEventListener("click", () => {
        resultado = document.querySelector(".resultado")
        resultado.innerHTML = ""
    })
})
//funcao criada pra busca os valores pares
function buscaPares() {    
    
    resultPar = []
    
    for (let index = 1; index <= 100; index++) {        
        if (index%2 ==0)  resultPar.push(index)        
    }
    //busca a tag pra retornar o resultado
    resultado = document.querySelector(".resultado")
    resultado.innerHTML = "Números pares: "+resultPar.join(", ")
}