let colors = ["red","green","blue","yellow","pink","purple"];
let inter = setInterval(() => {
   let randomColor = colors[Math.floor(Math.random() * colors.length)];
   document.body.style.background = randomColor;
},200)

let i = 0;
let inter2 = setInterval(() => {
   let color2 = ["Red","green","pink","purple","Coral"];
   if(i >= color2.length){
         i = 0
      }    let randomColor2 = color2[i];
      document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.childNodes[1].style.background = randomColor2;
      i++
},200)
let x = 0;
let inter3 = setInterval(() => {
   let color3 = ["blue","red","Coral"];
   if(x >= color3.length){
         x= 0
      }    let randomColor3 = color3[x];
      document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.childNodes[3].style.background = randomColor3;
      x++
},40)
let y = 0;
let inter4 = setInterval(() => {
   let color4 = ["Coral","green","chocolate"];
   if(y >= color4.length){
         y= 0
      }    let randomColory4 = color4[y];
      document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.childNodes[5].style.background = randomColory4;
      y++
},500)
let yw = 0;
let inter5 = setInterval(() => {
   let color5 = ["yellow","Crimson","pink"];
   if(yw >= color5.length){
         yw= 0
      }    let randomColory5 = color5[yw];
      document.body.firstChild.nextSibling.firstChild.nextSibling.firstChild.childNodes[7].style.background = randomColory5;
      yw++
},100)
let yww = 0;
let inter6 = setInterval(() => {
   let color6 = ["DarkGoldenRod","DarkMagenta","GreenYellow"];
   if(yww >= color6.length){
         yww= 0
      }    let randomColory6 = color6[yww];
      document.body.firstChild.nextSibling.firstChild.nextSibling.childNodes[2].childNodes[1].style.background = randomColory6;
      yww++
},150)
let yxx = 0;
let inter7 = setInterval(() => {
   let color7 = ["Maroon","MediumOrchid","OrangeRed","SeaGreen","Yellow"];
   if(yxx >= color7.length){
    yxx= 0
      }    let randomColory7 = color7[yxx];
      document.body.firstChild.nextSibling.firstChild.nextSibling.childNodes[2].childNodes[3].style.background = randomColory7;
      yxx++
},40)
let txt = 0;
let inter8 = setInterval(() => {
   let color8 = ["salmon","skyBlue","thistle","chartreuse"];
   if(txt >= color8.length){
    txt= 0
      }    let randomColory8 = color8[txt];
      document.body.firstChild.nextSibling.firstChild.nextSibling.childNodes[4].childNodes[1].style.background = randomColory8;
      txt++
},200)

