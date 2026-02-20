var burgerName;
var friesName;
var sodaName;
var burgerTotal;
var friesTotal;
var sodaTotal;
var orderTotal = 0;
var deliveryConfirm = false;

alert("Hi there! Thanks for choosing Burger Mart as your preferred online ordering system. Below is our menu\n\nBurgers:\n1. Large Dusty: $3\n2. Small Dusty: $2\n3. Big chief: $7\n\nFries:\n1. Small fries: $1\n2. Large fries: $2\n\nSoda:\n1. Small soda: $1\n2. Large soda: $1.5");

var burgerVar = prompt("To start placing your order, please select your burger:\n1. Large Dusty: $3\n2. Small Dusty: $2\n3. Big chief: $7");
var friesVar = prompt("Select your fries:\n1. Small fries: $1\n2. Large fries: $2");
var sodaVar = prompt("Select your soda:\n1. Small soda: $1\n2. Large soda: $1.5");

function mealOrder(burger, fries, soda) 
{
    this.burger = burger;
    if (this.burger == 1) 
    {
        burgerName = "Large Dusty";
        burgerTotal = 3;
    } else if (this.burger == 2) 
    {
        burgerName = "Small Dusty";
        burgerTotal = 2;
    } else if (this.burger == 3) 
    {
        burgerName = "Big chief";
        burgerTotal = 7;
    }

    this.fries = fries;
    if (this.fries == 1) 
    {
        friesName = "Small fries";
        friesTotal = 1;
    } else if (this.fries == 2) 
    {
        friesName = "Large fries";
        friesTotal = 2;
    }

    this.soda = soda;
    if (this.soda == 1) 
    {
        sodaName = "Small soda";
        sodaTotal = 1;
    } else if (this.soda == 2) 
    {
        sodaName = "Large soda";
        sodaTotal = 1.5;
    }

    calculateTotal(burgerTotal, friesTotal, sodaTotal);

    this.delivery = function() 
    {
        var deliveryVar = prompt("Would you like your order to be delivered? (yes or no)");
        if (deliveryVar == "yes") 
        {
            deliveryConfirm = true;
            // FIX 4: add $5 delivery charge when user chooses delivery
            orderTotal += 5;
        } else if (deliveryVar == "no") 
        {
            deliveryConfirm = false;
        }
    };

    this.displayOrder = function() 
    {
        var deliveryLine = deliveryConfirm ? "\nDelivery charge: $5" : "\nPickup (no delivery charge)";
        alert("Your order summary:\n\nBurger: " + burgerName + "\nFries: " + friesName + "\nSoda: " + sodaName + deliveryLine + "\n\nTotal: $" + orderTotal);
    };

    function calculateTotal(burger, fries, soda) 
    {
        orderTotal = burger + fries + soda;
    }
}

var order = new mealOrder(burgerVar, friesVar, sodaVar);
order.delivery();
order.displayOrder();