import { newElemHTML } from "./new-element.js";
import { addButtonDate } from "./date-create-button-date.js";
import { startPressActivation } from "./start-press-activation.js";

export function createCalendar(newYear, newNumberMonth, day) {
    const buttonDate = document.querySelector('.button-date');
    buttonDate.classList.add('created');
    let year = newYear;
    let numberMonth = newNumberMonth;
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
        newElemHTML(el, 'afterbegin', '<p></p>');
        // newElemHTML(el, 'afterbegin', '<p>&lt</p>');
    })

    elemPlus.forEach(el => {
        newElemHTML(el, 'afterbegin', '<p></p>');
        // newElemHTML(el, 'afterbegin', '<p>&gt</p>');
    })

    const yearTitle = document.querySelector('.date-year-title');
    const monthTitle = document.querySelector('.date-month-title');
    const dayTitle = document.querySelector('.date-day-title');
    
    newElemHTML(yearTitle, 'afterbegin', `<p class="date-year-text">${year}</p>`);
    newElemHTML(monthTitle, 'afterbegin', `<p class="date-month-text">${month}</p>`);
    newElemHTML(dayTitle, 'afterbegin', `<p class="date-month-text">${day}</p>`);
    
    const areaDateDays = document.querySelector('.date-table-month');
    
    newElemHTML(areaDateDays, 'beforeend', '<table class="date-table"></table>');
    
    const blockTable = document.querySelector('.date-table');
    
    newElemHTML(blockTable, 'beforeend', '<tbody class="date-table-body"></tbody>');
    
    const tableBody = document.querySelector('.date-table-body');
    
    newElemHTML(tableBody, 'beforeend', '<tr class="date-table-header-row"></tr>');
    
    // const elemDateSlider = document.querySelector('.date-slider');
    const elemDateSlider = document.querySelector('.date-slider');
    const dateTitle = document.querySelectorAll('.date-calendar-title');
    const dateSign = document.querySelectorAll('.date-sign');
    // const elemDateMonthSlider = document.querySelector('.date-month-slider');

    function writePropertiesInputSlider() {
        elemDateSlider.style.width = `${tableBody.clientWidth}px`;
        elemDateSlider.min = '0';
        elemDateSlider.max = '1';
        elemDateSlider.value = '0';
    }

    function addClassActive(el) {
        dateTitle.forEach((el) => {el.classList.remove('active')});
        el.classList.add('active');
        dateSign.forEach((el) => {el.classList.add('active')})
        setTimeout(clearClassActive, 18000);
    }
    
    function clearClassActive() {
        dateTitle.forEach((el) => {el.classList.remove('active')});
        dateSign.forEach((el) => {el.classList.remove('active')})
        delete elemDateSlider.dataset.dateTitle;
        elemDateSlider.min = '0';
        elemDateSlider.max = '1';
        elemDateSlider.value = '0';
    }

    function fillingInput(el) {
        switch (el.dataset.dateTitle) {
            case 'title-year':
                elemDateSlider.min = `${new Date().getFullYear()}`;
                elemDateSlider.max = String(new Date().getFullYear() + 100);
                elemDateSlider.value = `${new Date().getFullYear()}`;
                elemDateSlider.dataset.dateTitle = 'title-year';
                break;
            case 'title-month':
                elemDateSlider.min = '0';
                elemDateSlider.max = '11';
                elemDateSlider.value = `${new Date().getMonth()}`;
                elemDateSlider.dataset.dateTitle = 'title-month';
            break;
            case 'title-day':
                const counterDaysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
                elemDateSlider.min = '1';
                elemDateSlider.max = `${counterDaysInMonth}`;
                elemDateSlider.value = `${new Date().getDate()}`;
                elemDateSlider.dataset.dateTitle = 'title-day';
                break;
        }
    }

    function addClassHover(el) {
        el.classList.add('hover');
        dateSign.forEach((el) => {el.classList.add('hover')});
    }

    function delClassHover(el) {
        el.classList.remove('hover');
        dateSign.forEach((el) => {el.classList.remove('hover')});
    }

    dateTitle.forEach((el) => {
        el.addEventListener('pointerdown', () => {startPressActivation(el)});
        el.addEventListener('pointerdown', () => {addClassActive(el)});
        el.addEventListener('pointerup', () => {fillingInput(el)});
        el.addEventListener('mouseover', () => {addClassHover(el)});
        el.addEventListener('mouseout', () => {delClassHover(el)});
    })    
    
    setTimeout(writePropertiesInputSlider, 200);

    function changeValue() {
        // buttonYearTitle.textContent = `${this.value}`;
        // console.log('***: ', this.value);
        switch (this.dataset.dateTitle) {
            case 'title-year':
                const elemDateYear = document.querySelector('.date-year-full');
                elemDateYear.textContent = `${this.value}`
                break;
            case 'title-month':
                const elemDateMonth = document.querySelector('.date-month-full');
                elemDateMonth.textContent = `${nameMonth[this.value]}`
                break;
            case 'title-day':
                const elemDateDay = document.querySelector('.date-day-full');
                elemDateDay.textContent = `${this.value}`
                break;
        }
    }

    function addActiveInput() {
        this.classList.add('hover');
    }

    function delActiveInput() {
        this.classList.remove('hover');
    }

    elemDateSlider.addEventListener('input', changeValue);
    elemDateSlider.addEventListener('mouseover', addActiveInput);
    elemDateSlider.addEventListener('mouseout', delActiveInput);
    // elemDateMonthSlider.addEventListener('input', changeMonth);
    // elemDateMonthSlider.addEventListener('mouseover', addActiveInput);
    // elemDateMonthSlider.addEventListener('mouseout', delActiveInput);

    const tableHeaderRow = document.querySelector('.date-table-header-row');
    const nameDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let memorySelectedDate;
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
            numberMonth = ++numberMonth;

            if (numberMonth == 12) {
                year = ++year;
                numberMonth = 0;
            }

            if (numberMonth == 0) {
                year = --year;
                numberMonth = 11;
            }

            return new Date(year, numberMonth, 0).getDate();
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
            if (year == new Date().getFullYear() && 
                numberMonth == new Date().getMonth() && 
                Number(el.textContent) == new Date().getDate()) {
                el.classList.add('today-day');
            }
        })

        function addForbiddenAllowedDays() {   
            daysMonth.forEach(el => {
                if (
                    Number(el.textContent) < (new Date().getDate() + 7) && 
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
            });

            const selectionDay = document.querySelector(`.day-${day}`);
            selectionDay.classList.add('active');
            
            memoryNeighborDayLeft = null;
            memoryNeighborDayRight = null;

            const neighborLeft = document.querySelector(`.day-${day - 1}`);
            const neighborRight = document.querySelector(`.day-${Number(day) + 1}`);
                
            function addClassNeighbor() {
                if (day > 1 && day < quantityDaysOfMonth) {
                    neighborLeft.classList.add('day-neighbor');
                    neighborRight.classList.add('day-neighbor');
                } else if (day == 1) {
                    neighborRight.classList.add('day-neighbor');
                    
                    if (numberMonth == 0) {
                        const yearNeighborLeft = --year;
                        const monthNeighborLeft = 11;
                        const lastDayMonthNeighborLeft = getQuantityDaysOfMonth(yearNeighborLeft, monthNeighborLeft);

                        memoryNeighborDayLeft = [yearNeighborLeft, monthNeighborLeft, lastDayMonthNeighborLeft];
                    } else {
                        const monthNeighborLeft = --numberMonth;
                        const lastDayMonthNeighborLeft = getQuantityDaysOfMonth(year, monthNeighborLeft);
                        
                        memoryNeighborDayLeft = [year, monthNeighborLeft, lastDayMonthNeighborLeft];
                    }
                } else if (day == getQuantityDaysOfMonth(year, numberMonth)) {
                    neighborLeft.classList.add('day-neighbor');

                    if (numberMonth == 11) {
                        const yearNeighborRight = ++year;
                        const monthNeighborRight = 0;

                        memoryNeighborDayRight = [yearNeighborRight, monthNeighborRight, 1];
                    } else {
                        const monthNeighborRight = ++numberMonth;

                        memoryNeighborDayRight = [year, monthNeighborRight, 1];
                    }
                }
            }  

            setTimeout(addClassNeighbor, 150);
        }
  
        daysMonth.forEach(el => {
            function addButtonMemoryDate() {
                addButtonDate(year, numberMonth, Number(el.textContent));
                memorySelectedDate = [year, numberMonth, Number(el.textContent)];
            }

            if (el.classList.contains('allowed')) {
                el.addEventListener('pointerdown', () => selectionDay(year, numberMonth, Number(el.textContent)));
                el.addEventListener('pointerdown', addButtonMemoryDate);
            }            
        })

        if (Number(sessionStorage.getItem('date--year')) == year && Number(sessionStorage.getItem('date--month')) == numberMonth) {
            selectionDay(
                Number(sessionStorage.getItem('date--year')), 
                Number(sessionStorage.getItem('date--month')),
                Number(sessionStorage.getItem('date--day'))
            );
        }
    }

    delRows();
    addRow(year, numberMonth);

    const buttonMonthPlus = document.querySelector('.date-month-plus');
    const buttonMonthMinus = document.querySelector('.date-month-minus');
    const buttonMonthTitle = document.querySelector('.date-month-text');
    
    const buttonYearPlus = document.querySelector('.date-year-plus');
    const buttonYearMinus = document.querySelector('.date-year-minus');
    const buttonYearTitle = document.querySelector('.date-year-text');

    function delRows() {
        const dateRowDays = document.querySelectorAll('.date-row-days');

        dateRowDays.forEach(el => el.remove());
    }
    
    function changeYearMonth(val) {

        function changeMonth(numberMonth) {
            buttonMonthTitle.textContent = `${nameMonth[numberMonth]}`;
            elemDateMonthSlider.value = numberMonth;
        }
        
        function changeYear(year) {
            buttonYearTitle.textContent = `${year}`;
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
        const daysMonth = document.querySelectorAll('.date-day');
        if (memoryNeighborDayLeft) {   
            if (memoryNeighborDayLeft[0] == year && memoryNeighborDayLeft[1] == numberMonth) {
                daysMonth.forEach(el => {
                    if (Number(el.textContent) == memoryNeighborDayLeft[2]) {
                        el.classList.add('day-neighbor');
                    }
                })   
            }
        }
        
        if (memoryNeighborDayRight) {
            if (memoryNeighborDayRight[0] == year && memoryNeighborDayRight[1] == numberMonth) {
                daysMonth.forEach(el => {
                    if (Number(el.textContent) == memoryNeighborDayRight[2]) {
                        el.classList.add('day-neighbor');
                    }
                })   
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
