var cart = JSON.parse(localStorage.getItem("cart"));
if (cart == null) {
    cart = []; 
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart() {
    var roll1 = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(roll1);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}

let glazingOptions = [
    {
        glaze: 'original',
        price: 0
    },
    {
        glaze: 'sugar',
        price: 0
    },
    {
        glaze: 'vanilla',
        price: 0.5
    },
    {
        glaze: 'double chocolate',
        price: 1
    }
]

var select = document.getElementById("glazingOptions");
for(index in glazingOptions) {
    select.options[select.options.length] = new Option(glazingOptions[index].glaze, glazingOptions[index].price);
}

let packSizeOptions = [
    {
        size: 'One',
        price: 1
    },
    {
        size: 'Three',
        price: 3
    },
    {
        size: 'Six',
        price: 5
    },
    {
        size: 'Twelve',
        price: 10
    }
]

let glazingPrices = {
    'Original':0,
    'Sugar Milk':0,
    'Vanilla Milk':0.5,
    'Double Chocolate': 1
}

let packPrices = {
    'One': 1,
    'Three':3,
    'Six':5,
    'Twelve':10
}

var select2 = document.getElementById("packSizeOptions");
for(index in packSizeOptions) {
    select2.options[select2.options.length] = new Option(packSizeOptions[index].size, packSizeOptions[index].price);
}


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const headerElement = document.querySelector('#name');
headerElement.innerText = rollType + ' Cinnamon Roll ';

const rollImage = document.querySelector('#detailimg');
rollImage.src = './' + rolls[rollType]["imageFile"];



let productPrice = document.getElementById('total');
var basePrice = rolls[rollType]["basePrice"];
var rollGlazing = 'Original';
var packSize = 'One';
var glazingPrice = 0;
var packPrice = 1;

productPrice.innerText = (basePrice + glazingPrice) * packPrice;

function glazingChange(element) {
    const priceChange = parseFloat(element.value);
    glazingPrice = priceChange;
    rollGlazing = element.options[element.selectedIndex].text;
    let totalPrice = (basePrice + priceChange) * packPrice;
    productPrice.innerText = totalPrice.toFixed(2);
}

function packChange(element) {
    const priceChange2 = parseFloat(element.value);
    packPrice = priceChange2;
    packSize = element.options[element.selectedIndex].text;
    let totalPrice = (basePrice + glazingPrice) * packPrice;
    productPrice.innerText = totalPrice.toFixed(2);
}


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.actualPrice = ((this.basePrice + glazingPrices[this.glazing]) * packPrices[this.size]).toFixed(2);
        this.imageFile = "./" + rolls[this.type]['imageFile'];
    }
}