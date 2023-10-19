export function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateIntMatrix(size: number, min: number, max: number): number[][] {
  size = Math.floor(size);

  const matrix = Array(size);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = [...Array(size)].map(() => getRandomIntInclusive(min, max));
  }

  return matrix;
}

export function calculateDiagonalSums(matrix: number[][]) {
  const diagonals = {
    principal: 0,
    secondary: 0,
    absoluteDifference: 0,
  };

  for (let i = 0; i < matrix.length; i++) {
    diagonals.principal += matrix[i][i];
    diagonals.secondary += matrix[i][matrix.length - i - 1];
  }

  diagonals.absoluteDifference = Math.abs(diagonals.principal - diagonals.secondary);

  return diagonals;
}
