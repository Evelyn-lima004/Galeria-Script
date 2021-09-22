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


const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
    
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
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

const carregarImagens = () => imagens.forEach(criarItem) 

carregarImagens()



 


