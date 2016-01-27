var heroGame = require('./hero_game');
var hero = heroGame.hero;
var bread = heroGame.bread;
var apples = heroGame.apples;
var splinter = heroGame.rat;

var chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;


describe('assert', function(){
  it('is name of hero Michael', function(){
    assert.equal('Michael', hero.name);
  });
  it('can hero talk', function(){
    assert.equal('My name is Michael', hero.talk());
  });
  it('bread is bread and has value 10', function(){
    assert.equal('bread', bread.name);
    assert.equal(10, bread.value);
  });
  it('eating bread has increased health to 110', function(){
    assert.equal(110, hero.health);
    hero.health = 100;
  });
  it('eating apples has increased health to 130', function(){
    hero.eat(apples)
    assert.equal(130, hero.health);
    hero.health = 100;
  });
  it('apples has been inected by splinter and now has a value of -100', function(){
    splinter.infect(apples);
    assert.equal(-100, apples.value);
    apples.value = 20;
  });
  it('eating infected apples will have reduce health to -150', function(){
    splinter.infect(apples);
    hero.eat(apples)
    assert.equal(0, hero.health);
    apples.value = 20;
    hero.health = 100;
  });
  


})
