import { newElemHTML } from "./new-element.js";
import { addButtonDate } from "./date-create-button-date.js";
// import { selectionDay} from "./date-create-button-date.js";

export function createCalendar(memoryDate) {

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
    let memorySelectedDate;

    if (memoryDate) {
        memorySelectedDate = [memoryDate[0], memoryDate[1], memoryDate[2]];
        console.log(memoryDate);
        console.log(memorySelectedDate);
    }

    let quantityDaysOfMonth;
    let memoryNeighborDayLeft;
    let memoryNeighborDayRight;

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
        
        quantityDaysOfMonth = getQuantityDaysOfMonth(year, numberMonth);
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
 
        const daysMonth = document.querySelectorAll('.date-day-counter');
        
        daysMonth.forEach(el => {
            if (year == new Date().getFullYear() && numberMonth == new Date().getMonth() && el.textContent == new Date().getDate()) {
                el.classList.add('today-day');
            }
        })

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
   
        function selectionDay(year, numberMonth, day) {
            
            daysMonth.forEach(el => {
                el.classList.remove('active');
                el.classList.remove('day-neighbor');
                el.classList.remove('left-right-previous-day')
            });

            const selectionDay = document.querySelector(`.day-${day}`);

            selectionDay.classList.add('active');
            
            memoryNeighborDayLeft = null;
            memoryNeighborDayRight = null;
                      
            const numberLeft = day - 1;
            const numberRight = parseInt(day) + 1;                
            const neighborLeft = document.querySelector(`.day-${numberLeft}`);
            const neighborRight = document.querySelector(`.day-${numberRight}`);
            console.log(numberLeft, day, numberRight);
                
            function addClassNeighbor() {
                
                if (day > 1) {
                    neighborLeft.classList.add('day-neighbor');
                } else if (day == 1) {
                    
                    function getQuantityDaysOfMonth(year, numberMonth) {
                        const dateLastDay = new Date(year, numberMonth, 0);
                        
                        return dateLastDay.getDate();
                    }
                    
                    let lastDay = getQuantityDaysOfMonth(year, numberMonth);
                    
                    memoryNeighborDayLeft = [year, numberMonth - 1, lastDay]
                }

                function getLastDay() {
                    const dateLastDay = new Date(year, numberMonth + 1, 0);
                    
                    return dateLastDay.getDate();
                }
                if (day < quantityDaysOfMonth) {
                    neighborRight.classList.add('day-neighbor');
                } else if (day == getLastDay()) {
                    memoryNeighborDayRight = [year, numberMonth + 1, 1];
                }
            }  

            setTimeout(addClassNeighbor, 150);
        }
  
        daysMonth.forEach(el => {
            function addButtonMemoryDate() {
                memorySelectedDate = addButtonDate(year, numberMonth, el.textContent);
                console.log(memorySelectedDate);
            }

            if (el.classList.contains('allowed')) {
                el.addEventListener('pointerdown', () => selectionDay(year, numberMonth, el.textContent));
                el.addEventListener('pointerdown', addButtonMemoryDate);
            }            
        })

        if (localStorage.getItem('date--year') == year && localStorage.getItem('date--month') == numberMonth) {
            setTimeout(() => {
                selectionDay(
                    localStorage.getItem('date--year'), 
                    localStorage.getItem('date--month'),
                    localStorage.getItem('date--day')
                )
            }, 75);
        }
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
        if (year == parseInt(new Date().getFullYear()) + 1 && numberMonth >= new Date().getMonth()) {
            changeYearMonth('minusYear');
        }

        if (year > parseInt(new Date().getFullYear()) + 1) {
            changeYearMonth('minusYear');
        }
    }
    
    function newNextMonth() {
        changeYearMonth('plusMonth');
    }

    function newLastMonth() {
        if (numberMonth > new Date().getMonth() && year == new Date().getFullYear()) {
            changeYearMonth('minusMonth');
        }

        if (year > new Date().getFullYear()) {
            changeYearMonth('minusMonth');
        }
    }

    function cancelYearHover() {
        buttonYearMinus.classList.remove('active');
    }

    function validationCancelYearHover() {
        if (year == parseInt(new Date().getFullYear()) + 1 && numberMonth < new Date().getMonth()) {
            cancelYearHover();
        }

        if (year == new Date().getFullYear()) {
            cancelYearHover();
        }
    }

    function additionalYearHover() {
        if (year == parseInt(new Date().getFullYear()) + 1 && numberMonth >= new Date().getMonth()) {
            buttonYearMinus.classList.add('active');
        }

        if (year > parseInt(new Date().getFullYear()) + 1) {
            buttonYearMinus.classList.add('active');
        }
    }

    function additionalMonthHover() {
        if (numberMonth > new Date().getMonth() && year == new Date().getFullYear()) {
            buttonMonthMinus.classList.add('active');
        }

        if (year > new Date().getFullYear()) {
            buttonMonthMinus.classList.add('active');
        }
    }

    function cancelMonthHover() {
        buttonMonthMinus.classList.remove('active');
    }

    function validationCancelMonthHover() {
        if (numberMonth == new Date().getMonth()  && year == new Date().getFullYear()) {
            cancelMonthHover();
        }
    }

    function validationMemorySelectedDay() {
        if (memorySelectedDate) {
            const daysMonth = document.querySelectorAll('.date-day');
            
            if (memorySelectedDate[0] == year && memorySelectedDate[1] == numberMonth) {           
                daysMonth.forEach(el => {
                    if (el.textContent == memorySelectedDate[2]) {

                        function showActiveDay() {

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
                            
                            addClassNeighbor();
                        }

                        showActiveDay();
                    }
                })
            }

            if (!!memoryNeighborDayLeft) {   
                if (memoryNeighborDayLeft[0] == year && memoryNeighborDayLeft[1] == numberMonth) {
                    daysMonth.forEach(el => {
                        if (el.textContent == memoryNeighborDayLeft[2]) {
                            el.classList.add('left-right-previous-day');
                        }
                    })   
                }
            }

            if (!!memoryNeighborDayRight) {
                if (memoryNeighborDayRight[0] == year && memoryNeighborDayRight[1] == numberMonth) {
                    daysMonth.forEach(el => {
                        if (el.textContent == memoryNeighborDayRight[2]) {
                            el.classList.add('left-right-previous-day');
                        }
                    })   
                }
            } 
        }
    }

    buttonYearPlus.addEventListener('pointerdown', newNextYear);
    buttonYearMinus.addEventListener('pointerdown', newLastYear);
    buttonYearPlus.addEventListener('pointerdown', validationMemorySelectedDay);
    buttonYearMinus.addEventListener('pointerdown', validationMemorySelectedDay);
    buttonYearMinus.addEventListener('pointerup', validationCancelYearHover);
    buttonYearMinus.addEventListener('mouseenter', additionalYearHover);
    buttonYearMinus.addEventListener('mouseleave', cancelYearHover);
    
    buttonMonthPlus.addEventListener('pointerdown', newNextMonth);
    buttonMonthMinus.addEventListener('pointerdown', newLastMonth);
    buttonMonthPlus.addEventListener('pointerdown', validationMemorySelectedDay);
    buttonMonthMinus.addEventListener('pointerdown', validationMemorySelectedDay);
    buttonMonthMinus.addEventListener('pointerup', validationCancelMonthHover);
    buttonMonthMinus.addEventListener('mouseenter', additionalMonthHover);
    buttonMonthMinus.addEventListener('mouseleave', cancelMonthHover);
}
