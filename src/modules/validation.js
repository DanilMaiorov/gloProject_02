const validation = () => {

  // нахожу нужные инпуты
  const numberInputs = document.querySelectorAll(".calc-block > input");

  const nameInputs = document.querySelectorAll("[name=user_name]");
  const emailInputs = document.querySelectorAll("[name=user_email]");
  const telInputs = document.querySelectorAll("[name=user_phone]");

  const messageInput = document.querySelector(".mess");


  // регулярки на проверки:
  // проверка только числового поля
  const testNumber = /\D+/gi;
  
  // проверка поля с именем
  const testName = /[]/gi;

  // проверка поля с сообщением
  const testMessage = //gi;


  numberInputs.forEach(input => {
    input.addEventListener("input", e => {
      e.target.value = e.target.value.replace(testNumber, "");
    });
  });

};
export default validation;
