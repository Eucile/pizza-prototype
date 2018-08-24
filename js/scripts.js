//Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
};

Pizza.prototype.cost = function() {
  var cost = '';
  if (this.size === "small") {
    return cost += 8 + (this.topping.length);
  } else if (this.size === "medium") {
     return cost += 12 + (this.topping.length);
  } else if (this.size === "large") {
    return cost += 14 + (this.topping.length);
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
      var displayPrice = newPizza.cost();
      $(".price").text(displayPrice);

  });
});
