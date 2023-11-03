// USS Assembly - attacks first

// 6 Aliens - we attack them one at a time

// if we destroy all 6 aliens we win

// hull, firepower, accuracy

// USS Assembly starts out with:
// hull = 20
// firepower = 5
// accuracy = 0.7

// Aliens (each one) have following ranged properties
// (determined randomly)

// (3 <= hull <= 6)
// (2 <= firepower <= 4)
// (0.6 <= accuracy <= 0.8)

let hull = 5
let firepower = 5
let accuracy = 0.7

function rangedRandom(min, max) {
  let rand = Math.random()
  // now we need to have rand = 0 correspond to min
  // and rand = 1 correspond to max
  // rand will represent the percentage travel from min to max
  return min + rand * (max - min)
}



for (i = 0; i<= 5; i++) {
  // let the games begin!
  let alien_hull = rangedRandom(3, 6)
  
  let shield

  let alien_shield
  let alien_firepower
  let alien_accuracy

  let n = 0
  do {
    n++
    if(n % 2 != 0) {
      // we attack first
      alien_shield = Math.random()
      if (accuracy > alien_shield) {
        // we hit the alien!
        alien_hull -= firepower
      }
    } else {
      // alien attacks
      shield = Math.random()

      alien_firepower = rangedRandom(2, 4)
      alien_accuracy = rangedRandom(0.6, 0.8)
      if (alien_accuracy > shield) {
        // we are hit!
        hull -= alien_firepower
      }
    }
    console.log(i, '  ', hull, '  ', alien_hull)

  } while (alien_hull > 0 && hull > 0)

  if(hull <= 0) {
    // Game Over!  we lose :(
    console.log('Game Over!  We lose :(')
    break
  }
}
