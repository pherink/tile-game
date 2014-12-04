"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

// Inventory
var key_count = 0;
var gem_count = 0;

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
    /* if occupants[key_place.y][key_place.x] {
    	key_count = key_count + 1;
    } */
    occupants[protagonist.y][protagonist.x] = protagonist.element;
    render();
}

function select_character(selection) {
	protagonist.element = selection;
	render();
}
document.addEventListener('keydown', key_pressed_down);
chr_cat_girl.addEventListener('click',select_character(chr_cat_girl));
chr_boy.addEventListener('click',select_character(chr_boy));
chr_horn_girl.addEventListener('click',select_character(chr_horn_girl));
chr_princess_girl.addEventListener('click',select_character(chr_princess_girl));
chr_pink_girl.addEventListener('click',select_character(chr_pink_girl));

