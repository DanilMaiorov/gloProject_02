const validation = () => {

  // нахожу нужные инпуты
  const numberInputs = document.querySelectorAll(".calc-block > input");

  const nameInputs = document.querySelectorAll("[name=user_name]");
  const messageInput = document.querySelector(".mess");
  const emailInputs = document.querySelectorAll("[name=user_email]");
  const telInputs = document.querySelectorAll("[name=user_phone]");

  const textInputs = [...nameInputs, messageInput];

  const validFunc = (input, test) => {
    input.addEventListener("input", e => {
      e.target.value = e.target.value.replace(test, "");
    });
  };

  // регулярки на проверки:
  // проверка только числового поля
  const testNumber = /\D+/g;
    // проверка поля с текстом
  const testText = /[^а-яА-Я\-\s]+/g;
  // проверка поля с телефоном
  const testTel = /[^0-9()]+/gi;
  // проверка поля с имейлом
  const testEmail = /[^a-zA-Z0-9\@-_.!~*']+/gi;


  numberInputs.forEach(input => validFunc(input, testNumber));
  textInputs.forEach(input => validFunc(input, testText));
  telInputs.forEach(input => validFunc(input, testTel));
  emailInputs.forEach(input => validFunc(input, testEmail));

};
export default validation;
