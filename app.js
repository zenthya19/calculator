let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn");


function operate() {
	Array.prototype.forEach.call(buttons, function(button) {
		button.addEventListener('click', () => {
			if(button.textContent != "=" &&
				 button.textContent != "+" &&
				 button.textContent != "-" &&
				 button.textContent != "*" &&
				 button.textContent != "/" &&
				 button.textContent != "C" &&
				 button.textContent != "<=") {
				display.value += button.textContent;
			} else if(button.textContent === "+") {
					add();
			} else if(button.textContent === "-") {
					subtract();
			} else if(button.textContent === "*") {
					multi();
			} else if(button.textContent === "/") {
					divide();
			} else if(button.textContent === "=") {
					equals();
			}	else if(button.textContent === "C") {
					clear();
			} else if(button.textContent === "<=") {
					eraseNum();
			}
		})
	})
}

operate();



function add() {
	display.value += "+";
}

function subtract() {
	display.value += "-"
}

function multi() {
	display.value += "*"
}

function divide() {
	display.value += "/"
}


function equals() {
	if(eval(display.value) == "Infinity") {
		display.value = "Not happening!"
	} else {
		display.value = eval(display.value);
	}
}

function clear() {
	display.value = "";
}

function eraseNum() {
	display.value = display.value.substring(0, display.value.length -1)
}

document.getElementById('display').disabled = true;

document.addEventListener('keydown', function(event) {
	let key = event.key;
	if(Number(key) >= 0 || Number(key) <= 9) {
		display.value += event.key;
	} else if(key === "=" || key === "Enter") {
		event.preventDefault();
		equals();
	} else if(key === "+") {
		add();
	} else if(key === "-") {
		subtract();
	} else if(key === "*") {
		multi();
	} else if(key === "/") {
		divide();
	} else if(key === "Delete") {
		clear();
	} else if(key === "Backspace") {
		eraseNum();
	} else if(key === ".") {
		display.value += event.key;
	}
})