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
    // let memorySelectedDate;
    // console.log('memory0: ', memorySelectedDate);
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
    
    const elemSelectionDate = document.querySelector('.date-calendar-selection-date'); 
    newElemHTML(elemSelectionDate, 'beforeend', `<p class="date-selection-year">${year}</p>`);  
    newElemHTML(elemSelectionDate, 'beforeend', `<p class="date-selection-month">${month}</p>`);  
    newElemHTML(elemSelectionDate, 'beforeend', `<p class="date-selection-day">${day}</p>`);  
    const elemSelectionDateYear = document.querySelector('.date-selection-year');
    const elemSelectionDateMonth = document.querySelector('.date-selection-month');
    const elemSelectionDateDay = document.querySelector('.date-selection-day');

    const areaDateDays = document.querySelector('.date-table-month');
    newElemHTML(areaDateDays, 'beforeend', '<table class="date-table"></table>');  
    const blockTable = document.querySelector('.date-table');
    newElemHTML(blockTable, 'beforeend', '<tbody class="date-table-body"></tbody>');
    const tableBody = document.querySelector('.date-table-body');
    newElemHTML(tableBody, 'beforeend', '<tr class="date-table-header-row"></tr>');
    
    const dateSlider = document.querySelector('.date-slider');
    const dateTitle = document.querySelectorAll('.date-calendar-title');
    const dateSign = document.querySelectorAll('.date-sign');
    const elemTitleFull = document.querySelector('.date-calendar-title-full');
    const elemDateSignSelection = document.querySelector('.date-sign-selection');
    const elemTitleYear = document.querySelector('.date-title-year');
    const elemTitleMonth = document.querySelector('.date-title-month');
    const elemTitleDay = document.querySelector('.date-title-day');

    function writePropertiesInputSlider() {
        dateSlider.style.width = `${tableBody.clientWidth}px`; 
        elemDateSignSelection.style.width = `${tableBody.clientWidth}px`; 
        dateSlider.min = '0';
        dateSlider.max = '0';
        dateSlider.value = '0';
    }

    function addClassActive() {
        dateTitle.forEach((el) => {el.classList.remove('active')});
        this.classList.add('active');
        // if (numberMonth > new Date().getMonth() && year == new Date().getFullYear()) {
        //     changeYearMonth('minusMonth');
        // }
        dateSign.forEach((el) => {el.classList.add('active')})
        dateSlider.classList.add('hover');
        // setTimeout(clearClassActive, 18000);
    }
    
    function recordSelectedDate(year, numberMonth, day) {
        console.log('record date!', day);
        elemTitleYear.textContent = `${year}`;
        elemTitleMonth.textContent = `${nameMonth[numberMonth]}`;
        elemTitleDay.textContent = `${day}`;

    }

    function clearClassActive() {
        dateTitle.forEach((el) => {el.classList.remove('active')});
        dateSign.forEach((el) => {el.classList.remove('hover')});
        dateSlider.classList.remove('hover');
        delete dateSlider.dataset.dateTitle;
        dateSlider.min = '0';
        dateSlider.max = '0';
        dateSlider.value = '0';
    }

    function recValueInputStart() {
        let newYear;
        let newMonth;
        let newDay;
        if (sessionStorage.getItem('selection-year')) {
            newYear = sessionStorage.getItem('selection-year');
            newMonth = sessionStorage.getItem('selection-month');
            newDay = sessionStorage.getItem('selection-day');
        } else {
            newYear = new Date().getFullYear();
            newMonth = new Date().getMonth();
            newDay = new Date().getDate();
        }
        switch (this.dataset.dateTitle) {
            case 'title-year':
                dateSlider.min = `${new Date().getFullYear()}`;
                dateSlider.max = String(new Date().getFullYear() + 100);
                dateSlider.value = `${newYear}`;
                dateSlider.dataset.dateTitle = 'title-year';
                break;
            case 'title-month':
                dateSlider.min = '0';
                dateSlider.max = '11';
                dateSlider.value = `${newMonth}`;
                dateSlider.dataset.dateTitle = 'title-month';
            break;
            case 'title-day':
                const counterDaysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
                dateSlider.min = '1';
                dateSlider.max = `${counterDaysInMonth}`;
                dateSlider.value = `${newDay}`;
                dateSlider.dataset.dateTitle = 'title-day';
                break;
        }
    }

    function recValueTitle(day) {
        elemSelectionDateDay.textContent = `${day}`;
    }

    function recValueInput(unit, newValue) {
        switch (unit) {
            case 'year':
                dateSlider.min = `${new Date().getFullYear()}`;
                dateSlider.max = String(new Date().getFullYear() + 100);
                dateSlider.value = `${newValue}`;
                dateSlider.dataset.dateTitle = 'title-year';
                break;
            case 'month':
                dateSlider.min = '0';
                dateSlider.max = '11';
                dateSlider.value = `${newValue}`;
                dateSlider.dataset.dateTitle = 'title-month';
            break;
            case 'day':
                const counterDaysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
                dateSlider.min = '1';
                dateSlider.max = `${counterDaysInMonth}`;
                dateSlider.value = `${newValue}`;
                dateSlider.dataset.dateTitle = 'title-day';
                break;
        }
    }

    function addClassHover() {
        this.classList.add('hover');
        dateTitle.forEach((el) => {el.classList.add('hover')})
    }
    
    function delClassHover() {
        this.classList.remove('hover');
        dateTitle.forEach((el) => {el.classList.remove('hover')})
        dateSign.forEach((el) => {el.classList.remove('hover')});
    }
    
    function addClassPressActive() {
        startPressActivation(this);
        dateTitle.forEach((el) => {startPressActivation(el)});
    }
    
    let timerGrow;
    function addClassGrow() {      
        // const elemTitleYear = document.querySelector('.date-title-year');
        // const monthTitle = document.querySelector('.date-month-title');
        // const dayTitle = document.querySelector('.date-day-title'); 
        newElemHTML(elemTitleYear, 'afterbegin', `<p class="date-calendar-title-text">${year}</p>`);
        newElemHTML(elemTitleMonth, 'afterbegin', `<p class="date-calendar-title-text">${month}</p>`);
        newElemHTML(elemTitleDay, 'afterbegin', `<p class="date-calendar-title-text">${day}</p>`); 

        const elemTitleText = document.querySelectorAll('.date-calendar-title-text');
        // this.classList.add('grow');
        elemTitleFull.classList.add('active');
        dateTitle.forEach((el) => {el.classList.add('grow')});
        setTimeout(() => {dateSign.forEach((el) => {el.classList.add('active')})}, 150);
        if (timerGrow) {
            clearTimeout(timerGrow);
            timerGrow = setTimeout(() => {
                // this.classList.remove('grow');
                elemTitleFull.classList.remove('active');
                elemTitleText.forEach(el => {el.remove()});
                dateTitle.forEach((el) => {el.classList.remove('grow')});
                dateTitle.forEach((el) => {el.classList.remove('active')});
                dateSign.forEach((el) => {el.classList.remove('active')});
                elemSelectionDate.classList.remove('active');
            }, 18000);
        } else {
            timerGrow = setTimeout(() => {
                // this.classList.remove('grow');
                elemTitleFull.classList.remove('active');
                elemTitleText.forEach(el => {el.remove()});
                dateTitle.forEach((el) => {el.classList.remove('grow')});
                dateTitle.forEach((el) => {el.classList.remove('active')});
                dateSign.forEach((el) => {el.classList.remove('active')});
                elemSelectionDate.classList.remove('active');
            }, 12000);
        }
    }

    // elemTitleFull.addEventListener('mouseenter', addClassHover);
    // elemTitleFull.addEventListener('mouseleave', delClassHover);
    // elemTitleFull.addEventListener('pointerdown', addClassPressActive);
    // elemTitleFull.addEventListener('pointerup', addClassGrow);

    dateTitle.forEach((el) => {
        el.addEventListener('pointerdown', () => {startPressActivation(el)});
        // el.addEventListener('pointerdown', addClassActive);
        el.addEventListener('pointerup', recValueInput);
        // el.addEventListener('mouseenter', addClassHover);
        // el.addEventListener('mouseleave', delClassHover);
    })

    function addClassActive1() {
        // this.classList.add ('active');
        setTimeout(() => {this.classList.add('active')}, 150);
        setTimeout(() => {dateTitle.forEach(el => {el.classList.add('active')})}, 150);
        // dateTitle.forEach(el => {el.classList.add('active')})
    }

    elemSelectionDate.addEventListener('mouseenter', addClassHover);
    elemSelectionDate.addEventListener('mouseleave', delClassHover);
    elemSelectionDate.addEventListener('pointerdown', () => {startPressActivation(elemSelectionDate)});
    elemSelectionDate.addEventListener('pointerdown', addClassActive1);
    elemSelectionDate.addEventListener('pointerdown', addClassGrow);
    
    function changeFromSign() {    
        let dateSignDirection;
        switch(this.dataset.direction) {
            case 'minus':
            dateSignDirection = null;
            break;
            case 'plus':
            dateSignDirection = 1;
            break;
        }
        dateTitle.forEach((el) => {
            if (el.classList.contains('active')) {
                switch (el.dataset.dateTitle) {
                    case 'title-year':
                        if (dateSignDirection) {
                            newNextYear();
                            validationMemorySelectedDay();
                        } else {
                            newLastYear();
                            validationMemorySelectedDay();
                            validationCancelYearHover();
                        }
                        break;
                    case 'title-month':
                        if (dateSignDirection) {
                            newNextMonth();
                            validationMemorySelectedDay();
                        } else {
                            newLastMonth();
                            validationMemorySelectedDay();
                            validationCancelYearHover();
                        }
                    break;
                    case 'title-day':
                        if (dateSignDirection) {
                            selectionDay(year, numberMonth, ++day);
                            validationMemorySelectedDay();
                            elemTitleDay.textContent = `${day}`;
                            dateSlider.value = day;
                        } else {
                            selectionDay(year, numberMonth, --day);
                            validationMemorySelectedDay();
                            validationCancelYearHover();
                            elemTitleDay.textContent = `${day}`;
                            dateSlider.value = day;
                        }
                        break;
                }
            }
        })
    }
    
    dateSign.forEach((el) => {
        el.addEventListener('pointerdown', () => {startPressActivation(el)});
        el.addEventListener('pointerdown', changeFromSign);
    })
    
    setTimeout(writePropertiesInputSlider, 200);

    function changeFromSlider() {
        switch (this.dataset.dateTitle) {
            case 'title-year':
                console.log('this.value: ', this.value);
                if (this.value > year) {
                    newNextYear();
                    validationMemorySelectedDay();
                } else {
                    newLastYear();
                    validationMemorySelectedDay();
                    validationCancelYearHover();
                }
                elemTitleYear.textContent = `${this.value}`
                break;
            case 'title-month':
                if (this.value > numberMonth) {
                    newNextMonth();
                    validationMemorySelectedDay();
                } else {
                    newLastMonth();
                    validationMemorySelectedDay();
                    validationCancelYearHover();
                };
                elemTitleMonth.textContent = `${nameMonth[this.value]}`
                break;
            case 'title-day':
                console.log('selDay!');
                elemTitleDay.textContent = `${this.value}`
                break;
        }
    }

    dateSlider.addEventListener('input', changeFromSlider);
    // dateSlider.addEventListener('pointerup', showNewCalendar);
    // elemDateSlider.addEventListener('mouseover', addActiveInput);
    // elemDateSlider.addEventListener('mouseout', delActiveInput);

    const tableHeaderRow = document.querySelector('.date-table-header-row');
    const nameDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let quantityDaysOfMonth;
    let memoryNeighborDayLeft;
    let memoryNeighborDayRight;

    for (let i = 0; i < 7; i++) {
        newElemHTML(tableHeaderRow, 'beforeend', `<th>${nameDays[i]}</th>`);
    }

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

    function selectionDay(year, numberMonth, day) {
        const daysMonth = document.querySelectorAll('.date-day-counter');      
        daysMonth.forEach((el) => {
            el.classList.remove('active');
            el.classList.remove('day-neighbor');
        });

        const selectionDay = document.querySelector(`.day-${day}`);
        selectionDay.classList.add('active');

        recValueTitle(day);
        recValueInput('day', day);
        
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

    function addRow(year, numberMonth) {   

        function getFirstDay(year, numberMonth) {
            let firstDay = new Date(year, numberMonth, 1);
            
            return firstDay.getDay();
        }
        
        let numberFirstDay = getFirstDay(year, numberMonth);
        
        // function getQuantityDaysOfMonth(year, numberMonth) {
        //     numberMonth = ++numberMonth;

        //     if (numberMonth == 12) {
        //         year = ++year;
        //         numberMonth = 0;
        //     }

        //     if (numberMonth == 0) {
        //         year = --year;
        //         numberMonth = 11;
        //     }

        //     return new Date(year, numberMonth, 0).getDate();
        // }
        
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
  
        daysMonth.forEach(el => {
            function addButtonMemoryDate() {
                recordSelectedDate(year, numberMonth, Number(el.textContent))
                // addButtonDate(year, numberMonth, Number(el.textContent));
                // memorySelectedDate = [year, numberMonth, Number(el.textContent)];
                sessionStorage.setItem('selection-year', year);
                sessionStorage.setItem('selection-month', numberMonth);
                sessionStorage.setItem('selection-day', Number(el.textContent));
            }

            if (el.classList.contains('allowed')) {
                el.addEventListener('pointerdown', () => selectionDay(year, numberMonth, Number(el.textContent)));
                el.addEventListener('pointerdown', addButtonMemoryDate);
                // dateSlider.value = Number(el.textContent);
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
            elemTitleMonth.textContent = `${nameMonth[numberMonth]}`;
            dateSlider.value = numberMonth;
        }
        
        function changeYear(year) {
            buttonYearTitle.textContent = `${year}`;
            elemTitleYear.textContent = `${year}`;
            dateSlider.value = year;
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

    // buttonYearPlus.addEventListener('pointerdown', newNextYear);
    // buttonYearMinus.addEventListener('pointerdown', newLastYear);
    // buttonYearPlus.addEventListener('pointerdown', validationMemorySelectedDay);
    // buttonYearMinus.addEventListener('pointerdown', validationMemorySelectedDay);
    // buttonYearMinus.addEventListener('pointerup', validationCancelYearHover);
    // buttonYearMinus.addEventListener('mouseenter', additionalYearHover);
    // buttonYearMinus.addEventListener('mouseleave', cancelYearHover);
    
    // buttonMonthPlus.addEventListener('pointerdown', newNextMonth);
    // buttonMonthMinus.addEventListener('pointerdown', newLastMonth);
    // buttonMonthPlus.addEventListener('pointerdown', validationMemorySelectedDay);
    // buttonMonthMinus.addEventListener('pointerdown', validationMemorySelectedDay);
    // buttonMonthMinus.addEventListener('pointerup', validationCancelMonthHover);
    // buttonMonthMinus.addEventListener('mouseenter', additionalMonthHover);
    // buttonMonthMinus.addEventListener('mouseleave', cancelMonthHover);
}
