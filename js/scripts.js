//Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
};

Pizza.prototype.cost = function() {
var cost = 0;
for(var i = 0; i < this.topping.length; i++) {
  cost += parseFloat(this.topping[i]);
}
if (this.size === "small") {
  return cost += 8;
} else if (this.size === "medium") {
  return cost += 12;
} else if (this.size === "large") {
  return cost += 14;
  }
}

$(document).ready(function() {
  $("form#pizza-form").submit(function(event) {
      event.preventDefault();
      $("#cost-show").show();

      var inputtedSize = $("select#size").val();
      var inputtedToppings = [];
      parseFloat($("input:checkbox:checked").each(function() {
      inputtedToppings.push($(this).val());
      console.log(inputtedToppings);
    }));

      var newPizza = new Pizza(inputtedSize, inputtedToppings);
      var displayPrice = newPizza.cost().toFixed(2);
      $(".size-text").text(inputtedSize);
      $(".price").text(displayPrice);

  });
});
