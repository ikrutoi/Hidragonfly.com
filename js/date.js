import { newElemHTML } from "./new-element.js";

export function createCalendar() {

    const buttonDate = document.querySelector('.button-date');

    buttonDate.classList.add('created');

    let valueDate = new Date();
    console.log(valueDate);
    let year = valueDate.getFullYear();
    let numberMonth = valueDate.getMonth();
    // let date = valueDate.getDate();
    // let day = valueDate.getDay();
    // console.log(day);
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

    for (let i = 0; i < 7; i++) {
        newElemHTML(tableHeaderRow, 'beforeend', `<th>${nameDays[i]}</th>`);
    }
    
//********************************************* */

    function addRow(year, numberMonth) {   

        function getFirstDay(year, numberMonth) {
            let firstDay = new Date(year, numberMonth, 1);
            
            return firstDay.getDay();
        }
        
        let numberFirstDay = getFirstDay(year, numberMonth);

        function getQuantityDaysOfMonth(year, numberMonth) {
            const dateLastDay = new Date(year, numberMonth + 1, 0);
    
            return dateLastDay.getDate();
        }
          
        let quantityDaysOfMonth = getQuantityDaysOfMonth(year, numberMonth);
        let dayCounter = 0;
        let numberRow = 0;

        function newRow(numberRow) {     
            numberRow = ++numberRow;

            newElemHTML(tableBody, 'beforeend', `<tr class="date-row-days date-row-${numberRow}"></tr>`);
            
            const tableRow = document.querySelector(`.date-row-${numberRow}`);
            
            if (numberRow == 1) {   
                for (let i = 0; i < 7; i++) {
                    if (i < numberFirstDay) {
                        newElemHTML(tableRow, 'beforeend', `<td></td>`);
                    } else 
                    newElemHTML(tableRow, 'beforeend', `<td class="date-day-counter"><p>${++dayCounter}</p></td>`);
                }
                newRow(numberRow);
            } else {
                for (let i = 0; i < 7; i++) {
                    if (dayCounter < quantityDaysOfMonth) {
                        newElemHTML(tableRow, 'beforeend', `<td class="date-day-counter"><p>${++dayCounter}</p></td>`);
                    } else 
                    newElemHTML(tableRow, 'beforeend', `<td></td>`);
                }   
                if (dayCounter < quantityDaysOfMonth) {
                    newRow(numberRow);
                }
            }
        }

        newRow(numberRow);

        function showBackgroundTodayDay() {   
            const daysMonth = document.querySelectorAll('.date-day-counter');
            
            daysMonth.forEach(el => {
                if (year == new Date().getFullYear() && numberMonth == new Date().getMonth() && el.textContent == new Date().getDate()) {
                    el.setAttribute('style', 'background-color: #dfdfdf;');
                }
            })
        }

        setTimeout(showBackgroundTodayDay, 300);
    }

    addRow(year, numberMonth);

    const buttonDatePlus = document.querySelector('.date-month-plus');
    const buttonDateMinus = document.querySelector('.date-month-minus');
    const buttonMonthTitle = document.querySelector('.date-month-text');
    
    const buttonYearPlus = document.querySelector('.date-year-plus');
    const buttonYearMinus = document.querySelector('.date-year-minus');
    const buttonYearTitle = document.querySelector('.date-year-text');

    function changeYearMonth(val) {

        function changeMonth(numberMonth) {
            buttonMonthTitle.textContent = `${nameMonth[numberMonth]}`;
        }
        
        function changeYear(year) {
            buttonYearTitle.textContent = `${year}`;
        }

        function delRows() {
            const dateRowDays = document.querySelectorAll('.date-row-days');

            dateRowDays.forEach(el => el.remove());
        }

        switch (val) {
            case 'plusYear': 
                year = ++year;
                changeYear(year);
                delRows();
                addRow(year, numberMonth);
                break;
            case 'minusYear': 
                year = --year;
                changeYear(year);
                delRows();
                addRow(year, numberMonth);
                break;
            case 'plusMonth': {
                numberMonth = ++numberMonth;
                
                function verificationNumberMonth(year, numberMonth) {
                    
                    if (numberMonth >= 0 && numberMonth <= 11) {
                        changeMonth(numberMonth);
                        delRows();
                        addRow(year, numberMonth);
                    } else {
                        year = ++year;
                        changeYear(year);
                        numberMonth = 0;
                        verificationNumberMonth(year, numberMonth);
                    }
                    
                    return [year, numberMonth];
                }
                
                const newYearMonth = verificationNumberMonth(year, numberMonth);
                year = newYearMonth[0];
                numberMonth = newYearMonth[1];
                break;
            }
            case 'minusMonth': {
                numberMonth = --numberMonth;
                
                function verificationNumberMonth(year, numberMonth) {
                    
                    if (numberMonth >= 0 && numberMonth <= 11) {
                        changeMonth(numberMonth);
                        delRows();
                        addRow(year, numberMonth);
                    } else {
                        year = --year;
                        changeYear(year);
                        numberMonth = 11;
                        verificationNumberMonth(year, numberMonth);
                    }
                    
                    return [year, numberMonth];
                }
                
                const newYearMonth = verificationNumberMonth(year, numberMonth);
                year = newYearMonth[0];
                numberMonth = newYearMonth[1];
                break;
            }
        }
    }

    function newNextYear() {
        changeYearMonth('plusYear');
    }

    function newLastYear() {
        changeYearMonth('minusYear');
    }
    
    function newNextMonth() {
        changeYearMonth('plusMonth');
    }

    function newLastMonth() {
        changeYearMonth('minusMonth');
    }

    buttonYearPlus.addEventListener('pointerdown', newNextYear);
    buttonYearMinus.addEventListener('pointerdown', newLastYear);
    
    buttonDatePlus.addEventListener('pointerdown', newNextMonth);
    buttonDateMinus.addEventListener('pointerdown', newLastMonth);
}
