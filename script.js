window.addEventListener("load", init);
const KUTYA = [
  {
    nev: "Morzsi",
    fajta: "keverék",
    marmagassag: 52,
    neme: "kan",
    kor: 13,
  },
  {
    nev: "Kira",
    fajta: "yorky",
    marmagassag: 49,
    neme: "szuka",
    kor: 10,
  },
  {
    nev: "Szellem",
    fajta: "farkas",
    marmagassag: 63,
    neme: "kan",
    kor: 5,
  },
];
function init() {
  const ARTICLE = document.querySelectorAll("article");

  /*írjuk ki divekbe és azon belül p tagekbe a kutyák fajtáját*/
  let txt = osszeallit();  //*html tartalo meghívása main-be
  //2. lépés - itt helyezzük az article elembe
  ARTICLE[0].innerHTML = txt; //*txt elem írása htmlbe (ez jelenik meg)

}
function osszeallit() {
  //1. lépés - Összeállítjuk azt a tartalmat, ami a HTML kódot jelenti
  let txt = ""
  
  for (let index = 0; index < KUTYA.length; index++) {
    txt += "<div><table>"
    for (const key in KUTYA[index]) {
      txt += "<tr>"
      txt += `<td>${key}</td>`
      txt += `<td>${KUTYA[index][key]}</td>`
  
    }
    txt += "</table></div>"
  }
  
  
      
  
  console.log(txt)
  return txt
  }
