import { newElem } from "./new-element.js";
import { newElemHTML } from "./new-element.js";

export function addButtonDate(year, numberMonth, day) {
    const nameMonth = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September',
        'October',
        'November',
        'December'
    ];
    const elemNavAdditionalDate = document.querySelector('.nav-additional-date');             
    
    if (elemNavAdditionalDate.classList.contains('active')) {
        const elemNavAdditionalDateMulti = document.querySelector('.nav-additional-date-multi');

        elemNavAdditionalDateMulti.remove();
    }

    newElem(elemNavAdditionalDate, 'div', ['nav-additional-date-multi']);
    
    const elemNavAdditionalDateMulti = document.querySelector('.nav-additional-date-multi');     
    
    newElemHTML(
        elemNavAdditionalDateMulti, 
        'beforeend', 
        `<p class="additional-date-multi"><span>${year}</span>
        <span>${nameMonth[numberMonth]}</span>
        <span>${day}</span></p>`
    );
    
    elemNavAdditionalDate.classList.add('active');
    elemNavAdditionalDate.classList.add('selectedDayActive');

    const elemButtonDate = document.querySelector('.button-date');

    elemButtonDate.setAttribute('style', 'color: #008aed');

    localStorage.setItem('date--year', `${year}`);
    localStorage.setItem('date--month', `${numberMonth}`);
    localStorage.setItem('date--day', `${day}`);

    const memorySelectedDate = [year, numberMonth, day];

    return memorySelectedDate;
}
