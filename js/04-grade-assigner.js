let score = window.prompt("Please enter the received score: ");

if (score >= 1 && score < 60) {document.write("You received an F")}

else if (score >= 60 && score <= 69) {document.write("You received a D")}

else if (score >= 70 && score <= 79) {document.write("You received a C")}

else if (score >= 80 && score <= 89) {document.write("You received a B")}

else if (score >= 90 && score <= 100) {document.write("You received an A")}

else if (score > 100 || score <= 1) {document.write("Please refresh the page and enter enter a number between 1 and 100")}