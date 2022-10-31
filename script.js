document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
          document.getElementById('navbar_bottom').classList.add('fixed-top');
          document.body.style.paddingTop = navbar_height - 'px';
        } else {
          document.getElementById('navbar_bottom').classList.remove('fixed-top');
          document.body.style.paddingTop = '0';
        } 
    });
  }); 