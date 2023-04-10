import "air-datepicker/air-datepicker.css";
import AirDatepicker from "air-datepicker";
import moment from "moment/moment";

export default class AirDatepickerComponent {
  static startAirDatepicker() {
    new AirDatepicker("#input-date", {
      selectedDates: [new Date()],
    });
  }
}
