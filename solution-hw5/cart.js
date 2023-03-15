const cart = [];

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


var rollOne = new Roll("Original","Sugar Milk","One",2.49)
cart.push(rollOne)
var rollTwo = new Roll("Walnut","Vanilla Milk","Twelve",3.49);
cart.push(rollTwo);
var rollThree = new Roll("Raisin","Sugar Milk","Three",2.99);
cart.push(rollThree);
var rollFour = new Roll("Apple","Original","Three",3.49);
cart.push(rollFour);


let totalPrice = 0;

function addToCart() {
    var roll1 = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(roll1);
    console.log(cart);
}

function displayToCart(roll) {
    const temp = document.getElementById('carttemplate');
    const updated = temp.content.cloneNode(true);
    roll.element = updated.querySelector('.firstcontainer');
    document.querySelector('.cartcomplete').prepend(roll.element);
    document.getElementById('cartpage').src = roll.imageFile;
    document.getElementById('rollname').innerText = roll.type + ' Cinnamon Roll';
    document.getElementById('glazingtype').innerText = "Glazing: " + roll.glazing;
    document.getElementById('packsize').innerText = "Pack Size: " + roll.size;
    document.getElementById('cartprice').innerText = "$" + roll.actualPrice;

    /* update price */
    totalPrice += parseFloat(roll.actualPrice);
    console.log(totalPrice);
    document.getElementById('totalprice').innerText = "$" + totalPrice;

    /* remove roll */
    const remove = document.querySelector('.remove');
    remove.addEventListener('click', () => {
        totalPrice -= parseFloat(roll.actualPrice);
        document.getElementById('totalprice').innerText = "$" + (Math.abs(((totalPrice).toFixed(2))));
        roll.element.remove();})
}

for (let item of cart) {
    displayToCart(item);
}
