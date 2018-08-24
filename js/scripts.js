//Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
};

Pizza.prototype.cost = function() {
  var cost = 0;
  if (this.size === "small") {
    return cost += 8 + (this.topping * .75);
  } else if (this.size === "medium") {
     return cost += 12 + (this.topping * .75);
  } else if (this.size === "large") {
    return cost += 14 + (this.topping * .75);
  }
}


$(document).ready(function() {
  $("form#pizza-form").submit(function(event) {
      event.preventDefault();

      var inputtedSize = $("select#size").val();
      var inputtedToppings = [];
      $("input:checkbox:checked").each(function() {
      inputtedToppings.push($(this).val());
      });


      var newPizza = new Pizza(inputtedSize, inputtedToppings);
      var displayPrice = newPizza.cost();
      $(".price").text(displayPrice);

  });
});
