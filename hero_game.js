// Tasks: A. - Create a constructor to create Hero character. - A Hero has a name - A Hero has health - A Hero has a favourite food - A Hero can talk saying their name

// B. - Create a food constructor. - Food should have a name - Food should have a replenishment value

// C. - A hero should be able to eat food, and health should go up by the replenishment value - If the food is their favourite food, their health should go up by 1.5 * value.

// Further. D. - Create a Rat constructor - Rats should be able to touch food, if they do the food become poisonous. - Heroes that eat poisonous food should lose health.

// E. Be creative. Extend the game

//Question A//
var Hero = function (name, health, fav_food) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
}

Hero.prototype ={
  talk: function(){
    return ('My name is '+this.name);
  },
  eat: function(food){
    if(this.fav_food === food.name && food.value > 0){
    this.health += (food.value*1.5);
    }else{
    this.health += food.value;
    }
  },
}

var michael = new Hero("Michael", 100, "apples")

//Question B//
var Food = function (name, value){
  this.name = name;
  this.value = value;
}

var bread = new Food("bread", 10)
var apples = new Food("apples", 20)

//Question C//
michael.eat(bread);

//Question D//
var Rat = function(name, damage){
  this.name = name;
  this.damage = damage
}

Rat.prototype = {
  infect:function(food){
    food.value = (-10 * this.damage);
  },
}

var roland = new Rat("Roland", 1)
var splinter = new Rat("Splinter", 10)






module.exports = {
  hero: michael,
  bread: bread,
  apples: apples,
  rat: splinter
};



