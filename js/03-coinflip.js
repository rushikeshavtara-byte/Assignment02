let coinFlip =  Math.round(Math.random());

let choice = window.prompt("Please select heads or tails?")

if (coinFlip === 0 && choice === "heads"){window.alert("The flip was heads and you chose heads...you win!")}

if (coinFlip === 1 && choice === "tails"){window.alert("The flip was tails and you chose tails...you win!")}

if (coinFlip === 1 && choice === "heads"){window.alert("The flip was tails and you chose heads...you lose!")}

if (coinFlip === 0 && choice === "tails"){window.alert("The flip was heads and you chose tails...you lose!")}

else document.write("Please refresh the page and enter heads or tails");

//document.write(coinFlip); 