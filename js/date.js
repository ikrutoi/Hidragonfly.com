import { newElemHTML } from "./new-element.js";

export function createCalendar() {

    const buttonDate = document.querySelector('.button-date');

    buttonDate.classList.add('created');

    let valueDate = new Date();
    let year = valueDate.getFullYear();
    let numberMonth = valueDate.getMonth();
    let date = valueDate.getDate();
    let day = valueDate.getDay();
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

    let month = nameMonth[numberMonth];

    const elemMinus = document.querySelectorAll('.sign-less');
    const elemPlus = document.querySelectorAll('.sign-more');

    elemMinus.forEach(el => {
        newElemHTML(el, 'afterbegin', '<p>&lt</p>');
    })

    elemPlus.forEach(el => {
        newElemHTML(el, 'afterbegin', '<p>&gt</p>');
    })

    const monthTitle = document.querySelector('.date-month-title');
    const yearTitle = document.querySelector('.date-year-title');

    newElemHTML(monthTitle, 'afterbegin', `<p class="date-month-text">${month}</p>`);
    newElemHTML(yearTitle, 'afterbegin', `<p class="date-year-text">${year}</p>`);

    const areaDateDays = document.querySelector('.date-table-month');

    newElemHTML(areaDateDays, 'beforeend', '<table class="date-table"></table>');

    const blockTable = document.querySelector('.date-table');

    newElemHTML(blockTable, 'beforeend', '<tbody class="date-table-body"></tbody>');

    const tableBody = document.querySelector('.date-table-body');

    newElemHTML(tableBody, 'beforeend', '<tr class="date-table-header-row"></tr>');

    const tableHeaderRow = document.querySelector('.date-table-header-row');
    const nameDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function getFirstDay(year, month) {
        let firstDay = new Date(year, month, 1);

        return firstDay.getDay();
    }

    let numberFirstDay = getFirstDay(year, numberMonth);

    function addRow() {
        for (let i = 0; i < 7; i++) {
            newElemHTML(tableHeaderRow, 'beforeend', `<th>${nameDays[i]}</th>`);
        }

        function getQuantityDaysOfMonth(year, month) {
            let dateLastDay = new Date(year, month + 1, 0);
    
            return dateLastDay.getDate();
        }
          
        let quantityDaysOfMonth = getQuantityDaysOfMonth(year, numberMonth);
        let quanityRows = Math.ceil(quantityDaysOfMonth / 7);
        let dayCounter = 1;

        for (let i = 1; i <= quanityRows; i++) {
            newElemHTML(tableBody, 'beforeend', `<tr class="table-row-${i}"></tr>`);

            const tableRow = document.querySelector(`.table-row-${i}`);

            if (i == 1) {   
                for (let i = 0; i < 7; i++) {
                    if (i < numberFirstDay) {
                        newElemHTML(tableRow, 'beforeend', `<td></td>`);
                    } else 
                    newElemHTML(tableRow, 'beforeend', `<td class="date-day-counter"><p>${dayCounter++}</p></td>`);
                }
            } else {
                for (let i = 0; i < 7; i++) {
                    if (dayCounter <= quantityDaysOfMonth) {
                        newElemHTML(tableRow, 'beforeend', `<td class="date-day-counter"><p>${dayCounter++}</p></td>`);
                    } else 
                    newElemHTML(tableRow, 'beforeend', `<td></td>`);
                }
            }
        }

        const daysMonth = document.querySelectorAll('.date-day-counter');

        daysMonth.forEach(el => {
            if (el.textContent == date) {
                el.setAttribute('style', 'background-color: #dfdfdf;');
            }
        })
    }

    const buttonDatePlus = document.querySelector('.date-month-plus');
    const buttonDateMinus = document.querySelector('.date-month-minus');
    const buttonMonthTitle = document.querySelector('.date-month-text');
    
    const buttonYearPlus = document.querySelector('.date-year-plus');
    const buttonYearMinus = document.querySelector('.date-year-minus');
    const buttonYearTitle = document.querySelector('.date-year-text');

    function nextMonth() {
        numberMonth = ++numberMonth;

        function changeMonth(month) {
            buttonMonthTitle.textContent = `${nameMonth[month]}`;
        }

        function changeYear(year) {
            buttonYearTitle.textContent = `${year}`;
            return year;
        }

        function verificationNumberMonth(year, month) {
            if (month >= 0 && month <= 11) {
                changeMonth(month)
            } else {
                year = changeYear(++year);
                month = 0;
                verificationNumberMonth(year, month);
            }

            return [year, month];
        }

        let newYearMonth = verificationNumberMonth(year, numberMonth);

        year = newYearMonth[0];
        numberMonth = newYearMonth[1];
    }

    function lastMonth() {
       buttonMonthTitle.textContent = `${nameMonth[--numberMonth]}`;
    }
    
    buttonDatePlus.addEventListener('pointerdown', nextMonth);
    buttonDateMinus.addEventListener('pointerdown', lastMonth);

    
    function nextYear() {
       buttonYearTitle.textContent = `${++year}`;
    }
    function lastYear() {
       buttonYearTitle.textContent = `${--year}`;
    }
    
    buttonYearPlus.addEventListener('pointerdown', nextYear);
    buttonYearMinus.addEventListener('pointerdown', lastYear);

    addRow();
}

