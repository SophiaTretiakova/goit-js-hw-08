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
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = {};

window.addEventListener('load', onLoad);
feedbackForm.addEventListener('input', throttle(inputSave, 500));
feedbackForm.addEventListener('submit', onSubmit);

function onLoad() {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) return;
    formData = JSON.parse(data);
    Object.entries(formData).forEach(([key, val]) => {
      feedbackForm.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
}

function inputSave(event) {
  try {
    event.preventDefault();
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  } catch (error) {
    console.log(error.message);
  }
}

function onSubmit(event) {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
}
