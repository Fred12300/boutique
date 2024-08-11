const productsZone = document.querySelector("#products");
const paginationZone = document.querySelector('#pagination')
let nbByPage = 5;
let actualPage = 1;

export const createCard = (articles) => {
    articles.forEach((article) => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card">
            <h4 class="title">${article.title}</h4>
            <div class="middle">
                <img src="${article.image}" alt="">
                <p>${article.description}</p>
            </div>
            <div class="bottom">
                <p>${article.rating.rate}</p>
                <p>${article.price}</p>
                <button>add</button>
            </div>
        </div>`;
        productsZone.appendChild(card);
    });
};

const displayCards = (results) => {
    let beginning = (actualPage - 1) * nbByPage;
    let end = beginning + nbByPage;
    let productsToDisplay = results.slice(beginning, end);
    createCard(productsToDisplay);
};

export const createPagination = (results) => {
    console.log("---createPagination---");
    productsZone.innerHTML = ''
    paginationZone.innerHTML = '';

    let nbPages = Math.ceil(results.length / nbByPage);
    for (let i = 1; i <= nbPages; i++) {
        let paginationBtn = document.createElement('button');
        paginationBtn.textContent = i;
        paginationBtn.classList.add('paginationBtn');
        if (i === actualPage) {
            paginationBtn.classList.add('active');
        }
        paginationBtn.addEventListener('click', () => {
            actualPage = i;
            displayCards(results);
            createPagination(results);
        });
        paginationZone.appendChild(paginationBtn);
    }
    displayCards(results)
};

export const getProducts = async (what) => {
    try {
        const response = await fetch("https://fakestoreapi.com/products" + what);
        const results = await response.json();
        console.log(results);
        createPagination(results);
    } catch (error) {
        console.error('Ooops', error);
    }
};