window.onload = function(){
  applyImgWidth();
}

window.onresize = function(){
  carBox.style.left = '0';
  carBoxPossition = 0;
  maxPosition =0;
  applyImgWidth();
}

var carContainer = document.getElementsByClassName('car-container')[0];
var carLeftArrow = document.getElementsByClassName('car-left-arrow')[0];
var carRightArrow = document.getElementsByClassName('car-right-arrow')[0];
var img = document.getElementsByClassName('img');
var carBox = document.getElementsByClassName('car-box')[0];
function applyImgWidth(){
  for (var i = 0; i < img.length; i++) {
    img[i].style.width = carContainer.offsetWidth + 'px';
  }
}
var carBoxPossition = 0;
var maxPosition = 0;
carLeftArrow.addEventListener('click',function(){
  if(maxPosition < img.length-1){
    maxPosition++;
    carBoxPossition = carBoxPossition - carContainer.offsetWidth;
    carBox.style.left = carBoxPossition + 'px';
  }
  console.log(maxPosition);
})

carRightArrow.addEventListener('click',function(){
  if(maxPosition > 0 &&  maxPosition < img.length){
      maxPosition--;
      carBoxPossition = carBoxPossition + carContainer.offsetWidth;
      carBox.style.left = carBoxPossition + 'px';
      console.log(maxPosition);
  }
})





console.log(carContainer.offsetWidth);
