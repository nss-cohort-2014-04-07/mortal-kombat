/* global Dragon:true, Dog:true, Cat:true, Sloth:true */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  let animals = [];

  function init(){
    $('#add').click(add);
    $('#animals').on('click', '.training', train);
  }

  function train(event){
    event.preventDefault();
  }

  function add(){
    let species = $('#species').val();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;
    let gender = $('#gender').val();
    let photo = $('#photo').val() || undefined;
    let weapon = $('#weapon').val();
    let animal;

    switch(species){
      case 'Dragon':
        animal = new Dragon(gender, weapon, name, age, photo);
        break;
      case 'Dog':
        animal = new Dog(gender, weapon, name, age, photo);
        break;
      case 'Cat':
        animal = new Cat(gender, weapon, name, age, photo);
        break;
      case 'Sloth':
        animal = new Sloth(gender, weapon, name, age, photo);
    }

    animals.push(animal);
    display(animal);
  }

  function display(animal){
    $(`#${animal.species}s`).append(`<div data-id=${animal.id} class=${animal.species}>
                                       <div class=photo style='background-image:url("${animal.photo}")'></div>
                                       <div class=meta>
                                         <div class=name>name: ${animal.name}</div>
                                         <div class=age>age: ${animal.age}</div>
                                         <div class=gender>gender: ${animal.gender}</div>
                                         <div class=health>health: ${animal.health}%</div>
                                         <div class=weapon><img src=${animal.weaponImg}></div>
                                         <div class=damage>damage: ${animal.damage}</div>
                                       </div>
                                       <div class=action>
                                         <a href=# class='training button button-rounded button-action button-tiny'>T</a>
                                       </div>
                                     </div>`);
  }
})();
