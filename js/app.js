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

const imageArray = ['images/Donkey_Sauce.jpeg', 'images/Flamethrower.png', 'images/alliteration.png', 'frosted_tips.jpg'];



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

// Reset positioning via set timeout
// const resetPosition = () => {
//
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
        power: 25,
        accuracy: .7
      },
      frostedTipProjectiles: {
        power: 10,
        accuracy: 1.0
      },
      bowlingShirtFlameThrower: {
        power: 100,
        accuracy: .1
      },
      alliterativeShowTitles: {
        power: 40,
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
    $attackText.text('You have dealt 25 damage to ' + opponent.name);
    opponent.health -= 25;
    $conanImage.css('transform', 'rotate(20deg)')
    setTimeout(function(){$conanImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/Donkey_Sauce.jpg')
    $attackImage.css('transform', 'translate(-200px)')
    setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 100);
    setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(200px)')}, 300);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);

  }
    else {
      $attackText.text('you missed');
    }
    break;
  case 'Frosted Tip Projectiles':
    if (guyRando < this.weapons.frostedTipProjectiles.accuracy){
    $attackText.text('You have dealt 10 damage to ' + opponent.name);
    opponent.health -= 10;
    $conanImage.css('transform', 'rotate(20deg)')
    setTimeout(function(){$conanImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/frosted_tips.jpg')
    $attackImage.css('transform', 'translate(-200px)')
    setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 100);
    setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(200px)')}, 300);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    }
    else {
      $attackText.text('you missed');
    }
    break;
  case 'Bowling Shirt Flamethrower':
  if (guyRando < this.weapons.bowlingShirtFlameThrower.accuracy){
    $attackText.text('You have dealt 100 damage to ' + opponent.name);
    opponent.health -= 100;
    $conanImage.css('transform', 'rotate(20deg)')
    setTimeout(function(){$conanImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/Flamethrower.png')
    $attackImage.css('transform', 'translate(-200px)')
    setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 100);
    setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(200px)')}, 300);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    }
    else {
    $attackText.text('you missed');
  }
  break;
  case 'Alliterative TV Show':
  if (guyRando < this.weapons.alliterativeShowTitles.accuracy){
    $attackText.text('You have dealt 40 damage to ' + opponent.name);
    opponent.health -= 40;
    $conanImage.css('transform', 'rotate(20deg)')
    setTimeout(function(){$conanImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/alliteration.png')
    $attackImage.css('transform', 'translate(-200px)')
    setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 100);
    setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(200px)')}, 300);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    }
    else {
    $attackText.text('you missed');
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
        power: 25,
        accuracy: .7
      },
      appropriateClothing: {
        power: 10,
        accuracy: 1.0
      },
      midlifeCrisisAntidote: {
        power: 100,
        accuracy: .1
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
    $attackText.text('You have dealt 25 damage to ' + opponent.name);
    opponent.health -= 25;
    $guyImage.css('transform', 'rotate(-60deg)')
    setTimeout(function(){$guyImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/healthy_food.jpg')
    $attackImage.css('transform', 'translate(200px)')
    setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 100);
    setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(-200px)')}, 300);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
  }
  else {
    $attackText.text('you missed');
  }
    break;
  case 'Appropriate Clothing':
  if (conanRando < this.weapons.appropriateClothing.accuracy){
    $attackText.text('You have dealt 10 damage to ' + opponent.name);
    opponent.health -= 10;
    $guyImage.css('transform', 'rotate(-60deg)')
    setTimeout(function(){$guyImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/suit.jpg')
    $attackImage.css('transform', 'translate(200px)')
    setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 100);
    setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(-200px)')}, 300);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
  }
  else {
    $attackText.text('you missed');
  }
  break;
  case 'Mid-life Crisis Antidote':
  if (conanRando < this.weapons.midlifeCrisisAntidote.accuracy){
    $attackText.text('You have dealt 100 damage to ' + opponent.name);
    opponent.health -= 100;
    $guyImage.css('transform', 'rotate(-60deg)')
    setTimeout(function(){$guyImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/Antidote.jpg')
    $attackImage.css('transform', 'translate(200px)')
    setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 100);
    setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(-200px)')}, 300);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
  }
  else {
    $attackText.text('you missed');
  }
    break;
  case 'Good Table Manners':
  if (conanRando < this.weapons.goodTableManners.accuracy){
    $attackText.text('You have dealt 40 damage to ' + opponent.name);
    opponent.health -= 40;
    $guyImage.css('transform', 'rotate(-60deg)')
    setTimeout(function(){$guyImage.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', 'images/good_manners.jpg')
    $attackImage.css('transform', 'translate(200px)')
    setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 100);
    setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 200);
    setTimeout(function(){$attackImage.css('transform', 'translate(-200px)')}, 300);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
  }
  else {
    $attackText.text('you missed');
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
setTimeout(openModal, 2000);

// $guyHealth.text(wAA.health);

  // on click events for each of the attacks
  // we will draw the html text from the event current target to get the input
})
