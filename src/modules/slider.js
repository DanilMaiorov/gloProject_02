const slider = (sliderBlockClass = ".portfolio-content", sliderItemClass = ".portfolio-item",
                sliderItemActiveClass = "portfolio-item-active", sliderDotActiveClass = "dot-active") => {

  const sliderBlock = document.querySelector(sliderBlockClass);
  const slides = document.querySelectorAll(sliderItemClass);

  let trueFalse = [];

  let dots;
  const dotsContainer = document.querySelector(".portfolio-dots");
  const timeInterval = 500;


  //  функция создания дотов
  const dotsCreator = () => {
    slides.forEach(() => {
      dotsContainer.insertAdjacentHTML('afterbegin', `<li class="dot"></li>`);
    });
    dots = document.querySelectorAll(".dot");
    dots[0].classList.add(sliderDotActiveClass);
  };

  //  проверка на существование классов

  if (sliderBlock) {
    trueFalse.push(true);
  } else {
    trueFalse.push(false);
  }
  slides.forEach(item => {
    if (item.className) {
      trueFalse.push(true);
    } else {
      trueFalse.push(false);
    }
  });

  const haveWeAClass = trueFalse.every(item => { 
    return item
  });

  if (haveWeAClass) {
    let currentSlide = 0;
    let interval;
    const prevSlide = (elems, index, strClass) => {
      elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
      elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
      prevSlide(slides, currentSlide, sliderItemActiveClass);
      prevSlide(dots, currentSlide, sliderDotActiveClass);
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide, sliderItemActiveClass);
      nextSlide(dots, currentSlide, sliderDotActiveClass);
    };

    const startSlide = (timer = 1000) => {
      interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
      e.preventDefault();
      if (!e.target.matches(".dot, .portfolio-btn")) {
        return;
      }
      prevSlide(slides, currentSlide, sliderItemActiveClass);
      prevSlide(dots, currentSlide, sliderDotActiveClass);
      if (e.target.matches("#arrow-right")) {
        currentSlide++;
      } else if (e.target.matches("#arrow-left")) {
        currentSlide--;
      } else if (e.target.classList.contains("dot")) {
        dots.forEach((dot, index) => {
          if (e.target === dot) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      nextSlide(slides, currentSlide, sliderItemActiveClass);
      nextSlide(dots, currentSlide, sliderDotActiveClass);
    });
    sliderBlock.addEventListener('mouseenter', (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide(timeInterval);
      }
    }, true);


    startSlide(timeInterval);
    dotsCreator();
  } else {
    dotsCreator();
    return;
  }
};




export default slider;
