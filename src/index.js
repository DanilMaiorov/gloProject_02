import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";

import slider from "./modules/slider";
timer("31 may 2024");
// import menu from "./modules/menu";
import validation from "./modules/validation";


menu();
modal();

slider(".portfolio-content", ".portfolio-iotem", "portfolio-item-active", "dot-active");
validation();
