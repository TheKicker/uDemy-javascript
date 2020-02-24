const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown - you click and hold (down)
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup - you click and release (up)
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter - you enter the initial parent element (div containing button)
// card.addEventListener('mouseenter', runEvent);
// Mouseleave - you leave the initial parent element (div containing button)
// card.addEventListener('mouseleave', runEvent);

// Mouseover - you enter the object
// card.addEventListener('mouseover', runEvent);
// Mouseout - you enter the object
// card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent (e) {
	console.log(`EVENT TYPE: ${e.type}`);

	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
