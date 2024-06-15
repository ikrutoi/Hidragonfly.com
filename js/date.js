import { newElemHTML } from "./new-element.js";
import { addButtonDate } from "./date-create-button-date.js";
import { startPressActivation } from "./start-press-activation.js";

export function createCalendar(newYear, newNumberMonth, newDay) {
    const buttonDate = document.querySelector('.button-date');
    buttonDate.classList.add('created');

    let currentDate;
    let selectionDate;
    if (selectionDate) {
        currentDate = [selectionDate[0], selectionDate[1], selectionDate[2]];
    } else {
        currentDate = [newYear, newNumberMonth, newDay];
    }
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
    const elemBlockAdditive = document.querySelector('.date-block-additive'); 
    const elemSelectionFull = document.querySelector('.date-selection-full'); 
    const elemSelectionTitle = document.querySelectorAll('.date-selection-title');
    const elemSelectionYear = document.querySelector('.date-selection-year');
    const elemSelectionMonth = document.querySelector('.date-selection-month');
    const elemSelectionDay = document.querySelector('.date-selection-day');
    
    const areaDateDays = document.querySelector('.date-table-month');
    newElemHTML(areaDateDays, 'beforeend', '<table class="date-table"></table>');  
    const blockTable = document.querySelector('.date-table');
    newElemHTML(blockTable, 'beforeend', '<tbody class="date-table-body"></tbody>');
    const tableBody = document.querySelector('.date-table-body');
    newElemHTML(tableBody, 'beforeend', '<tr class="date-table-header-row"></tr>');
    
    recordSelectionDate(currentDate[0], currentDate[1], currentDate[2]);

    const dateTitle = document.querySelectorAll('.date-selection-title');
    const dateSign = document.querySelectorAll('.date-sign');
    const dateSlider = document.querySelectorAll('.date-slider');
    const elemSliderLeft = document.querySelector('.date-slider-left');
    const elemSliderRight = document.querySelector('.date-slider-right');
    const elemSignMinus = document.querySelector('.sign-minus');
    const elemSignPlus = document.querySelector('.sign-plus');

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

    function verificationSelectedDate() {
        if (selectionDate) {
            if (selectionDate[0] == currentDate[0] && selectionDate[1] == currentDate[1]) {
                console.log('++++++++++++++++');
                // selectionDay('ping', selectionDate[2]);
            }
        }
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
        recordSizeSliderTrack('start');
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
                if (selectionDate) {
                    // showSelectionDate(selectionDate);
                }
            }, 10000);
        } else {
            timerGrow = setTimeout(() => {
                clearClassElemTitle();
                if (selectionDate) {
                    // showSelectionDate(selectionDate);
                }
            }, 10000);
        }  
    }

    function showSelectionDate(selectionDate) {
        delRows();
        addRow(currentDate[0], currentDate[1]);
        recordSelectionDate(selectionDate[0], selectionDate[1], showSelectionDate[2], true)
        selectionDay('show', selectionDate);
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
            setTimeout(() => {
                elemSliderLeft.classList.add('wait');
                elemSliderLeft.classList.add('active');
            }, 300);
            restartTimerRemoveGrow();
        }  
    }
    
    function recordSelectionDate(year, numberMonth, day) {
        elemSelectionYear.textContent = `${year}`;
        elemSelectionMonth.textContent = `${nameMonth[numberMonth]}`;
        elemSelectionDay.textContent = `${day}`;
    }

