import styles from './grid.module.css';

export interface GridProps {
  matrix: number[][];
}

export function Grid({ matrix }: GridProps) {
  const size = matrix.length;

  return (
    <div
      className={styles['matrix']}
      style={{
        grid: `repeat(${size}, 40px) / repeat(${size}, 40px)`,
      }}
    >
      {matrix.map((row, r) =>
        row.map((column, c) => {
          const classes = [
            styles['matrix__item'],
            r === c ? styles['matrix__item--diagonal-principal'] : '',
            r + c === size - 1 ? styles['matrix__item--diagonal-secondary'] : '',
          ] as string[];

          return (
            <div className={classes.join(' ')} key={r + c}>
              {column}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Grid;
