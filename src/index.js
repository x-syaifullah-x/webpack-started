import Test from "./components/test/index.js"

const elementBody = document.getElementById("id-body")
customElements.define(Test.ELEMENT_NAME, Test)
const testElement = document.createElement(Test.ELEMENT_NAME)
elementBody.appendChild(testElement)