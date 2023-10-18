import styles from './grid.module.css';
import {drawMatrix} from "@4cee-monorepo/matrix";

export interface GridProps {
  rows: number;
  columns: number;
}

export function Grid({rows, columns}: GridProps) {
  const matrixDrawn = drawMatrix();
  console.log(matrixDrawn);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Grid!</h1>

      Will draw
      {rows}x{columns}
    </div>
  );
}

export default Grid;
