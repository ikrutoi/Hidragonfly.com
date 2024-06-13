import { newElemHTML } from "./new-element.js";
import { addButtonDate } from "./date-create-button-date.js";
import { startPressActivation } from "./start-press-activation.js";

export function createCalendar(newYear, newNumberMonth, newDay, selectDay) {
    const buttonDate = document.querySelector('.button-date');
    buttonDate.classList.add('created');
    let year = newYear;
    let numberMonth = newNumberMonth;
    let day;
    let selectionDate = [newYear, newNumberMonth, newDay, selectDay];
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

    const elemMinus = document.querySelectorAll('.sign-less');
    const elemPlus = document.querySelectorAll('.sign-more');

    elemMinus.forEach(el => {newElemHTML(el, 'afterbegin', '<p></p>')})
    elemPlus.forEach(el => {newElemHTML(el, 'afterbegin', '<p></p>')})
    
    const elemSelectionFull = document.querySelector('.date-selection-full'); 
    const elemSelectionTitle = document.querySelectorAll('.date-selection-title');
    const elemSelectionYear = document.querySelector('.date-selection-year');
    elemSelectionYear.textContent = `${year}`;
    const elemSelectionMonth = document.querySelector('.date-selection-month');
    elemSelectionMonth.textContent = `${nameMonth[newNumberMonth]}`;
    const elemSelectionDay = document.querySelector('.date-selection-day');
    elemSelectionDay.textContent = `${newDay}`;

    const areaDateDays = document.querySelector('.date-table-month');
    newElemHTML(areaDateDays, 'beforeend', '<table class="date-table"></table>');  
    const blockTable = document.querySelector('.date-table');
    newElemHTML(blockTable, 'beforeend', '<tbody class="date-table-body"></tbody>');
    const tableBody = document.querySelector('.date-table-body');
    newElemHTML(tableBody, 'beforeend', '<tr class="date-table-header-row"></tr>');
    
    const dateTitle = document.querySelectorAll('.date-calendar-title');
    const dateSign = document.querySelectorAll('.date-sign');
    const dateSlider = document.querySelector('.date-slider');
    // const elemSliderHalf = document.querySelectorAll('.date-slider-half');
    const elemSliderLeft = document.querySelector('.date-slider-left');
    const elemSliderRight = document.querySelector('.date-slider-right');
    const elemSignPlus = document.querySelector('.sign-plus');
    const elemTitleYear = document.querySelector('.date-title-year');
    const elemTitleMonth = document.querySelector('.date-title-month');
    const elemTitleDay = document.querySelector('.date-title-day');

//** class hover */

function addClassHover() {
    if ((this == dateSlider && dateSlider.classList.contains('active')) || this != dateSlider) {
        this.classList.add('hover');
    } 
    this.classList.add('hover');
}

function delClassHover() {
    this.classList.remove('hover');
}

//** timer Selection Date */
    
    let timerGrow;

    function clearClassElemTitle() {
        elemSelectionTitle.forEach(el => el.classList.remove('wait'));
        elemSelectionTitle.forEach(el => el.classList.remove('active'));
        dateSign.forEach((el) => {el.classList.remove('wait')});
        dateSign.forEach((el) => {el.classList.remove('hover')});
        dateSign.forEach((el) => {el.classList.remove('active')});
        dateSign.forEach(el => {delete el.dataset.dateTitle});
        elemSliderLeft.classList.remove('wait');
        elemSliderRight.classList.remove('active');
        delete elemSliderRight.dataset.dateTitle;
        elemSelectionFull.classList.remove('active');
        setTimeout(() => {
            elemSliderRight.min = '0';
            elemSliderRight.max = '0';
            elemSliderRight.value = '0';
        }, 150);
    }

    function restartTimerRemoveGrow() {
        if (timerGrow) {
            clearTimeout(timerGrow);
            timerGrow = setTimeout(() => {
                clearClassElemTitle();
                if (selectionDate[3]) {
                    showSelectionDate(selectionDate);
                }
            }, 18000);
        } else {
            timerGrow = setTimeout(() => {
                clearClassElemTitle();
                if (selectionDate[3]) {
                    showSelectionDate(selectionDate);
                }
            }, 18000);
        }  
    }

    function showSelectionDate(selectionDate) {
        delRows();
        addRow(year, numberMonth);
        elemSelectionYear.textContent = `${selectionDate[0]}`;
        elemSelectionMonth.textContent = `${nameMonth[selectionDate[1]]}`;
        elemSelectionDay.textContent = `${selectionDate[2]}`;
        selectionDay('show', selectionDate[2]);
    }

    function validationStartPressActive() {
        if (!this.classList.contains('active')) {
            startPressActivation(this);
        }
    }

//** elem SelectionDate */

function changeButtonSelectionDate() {  
    if (!this.classList.contains('active')) {
        setTimeout(() => this.classList.add('active'), 150);
        setTimeout(() => elemSelectionTitle.forEach(el => el.classList.add('wait')), 300);
        setTimeout(() => dateSign.forEach(el => el.classList.add('wait')), 300);
        setTimeout(() => {elemSliderLeft.classList.add('wait')}, 300);
        restartTimerRemoveGrow();
    }  
}
  
function recordSelectedDate(year, numberMonth, day) {
    elemTitleYear.textContent = `${year}`;
    elemTitleMonth.textContent = `${nameMonth[numberMonth]}`;
    elemTitleDay.textContent = `${day}`;
}

//** elem dateTitle */

    function validationAddClassActive() {
        console.log('validation!! numberMonth: ', numberMonth);
        elemSelectionYear.classList.remove('active');
        elemSelectionMonth.classList.remove('active');
        if (elemSelectionFull.classList.contains('active')) {
            this.classList.add('active');
            console.log('validationMinusMonth: ', validationMinusMonth());
            if (validationMinusMonth()) {
                dateSign.forEach(el => el.classList.add('active'));
            } else {
                console.log('sign+')
                elemSignPlus.classList.add('active');
            }
            elemSliderLeft.classList.remove('wait');
            console.log('remove wait')
            // elemSliderRight.classList.add('active');
            switch (this.dataset.dateTitle) {
                case 'title-year':
                    recValueInput(this.dataset.dateTitle, year);
                    // dateSlider.dataset.dateTitle = 'title-year';
                    dateSign.forEach((el) => {el.dataset.dateTitle = 'title-year'});
                    break;
                case 'title-month':
                    recValueInput(this.dataset.dateTitle, numberMonth);
                    // dateSlider.dataset.dateTitle = 'title-month';
                    dateSign.forEach((el) => {el.dataset.dateTitle = 'title-month'});
                    break;
            }
        }
    }

    function recValueTitle(unit, newValue) {
        switch (unit) {
            case 'title-year':
                elemSelectionYear.textContent = `${newValue}`;
                break;
            case 'title-month':
                elemSelectionMonth.textContent = `${nameMonth[newValue]}`;
                break;
            case 'title-day':
                elemSelectionDay.textContent = `${newValue}`;
                break;
        }
    }
    
    function validationMinusMonth() {
        if (numberMonth == newNumberMonth  && year == newYear) {
            return false;
        } else {
            return true;
        }
    }

//** elem Sign */
        
    function changeFromSign() {    
        let changeSignDirection;
        switch(this.dataset.direction) {
            case 'minus':
            changeSignDirection = false;
            break;
            case 'plus':
            changeSignDirection = true;
            break;
        }
        dateTitle.forEach((el) => {
            if (el.classList.contains('active')) {
                switch (el.dataset.dateTitle) {
                    case 'title-year':
                        if (changeSignDirection) {
                            newNextYear();
                            validationMemorySelectedDay();
                        } else {
                            newLastYear();
                            validationMemorySelectedDay();
                            validationCancelYearHover();
                        }
                        break;
                    case 'title-month':
                        if (changeSignDirection) {
                            newNextMonth();
                            validationMemorySelectedDay();
                        } else {
                            newLastMonth();
                            validationMemorySelectedDay();
                            validationCancelYearHover();
                        }
                    break;
                    case 'title-day':
                        if (changeSignDirection) {
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

    function validationAddClassHover(event) {
        elemSelectionTitle.forEach(el => {
            if (el.classList.contains('active')) {
                switch(event.type) {
                    case 'mouseenter':
                        this.classList.add('hover');
                        break;
                    case 'mouseleave':
                        this.classList.remove('hover');
                        break;
                }
            }
        })
    }

    function validationFromSignStartPressActive() {
        if (this.classList.contains('active')) {
            startPressActivation(this);
        }
    }

//** elem Slider */

function changeFromSlider() {
    console.log('changeFromSlider')
    if (this.value <= newNumberMonth  && year == newYear) {
        console.log('slider-minus');
        // dateSlider.classList.remove('active');
        dateSlider.value = newNumberMonth;
    }
    switch (this.dataset.dateTitle) {
        case 'title-year':
            if (this.value > year) {
                newNextYear();
                validationMemorySelectedDay();
            } else {
                newLastYear();
                validationMemorySelectedDay();
                validationCancelYearHover();
            }
            elemSelectionYear.textContent = `${this.value}`
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
            elemSelectionMonth.textContent = `${nameMonth[this.value]}`
            break;
    }
}

function recValueInput(unit, newValue) {
    elemSliderRight.classList.add('active');
    // setTimeout(() => {elemSliderRight.classList.add('active');}, 150);
    switch (unit) {
        case 'title-year':
            dateSlider.min = `${new Date().getFullYear()}`;
            dateSlider.max = String(new Date().getFullYear() + 100);
            dateSlider.value = `${newValue}`;
            dateSlider.dataset.dateTitle = 'title-year';
            break;
        case 'title-month':
            elemSliderRight.min = `${newNumberMonth}`;
            elemSliderRight.max = '11';
            elemSliderRight.value = `${newValue}`;
            elemSliderRight.dataset.dateTitle = 'title-month';
            break;
    }
}

function recordSizeSlider() {
    // dateSlider.style.width = `${tableBody.clientWidth}px`; 
    const partWidthSlider = tableBody.clientWidth / 11;
    elemSliderLeft.style.width = `${partWidthSlider * newNumberMonth}px`; 
    elemSliderRight.style.width = `${tableBody.clientWidth - partWidthSlider * newNumberMonth}px`; 
    elemSliderLeft.min = '0';
    elemSliderLeft.max = '0';
    elemSliderLeft.value = '0';
    elemSliderRight.min = '0';
    elemSliderRight.max = '0';
    elemSliderRight.value = '0';
}

setTimeout(recordSizeSlider, 200);
   
//** addEventListener */

    elemSelectionFull.addEventListener('mouseenter', addClassHover);
    elemSelectionFull.addEventListener('mouseleave', delClassHover);
    elemSelectionFull.addEventListener('pointerdown', validationStartPressActive);
    elemSelectionFull.addEventListener('pointerdown', changeButtonSelectionDate);
    
    elemSelectionTitle.forEach(el => {
        el.addEventListener('mouseenter', addClassHover);
        el.addEventListener('mouseleave', delClassHover);
    })

    elemSelectionYear.addEventListener('pointerdown', () => startPressActivation(elemSelectionYear));
    elemSelectionYear.addEventListener('pointerdown', validationAddClassActive);
    elemSelectionMonth.addEventListener('pointerdown', () => startPressActivation(elemSelectionMonth));
    elemSelectionMonth.addEventListener('pointerdown', validationAddClassActive);
    
    dateSign.forEach((el) => {
        el.addEventListener('mouseenter', validationAddClassHover);
        el.addEventListener('mouseleave', validationAddClassHover);
        el.addEventListener('pointerdown', validationFromSignStartPressActive);
        // el.addEventListener('pointerdown', () => {startPressActivation(el)});
        el.addEventListener('pointerdown', changeFromSign);
    })

    elemSliderRight.addEventListener('mouseenter', addClassHover);
    elemSliderRight.addEventListener('mouseleave', delClassHover);
    if (elemSliderLeft.classList.contains('wait') || elemSliderRight.classList.contains('active')) {
        elemSliderLeft.addEventListener('mousemove', restartTimerRemoveGrow);
        elemSliderRight.addEventListener('mousemove', restartTimerRemoveGrow);
    }
    elemSliderRight.addEventListener('input', changeFromSlider);
    elemSliderRight.addEventListener('input', restartTimerRemoveGrow);

//** */

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

    function selectionDay(fromWitch, newDay) {
        day = newDay;

        if (elemSelectionFull.classList.contains('deactivation')) {
            restartTimerRemoveGrow();
        }
        const daysMonth = document.querySelectorAll('.date-day-counter');      
        daysMonth.forEach((el) => {
            el.classList.remove('active');
            el.classList.remove('day-neighbor');
        });

        elemSelectionDay.textContent = `${day}`;
        console.log('day22: ', day);
        const selectionDay = document.querySelector(`.day-${day}`);
        selectionDate[0] = year;
        selectionDate[1] = numberMonth;
        selectionDate[2] = day;
        selectionDate[3] = true;
        selectionDay.classList.add('active');

        if (!elemSelectionFull.classList.contains('selected')) {
            elemSelectionFull.classList.add('selected');
            dateTitle.forEach(el => el.classList.remove)
        }
        
        if (elemSelectionFull.classList.contains('deactivation') && elemTitleDay.classList.contains('active')) {
            recValueTitle('title-day', day);
            recValueInput('title-day', day);
        };
        
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

        setTimeout(addClassNeighbor, 75);
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
                if (elemSelectionFull.classList.contains('deactivation')) {
                    elemTitleYear.classList.add('deactivation');
                    elemTitleMonth.classList.add('deactivation');
                    dateSlider.classList.add('active');
                    console.log('day45: ', day);
                    recValueInput('title-day', day);
                    dateSlider.dataset.dateTitle = 'title-day';
                }

                recordSelectedDate(year, numberMonth, Number(el.textContent))
                sessionStorage.setItem('selection-year', year);
                sessionStorage.setItem('selection-month', numberMonth);
                sessionStorage.setItem('selection-day', Number(el.textContent));
            }

            function validationMouseMove() {
                if (elemSelectionFull.classList.contains('deactivation')) {
                    restartTimerRemoveGrow();
                }
            }

            el.addEventListener('mousemove', validationMouseMove);
            
            if (el.classList.contains('allowed')) {
                el.addEventListener('pointerdown', function() {selectionDay('calendar', Number(this.textContent))});
                el.addEventListener('pointerdown', addButtonMemoryDate);
            }            
        })
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
            // buttonMonthTitle.textContent = `${nameMonth[numberMonth]}`;
            recValueTitle('title-month', numberMonth)
            // elemTitleMonth.textContent = `${nameMonth[numberMonth]}`;
            dateSlider.value = numberMonth;
        }
        
        function changeYear(year) {
            // buttonYearTitle.textContent = `${year}`;
            recValueTitle('title-year', year)
            // elemTitleYear.textContent = `${year}`;
            dateSlider.value = year;
        }


        switch (val) {
            case 'plusYear': 
                year = ++year;
                changeYear(year);
                delRows();
                addRow(year, numberMonth);
                // elemSelectionTextYear.textContent = `${selectionDate[0]}`;
                // elemSelectionTextMonth.textContent = `${nameMonth[selectionDate[1]]}`;
                // elemSelectionTextDay.textContent = `${selectionDate[2]}`;
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
        console.log('<<---')
        // buttonYearMinus.classList.remove('active');
    }

    function validationCancelYearHover() {
        if (year == parseInt(new Date().getFullYear()) + 1 && numberMonth < new Date().getMonth()) {
            cancelYearHover();
        }

        if (year == new Date().getFullYear()) {
            cancelYearHover();
        }
    }

    // function additionalYearHover() {
    //     if (year == parseInt(new Date().getFullYear()) + 1 && numberMonth >= new Date().getMonth()) {
    //         buttonYearMinus.classList.add('active');
    //     }

    //     if (year > parseInt(new Date().getFullYear()) + 1) {
    //         buttonYearMinus.classList.add('active');
    //     }
    // }

    // function additionalMonthHover() {
    //     if (numberMonth > new Date().getMonth() && year == new Date().getFullYear()) {
    //         buttonMonthMinus.classList.add('active');
    //     }

    //     if (year > new Date().getFullYear()) {
    //         buttonMonthMinus.classList.add('active');
    //     }
    // }

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
