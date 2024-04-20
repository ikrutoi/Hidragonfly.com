import { validationValueSessionStorage } from "./envelope-valid-ses-stor.js";

const elemEnvelopeInput = document.querySelectorAll('.envelope-input');

export function readEnvelope() {
  
    elemEnvelopeInput.forEach(el => {
        function readText() {
            sessionStorage.setItem(`${this.name}`, `${this.value}`);
        }
        
        el.addEventListener('change', readText)
    })

    validationValueSessionStorage();
}