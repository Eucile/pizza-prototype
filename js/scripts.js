//Business Logic

function Pizza(topping, size, quantity) {
  this.toppings = topping;
  this.size = size;
  this.quantity = quantity;
}

Pizza.prototype.cost = function() {
  var cost = 0;
  if (this.size === "small") {
    //inster math logic here
  } else if (this.size === "medium") {
    //insetr mathi logic here
  } else if (this.size === "large") {
    ///math logic here 
  }
}
