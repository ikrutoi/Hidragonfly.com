export function validationValueSessionStorage() {

    const elemEnvelopeInput = document.querySelectorAll('.envelope-input');
    const keys = Object.keys(sessionStorage);
    let i = 0;

    for (let key of keys) {
        if (key.includes('envelope')) {
            i = ++i;
        }
    }

    if (i == 8) {
        const elemButtonEnvelope = document.querySelector('.button-envelope');

        elemButtonEnvelope.classList.add('value-in-memory');
    }
        
    for (let key of keys) {
        if (key.includes('envelope')) {
            elemEnvelopeInput.forEach(el => {
                if (el.name == key) {
                    el.value = sessionStorage.getItem(key);
                }
            })
        };
    }
}