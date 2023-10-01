

/**
 * @author prem prakash <prakashmadhepur@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

const images = document.querySelectorAll('.animate-image');
let index = 0;

function showImage() {
  images[index].classList.add('show');
  index++;
  if (index < images.length) {
    setTimeout(showImage, 3000); // Adjust the delay between each image (in milliseconds)
  }
}

showImage();


