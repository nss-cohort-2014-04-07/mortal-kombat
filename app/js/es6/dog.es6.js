/* exported Dog */
/* jshint unused:false */
/* global calculateDamage, getImage, animalId */

class Dog{
  constructor(gender, weapon, name='Lassy', age=9, photo='dog.jpg'){
    this.id = animalId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'dog';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculateDamage(weapon);
  }
}
