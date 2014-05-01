/* exported Dragon */
/* jshint unused:false */
/* global calculateDamage, getImage, animalId */

class Dragon{
  constructor(gender, weapon, name='Drago', age=7, photo='dragon.jpg'){
    this.id = animalId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'dragon';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculateDamage(weapon);
  }
}
