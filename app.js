const opcoes = [
    {
        p1: "cucas",
        p2: "bostil"
    },
    {
        p1: "massa",
        p2: "porra"
    }
]

for(let i = 0; i<opcoes.length; i++){
    console.log(`${i.p1}\n${i.p2}`);
}

// ao invez de usar o for, da pra usar o foreach

opcoes.forEach(i => {
    console.log(`${i.p1}\n${i.p2}`)
})

// da no mesmo, soq digita menos :p, existem outros metodos do js pra percorrer um array, soq o mais """simples""" é o foreach

// pra comentar tudo:
// aperta Ctrl + Shift + p e digita add line comment
// let resposta = document.getElementById("option1");
// let resposta2 = document.getElementById("option2");

// let clicks = 0

// resposta.onclick = function(){

//     clicks = clicks+1

// if(clicks==1){

//     alert("clicou no "+resposta.innerText)
//     resposta.innerText = 'frio'
//     resposta2.innerText = 'calor'
//     console.log(clicks)
//     clicks=clicks++

// }
// else if(clicks==2){

//     alert(`Clicou no ${resposta.innerText}`)
//     resposta.innerText = 'Filme'
//     resposta2.innerText = 'Livro'
//     clicks++

// }
// else if(clicks==3){

//     alert(`Clicou no ${resposta.innerText}`)


// }

// }

// resposta2.onclick = function(){

//     alert("clicou no "+resposta2.innerText);
//     resposta.innerHTML = 'frio'
//     resposta2.innerHTML = 'calor'


// }











// /*
// function mudarTexto(){

// if(resposta.click){

// alert("clicou no "+resposta.innerText)

// }else if(resposta2.click) {

//  alert("clicou no "+resposta2.innerText)

// }



// }
// */