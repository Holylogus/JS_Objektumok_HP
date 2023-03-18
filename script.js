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
  txt += "<table>"
  txt += "<thead>"
  for (const key in KUTYA) {
    txt += `<th>${key}</th>`
  }
  txt += "</thead>"
  for (let index = 0; index < KUTYA.length; index++) {
    txt += `<tr>`
    for (const key in KUTYA[index]) {
        txt += `<td>${KUTYA[index][key]}</td>`
    }
    txt += "</tr>"
  }
  txt += "</table>"
  console.log(txt)
  return txt
  }
