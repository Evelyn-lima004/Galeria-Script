"use strict"

const imagens = [
    "./img/image1.jpg",
    "./img/image2.jpg",
    "./img/image3.jpg",
    "./img/image4.jpeg",
    "./img/image5.jpg",
    "./img/image6.jpg",
    "./img/image7.jpg",
    "./img/image8.jpg"
]

//MAP - FILTER - REDUCE -> Declarativa

const limparId = (url) => url.replace("./img/","").split(".")[0].replace("", "-")

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    
    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img`
    container.appendChild(novoLink)

// *** MANEIRA INCORRETA DE SE FAZER E QUE SE ENCONTRA SEMPRE NA INTERNET ***
    // container.innerHTML += `
    //      <a href="${urlImagem}" class="galeria-itens">
    //         <img src="${urlImagem}" alt=""> 
    //     </a>
    // `
}

const carregarGaleria = () => imagens.forEach(criarItem) 

const criarSlide = (urlImagem, indice, arr) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)

    const indiceAnterior = indice <= 0 ? arr.length -1 : indice - 1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice >= arr.length -1 ? 0 : indice + 1
    const idProximo = limparId(arr[indiceProximo])

    novoDiv.innerHTML = `
                <div class="image1">
                    <a href="" class="icones fechar">&#10006;</a>
                    <a href="#${idAnterior}" class="icones anterior">&#171;</a>
                    <img src="${urlImagem}" alt="">
                    <a href="#${idProximo}" class="icones proximo">&#187;</a>
                </div>
    `
    container.appendChild(novoDiv)
}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)

carregarGaleria(imagens)
carregarSlide(imagens)




 


