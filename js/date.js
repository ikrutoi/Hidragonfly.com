import { newElemHTML } from "./new-element.js";
import { newElem } from "./new-element.js";

export function createCalendar() {

    const buttonDate = document.querySelector('.button-date');

    buttonDate.classList.add('created');

    let valueDate = new Date();
    let year = valueDate.getFullYear();
    let numberMonth = valueDate.getMonth();
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
        let numberDayCounter = 0;
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
                    newElemHTML(tableRow, 'beforeend', `<td class="date-day date-day-counter day-${++numberDayCounter}"><p>${++dayCounter}</p></td>`);
                }
                newRow(numberRow);
            } else {
                for (let i = 0; i < 7; i++) {
                    if (dayCounter < quantityDaysOfMonth) {
                        newElemHTML(tableRow, 'beforeend', `<td class="date-day date-day-counter day-${++numberDayCounter}"><p>${++dayCounter}</p></td>`);
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

        const daysMonth = document.querySelectorAll('.date-day');

        function addForbiddenAllowedDays() {   
            daysMonth.forEach(el => {
                if (
                    el.textContent < (new Date().getDate() + 7) && 
                    numberMonth == new Date().getMonth()  &&
                    year == new Date().getFullYear()
                ) {
                    el.classList.add('forbidden');
                } else {
                    el.classList.add('allowed');
                }
            })
        }

        addForbiddenAllowedDays();
  
        daysMonth.forEach(el => {

            function selectionDay() {
                daysMonth.forEach(el => el.classList.remove('active'));
                daysMonth.forEach(el => el.classList.remove('day-neighbor'));

                if (el.classList.contains('allowed')) {
                    el.classList.add('active');
                    
                    const numberLeft = el.textContent - 1;
                    const numberRight = parseInt(el.textContent) + 1;                
                    const neighborLeft = document.querySelector(`.day-${numberLeft}`);
                    const neighborRight = document.querySelector(`.day-${numberRight}`);
                    
                    function addClassNeighbor() {
                        if (el.textContent > 1) {
                            neighborLeft.classList.add('day-neighbor');
                        }

                        if (el.textContent < quantityDaysOfMonth) {
                            neighborRight.classList.add('day-neighbor');
                        }
                    }
                    
                    setTimeout(addClassNeighbor, 150);
                }
            }

            function addButtonDate() {
                const elemNavAdditionalDateFull = document.querySelector('.nav-additional-date-full');             
                const elemNavAdditionalDate = document.querySelector('.nav-additional-date');
                
                if (elemNavAdditionalDateFull.classList.contains('active')) {
                    elemNavAdditionalDateFull.classList.remove('active');

                    const elemNavAdditionalDateMulti = document.querySelector('.nav-additional-date-multi');

                    elemNavAdditionalDateMulti.remove();
                }

                if(el.classList.contains('allowed')) {

                    newElem(elemNavAdditionalDate, 'div', ['nav-additional-date-multi']);
                    
                    const elemNavAdditionalDateMulti = document.querySelector('.nav-additional-date-multi');
                    
                    const selectedYear = year;
                    const selectedMonth = nameMonth[numberMonth];
                    const selectedDay = el.textContent; 
                    
                    newElemHTML(
                        elemNavAdditionalDateMulti, 
                        'beforeend', 
                        `<p class="additional-date-multi"><span>${selectedYear}</span>
                        <span>${selectedMonth}</span>
                        <span>${selectedDay}</span></p>`
                    );
                    
                    elemNavAdditionalDateFull.classList.add('active');
                }
            }
    
            if (el.classList.contains('allowed')) {
                el.addEventListener('pointerdown', selectionDay);
                el.addEventListener('pointerdown', addButtonDate);
            }
        })
    }

    addRow(year, numberMonth);

    const buttonMonthPlus = document.querySelector('.date-month-plus');
    const buttonMonthMinus = document.querySelector('.date-month-minus');
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
        if(year > new Date().getFullYear()) {
            changeYearMonth('minusYear');
        }
    }
    
    function newNextMonth() {
        changeYearMonth('plusMonth');
    }

    function newLastMonth() {
        if (numberMonth > new Date().getMonth()) {
            changeYearMonth('minusMonth');
        }
    }

    function additionalYearHover() {
        if (year > new Date().getFullYear()) {
            buttonYearMinus.classList.add('active');
        }
    }

    function cancelYearHover() {
        buttonYearMinus.classList.remove('active');
    }

    function validationCancelYearHover() {
        if (year == new Date().getFullYear()) {
            cancelYearHover();
        }
    }

    function additionalMonthHover() {
        if (numberMonth > new Date().getMonth()) {
            buttonMonthMinus.classList.add('active');
        }
    }

    function cancelMonthHover() {
        buttonMonthMinus.classList.remove('active');
    }

    function validationCancelMonthHover() {
        if (numberMonth == new Date().getMonth()) {
            cancelMonthHover();
        }
    }

    buttonYearPlus.addEventListener('pointerdown', newNextYear);
    buttonYearMinus.addEventListener('pointerdown', newLastYear);
    buttonYearMinus.addEventListener('pointerup', validationCancelYearHover);
    buttonYearMinus.addEventListener('mouseenter', additionalYearHover);
    buttonYearMinus.addEventListener('mouseleave', cancelYearHover);
    
    buttonMonthPlus.addEventListener('pointerdown', newNextMonth);
    buttonMonthMinus.addEventListener('pointerdown', newLastMonth);
    buttonMonthMinus.addEventListener('pointerup', validationCancelMonthHover);
    buttonMonthMinus.addEventListener('mouseenter', additionalMonthHover);
    buttonMonthMinus.addEventListener('mouseleave', cancelMonthHover);
}
