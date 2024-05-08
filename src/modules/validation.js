const validation = () => {

  // нахожу нужные инпуты
  const numberInputs = document.querySelectorAll(".calc-block > input");

  // регулярки на проверки:
  // проверка только числового поля
  const testNumber = /\D+/gi;
  // проверка поля с именем
  const testName = /[]/gi


  numberInputs.forEach(input => {
    input.addEventListener("input", e => {
      e.target.value = e.target.value.replace(testNumber, "");
    });
  });

};
export default validation;
