let startPrice = prompt("Введiть цiну товару"); 
let quantity = prompt("Введiть кiлькiсть одиниць товару");
let discountCode = prompt("Ваш код знижки"); 
let discount = 0;
let totalPrice = startPrice * quantity * (1 - discount / 100);

switch (discountCode) {
    case "NEWYEAR":
        discount = 20;
        break;
    case "BLACKFRIDAY":
        discount = 30;
        break;
    case "SUMMERSALE":
        discount = 15;
        break;
    default:
        discount = 5;
}

if (quantity >= 3) {
    const addDiscount = 5;
    totalPrice *= (1 - addDiscount / 100);
}

if (totalPrice > 1000) {
    const addDiscount = 10;
    totalPrice *= (1 - addDiscount / 100);
}

console.log("Кінцева ціна товару:", totalPrice);