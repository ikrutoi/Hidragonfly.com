export function clearSessionStarage() {
    sessionStorage.clear();  

    const buttonMenuNav = document.querySelectorAll('.nav-button');
    buttonMenuNav.forEach(el => el.classList.remove('value-in-memory'));

    const navAdditionalBlockAroma = document.querySelector('.nav-additional-aroma');
    navAdditionalBlockAroma.classList.remove('active');
    
    const navAdditionalBlockDate = document.querySelector('.nav-additional-date');
    navAdditionalBlockDate.classList.remove('active');

    const daysMonth = document.querySelectorAll('.date-day-counter');

    daysMonth.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }

        if (el.classList.contains('day-neighbor')) {
            el.classList.remove('day-neighbor');
        }
    })

    const elemCardLetterTextArea = document.querySelector('.card-letter-textarea');
    elemCardLetterTextArea.value = '';
}
