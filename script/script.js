// faz aquele bagulho do menu lá do background color, por isso navbar
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var parallaxSections = document.getElementsByClassName('parallax-section');
  
    for (var i = 0; i < parallaxSections.length; i++) {
      var speed = parallaxSections[i].getAttribute('data-speed');
      parallaxSections[i].style.transform = 'translateY(' + (scrolled * speed) + 'px)';
    }
  });
  