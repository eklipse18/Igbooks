var pgno = 1;
var x, text, image;

function validateForm() {
    pgno = document.forms["Page"]["pgno"].value;
    // If x is Not a Number or less than one or greater than 10
    if (pgno < 1 || pgno > 186 || isNaN(pgno)) {
      text = "Uhh... That page number does not exist...";
    }else{
      text="";
      var source = "https://p.calameoassets.com/161109120228-280d24c2da7f47e0c3ed86142e106327/p" + pgno + ".svgz";
      image = document.getElementById("book").src = source;
    }document.getElementById("error").innerHTML = text;
};

function increment() {
  if (pgno < 186){
    pgno ++;
    var source = "https://p.calameoassets.com/161109120228-280d24c2da7f47e0c3ed86142e106327/p" + pgno + ".svgz";
    image = document.getElementById("book").src = source;
  }
};

function decrement() {
  if (pgno > 1){
  pgno --;
  var source = "https://p.calameoassets.com/161109120228-280d24c2da7f47e0c3ed86142e106327/p" + pgno + ".svgz";
  image = document.getElementById("book").src = source;}
};
