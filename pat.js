let n = 7; // Controls the width of the hourglass
let line = "";

// Upper Part of the Hourglass
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        line += "  "; // Spaces for alignment
    }
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
        line += "* ";
    }
    line += "\n";
}
for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        line += "  "; // Spaces for alignment
    }
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
        line += "* ";
    }
    line += "\n";
}

console.log(line);
