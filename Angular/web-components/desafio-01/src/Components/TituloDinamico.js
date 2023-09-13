class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // Obtenha o valor do atributo "titulo" após o componente ser conectado
        const titulo = this.getAttribute("titulo");

        // Crie a base do componente
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = titulo;

        // Estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: blue;
            }
        `;

        // Anexe ao Shadow DOM
        const shadow = this.shadowRoot;
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);
