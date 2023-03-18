window.addEventListener("load", init)

function init(){
    const kutyaLista=["foxterrier","kuvasz","puli","agár","újfullandi","keverék"]
    article = document.querySelectorAll("article")
    article.innerHTML = "<button>Kutya</button>"
    buttonElement.addEventListener("click", function(){
        gomb(kutyaLista)
    })
}
function gomb(lista){
    elem = document.querySelectorAll("button")

    document.write(`<h2>{lista[3]}</h2>)`)
}