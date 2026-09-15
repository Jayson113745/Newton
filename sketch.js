/* JavaScript opfris opdracht
   
    Lees de README voor uitleg
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path=".vscode/p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
let appelX = 600; // x-positie van appel
let appelY = 50;  // y-positie van appel
let appleBreedte = 20;

let mandX = 500; // x-positie van appel
let mandY = 600;  // y-positie van appel
let mandBreedte = 150;
let mandLengte = 10



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // teken achtergrond
  background('black');

  // teken appel
  noStroke();         // geen lijntje om de vorm heen
  fill(255, 0, 0)     // vulkleur wordt rood
  rect(appelX, appelY, appleBreedte, appleBreedte);
  

  appelY = appelY + 3;

  rect(mouseX-65,mandY,mandBreedte,mandLengte);

  if (
  appelY + appleBreedte > mandY &&
  appelX + appleBreedte > mouseX - 65 &&
  appelX < mouseX + 85
) {
  appelY = 0;
}

}




