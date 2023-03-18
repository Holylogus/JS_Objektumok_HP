window.addEventListener("load",init)
const KUTYA = [
    {
        nev:"Morzsi",
        fajta:"keverék",
        marmagassag:52,
        neme:"kan",
        kor:13
    },
    {
        nev:"Kira",
        fajta:"keverék",
        lab:4,
        marmagassag:49,
        neme:"szuka",
        kor:10
    }

]
console.log(KUTYA)
function init(){
    console.log(KUTYA[0].nev)
    console.log(KUTYA[1].nev)
    console.log(KUTYA[0])
    /* MORZSI.nev = "Guri"
    MORZSI.oltas = "van" */
    //Objektumok bejárása
    for (let index = 0; index < KUTYA.length; index++) {
        console.log(index, ". kutya ***********")
        for (const key in KUTYA[index]) {
            console.log(key,KUTYA[index][key])
         }
        
    }
    
}