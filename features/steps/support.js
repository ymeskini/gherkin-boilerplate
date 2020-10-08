const {
  When,
  Then,
  setWorldConstructor,
  Given,
} = require("@cucumber/cucumber");
const assert = require("assert").strict;

class CustomWorld {
  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);

Given("a variable set to {int}", function (number) {
  this.setTo(number);
});

When("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
});
