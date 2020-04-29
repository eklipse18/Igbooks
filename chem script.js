var pgno = 1;
var x, text, image;

function validateForm() {
    pgno = document.forms["Page"]["pgno"].value;
    // If x is Not a Number or less than one or greater than 10
    if (pgno < 1 || pgno > 250 || isNaN(pgno)) {
      text = "Uhh... That page number does not exist...";
    }else{
      text="";
      var source = "https://p.calameoassets.com/161109120834-62971881390d760a3afa68d2927aad28/p" + pgno + ".svgz";
      image = document.getElementById("book").src = source;
    }document.getElementById("error").innerHTML = text;
};

function increment() {
  if (pgno < 250){
  pgno ++;
  var source = "https://p.calameoassets.com/161109120834-62971881390d760a3afa68d2927aad28/p" + pgno + ".svgz";
  image = document.getElementById("book").src = source;
  console.log(pgno);}
};

function decrement() {
  if (pgno > 1){
  pgno --;
  var source = "https://p.calameoassets.com/161109120834-62971881390d760a3afa68d2927aad28/p" + pgno + ".svgz";
  image = document.getElementById("book").src = source;}
};