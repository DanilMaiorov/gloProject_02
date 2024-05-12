import { animate } from './others';

const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const modalContent = document.querySelector(".popup-content");

  function quad(timeFraction) {
    return Math.pow(timeFraction, 0.7);
  }

  function modalOpener(percent) {
    modalContent.style.left = percent;
    modal.style.opacity = "0";
    if (document.documentElement.clientWidth > 768) {
      animate({
        duration: 500,
        timing: quad,
        draw(progress) {
          modal.style.display = "block";
          modal.style.opacity = progress;
          modalContent.style.left = `${progress * 38}%`;
        }
      });
    } else {
      cancelAnimationFrame(animate);
      modal.style.display = "block";
      modal.style.opacity = "1";
      modalContent.style.left = percent;
    }
  }

  function modalCloser() {
    animate({
      duration: 500,
      timing: quad,
      draw(progress) {
        modal.style.opacity = 1 - progress;
        modalContent.style.left = `${38 + progress * 65}%`;
        setTimeout(() => {
          modal.style.display = "none";
        }, 500);
      }
    });
    if (document.documentElement.clientWidth < 768) {
      modal.style.display = "none";
      cancelAnimationFrame(animate);
    }
  }

  buttons.forEach(i => {
    i.addEventListener('click', () => {
      if (document.documentElement.clientWidth > 768) {
        modalOpener("-30%");
      }  else if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 500) {
        modalOpener("30%");
      } else if (document.documentElement.clientWidth < 500 && document.documentElement.clientWidth > 448) {
        modalOpener("18%");
      } else {
        modalOpener("15%");
      }
    });
  });


  modal.addEventListener('click', e => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) modalCloser();
  });

};

export default modal;
