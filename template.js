function main() {
  var draaimolen = function () {
      var albumImgs = document.getElementsByTagName("img");
      var teller = 0;
      var teller1 = 0;
      var arrayImgs = [];
      // eerst alle afbeeldingen in een array stoppen
      while (teller < albumImgs.length) {
            arrayImgs.push(albumImgs[teller].getAttribute("src"));
            teller++;
      }
      // de eerste opschuiven naar de laatste
      arrayImgs.push(arrayImgs.shift());
      // daarna opnieuw verdelen over de afbeeldingen...
      while (teller1 < albumImgs.length) {
            albumImgs[teller1].setAttribute("src", arrayImgs[teller1]);
            teller1++;
      }
      console.log(arrayImgs.join());
}
setInterval(draaimolen, 5000);
}

window.onload = function() {
       main();
}
