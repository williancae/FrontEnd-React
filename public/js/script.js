import Typewriter from 't-writer.js';
   
   //Variables on page load 
    var $myCarousel = $('#mainSlide'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
