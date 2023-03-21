//const cart = [];

var cart = JSON.parse(localStorage.getItem("cart"));
if (cart == null) {
    cart = []; 
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}
console.log(cart);

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


let totalPrice = 0;


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

    //update price
    totalPrice += parseFloat(roll.actualPrice);
    console.log(totalPrice);
    document.getElementById('totalprice').innerText = "$" + totalPrice;

    const remove = document.querySelector('.remove');
    remove.addEventListener('click', () => {
        totalPrice -= parseFloat(roll.actualPrice);
        document.getElementById('totalprice').innerText = "$" + (Math.abs(((totalPrice).toFixed(2))));
        roll.element.remove();
        cart = removeElement(cart,roll);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
    })
}

function removeElement(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

for (let item of cart) {
    displayToCart(item);
}
