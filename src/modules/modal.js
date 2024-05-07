const modal = () => {
  const buttons = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");
  const modalContent = document.querySelector(".popup-content");
  const modalCLose = modal.querySelector(".popup-close");

  modalContent.style.left = "-30%";
  modal.style.opacity = "0";

  const modalAnimOpener = () => {
    modal.style.display = "block";
    modal.style.transition = "0.5s all";
    modalContent.style.transition = "0.5s all";
    setTimeout(() => {
      modal.style.opacity = "1";
      modalContent.style.left = "38%";
    }, 0);
    modal.style.transition = "0.5s all";
  };
  const modalAnimCloser = () => {
    modal.style.opacity = "0";
    modalContent.style.left = "103%";
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.style.left = "-30%";
    }, 500);
  };
  const modalOpener = percent => {
    modal.style.opacity = "1";
    modalContent.style.left = percent;
    modal.style.display = "block";
  };

  buttons.forEach(i => {
    i.addEventListener('click', () => {
      if (document.documentElement.clientWidth > 768) {
        modalAnimOpener();
      } else if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 500) {
        modalOpener("30%");
      } else if (document.documentElement.clientWidth < 500 && document.documentElement.clientWidth > 448) {
        modalOpener("18%");
      } else {
        modalOpener("15%");
      }
    });
  });

  modalCLose.addEventListener('click', () => {
    if (document.documentElement.clientWidth > 768) {
      modalAnimCloser();
    } else {
      modal.style.display = "none";
    }
  });

};

export default modal;
