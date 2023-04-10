import "./aviaSearch.css";
import Dadata from "../Dadata.component/Dadata.component";
import AirDatepickerComponent from "../airDatepicker.component/airDatepicker.component";

export default class AviaSearch {
  constructor(container) {
    this.container = container;
  }

  drowUi() {
    this.formEl = document.createElement("form");
    this.formEl.classList.add("form");

    const formTitle = document.createElement("h2");
    formTitle.classList.add("form-title");
    formTitle.textContent = "Поиск билетов";

    this.formEl.appendChild(formTitle);
    this.formEl.appendChild(this.getInputWhereFrom());
    this.formEl.appendChild(this.getButtonChange());
    this.formEl.appendChild(this.getInputWhere());
    this.formEl.appendChild(this.getQuantityOfPeople());
    this.formEl.appendChild(this.getInputData());
    this.formEl.appendChild(this.getSubmitButton());

    this.container.appendChild(this.formEl);
    Dadata.startDadata();
    AirDatepickerComponent.startAirDatepicker();
    this.formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  getInputWhereFrom() {
    const inputWhereFromWraper = document.createElement("div");
    inputWhereFromWraper.classList.add("input-where-from-wraper");

    const inputWhereFromTitle = document.createElement("h2");
    inputWhereFromTitle.classList.add("input-where-from-title");
    inputWhereFromTitle.textContent = "Откуда:";
    inputWhereFromWraper.appendChild(inputWhereFromTitle);

    const inputWhereFrom = document.createElement("input");
    inputWhereFrom.classList.add("input-where-from", "input");
    inputWhereFrom.setAttribute("type", "text");
    inputWhereFromWraper.appendChild(inputWhereFrom);

    return inputWhereFromWraper;
  }

  getButtonChange() {
    const buttonChange = document.createElement("button");
    buttonChange.classList.add("button-change");

    buttonChange.innerHTML =
      '<svg class="button-change-svg"  id="Capa_1"   viewBox="0 0 687.564 687.563"  xml:space="preserve"><g><g><g><g><path d="M634.047,373.351c-8.689,0-15.731-7.042-15.731-15.731c0-150.144-122.151-272.294-272.3-272.294      c-58.955,0-115.059,18.521-162.239,53.573c-6.966,5.192-16.828,3.731-22.007-3.248c-5.179-6.973-3.726-16.834,3.248-22.014      c52.648-39.105,115.234-59.779,181-59.779c167.492,0,303.766,136.261,303.766,303.761      C649.781,366.303,642.739,373.351,634.047,373.351z"/><path d="M281.636,197.343c-1.832,0-3.682-0.321-5.5-1.001l-129.728-48.407l28.741-135.461      c1.8-8.502,10.151-13.934,18.653-12.127c8.502,1.8,13.927,10.151,12.121,18.653l-23.109,108.935l104.322,38.931      c8.137,3.032,12.278,12.096,9.238,20.238C294.014,193.435,288.011,197.343,281.636,197.343z"/></g><g><path d="M341.553,633.7c-167.5,0-303.772-136.267-303.772-303.761c0-8.69,7.042-15.732,15.733-15.732      s15.733,7.042,15.733,15.732c0,150.138,122.157,272.295,272.307,272.295c58.954,0,115.052-18.521,162.231-53.567      c6.975-5.18,16.828-3.732,22.008,3.253c5.18,6.974,3.727,16.828-3.247,22.008C469.903,613.027,407.31,633.7,341.553,633.7z"/><path d="M497.045,687.563c-1.083,0-2.178-0.118-3.284-0.353c-8.503-1.8-13.928-10.15-12.121-18.652l23.114-108.94      l-104.329-38.93c-8.137-3.033-12.276-12.097-9.237-20.239c3.033-8.145,12.083-12.311,20.239-9.238l129.733,48.4l-28.741,135.46      C510.852,682.491,504.32,687.563,497.045,687.563z"/></g></g></g></g></svg>';

    buttonChange.addEventListener("click", (e) => {
      this.swapFieldsWhereFromAndWhere();
    });
    return buttonChange;
  }

  getInputWhere() {
    const inputWhereWraper = document.createElement("div");
    inputWhereWraper.classList.add("input-where-wraper");

    const inputWhereTitle = document.createElement("h2");
    inputWhereTitle.classList.add("input-where-title");
    inputWhereTitle.textContent = "Куда:";
    inputWhereWraper.appendChild(inputWhereTitle);

    const inputWhere = document.createElement("input");
    inputWhere.classList.add("input-where", "input");
    inputWhere.setAttribute("type", "text");
    inputWhereWraper.appendChild(inputWhere);

    return inputWhereWraper;
  }

  swapFieldsWhereFromAndWhere() {
    const fieldWhereFrom = document.querySelector(".input-where-from");
    const fieldWhere = document.querySelector(".input-where");

    if (fieldWhereFrom && fieldWhere) {
      const fieldWhereFromValue = fieldWhereFrom.value;
      const fieldWhereValue = fieldWhere.value;
      fieldWhere.value = fieldWhereFromValue;
      fieldWhereFrom.value = fieldWhereValue;
    }
  }

  getQuantityOfPeople() {
    const quantityOfPeopleWraper = document.createElement("div");
    quantityOfPeopleWraper.classList.add("quantity-people-wraper");

    quantityOfPeopleWraper.appendChild(this.getCounter("Взрослые:"));
    quantityOfPeopleWraper.appendChild(this.getCounter("Дети до 10 лет:"));
    quantityOfPeopleWraper.appendChild(this.getCounter("Дети до 5 лет:"));
    quantityOfPeopleWraper.appendChild(this.getCounter("Дети до 15 лет:"));

    return quantityOfPeopleWraper;
  }

  getCounter(title) {
    const counterWraperEl = document.createElement("div");
    counterWraperEl.classList.add("counter-wraper");

    const counterTitleEl = document.createElement("h2");
    counterTitleEl.classList.add("counter-title");
    counterTitleEl.textContent = title;
    counterWraperEl.appendChild(counterTitleEl);

    const counterEl = document.createElement("div");
    counterEl.classList.add("counter");

    const counterMinus = document.createElement("button");
    counterMinus.classList.add("counter-botton", "counter-botton__minus");
    counterMinus.textContent = "-";
    counterEl.appendChild(counterMinus);

    const counterQuantity = document.createElement("div");
    counterQuantity.classList.add("counter-quantity");
    counterQuantity.textContent = "0";
    counterEl.appendChild(counterQuantity);

    const counterPlus = document.createElement("button");
    counterPlus.classList.add("counter-botton", "counter-botton__plus");
    counterEl.appendChild(counterPlus);
    counterPlus.textContent = "+";

    counterWraperEl.appendChild(counterEl);

    counterWraperEl.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("counter-botton") &&
        e.target.classList.contains("counter-botton__minus")
      ) {
        this.changeTheQuantityOfPeople(e, "-");
      } else if (
        e.target.classList.contains("counter-botton") &&
        e.target.classList.contains("counter-botton__plus")
      ) {
        this.changeTheQuantityOfPeople(e, "+");
      }
    });
    return counterWraperEl;
  }

  getInputData() {
    const inputDateWraper = document.createElement("div");
    inputDateWraper.classList.add("input-date-wraper");

    const inputDataTitle = document.createElement("h2");
    inputDataTitle.classList.add("input-date-title");
    inputDataTitle.textContent = "Дата:";
    inputDateWraper.appendChild(inputDataTitle);

    const inputDate = document.createElement("input");
    inputDate.classList.add("input-date");
    inputDate.id = "input-date";
    inputDate.setAttribute("type", "text");

    inputDateWraper.appendChild(inputDate);

    return inputDateWraper;
  }

  changeTheQuantityOfPeople(e, action) {
    const counterEl = e.target.closest(".counter");
    if (counterEl) {
      const counterQuantity = counterEl.querySelector(".counter-quantity");

      if (action === "+") {
        let counterQuantityNumber = Number(counterQuantity.textContent);
        counterQuantityNumber++;
        counterQuantity.textContent = counterQuantityNumber;
      } else if (action === "-") {
        let counterQuantityNumber = Number(counterQuantity.textContent);
        counterQuantityNumber--;
        if (counterQuantityNumber <= 0) {
          counterQuantity.textContent = 0;
        } else {
          counterQuantity.textContent = counterQuantityNumber;
        }
      }
    }
  }

  getSubmitButton() {
    const buttonSubmit = document.createElement("button");
    buttonSubmit.classList.add("button-submit");
    buttonSubmit.textContent = "Найти билеты";

    buttonSubmit.addEventListener("click", () => {
      console.log(this.formEl.submit);
    });

    return buttonSubmit;
  }
}
