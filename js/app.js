// Set variables up here for all of the events in the document ready.

const $scoreboard = $('#scoreboard');

const $body = $('body');

const $conanButton = $('.conan-button');

const $guyButton = $('.guy-button');

const $guyHealth = $('#guy-health');

const $conanHealth = $('#conan-health');

const $guyImage = $('#guy-pic');

const $conanImage = $('#conan-pic');

const $guyShield = $('#guy-shield');

const $conanShield = $('#conan-shield');

const $attackText = $('#attack-text');

const $attackImage = $('#attack');

const imageArray = ['images/Donkey_Sauce.jpg', 'images/frosted_tips.jpg', 'images/Flamethrower.png', 'images/alliteration.png', 'images/healthy_food.jpg', 'images/suit.jpg', 'images/Antidote.jpg', 'images/good_manners.jpg', 'images/missed.gif'];

const $guySelect = $('#guy-select');

const $conanSelect = $('#conan-select');

const $modal = $('#modal');



//////////////////////////////////////////
// All my functions go here
// Win game function
const winGame = (opponent) => {
  if (opponent.health <= 0){
    $attackText.text('Guy Fieri is victorious. Ed Hardy decals for everyone');
    $conanImage.css('transform', 'rotate(180deg)')
  }
}
// Lose game function
const loseGame = (opponent) => {
  if (opponent.health <= 0){
    $attackText.text('Guy Fieri has been defeated. Norm-core wins!');
    $guyImage.css('transform', 'rotate(180deg)')
  }
}
// Attack functions for animations
// Guy's attack
const guyAttack = () => {
  $attackImage.css('transform', 'translate(-200px)')
  setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 100);
  setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
  setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 200);
  setTimeout(function(){$attackImage.css('transform', 'translate(200px)')}, 400);
  setTimeout(function(){$attackImage.attr('src', '')}, 500);
}

// Conan's attack
const conanAttack = () => {
$attackImage.css('transform', 'translate(200px)')
setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 100);
setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 200);
setTimeout(function(){$attackImage.css('transform', 'translate(-200px)')}, 300);
setTimeout(function(){$attackImage.attr('src', '')}, 1000);
}
// Function for missed animation
const miss = () => {
  $attackImage.css('transform', 'translate(0px)')
  $attackImage.attr('src', imageArray[8]);
  setTimeout(function(){$attackImage.attr('src', '')}, 2000);
  $attackText.text('you missed');
}
// }
//////////////////////////////////////////
// Create my general fighter class here
class Character {
  // health will be the same for both characters
  constructor(name, health){
    this.name = name
    this.health = 400
  }
  // Attack methods that must do accuracy function, draw away health if hit, log message, and lead to an animation
  attack(opponent, move){
  }
  // method to allow character to guard and gain some health
  shield(){
    const shieldRando = Math.random() * 1;
    if (shieldRando > .5){
      $attackText.text('your defense has been bolstered by 50 hp');
    }
    else {
      $attackText.text('your shields short-circuited, no dice');
    }
}
}

