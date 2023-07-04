// Відстежуй на формі подію input,
// і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми,
// а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
import throttle from 'lodash.throttle';
if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(savedData);
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}
feedbackForm.addEventListener('input', throttle(inputSave, 500));
feedbackForm.addEventListener('submit', onSubmit);
function inputSave(event) {
  event.preventDefault();
  try {
    let formData = { email: emailInput.value, message: messageInput.value };
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (error) {
    return;
  }
}
function onSubmit(event) {
  event.preventDefault();
  let formData = { email: emailInput.value, message: messageInput.value };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
