import { newElemHTML } from "./new-element.js";

const elemEnvelopeInput = document.querySelectorAll('.envelope-input');

export function readEnvelope() {

    elemEnvelopeInput.forEach(el => {
        function readText() {
            sessionStorage.setItem(`${this.name}`, `${this.value}`);
        }

        el.addEventListener('change', readText)
    })

    const keys = Object.keys(sessionStorage);
        
    for (let key of keys) {
        if (key.includes('envelope')) {
            elemEnvelopeInput.forEach(el => {
                if (el.name == key) {
                    el.value = sessionStorage.getItem(key);
                }
            })
        };
    }


    // for (let key of keys) {
    //     elemEnvelopeInput.forEach(el => {
    //         if (el.name == key) {
    //             el.value = sessionStorage.getItem(key);
    //         }
    //     })
    // }
}