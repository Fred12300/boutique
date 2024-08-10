import { getProducts } from "./products"
import { accountConnect } from "./account"


const app=document.querySelector("#app")

export const createHeader = () => {
    let container = document.createElement("section")
        container.innerHTML = `<header>
        <div id="logoAndBrand">
            <div id="logo"></div>
            <div id="brand">Fred's Boutique</div>
        </div>
        <div id="account">Mon compte</div>
        <nav>
            <span id="productsSelection">Nos produits</span>
            <div id="sales">
                <span>Catégories</span>
                <ul>
                    <li class="men">Vêtements Homme</li>
                    <li class="women">Vêtements Femme</li>
                    <li class="jewels">Bijoux</li>
                    <li class="elec">Electronics</li>
                </ul>
            </div>
            <span id="contact">Contact</span>
        </nav>
        <div id="cart">Voir mon panier</div>
    </header>`

    app.appendChild(container)

    let account = document.querySelector("#account")
    let products = document.querySelector("#productsSelection")
    let men = document.querySelector(".men")
    let women = document.querySelector(".women")
    let jewels = document.querySelector(".jewels")
    let elec = document.querySelector(".elec")
    let contact = document.querySelector("#contact")
    let cart = document.querySelector("#cart")

    account.addEventListener("click", () => {
        accountConnect()
    })

    products.addEventListener("click", () => {
        console.log("all products")
        getProducts("")})

    men.addEventListener("click", () => {
        console.log("Men products")
        getProducts("/category/men's clothing")})

    women.addEventListener("click", () => {
        console.log("Women products")
        getProducts("/category/women's clothing")})

    jewels.addEventListener("click", () => {
        console.log("Jewelery products")
        getProducts("/category/jewelery")})

    elec.addEventListener("click", () => {
        console.log("Electronics products")
        getProducts("/category/electronics")})
}
    