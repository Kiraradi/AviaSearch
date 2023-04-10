import AviaSearch from "../components/aviaSearch.component/aviaSearch";

export default class AviaSearchModule {
  constructor(container) {
    this.container = container;
  }

  drowUi() {
    const aviaSearch = new AviaSearch(this.container);

    aviaSearch.drowUi();
  }
}