/////////////////////////////////////////
// TVChef class goes here
class TVChef extends Character {
  //// Constructor with super
  constructor(name, health){
    super(name, health)
  //// Weapons
    this.weapons = {
      donkeySauce: {
        power: 50,
        accuracy: .7
      },
      frostedTipProjectiles: {
        power: 30,
        accuracy: .8
      },
      bowlingShirtFlameThrower: {
        power: 130,
        accuracy: .3
      },
      alliterativeShowTitles: {
        power: 60,
        accuracy: .5
      },
    }
  }
  // give message about partic attack
  attack(opponent, move){
  super.attack(opponent, move)
  const guyRando = Math.random() * 1;
  switch (move) {
  case 'Donkey Sauce':
    if (guyRando < this.weapons.donkeySauce.accuracy){
    $attackText.text('You have dealt ' + this.weapons.donkeySauce.power + ' damage to ' + opponent.name);
    opponent.health -= this.weapons.donkeySauce.power;
    $conanImage.css('transform', 'rotate(20deg)')
    setTimeout(function(){$conanImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', imageArray[0]);
    guyAttack();

  }
    else {
      miss();
    }
    break;
  case 'Frosted Tip Projectiles':
    if (guyRando < this.weapons.frostedTipProjectiles.accuracy){
    $attackText.text('You have dealt ' + this.weapons.frostedTipProjectiles.power + ' damage to ' + opponent.name);
    opponent.health -= this.weapons.frostedTipProjectiles.power;
    $conanImage.css('transform', 'rotate(20deg)')
    setTimeout(function(){$conanImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', imageArray[1]);
    guyAttack();
    }
    else {
      miss();
    }
    break;
  case 'Bowling Shirt Flamethrower':
  if (guyRando < this.weapons.bowlingShirtFlameThrower.accuracy){
    $attackText.text('You have dealt ' + this.weapons.bowlingShirtFlameThrower.power + ' damage to ' + opponent.name);
    opponent.health -= this.weapons.bowlingShirtFlameThrower.power;
    $conanImage.css('transform', 'rotate(20deg)')
    setTimeout(function(){$conanImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', imageArray[2])
    guyAttack();
    }
    else {
    miss();
  }
  break;
  case 'Alliterative TV Show':
  if (guyRando < this.weapons.alliterativeShowTitles.accuracy){
    $attackText.text('You have dealt ' + this.weapons.alliterativeShowTitles.power + ' damage to ' + opponent.name);
    opponent.health -= this.weapons.alliterativeShowTitles.power;
    $conanImage.css('transform', 'rotate(20deg)')
    setTimeout(function(){$conanImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', imageArray[3])
    guyAttack();
    }
    else {
    miss();
  }
  break;
}
winGame(wAA);
$conanButton.show();
$guyButton.hide();
$conanHealth.text(wAA.health);
}
  // give message about guard
  shield () {
super.shield ();
$guyButton.hide();
$conanButton.show();
}
}

/////////////////////////////////////////
// Enemy class goes here
class Enemy extends Character {
//// Constructor with super
  constructor(name, health){
    super(name, health)
//// Weapons
    this.weapons = {
      healthConsciousFood: {
        power: 30,
        accuracy: .8
      },
      appropriateClothing: {
        power: 10,
        accuracy: 1.0
      },
      midlifeCrisisAntidote: {
        power: 80,
        accuracy: .4
      },
      goodTableManners: {
        power: 40,
        accuracy: .5
      },
    }
  }
  // give message about partic attack
  attack(opponent, move){
  super.attack(opponent, move);
  const conanRando = Math.random() * 1;
  switch (move) {
  case 'Health Conscious Food':
  if (conanRando < this.weapons.healthConsciousFood.accuracy){
    $attackText.text('You have dealt ' + this.weapons.healthConsciousFood.power + ' damage to ' + opponent.name);
    opponent.health -= this.weapons.healthConsciousFood.power;
    $guyImage.css('transform', 'rotate(-60deg)')
    setTimeout(function(){$guyImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/healthy_food.jpg')
    conanAttack();
  }
  else {
    miss();
  }
    break;
  case 'Appropriate Clothing':
  if (conanRando < this.weapons.appropriateClothing.accuracy){
    $attackText.text('You have dealt ' + this.weapons.appropriateClothing.power + ' damage to ' + opponent.name);
    opponent.health -= this.weapons.appropriateClothing.power;
    $guyImage.css('transform', 'rotate(-60deg)')
    setTimeout(function(){$guyImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/suit.jpg')
    conanAttack();
  }
  else {
    miss();
  }
  break;
  case 'Mid-life Crisis Antidote':
  if (conanRando < this.weapons.midlifeCrisisAntidote.accuracy){
    $attackText.text('You have dealt ' + this.weapons.midlifeCrisisAntidote.power + ' damage to ' + opponent.name);
    opponent.health -= this.weapons.midlifeCrisisAntidote.power;
    $guyImage.css('transform', 'rotate(-60deg)')
    setTimeout(function(){$guyImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/Antidote.jpg')
    conanAttack();
  }
  else {
    miss();
  }
    break;
  case 'Good Table Manners':
  if (conanRando < this.weapons.goodTableManners.accuracy){
    $attackText.text('You have dealt ' + this.weapons.goodTableManners.power + ' damage to ' + opponent.name);
    opponent.health -= this.weapons.goodTableManners.power;
    $guyImage.css('transform', 'rotate(-60deg)')
    setTimeout(function(){$guyImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/good_manners.jpg')
    conanAttack();
  }
  else {
    miss();
  }
    break;
}
loseGame(guy);
$conanButton.hide();
$guyButton.show();
$guyHealth.text(guy.health);
}
  // give message about guard
  shield () {
super.shield ()
$conanButton.hide();
$guyButton.show();
  }
}

const guy = new TVChef('Guy');

const wAA = new Enemy('Well Adjusted Adult');


// commented this out for practice console.log(wAA.weapons.midlifeCrisisAntidote.power);

// guy.attack(wAA, 'Frosted Tip Projectiles');
$(()=> {
  /// Display score


  /// All my onclick events
  $("#donkey-sauce").on('click', ()=>{guy.attack(wAA, $(event.currentTarget).text())
  });
  $("#alliterative-tv-show").on('click', ()=>{guy.attack(wAA, $(event.currentTarget).text())
  });
  $("#bowling-shirt-flamethrower").on('click', ()=>{guy.attack(wAA, $(event.currentTarget).text())
  });
  $("#frosted-tip-projectiles").on('click', ()=>{guy.attack(wAA, $(event.currentTarget).text())
  });
  $("#health-conscious-food").on('click', ()=>{
    wAA.attack(guy, $(event.currentTarget).text())
  });
  $("#appropriate-clothing").on('click', ()=>{
    wAA.attack(guy, $(event.currentTarget).text())
  });
  $("#mid-life-crisis-antidote").on('click', ()=>{
    wAA.attack(guy, $(event.currentTarget).text())
  });
  $("#good-table-manners").on('click', ()=>{
    wAA.attack(guy, $(event.currentTarget).text())
  });
  $guyShield.on('click', () => {
    guy.shield()
  });
  $conanShield.on('click', () => {
    wAA.shield()
  });
  $conanSelect.on('click', () => {
    $guyButton.hide();
    $modal.css('display', 'none');
  });
  $guySelect.on('click', () => {
    $conanButton.hide();
    $modal.css('display', 'none');
  });

  const $openBtn = $('#openModal');

const $modal = $('#modal');

const $closeBtn = $('#close');



const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}
$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);

// set a timer to automatically close Modal
setTimeout(openModal, 200);

// $guyHealth.text(wAA.health);

  // on click events for each of the attacks
  // we will draw the html text from the event current target to get the input
})
