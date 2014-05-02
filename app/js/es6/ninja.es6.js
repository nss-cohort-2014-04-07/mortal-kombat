/* exported Ninja */
/* jshint unused:false */
/* global calculateDamage, getImage, animalId */

class Ninja{
  constructor(gender, weapon, name='Sid', age=3, photo='ninja.jpg'){
    this.id = animalId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'ninja';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculateDamage(weapon);
  }
}
