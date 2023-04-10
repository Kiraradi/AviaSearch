export default class Dadata {
  static startDadata() {
    $(".input").suggestions({
      token: "8d796e6ac0bc8ef9792d93f4019a83dfc52c4316",
      type: "ADDRESS",
      /* Вызывается, когда пользователь выбирает одну из подсказок */
      onSelect: function (suggestion) {
        console.log(suggestion);
      },
    });
  }
}
