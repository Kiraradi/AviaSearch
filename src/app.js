import AviaSearchModule from "./modules/aviaSearch.module";

const constructor = document.querySelector(".conteiner");

const aviaSearchModule = new AviaSearchModule(constructor);

aviaSearchModule.drowUi();
