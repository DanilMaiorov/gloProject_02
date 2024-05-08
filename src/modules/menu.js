const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  let menuItems = menu.querySelectorAll("li > a");

  const nextSlideBtn = document.querySelector("main > a");

  menuItems = [...menuItems, nextSlideBtn];

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);

  menuItems.forEach(i => {
    i.addEventListener('click', e => {
      e.preventDefault();
      let anchor;
      if (e.target.tagName !== "IMG") {
        anchor = e.target.getAttribute("href");
        handleMenu();
      } else {
        anchor = e.target.parentNode.getAttribute("href");
      }
      document.querySelector(anchor).scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    });
  });
};

export default menu;
