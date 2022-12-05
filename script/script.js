// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})





let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

$("html").easeScroll({
    frameRate: 60,
    animationTime: 3000,
    stepSize: 120,
    pulseAlgorithm: !0,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: !0,
    arrowScroll: 50
  });


  $(document)
    .on('click', '.sand_box', function() {
      $('.sand_menu_ing').fadeIn(800);
      appaMenu();
    })
    .on('click', '.btn', function(){
     
      $('.sand_menu_ing').fadeOut(800);
      appaMenu();
    });

    $(document)
    .on('click', '.drink_box', function() {
      $('.drink_menu_ing').fadeIn(800);
      appaMenu();
    })
    .on('click', '.btn02', function(){
     
      $('.drink_menu_ing').fadeOut(800);
      appaMenu();
    });

   


