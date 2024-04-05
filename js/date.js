import { newElemHTML } from "./new-element.js";

export function createCalendar() {
    let valueDate = new Date();
    let year = valueDate.getFullYear();
    let numberMonth = valueDate.getMonth();
    let day = valueDate.getDate();
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

    newElemHTML(monthTitle, 'afterbegin', `<p>${month}</p>`);
    newElemHTML(yearTitle, 'afterbegin', `<p>${year}</p>`);

    const areaDateDays = document.querySelector('.date-table-month');

    newElemHTML(areaDateDays, 'beforeend', '<table class="date-table"></table>');

    const blockTable = document.querySelector('.date-table');

    newElemHTML(blockTable, 'beforeend', '<tr class="table-row-header"></tr>');

    const rowTableHeader = document.querySelector('.table-row-header');
    const nameDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ];

    function addRow(day) {
        for (let i = 0; i < 7; i++) {
            newElemHTML(rowTableHeader, 'beforeend', `<th>${day[i]}</th>`);
        }

        function getQuantityDaysOfMonth(year, month) {
            let date = new Date(year, month + 1, 0);
    
            return date.getDate();
        }
          
        let quantityDaysOfMonth = getQuantityDaysOfMonth(year, numberMonth);
        let quanityRows = Math.ceil(quantityDaysOfMonth / 7);

        for (let i = 1; i <= quanityRows; i++) {
            newElemHTML(blockTable, 'beforeend', `<tr class="table-row-${i}"></tr>`);

            const tableRow = document.querySelector(`.table-row-${i}`);

            for (let i = 0; i < 7; i++) {
                newElemHTML(tableRow, 'beforeend', '<td></td>');
            }
        }
    }

    addRow(nameDays);
}

