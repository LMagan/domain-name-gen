/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["el", "nuestro", "tu"];
  let nombre = ["coyote", "burro", "primo"];
  let adj = ["cojo", "viejo", "estafador"];
  let dom = [".com", ".net", ".es"];

  let total = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < nombre.length; x++) {
      for (let y = 0; y < adj.length; y++) {
        for (let h = 0; h < dom.length; h++) {
          total.push(pronoun[i] + nombre[x] + adj[y] + dom[h]);
        }
      }
    }
  }
  let ul = document.getElementById("d");
  for (let z = 0; z < total.length; z++) {
    let li = document.createElement("li");
    li.innerHTML = total[z];
    ul.appendChild(li);
  }
};
