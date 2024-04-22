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

    const elemNavAdditionalDateMulti = document.querySelector('.nav-additional-date-multi');
   
    if (elemNavAdditionalDateMulti) {
        elemNavAdditionalDateMulti.remove();
    }
    
    const elemNavAdditionalDate = document.querySelector('.nav-additional-date'); 

    newElem(elemNavAdditionalDate, 'div', ['nav-additional-button', 'nav-additional-date-multi']);
    
    const newElemNavAdditionalDateMulti = document.querySelector('.nav-additional-date-multi');     
    
    newElemHTML(
        newElemNavAdditionalDateMulti, 
        'beforeend', 
        `<p class="additional-date-multi"><span>${year}</span>
        <span>${nameMonth[numberMonth]}</span>
        <span>${day}</span></p>`
    );
    
    elemNavAdditionalDate.classList.add('active');

    sessionStorage.setItem('date--year', `${year}`);
    sessionStorage.setItem('date--month', `${numberMonth}`);
    sessionStorage.setItem('date--day', `${day}`);

    if (sessionStorage.getItem('date--year')) {
        const elemButtonAroma = document.querySelector('.button-date');
        elemButtonAroma.classList.add('value-in-memory');
    }

    const memorySelectedDate = [year, numberMonth, day];

    return memorySelectedDate;
}
