import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

window.addEventListener('DOMContentLoaded', () => {
  function setTimer() {
    let timer = 30;
    const timerWrapper = document.querySelector('.order__timer');

    timerWrapper.textContent = timer;

    setInterval(() => {
      timer--;

      timerWrapper.textContent = timer;
    }, 60000)
  }

  setTimer();

  const onlyText = document.querySelectorAll('.onlyText');

  onlyText.forEach((input) => {
    input.addEventListener('input', (event) => {
      event.currentTarget.value = event.currentTarget.value.replace(/[_+=$%^±&*()<>:;"|[\]\\{},.?!~@#/\dA-z]/g,'');
    })
  });

  const onlyNumber = document.querySelectorAll('.onlyNumber');

  onlyNumber.forEach((input) => {
    input.addEventListener('input', (event) => {
      event.currentTarget.value = event.currentTarget.value.replace(/[_+=$%^±&*()<>:;"|[\]\\{},.?!~@#/A-zА-я]/g,'');
    })
  });

  const swiper = new Swiper('.reviews__swiper', {
    modules: [Autoplay],
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
    },
  });
})