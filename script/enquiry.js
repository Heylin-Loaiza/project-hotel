const details_btn = document.querySelector('.js-btn__details');
const enquiry_btn = document.querySelector('.js-btn__enquiry');
const hotel_description = document.querySelector('.hotel-description');
const contact_us = document.querySelector('.contact-us');


enquiry_btn.addEventListener('click', () => {
  hotel_description.classList.add('js-hidden');
  hotel_description.classList.remove('js-visible');
	contact_us.classList.remove('js-hidden');
	contact_us.classList.add('js-visible');
});

details_btn.addEventListener('click', () => {
  hotel_description.classList.remove('js-hidden');
  hotel_description.classList.add('js-visible');
	contact_us.classList.remove('js-visible');
	contact_us.classList.add('js-hidden');
});