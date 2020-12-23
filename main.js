 //read more js
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
//class
function ReadMore(_jObj, lineNum) { 
  var READ_MORE_LABEL = 'i want read more';
  var HIDE_LABEL = 'minimize it';

  var jObj = _jObj;
  var textMinHeight = ''+ (parseInt(jObj.children('.hidden-text').css('line-height'),10)*lineNum) +'px';
  var textMaxHeight = ''+jObj.children('.hidden-text').css('height');

  jObj.children('.hidden-text').css('height', ''+ textMaxHeight);
  jObj.children('.hidden-text').css( 'transition', 'height .5s');
  jObj.children('.hidden-text').css('height', ''+ textMinHeight);

  jObj.append ('<button class="read-more">'+READ_MORE_LABEL+'</button>');

  jObj.children('.read-more').click ( function() {
    if (jObj.children('.hidden-text').css('height') === textMinHeight) {
      jObj.children('.hidden-text').css('height', ''+textMaxHeight);
      jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
    } else {
      jObj.children('.hidden-text').css('height', ''+textMinHeight);
      jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
    }
  });

}

//slideshow
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides fade");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}