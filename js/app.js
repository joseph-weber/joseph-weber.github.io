// Set variables up here for all of the events in the document ready.

const $scoreboard = $('#scoreboard');

const $body = $('body');

const $player2Button = $('.player2-button');

const $player1Button = $('.player1-button');

const $player1Health = $('#player1-health');

const $player2Health = $('#player2-health');

const $player1Image = $('#player1-pic');

const $player2Image = $('#player2-pic');

const $player1Button1 = $('#player1-button1');

const $player1Button2 = $('#player1-button2');

const $player1Button3 = $('#player1-button3');

const $player1Button4 = $('#player1-button4');

const $player2Button1 = $('#player2-button1');

const $player2Button2 = $('#player2-button2');

const $player2Button3 = $('#player2-button3');

const $player2Button4 = $('#player2-button4');

const $player1Shield = $('#player1-shield');

const $player2Shield = $('#player2-shield');

const $attackText = $('#attack-text');

const $attackImage = $('#attack');

const $onePlayerBtn = $('#one-player');

const $twoPlayerBtn = $('#two-player');

const $player1Name = $('#player1-name');

const $player2Name = $('#player2-name');

const $reset = $('#reset');

const $playerSelectorButtons = $('.player-selector');

let player1;

let player2;

let randomPlayerSelector = Math.floor(Math.random() * 2 + 1);

const player2MoveArray = ["player2-button1", "player2-button2", "player2-button3", "player2-button4", "player2-button5"]

const imageArray = ['images/Donkey_Sauce.jpg', 'images/frosted_tips.jpg', 'images/Flamethrower.png', 'images/alliteration.png', 'images/healthy_food.jpg', 'images/suit.jpg', 'images/Antidote.jpg', 'images/good_manners.jpg', 'images/missed.gif', 'images/Fieri_Shield.jpg', 'images/shield.png', 'images/short_circuit.png'];


///////////////////////////
// Two variables for selecting character for 2 player version
//////////////////////////
const $player1Select = $('#player1-select');

const $player2Select = $('#player2-select');

const $player3Select = $('#player3-select');


//// Variable for modal manipulation
const $modal = $('#modal');


//////// Variable for multiplayer functionality
let player;



