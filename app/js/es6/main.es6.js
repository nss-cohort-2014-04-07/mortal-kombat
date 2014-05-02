/* global Dragon:true, Alien:true, Predator:true, Ninja:true */
/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  let creatures = [];

  function init(){
    $('#add').click(add);
    $('#opponents').on('click', '.training', train);
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
    let creature;

    switch(species){
      case 'Dragon':
        creature = new Dragon(gender, weapon, name, age, photo);
        break;
      case 'Alien':
        creature = new Alien(gender, weapon, name, age, photo);
        break;
      case 'Predator':
        creature = new Predator(gender, weapon, name, age, photo);
        break;
      case 'Ninja':
        creature = new Ninja(gender, weapon, name, age, photo);
    }

    creatures.push(creature);
    display(creature);
  }

  function display(creature){
    $(`#${creature.species}s`).append(`<div data-id=${creature.id} class=${creature.species}>
                                       <div class=photo style='background-image:url("${creature.photo}")'></div>
                                       <div class=meta>
                                         <div class=name>name: ${creature.name}</div>
                                         <div class=age>age: ${creature.age}</div>
                                         <div class=gender>gender: ${creature.gender}</div>
                                         <div class=health>health: ${creature.health}%</div>
                                         <div class=weapon><img src=${creature.weaponImg}></div>
                                         <div class=damage>damage: ${creature.damage}</div>
                                       </div>
                                       <div class=action>
                                         <a href=# class='training button button-rounded button-action button-tiny'>T</a>
                                       </div>
                                     </div>`);
  }
})();
