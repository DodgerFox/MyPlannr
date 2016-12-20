document.addEventListener ('DOMContentLoaded', function () {
    slider()

})

function slider(){
var  slideshow = {};
slideshow = document.getElementById("slideshow");

slideshow.init = function(){

slideshow.images = slideshow.getElementsByTagName("img");

slideshow.width = slideshow.images[0].width;
slideshow.height = slideshow.images[0].height;

slideshow.length = slideshow.images.length;

slideshow.start = 0;

slideshow.current = 4;


slideshow.timer = function (){

slideshow.images[slideshow.current].style.opacity = 1;
slideshow.images[(slideshow.current + 1)%slideshow.length].style.opacity = 0;

 count = 0;
 animation(slideshow.images[slideshow.current], slideshow.images[(slideshow.current + 1)%slideshow.length])

function animation(img1, img2){
 count++;
 img1.style.opacity = 1 - count/100;
 
 
 img2.style.opacity = count/100;
 
 
 if (count < 100) setTimeout(function(){animation(img1, img2)},12)
 else slideshow.current = (slideshow.current + 1)%slideshow.length;

}
}

setInterval(slideshow.timer, 3000)}

slideshow.init();

}