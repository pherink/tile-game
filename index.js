"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Inventory
var key_count = 0;
var gem_count = 0;
var heart_count = 0;

// Interaction

var left_arrow_key = 37;
var up_arrow_key = 38;
var right_arrow_key = 39;
var down_arrow_key = 40;

function key_pressed_down(event) {
    occupants[protagonist.y][protagonist.x] = undefined;
    if (event.keyCode === left_arrow_key) {
        if (is_in_bounds(protagonist.x - 1, protagonist.y)) {
            protagonist.x = protagonist.x - 1;
        }
    }
    if (event.keyCode === right_arrow_key) {
        if (is_in_bounds(protagonist.x + 1, protagonist.y)) {
            protagonist.x = protagonist.x + 1;
        }
    }
    if (event.keyCode === up_arrow_key) {
        if (is_in_bounds(protagonist.x, protagonist.y - 1)) {
            protagonist.y = protagonist.y - 1;
        }
    }
    if (event.keyCode === down_arrow_key) {
        if (is_in_bounds(protagonist.x, protagonist.y + 1)) {
            protagonist.y = protagonist.y + 1;
        }
    }
    // Here is where the pickup conditional must be added, if key is present add 1 to inventory before moving character
    if (occupants[key_place.y][key_place.x]) {
    	key_count = key_count + 1;
    	document.getElementById("keys").innerHTML = key_count;
    }
    if (occupants[gem_place.y][gem_place.x]){
    	gem_count += 1;
    	document.getElementById("gems").innerHTML = gem_count;
    }
    if (occupants[heart_place.x][heart_place.y]){
    	heart_count+=1;
    	document.getElementById("hearts").innerHTML = heart_count;
    }
    occupants[protagonist.y][protagonist.x] = protagonist.element;
    render();
    
}

document.addEventListener('keydown', key_pressed_down);
