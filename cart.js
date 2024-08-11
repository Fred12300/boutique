import { userId } from './main'

const getProduct = async (prod) => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/" + prod);
        const results = await response.json();
        console.log("prod " + results.title);
        const productsZone = document.querySelector("#products");
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="card">
            <h4 class="title">${results.title}</h4>
            <div class="middle">
                <img src="${results.image}" alt="">
                <p>${results.description}</p>
            </div>
            <div class="bottom">
                <p>${results.price}</p>
                <button>add</button>
            </div>
        </div>`;
        productsZone.appendChild(card);
    } catch (error) {
        console.error('Ooops', error);
    }
}


export const createCart = () => {
    let productsZone = document.querySelector("#products")
    const paginationZone = document.querySelector('#pagination')
    paginationZone.innerHTML = ""
    productsZone.innerHTML = ""
    const getCart = async (who) => {
        console.log("who " + who)
        try {
            const response = await fetch("https://fakestoreapi.com/carts/" + who);
            const results = await response.json();
            console.log(results.products);
            results.products.map((x) => {
                getProduct(x.productId)
            })
            } catch (error) {
            console.error('Ooops', error);
        }
    }
    getCart(userId.mainId)
}