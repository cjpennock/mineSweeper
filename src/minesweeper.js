// Terminal-based minesweeper game
const blankLine = '  |  |  ';

// Demo a blank board
console.log(`This is what a board with no guesses would look like:`);
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

// Hardcode several sample lines
const guessLine = '1 |  |  ';
const bombLine = '  | B |  ';

console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);