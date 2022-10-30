const field = [
  [0, 2, 4, 8],
  [0, 0, 0, 0],
  [0, 2, 2, 8],
  [0, 2, 2, 2],
];

const moves = "U U U";

solution(field, moves);

function solution(field, moves) {
  let moveArray = moves.split(" ");

  for (let i = 0; i < moveArray.length; i++) {
    if (moveArray[i] == "U") {
      
      for (let y = 0; y < 4; y++) {
        
        for (let x = 0; x < 3; x++) {
          let index = -1;
          if (field[x][y] == 0) {
            index = x;
          }
          let equal = -1;
          let zero = -1;
          for (let iterator = 1; x + iterator < 4; iterator++) {
            if (index != -1 &&
                field[x + iterator][y] != 0) {
              zero = iterator;
            }
            if (field[x + iterator][y] == 0 && zero != -1) {
              zero = iterator;
            } else if (field[x + iterator][y] == field[x][y]) {
              equal = iterator;
            }

            if (field[x + iterator][y] != field[x][y] &&
               field[x + iterator][y] != 0) {
              break;
            }
          }

          if (zero != -1) {
            field[x][y] = field[x + zero][y];
            field[x + zero][y] = 0;
          }

          if (equal != -1) {
            field[x][y] += field[x + equal][y];
            field[x + equal][y] = 0;
          }
        }
        
      }
      
    }

    if (moveArray[i] == "D") {
      for (let y = 0; y < 4; y++) {
        
        for (let x = 0; x < 3; x++) {
          let index = -1;
          if (field[x][y] == 0) {
            index = x;
          }
          let equal = -1;
          let zero = -1;
          for (let iterator = 1; x + iterator < 4; iterator++) {
            if (index != -1 &&
                field[x + iterator][y] != 0) {
              zero = iterator;
            }
            if (field[x + iterator][y] == 0 && zero != -1) {
              zero = iterator;
            } else if (field[x + iterator][y] == field[x][y]) {
              equal = iterator;
            }

            if (field[x + iterator][y] != field[x][y] &&
               field[x + iterator][y] != 0) {
              break;
            }
          }

          if (zero != -1) {
            field[x][y] = field[x + zero][y];
            field[x + zero][y] = 0;
          }

          if (equal != -1) {
            field[x][y] += field[x + equal][y];
            field[x + equal][y] = 0;
          }
        }
        
      }
    }
  }
}

console.log(field);