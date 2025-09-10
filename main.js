// main.js

// Tambahkan class .slide-in pada elemen yang ingin dianimasikan di HTML Anda
// Contoh: <section class="slide-in">...</section>

document.addEventListener("DOMContentLoaded", function () {
    const slideEls = document.querySelectorAll('.slide-in');
  
    function checkSlide() {
      slideEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = (
          rect.top < window.innerHeight - 100 && // 100px sebelum masuk viewport penuh
          rect.bottom > 100
        );
        if (isVisible) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }
  
    window.addEventListener('scroll', checkSlide);
    window.addEventListener('resize', checkSlide);
    checkSlide(); // jalankan saat load
  });
