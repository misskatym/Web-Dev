var pictures = new Array(5);
var counter = 0;


function initialize(){

  pictures[0] = new Image(50, 50);
  pictures[0].src = "images/boat.png";
  pictures[1] = new Image(50, 50);
  pictures[1].src = "images/broom2.jpg";
  pictures[2] = new Image(50, 50);
  pictures[2].src = "images/hair.jpg";
  pictures[3] = new Image(50, 50);
  pictures[3].src = "images/mask.jpg";
  pictures[4] = new Image(50, 50);
  pictures[4].src = "images/umbrella.jpg";
  pictures[5] = new Image(50, 50);
  pictures[5].src = "images/amulet.jpg";


}

function upDate(){
  counter++;
  if (counter > 5){
    counter = 0;
  }
  document.imgDisplay.src = pictures[counter].src;
  document.myForm.txtDescription.value = description[counter];
}


function myFunction(){

var x = document.images.length;

document.getElementById("gallery").innerHTML = x;
}
