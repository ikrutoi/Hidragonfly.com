import { newElemHTML } from "./new-element.js";

export function createCalendar() {
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

    newElemHTML(monthTitle, 'afterbegin', `<p>${month}</p>`);
    newElemHTML(yearTitle, 'afterbegin', `<p>${year}</p>`);

    const areaDateDays = document.querySelector('.date-table-month');

    newElemHTML(areaDateDays, 'beforeend', '<table class="date-table"></table>');

    const blockTable = document.querySelector('.date-table');
    
    // newElemHTML(blockTable, 'beforeend', '<thead class="date-table-header"></thead>');
    newElemHTML(blockTable, 'beforeend', '<tbody class="date-table-body"></tbody>');
    
    // const tableHeader = document.querySelector('.date-table-header');
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
                    if (i <= numberFirstDay) {
                        newElemHTML(tableRow, 'beforeend', `<td></td>`);
                    } else 
                    newElemHTML(tableRow, 'beforeend', `<td>${dayCounter++}</td>`);
                }
            } else {
                for (let i = 0; i < 7; i++) {
                    if (dayCounter <= quantityDaysOfMonth) {
                        newElemHTML(tableRow, 'beforeend', `<td>${dayCounter++}</td>`);
                    } else 
                    newElemHTML(tableRow, 'beforeend', `<td></td>`);
                }
            }
        }

        // function entryEqualWidthHeight() {
        //     const blockTableWidth = blockTable.getBoundingClientRect();
        //     const tableColumnWidth = blockTableWidth.width / 7;
        //     const tableRowHeight = blockTableWidth.height / (quanityRows + 1);

        //     const tableColumn = document.querySelectorAll('th');
            
        //     tableColumn.forEach(el => {
        //         el.setAttribute('style', `width: ${tableColumnWidth}px;`);
        //     })


        //     console.log(tableColumnWidth);
        //     console.log(tableRowHeight);
        // }


        // setTimeout(entryEqualWidthHeight, 300);


    }

    addRow();
}

