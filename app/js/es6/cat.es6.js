/* exported Cat */
/* jshint unused:false */
/* global calculateDamage, getImage, animalId */

class Cat{
  constructor(gender, weapon, name='Mixy', age=4, photo='cat.jpg'){
    this.id = animalId++;
    this.name = name;
    this.age = age * 1;
    this.gender = gender;
    this.photo = `../media/${photo}`;
    this.species = 'cat';
    this.health = 100;
    this.weapon = weapon;
    this.weaponImg = getImage(weapon);
    this.damage = calculateDamage(weapon);
  }
}
