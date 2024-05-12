


const menu = () => {
  const menu = document.querySelector('menu');
  let menuItems = menu.querySelectorAll('li > a');
  const nextSlideBtn = document.querySelector("main > a");
  const body = document.querySelector('body');

  menuItems = [...menuItems, nextSlideBtn];

  const toggleMenu = () => {
    body.addEventListener('click', (e) => {
      if (e.target.closest('.menu')) {
        menu.classList.add('active-menu');
      } else if (e.target.closest('.close-btn')) {
        menu.classList.remove('active-menu');
      } else if (e.target.closest('menu') || e.target.closest('main > a')) {
        menuItems.forEach(menuItem => {
          if (menuItem === e.target || e.target.tagName === "IMG") {
            e.preventDefault();
            let anchor = menuItem.getAttribute('href');
            document.querySelector(anchor).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
            menu.classList.remove('active-menu');
          }
        });
      } else if (!e.target.closest('menu')) {
        menu.classList.remove('active-menu');
      }
    });
  };
  toggleMenu();
};

export default menu;
