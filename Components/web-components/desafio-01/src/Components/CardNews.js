class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const tittle = document.createElement("h1");
        tittle.textContent = this.getAttribute("tittle")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(tittle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo");
        newsImage.alt = "Darth vader encarando você fixamente";

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            
        .card {
            width: 80%;
            margin: 0 auto;
            padding: 15px;
            box-shadow: 2px 8px 37px 0px rgba(0, 0, 0, 0.41);
            -webkit-box-shadow: 2px 8px 37px 0px rgba(0, 0, 0, 0.41);
            -moz-box-shadow: 2px 8px 37px 0px rgba(0, 0, 0, 0.41);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 0 0 10px;
        }

        .card__left h1 {
            margin: 15px 0 0 0;
            font-size: 25px;
        }

        .card__left p {
            color: gray;
        }

        .card__left span {
            font-weight: 400;
        }
        
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);