
let singapOption = "A group excursion tour to Singapore, Indonesia and Malaysia begins with arrival in Singapore. The price includes: excursions to amazing places and attractions, air travel, hotel accommodation, medical insurance.";
let turkOption = "A vacation in fabulous Istanbul or resort Alanya will be absolutely cool, but if you want to forget about everything in Fethiye or ride a hot air balloon over Cappadocia, you will have to spend more.";
let ukrOption = "Budget holiday on Lake Synevyr for 3 days. The price includes a hotel, excursions to local attractions and health treatments. Swimming in the lake is strictly prohibited. Ideal for a family holiday!";
let czechOption = "If you are not connoisseurs of ski holidays, but lovers of beer and Christmas parties, Prague is for you. Winter time is ideal for traveling to the capital of the Czech Republic because it is the time of Christmas markets and holidays. The incredibly fabulous city is especially beautiful in the winter season. Sparkling illumination, hot mulled wine and extraordinary architecture. You can get to the Czech Republic by bus and tour. There are many of them from Lviv and Uzhgorod. Airplanes are quite expensive, but you can arrive on your own by bus. Or choose a combined flight: alternatively, capture the beautiful Polish cities of Krakow or Wroclaw, going there by plane for 10-30 euros. And then take a train or bus to Prague. The cost of an apartment in the very center of Prague is about 70 dollars. per day, but you can find much cheaper accommodation in more remote places.";
let startPhrase = alert("Hello, everyone.  We provide you with tourist travel services abroad. Let's see what we can offer you!");
let countryChoise = alert("Countries where you can go: Ukraine, Czech Republic, Turkey, Singapore.")
let userCountry = prompt("Enter country, which one do you want to visit? Options: Ukraine, Czech Republic, Turkey, Singapore.")

switch(true){
    case userCountry == 'Ukraine' || userCountry == 'ukraine':
        alert("To visit this country your budget must be at least $450")
        break;
    case userCountry == 'Czech Republic' || userCountry == 'czech republic' || userCountry == 'Czech republic' || userCountry == 'czech Republic':
        alert("To visit this country your budget must be at least $800")
        break;
    case userCountry == 'Turkey' || userCountry == 'turkey':
        alert("To visit this country your budget must be at least $1300")
        break;   
    case userCountry == 'Singapore' || userCountry == 'singapore':
        alert("To visit this country your budget must be at least $1800")
        break;     
}

const budget = prompt("Enter your travel budjet")

switch (true){
    case budget <= 449 || budget >= 2400:
        console.log("Unfortunately, there is currently no trip cheaper than $500. If this option becomes available, we will notify you about it)")
        break;
    case budget <= 799:
        console.log("Ukraine is your option");
        console.log(ukrOption);
        break;
    case budget <= 1299:
        console.log("Czech is your option");
        console.log(czechOption);
        break;
    case budget <= 1799:
        console.log("Turkey is your option");
        console.log(turkOption);
        break;
    case budget <= 2300:
        console.log("Singapore is your option");
        console.log(singapOption);
        break;
    default:
        console.log("Something went wrong... Try again!")
}