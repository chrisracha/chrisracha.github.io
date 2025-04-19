function responsive() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }

    var btn = document.getElementById("button");
    if (btn.className === "fa fa-bars") {
        btn.className = "fa-sharp fa-solid fa-x";
    } else if (btn.className === "fa-sharp fa-solid fa-x") {
        btn.className = "fa fa-bars";
  }
}