//////////////////////////////////////////
// All my functions go here
// Win game function
const winGame = (opponent) => {
  if (opponent.health <= 0){
    $attackText.text(player1.name + ' is victorious.');
    $player2Image.css('transform', 'rotate(180deg)');
    $player1Button.css('visibility', 'hidden');
    $player2Button.css('visibility', 'hidden');
    $player1Image.css('transform', 'translate(400px, -150px)');
  }
}
// Lose game function
const loseGame = (opponent) => {
  if (opponent.health <= 0){
    $attackText.text(player2.name + ' is the champion.');
    $player1Image.css('transform', 'rotate(180deg)');
    $player1Button.css('visibility', 'hidden');
    $player2Button.css('visibility', 'hidden');
    $player2Image.css('transform', 'translate(-400px, -150px)');
  }
}
// Attack functions for animations
// Guy's attack
const player1Attack = (attacker, opponent, move) => {
  if (player === 2){
  const player1Rando = Math.random() * 1;
  switch (move) {
  case 'player1-button1':
    if (player1Rando < attacker.weapons.move1.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move1.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move1.power;
    $player2Image.css('transform', 'rotate(20deg)')
    setTimeout(function(){$player2Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move1.attackImage);
    player1AttackAnimation();
  }
    else {
      miss(attacker);
    }
    break;
  case 'player1-button2':
    if (player1Rando < attacker.weapons.move2.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move2.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move2.power;
    $player2Image.css('transform', 'rotate(20deg)')
    setTimeout(function(){$player2Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move2.attackImage);
    player1AttackAnimation();
    }
    else {
      miss(attacker);
    }
    break;
  case 'player1-button3':
  if (player1Rando < attacker.weapons.move3.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move3.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move3.power;
    $player2Image.css('transform', 'rotate(20deg)')
    setTimeout(function(){$player2Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move3.attackImage)
    player1AttackAnimation();
    }
    else {
    miss(attacker);
  }
  break;
  case 'player1-button4':
  if (player1Rando < attacker.weapons.move4.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move4.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move4.power;
    $player2Image.css('transform', 'rotate(20deg)')
    setTimeout(function(){$player2Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move4.attackImage)
    player1AttackAnimation();
    }
    else {
    miss(attacker);
  }
  break;
  case 'player1-shield':
  if (player1Rando > attacker.weapons.move5.accuracy){
    $attackText.text(attacker.name + '\'s defense has been bolstered by ' + attacker.weapons.move5.power);
    $attackImage.css('transform', 'translate(0)');
    $attackImage.attr('src', attacker.weapons.move5.attackImage);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    attacker.health += attacker.weapons.move5.power;
    $player1Health.text(attacker.health);
    loseGame(player1);
  }
  else {
    console.log('miss');
    $attackText.text(attacker.name + '\'s shields short-circuited, ' + attacker.weapons.move5.misfire + ' health lost');
    attacker.health -= attacker.weapons.move5.misfire;
    $player1Health.text(attacker.health);
    $attackImage.css('transform', 'translate(0)');
    $attackImage.attr('src', attacker.weapons.move5.attackImageMiss);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    setTimeout(loseGame(player1), 1000);
    }
    break;
}
winGame(player2);
$player2Health.text(player2.health);
$player2Button.css('visibility', 'visible');
$player1Button.css('visibility', 'hidden');
$player2Health.css('width', player2.health);
$player1Health.css('width', player1.health);
}
else {
  $player2Button.hide();
  const player1Rando = Math.random() * 1;
  const computerRando = Math.floor(Math.random() * 4);
  switch (move) {
  case 'player1-button1':
    if (player1Rando < attacker.weapons.move1.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move1.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move1.power;
    $player2Image.css('transform', 'rotate(20deg)')
    setTimeout(function(){$player2Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move1.attackImage);
    player1AttackAnimation();
    $player1Button.css('visibility', 'hidden');
    if (opponent.health > 0) {
    setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
  }
  }
    else {
      miss(attacker);
      $player1Button.css('visibility', 'hidden');
      setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
    }
    break;
  case 'player1-button2':
    if (player1Rando < attacker.weapons.move2.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move2.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move2.power;
    $player2Image.css('transform', 'rotate(20deg)')
    setTimeout(function(){$player2Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move2.attackImage);
    player1AttackAnimation();
    $player1Button.css('visibility', 'hidden');
    if (opponent.health > 0) {
    setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
  }
    }
    else {
      miss(attacker);
      $player1Button.css('visibility', 'hidden');
      setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
    }
    break;
  case 'player1-button3':
  if (player1Rando < attacker.weapons.move3.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move3.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move3.power;
    $player2Image.css('transform', 'rotate(20deg)')
    setTimeout(function(){$player2Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move3.attackImage)
    player1AttackAnimation();
    $player1Button.css('visibility', 'hidden');
    setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
    }
    else {
    miss(attacker);
    $player1Button.css('visibility', 'hidden');
    if (opponent.health > 0) {
    setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
  }
  }
  break;
  case 'player1-button4':
  if (player1Rando < attacker.weapons.move4.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move4.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move4.power;
    $player2Image.css('transform', 'rotate(20deg)')
    setTimeout(function(){$player2Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move4.attackImage);
    player1AttackAnimation();
    $player1Button.css('visibility', 'hidden');
    setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
    }
    else {
    miss(attacker);
    $player1Button.css('visibility', 'hidden');
    if (opponent.health > 0) {
    setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
  }
  }
  break;
  case 'player1-shield':
  if (player1Rando > attacker.weapons.move5.accuracy){
    $attackText.text(attacker.name + '\'s defense has been bolstered by ' + attacker.weapons.move5.power);
    $attackImage.css('transform', 'translate(0)');
    $attackImage.attr('src', attacker.weapons.move5.attackImage);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    attacker.health += attacker.weapons.move5.power;
    $player1Health.text(attacker.health);
    loseGame(player1);
    $player1Button.css('visibility', 'hidden');
    if (opponent.health > 0) {
    setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
  }
  }
  else {
    console.log('miss');
    $attackText.text(attacker.name + '\'s shields short-circuited, ' + attacker.weapons.move5.misfire + ' health lost');
    attacker.health -= attacker.weapons.move5.misfire;
    $player1Health.text(attacker.health);
    $attackImage.css('transform', 'translate(0)');
    $attackImage.attr('src', attacker.weapons.move5.attackImageMiss);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    setTimeout(loseGame(player1), 1000);
    $player1Button.css('visibility', 'hidden');
    if (attacker.health > 0) {
    setTimeout(function(){player2Attack(player2, player1, player2MoveArray[computerRando])}, 2000);
    }
  }
    break;
}
winGame(player2);
$player2Health.text(player2.health);
$player2Health.css('width', player2.health);
$player1Health.css('width', player1.health);
}
}
///////////////////////////////////
// Attack for player 2
///////////////////////////////////
const player2Attack = (attacker, opponent, move) => {
  const player2Rando = Math.random() * 1;
  switch (move) {
  case 'player2-button1':
    if (player2Rando < attacker.weapons.move1.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move1.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move1.power;
    $player1Image.css('transform', 'rotate(-20deg)')
    setTimeout(function(){$player1Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move1.attackImage);
    player2AttackAnimation();
  }
    else {
      miss(attacker);
    }
    break;
  case 'player2-button2':
    if (player2Rando < attacker.weapons.move2.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move2.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move2.power;
    $player1Image.css('transform', 'rotate(-20deg)')
    setTimeout(function(){$player1Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move2.attackImage);
    player2AttackAnimation();
    }
    else {
      miss(attacker);
    }
    break;
  case 'player2-button3':
  if (player2Rando < attacker.weapons.move3.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move3.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move3.power;
    $player1Image.css('transform', 'rotate(-20deg)')
    setTimeout(function(){$player1Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move3.attackImage);
    player2AttackAnimation();
    }
    else {
    miss(attacker);
  }
  break;
  case 'player2-button4':
  if (player2Rando < attacker.weapons.move4.accuracy){
    $attackText.text(attacker.name + ' has dealt ' + attacker.weapons.move4.power + ' damage to ' + opponent.name);
    opponent.health -= attacker.weapons.move4.power;
    $player1Image.css('transform', 'rotate(-20deg)')
    setTimeout(function(){$player1Image.css('transform', 'rotate(0)')}, 1000);
    $attackImage.attr('src', attacker.weapons.move4.attackImage);
    player2AttackAnimation();
    }
    else {
    miss(attacker);
  }
  break;
  case 'player2-shield':
  if (player2Rando > attacker.weapons.move5.accuracy){
    $attackText.text(attacker.name + '\'s defense has been bolstered by 50 hp');
    $attackImage.css('transform', 'translate(0)');
    $attackImage.attr('src', attacker.weapons.move5.attackImage);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    attacker.health += 50;
    $player2Health.text(attacker.health);
    loseGame(player1);
  }
  else {
    // console.log('miss');
    $attackText.text(attacker.name + '\'s shields short-circuited, 10 health lost');
    attacker.health -= 10;
    $player2Health.text(attacker.health);
    $attackImage.css('transform', 'translate(0)');
    $attackImage.attr('src', attacker.weapons.move5.attackImageMiss);
    setTimeout(function(){$attackImage.attr('src', '')}, 1000);
    setTimeout(winGame(player2), 1000);
    }
    break;
}
loseGame(player1);
$player1Health.text(player1.health);
$player1Button.css('visibility', 'visible');
$player2Button.css('visibility', 'hidden');
$player2Health.css('width', player2.health);
$player1Health.css('width', player1.health);
}


//////////////////////////////////////
//Player 1 attack Animation
////////////////////////////////////////
const player1AttackAnimation = () => {
  $attackImage.css('transform', 'translate(-200px)')
  setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 100);
  setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
  setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 200);
  setTimeout(function(){$attackImage.css('transform', 'translate(200px)')}, 400);
  setTimeout(function(){$attackImage.attr('src', '')}, 500);
}







///////////////////////////
// Conan's attack animation
///////////////////////////
const player2AttackAnimation = () => {
$attackImage.css('transform', 'translate(200px)')
setTimeout(function(){$attackImage.css('transform', 'translate(100px)')}, 100);
setTimeout(function(){$attackImage.css('transform', 'translate(0px)')}, 200);
setTimeout(function(){$attackImage.css('transform', 'translate(-100px)')}, 200);
setTimeout(function(){$attackImage.css('transform', 'translate(-200px)')}, 300);
setTimeout(function(){$attackImage.attr('src', '')}, 1000);
}











// Function for missed animation
const miss = (attacker) => {
  $attackImage.css('transform', 'translate(0px)')
  $attackImage.attr('src', imageArray[8]);
  setTimeout(function(){$attackImage.attr('src', '')}, 2000);
  $attackText.text(attacker.name + '\'s attack has missed');
}
// }
//////////////////////////////////////////
// Create my general fighter class here
class Character {
  // health will be the same for both characters
  constructor(name, health, rightFacingImage, leftFacingImage, overallPower, overallAccuracy, shield, weapons){
    this.name = name
    this.health = 400
    this.rightFacingImage = rightFacingImage
    this.leftFacingImage = leftFacingImage
    this.overallPower = overallPower
    this.overallAccuracy = overallAccuracy
    this.shield = shield
    this.weapons = weapons
  }
  // Attack methods that must do accuracy function, draw away health if hit, log message, and lead to an animation
  attack(opponent, move){
  }
}

///////// Stock characters
const guy = new Character('Guy', 400, 'images/Guy-Fighter.png', 'images/flipped-Guy-Fieri.png', 'power = 9', 'accuracy = 6', 'shield = 5', {
  move1: {
    name: 'donkey sauce',
    power: 50,
    accuracy: .7,
    attackImage: 'images/Donkey_Sauce.jpg'
  },
  move2: {
    name: 'frosted tip projectiles',
    power: 20,
    accuracy: .8,
    attackImage: 'images/frosted_tips.jpg'
  },
  move3: {
    name: 'bowling shirt flamethrower',
    power: 130,
    accuracy: .3,
    attackImage: 'images/Flamethrower.png'
  },
  move4: {
    name: 'alliterative show titles',
    power: 60,
    accuracy: .5,
    attackImage: 'images/alliteration.png'
  },
  move5: {
    name: 'shield',
    power: 50,
    misfire: 10,
    accuracy: .5,
    attackImage: 'images/Fieri_Shield.jpg',
    attackImageMiss: 'images/short_circuit.png'
  }
});

const conan = new Character('Well Adjusted Adult', 400, 'images/flipped-conan.png', 'images/wellAdjustedAdult.png', 'power = 5', 'accuracy = 8', 'shield = 7', {
  move1: {
    name: 'health conscious food',
    power: 30,
    accuracy: .8,
    attackImage: 'images/healthy_food.jpg'
  },
  move2: {
    name: 'appropriate clothing',
    power: 10,
    accuracy: 1.0,
    attackImage:'images/suit.jpg'
  },
  move3: {
    name: 'midlife crisis antidote',
    power: 80,
    accuracy: .4,
    attackImage: 'images/Antidote.jpg'
  },
  move4: {
    name: 'good table manners',
    power: 40,
    accuracy: .5,
    attackImage: 'images/good_manners.jpg'
  },
  move5: {
    name: 'shield',
    power: 70,
    misfire: 20,
    accuracy: .5,
    attackImage: 'images/shield.png',
    attackImageMiss: 'images/short_circuit.png'
  }
});

const pusheen = new Character('Pusheen the Cat', 400, 'images/pusheen-rightFacing.png', 'images/pusheen.png', 'power = 8', 'accuracy = 8', 'shield = 2', {
  move1: {
    name: 'hairball',
    power: 40,
    accuracy: .9,
    attackImage: 'images/hairball.png'
  },
  move2: {
    name: 'box sitting',
    power: 20,
    accuracy: 1.0,
    attackImage:'images/pusheen_in_a_box.jpg'
  },
  move3: {
    name: 'claws',
    power: 80,
    accuracy: .4,
    attackImage: 'images/claws.png'
  },
  move4: {
    name: 'love',
    power: 60,
    accuracy: .5,
    attackImage: 'images/love.png'
  },
  move5: {
    name: 'shield',
    power: 40,
    misfire: 20,
    accuracy: .5,
    attackImage: 'images/pusheen_shield.png',
    attackImageMiss: 'images/short_circuit.png'
  }
});


// commented this out for practice console.log(player2.weapons.midlifeCrisisAntidote.power);
/// Display score
// guy.attack(player2, 'Frosted Tip Projectiles');
$(()=> {
  /// Display score

  /// All my onclick events
  $reset.on('click', ()=>{
    resetGame();
  });
  $player1Button1.on('click', ()=>{player1Attack(player1, player2, $(event.currentTarget).attr('id'))
  });
  $player1Button2.on('click', ()=>{player1Attack(player1, player2, $(event.currentTarget).attr('id'))
  });
  $player1Button3.on('click', ()=>{player1Attack(player1, player2, $(event.currentTarget).attr('id'))
  });
  $player1Button4.on('click', ()=>{player1Attack(player1, player2, $(event.currentTarget).attr('id'))
  });
  $player2Button1.on('click', ()=>{player2Attack(player2, player1, $(event.currentTarget).attr('id'))
  });
  $player2Button2.on('click', ()=>{player2Attack(player2, player1, $(event.currentTarget).attr('id'))
  });
  $player2Button3.on('click', ()=>{player2Attack(player2, player1, $(event.currentTarget).attr('id'))
  });
  $player2Button4.on('click', ()=>{player2Attack(player2, player1, $(event.currentTarget).attr('id'))
  });
  $player1Shield.on('click', () =>{player1Attack(player1, player2, $(event.currentTarget).attr('id'))
  });
  $player2Shield.on('click', () => {player2Attack(player2, player1, $(event.currentTarget).attr('id'))
  });


const $modal = $('#modal');

const $premodal = $('#premodal');

const $closeBtn = $('#close');



const openPremodal = () => {
  $premodal.css('display', 'block');
  const guy = new Character('Guy', 400, 'images/Guy-Fighter.png', 'images/flipped-Guy-Fieri.png', {
    move1: {
      name: 'donkey sauce',
      power: 50,
      accuracy: .7,
      attackImage: 'images/Donkey_Sauce.jpg'
    },
    move2: {
      name: 'frosted tip projectiles',
      power: 20,
      accuracy: .8,
      attackImage: 'images/frosted_tips.jpg'
    },
    move3: {
      name: 'bowling shirt flamethrower',
      power: 130,
      accuracy: .3,
      attackImage: 'images/Flamethrower.png'
    },
    move4: {
      name: 'alliterative show titles',
      power: 60,
      accuracy: .5,
      attackImage: 'images/alliteration.png'
    },
    move5: {
      name: 'shield',
      power: 50,
      misfire: 10,
      accuracy: .5,
      attackImage: 'images/Fieri_Shield.jpg',
      attackImageMiss: 'images/short_circuit.png'
    }
  });

  const conan = new Character('Well Adjusted Adult', 400, 'images/wellAdjustedAdult.png', 'images/flipped-conan.png', {
    move1: {
      name: 'health conscious food',
      power: 30,
      accuracy: .8,
      attackImage: 'images/healthy_food.jpg'
    },
    move2: {
      name: 'appropriate clothing',
      power: 10,
      accuracy: 1.0,
      attackImage:'images/suit.jpg'
    },
    move3: {
      name: 'midlife crisis antidote',
      power: 80,
      accuracy: .4,
      attackImage: 'images/Antidote.jpg'
    },
    move4: {
      name: 'good table manners',
      power: 40,
      accuracy: .5,
      attackImage: 'images/good_manners.jpg'
    },
    move5: {
      name: 'shield',
      power: 70,
      misfire: 20,
      accuracy: .5,
      attackImage: 'images/shield.png',
      attackImageMiss: 'images/short_circuit.png'
    }
  });
  const pusheen = new Character('Pusheen the Cat', 400, 'images/pusheen-rightFacing.png', 'images/pusheen.png', 'power = 8', 'accuracy = 8', 'shield = 2', {
    move1: {
      name: 'hairball',
      power: 40,
      accuracy: .9,
      attackImage: 'images/hairball.png'
    },
    move2: {
      name: 'box sitting',
      power: 20,
      accuracy: 1.0,
      attackImage:'images/pusheen_in_a_box.jpg'
    },
    move3: {
      name: 'claws',
      power: 80,
      accuracy: .4,
      attackImage: 'images/claws.png'
    },
    move4: {
      name: 'love',
      power: 60,
      accuracy: .5,
      attackImage: 'images/love.png'
    },
    move5: {
      name: 'shield',
      power: 40,
      misfire: 20,
      accuracy: .5,
      attackImage: 'images/pusheen_shield.png',
      attackImageMiss: 'images/short_circuit.png'
    }
  });
}

const resetGame = () => {
  player1.health = 400;
  player2.health = 400;
  $player1Health.text(player1.health);
  $player2Health.text(player2.health);
  openPremodal();
  $player1Button1.text('');
  $player1Button2.text('');
  $player1Button3.text('');
  $player1Button4.text('');
  $player1Shield.text('');
  $player2Button1.text('');
  $player2Button2.text('');
  $player2Button3.text('');
  $player2Button4.text('');
  $player2Shield.text('');
  $player1Image.css('visibility', 'hidden');
  $player2Image.css('visibility', 'hidden');
  $player1Image.css('transform', 'translate(0, 0)');
  $player2Image.css('transform', 'translate(0, 0)');
  $player1Button.css('visibility', 'visible');
  $player2Button.css('visibility', 'visible');
  $modal.css('display', 'none');
  $player1Name.text('');
  $player2Name.text('');
  $player1Health.css('width', player1.health);
  $player2Health.css('width', player2.health);
  randomPlayerSelector = Math.floor(Math.random() * 2 + 1);
}

const populateBoard = () => {
  $player1Button1.text(player1.weapons.move1.name + ' ' + player1.weapons.move1.power);
  $player1Button2.text(player1.weapons.move2.name + ' ' + player1.weapons.move2.power);
  $player1Button3.text(player1.weapons.move3.name + ' ' + player1.weapons.move3.power);
  $player1Button4.text(player1.weapons.move4.name + ' ' + player1.weapons.move4.power);
  $player1Shield.text(player1.weapons.move5.name + ' ' + player1.weapons.move5.power);
  $player2Button1.text(player2.weapons.move1.name + ' ' + player2.weapons.move1.power);
  $player2Button2.text(player2.weapons.move2.name + ' ' + player2.weapons.move2.power);
  $player2Button3.text(player2.weapons.move3.name + ' ' + player2.weapons.move3.power);
  $player2Button4.text(player2.weapons.move4.name + ' ' + player2.weapons.move4.power);
  $player2Shield.text(player2.weapons.move5.name + ' ' + player2.weapons.move5.power);
  $player1Image.attr('src', player1.rightFacingImage);
  $player2Image.attr('src', player2.leftFacingImage);
  $player2Image.css('visibility', 'visible');
  $player1Image.css('visibility', 'visible');
  $player2Button.css('visibility', 'hidden');
  $modal.css('display', 'none');
  $player1Name.text(player1.name);
  $player2Name.text(player2.name);
  randomPlayerSelector;
}
const closePremodal = () => {
  $premodal.css('display', 'none');
  openModal();
}

const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}

$
$onePlayerBtn.on('click', ()=>{
  closePremodal();
  player = 1;
  console.log(player);
});
$twoPlayerBtn.on('click', ()=>{
  closePremodal();
  player = 2;
  console.log(player);
});

  $player1Select.on('click', ()=> {
    if (player === 1){
      player1 = guy;
      if (randomPlayerSelector === 1){
        player2 = conan;
        closeModal();
        populateBoard();
      }
      else {
        player2 = pusheen;
        closeModal();
        populateBoard();
      }
    }
    else if (player === 2){
      if (player1 === conan || player1 === guy || player1 === pusheen){
        player2 = guy;
        populateBoard();
      }
      else {
        player1 = guy;
      }
      $playerSelectorButtons.text('Player 2 Select');
    }
  });

  $player2Select.on('click', ()=> {
    if (player === 1){
      player1 = conan;
      if (randomPlayerSelector === 1){
        player2 = guy;
        closeModal();
        populateBoard();
      }
      else {
        player2 = pusheen;
        closeModal();
        populateBoard();
      }
    }
    else if (player === 2){
      if (player1 === conan || player1 === guy || player1 === pusheen){
        player2 = conan;
        populateBoard();
      }
      else {
        player1 = conan;
      }
      $playerSelectorButtons.text('Player 2 Select');
    }
  });

  $player3Select.on('click', ()=> {
    console.log(randomPlayerSelector);
    if (player === 1){
      player1 = pusheen;
      if (randomPlayerSelector === 1){
        player2 = guy;
        closeModal();
        populateBoard();
      }
      else {
        player2 = conan;
        closeModal();
        populateBoard();
      }
    }
    else if (player === 2){
      if (player1 === conan || player1 === guy || player1 === pusheen){
        player2 = pusheen;
        populateBoard();
      }
      else {
        player1 = pusheen;
      }
      $playerSelectorButtons.text('Player 2 Select');
    }
  });


setTimeout(openPremodal, 200);


});
