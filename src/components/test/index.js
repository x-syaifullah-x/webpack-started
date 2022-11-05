import recaptcha from "./index.html"

export default class Test extends HTMLElement {

    static ELEMENT_NAME = "element-test"

    connectedCallback() {
        this.innerHTML = recaptcha
    }
}

// EXAMPLE
//  const recaptcha = customElements.define(Recaptcha.ELEMENT_NAME, Recaptcha)
//  const a = document.createElement(Recaptcha.ELEMENT_NAME)