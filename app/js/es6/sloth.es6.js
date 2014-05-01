/* exported Sloth */
/* jshint unused:false */
/* global calculateDamage, getImage, animalId */

class Sloth{
  constructor(gender, weapon, name='Sid', age=3, photo='sloth.jpg'){
    this.id = animalId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'sloth';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculateDamage(weapon);
  }
}
