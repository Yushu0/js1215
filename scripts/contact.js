// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const formElement = document.querySelector('#contact-page');

formElement.onsubmit = function(e) {
    e.preventDefault();

    const addClass = (element, className) => element.classList.add(className);
    const setInnerHtml = (element, html) => element.innerHTML = html;

    addClass(formElement, 'submitContact');
    setInnerHtml(formElement, '<h2>Thank you for your message!</h2>');
};