//** elem dateTitle */

    function validationAddClassActive() {
        elemSelectionYear.classList.remove('active');
        elemSelectionMonth.classList.remove('active');
        if (elemSelectionFull.classList.contains('active')) {
            this.classList.add('active');
            validationMinusMonth();
            elemSliderLeft.classList.remove('wait');
            switch (this.dataset.dateTitle) {
                case 'title-year':
                    recValueInput(this.dataset.dateTitle, currentDate[0]);
                    dateSign.forEach((el) => {el.dataset.dateTitle = 'title-year'});
                    break;
                case 'title-month':
                    recValueInput(this.dataset.dateTitle, currentDate[1]);
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
        
//** elem Sign */

    function validationMinusMonth() {
        if (currentDate[0] == newYear  && currentDate[1] == newNumberMonth) {
            elemSignMinus.classList.remove('active');
            if (!elemSignPlus.classList.contains('active')) {
                elemSignPlus.classList.add('active');
            }
        } else {
            if (!elemSignMinus.classList.contains('active')) {
                elemSignMinus.classList.add('active');
            }
            if (!elemSignPlus.classList.contains('active')) {
                elemSignPlus.classList.add('active');
            }
        }
    }
        
    function changeFromSign() {    
        console.log('currentDate: ', currentDate);
        verificationSelectedDate();
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
                            recValueInput('title-year', currentDate[0]);
                            validationMemorySelectedDay();
                        } else {
                            newLastYear();
                            recValueInput('title-year', currentDate[0]);
                            validationMemorySelectedDay();
                            validationCancelYearHover();
                        }
                        break;
                    case 'title-month':
                        if (changeSignDirection) {
                            newNextMonth();
                            recValueInput('title-month', currentDate[1]);
                            validationMemorySelectedDay();
                        } else {
                            newLastMonth();
                            recValueInput('title-month', currentDate[1]);
                        validationMemorySelectedDay();
                        validationCancelYearHover();
                        }
                    break;
                }
                validationMinusMonth();
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
        switch (this.dataset.dateTitle) {
            case 'title-year':
                if (this.value > currentDate[0]) {
                    newNextYear();
                    validationMinusMonth();
                    validationMemorySelectedDay();
                } else {
                    newLastYear();
                    validationMinusMonth();
                    validationMemorySelectedDay();
                    validationCancelYearHover();
                }
                elemSelectionYear.textContent = `${this.value}`
                break;
            case 'title-month':
                if (this.value > currentDate[1]) {
                    newNextMonth();
                    validationMinusMonth();
                    validationMemorySelectedDay();
                } else {
                    newLastMonth();
                    validationMinusMonth();
                    validationMemorySelectedDay();
                    validationCancelYearHover();
                };
                elemSelectionMonth.textContent = `${nameMonth[this.value]}`
                break;
        }
    }

    function recValueInput(unit, newValue) {
        recordSizeSliderTrack(unit, newValue);
        elemSliderRight.classList.add('active');
        switch (unit) {
            case 'title-year':
                elemSliderLeft.classList.remove('wait');
                elemSliderRight.min = `${new Date().getFullYear()}`;
                elemSliderRight.max = String(new Date().getFullYear() + 100);
                elemSliderRight.value = `${newValue}`;
                elemSliderRight.dataset.dateTitle = 'title-year';
                break;
            case 'title-month':
                elemSliderLeft.classList.remove('active');
                if (!elemSliderLeft.classList.contains('wait')) {
                    elemSliderLeft.classList.add('wait');
                }
                if (currentDate[0] == newYear) {
                    elemSliderRight.min = `${newNumberMonth}`;
                } else {
                    elemSliderRight.min = '0';
                }
                elemSliderRight.max = '11';
                elemSliderRight.value = `${newValue}`;
                elemSliderRight.dataset.dateTitle = 'title-month';
                break;
        }
    }

    function recordSizeSliderTrack(unit, newValue) {
        switch (unit) {
            case 'start':
                elemSliderLeft.style.width = '0px';
                elemSliderRight.style.width = `${tableBody.clientWidth}px`;
                break;
            case 'title-year':
                elemSliderLeft.style.width = '0px';
                elemSliderRight.style.width = `${tableBody.clientWidth}px`;
                break;
            case 'title-month':
                const partWidthSlider = tableBody.clientWidth / 11;
                if (currentDate[0] == newYear) {
                    elemSliderLeft.style.width = `${partWidthSlider * newNumberMonth}px`; 
                    elemSliderRight.style.width = `${tableBody.clientWidth - partWidthSlider * newNumberMonth}px`; 
                } else {
                    elemSliderLeft.style.width = '0px'; 
                    elemSliderRight.style.width = `${tableBody.clientWidth}px`; 
                }
                break;
        } 
        elemSliderLeft.min = '0';
        elemSliderLeft.max = '0';
        elemSliderLeft.value = '0';
        elemSliderRight.min = '0';
        elemSliderRight.max = '0';
        elemSliderRight.value = '0';
    }
    
    setTimeout(() => recordSizeSliderTrack('start'), 200);
   
//** addEventListener */

    elemBlockAdditive.addEventListener('mousemove', restartTimerRemoveGrow);
    elemBlockAdditive.addEventListener('pointerdown', restartTimerRemoveGrow);

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
        el.addEventListener('pointerdown', changeFromSign);
    })

    elemSliderRight.addEventListener('mouseenter', addClassHover);
    elemSliderRight.addEventListener('mouseleave', delClassHover);
    elemSliderRight.addEventListener('input', changeFromSlider);

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
        if (elemSelectionFull.classList.contains('deactivation')) {
            restartTimerRemoveGrow();
        }
        const daysMonth = document.querySelectorAll('.date-day-counter');      
        daysMonth.forEach((el) => {
            el.classList.remove('active');
            el.classList.remove('day-neighbor');
        });
        
        elemSelectionDay.textContent = `${newDay}`;
        const selectionDay = document.querySelector(`.day-${newDay}`);
        selectionDate[0] = year;
        selectionDate[1] = numberMonth;
        selectionDate[2] = day;
        selectionDate[3] = true;
        console.log('selectionDate2: ', selectionDate);
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
            if (currentDate[0] == new Date().getFullYear() && 
                currentDate[1] == new Date().getMonth() && 
                Number(el.textContent) == new Date().getDate()) {
                el.classList.add('today-day');
            }
        })

        function addForbiddenAllowedDays() {   
            daysMonth.forEach(el => {
                if (
                    Number(el.textContent) < (new Date().getDate() + 7) && 
                    currentDate[1] == new Date().getMonth()  &&
                    currentDate[0] == new Date().getFullYear()
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
    if (selectionDate) {
        addRow(selectionDate[0], selectionDate[1]);
        selectionDay[2];
    } else {
        addRow(currentDate[0], currentDate[1]);
    }

    function delRows() {
        const dateRowDays = document.querySelectorAll('.date-row-days');

        dateRowDays.forEach(el => el.remove());
    }
    
    function changeYearMonth(val) {

        function changeMonth(numberMonth) {
            recValueTitle('title-month', numberMonth)
            elemSliderRight.value = numberMonth;
        }
        
        function changeYear(year) {
            recValueTitle('title-year', year)
            elemSliderRight.value = year;
        }

        function verificationNumberMonth(year, numberMonth, unit) {
                    
            if (numberMonth >= 0 && numberMonth <= 11) {
                changeMonth(numberMonth);
                delRows();
                addRow(year, numberMonth);
            } else {
                switch(unit) {
                    case 'plus-month':
                        currentDate[0] = ++currentDate[0];
                        recValueTitle('title-year', currentDate[0]);
                        currentDate[1] = 0;
                        verificationNumberMonth(currentDate[0], currentDate[1]);
                        break;
                    case 'minus-month':
                        currentDate[0] = --currentDate[0];
                        changeYear(currentDate[0]);
                        currentDate[1] = 11;
                        verificationNumberMonth(currentDate[0], currentDate[1]);
                        break;
                }
            }
            
            return [currentDate[0], currentDate[1]];
        }

        switch (val) {
            case 'plus-year': 
                currentDate[0] = ++currentDate[0];
                changeYear(currentDate[0]);
                delRows();
                addRow(currentDate[0], currentDate[1]);
                break;
            case 'minus-year': 
                currentDate[0] = --currentDate[0];
                changeYear(currentDate[0]);
                delRows();
                addRow(currentDate[0], currentDate[1]);
                break;
            case 'plus-month': {
                currentDate[1] = ++currentDate[1];
                const newYearMonth = verificationNumberMonth(currentDate[0], currentDate[1], 'plus-month');
                currentDate[0] = newYearMonth[0];
                currentDate[1] = newYearMonth[1];
                break;
            }
            case 'minus-month': {
                currentDate[1] = --currentDate[1];
                const newYearMonth = verificationNumberMonth(currentDate[0], currentDate[1], 'minus-month');
                currentDate[0] = newYearMonth[0];
                currentDate[1] = newYearMonth[1];
                break;
            }
        }
    }

    function newNextYear() {
        changeYearMonth('plus-year');
    }

    function newLastYear() {
        if (currentDate[0] == parseInt(new Date().getFullYear()) + 1 && currentDate[1] >= new Date().getMonth()) {
            changeYearMonth('minus-year');
        }

        if (currentDate[0] > parseInt(new Date().getFullYear()) + 1) {
            changeYearMonth('minus-year');
        }
    }
    
    function newNextMonth() {
        changeYearMonth('plus-month');
    }

    function newLastMonth() {
        if (currentDate[1] > new Date().getMonth() && currentDate[0] == new Date().getFullYear()) {
            changeYearMonth('minus-month');
        }

        if (currentDate[0] > new Date().getFullYear()) {
            changeYearMonth('minus-month');
        }
    }

    function cancelYearHover() {
        // buttonYearMinus.classList.remove('active');
    }

    function validationCancelYearHover() {
        if (currentDate[0] == parseInt(new Date().getFullYear()) + 1 && currentDate[1] < new Date().getMonth()) {
            cancelYearHover();
        }

        if (currentDate[0] == new Date().getFullYear()) {
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

    // function validationCancelMonthHover() {
    //     if (numberMonth == new Date().getMonth()  && year == new Date().getFullYear()) {
    //         cancelMonthHover();
    //     }
    // }
   
    function validationMemorySelectedDay() {
        const daysMonth = document.querySelectorAll('.date-day');
        if (memoryNeighborDayLeft) {   
            if (memoryNeighborDayLeft[0] == currentDate[0] && memoryNeighborDayLeft[1] == currentDate[1]) {
                daysMonth.forEach(el => {
                    if (Number(el.textContent) == memoryNeighborDayLeft[2]) {
                        el.classList.add('day-neighbor');
                    }
                })   
            }
        }
        
        if (memoryNeighborDayRight) {
            if (memoryNeighborDayRight[0] == currentDate[0] && memoryNeighborDayRight[1] == currentDate[1]) {
                daysMonth.forEach(el => {
                    if (Number(el.textContent) == memoryNeighborDayRight[2]) {
                        el.classList.add('day-neighbor');
                    }
                })   
            }
        } 
    }
}
