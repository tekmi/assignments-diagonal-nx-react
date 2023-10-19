// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import Grid from './grid/grid';
import { ChangeEvent, useLayoutEffect, useMemo, useState } from 'react';
import { calculateDiagonalSums, generateIntMatrix } from '@4cee-monorepo/matrix';

export function App() {
  const [gridSize, setGridSize] = useState<number>(2);
  const [maxGridSize, setMaxGridSize] = useState<number>(4);

  let [matrix, diagonalSums] = useMemo(() => {
    const matrix = generateIntMatrix(gridSize, -100, 100);
    const diagonalSums = calculateDiagonalSums(matrix);

    return [matrix, diagonalSums];
  }, [gridSize]);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight - 150;

      const maxGridSize = width < height ? Math.round(width / 40) : Math.round(height / 40);

      setMaxGridSize(maxGridSize);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (gridSize > maxGridSize) {
    setGridSize(maxGridSize);
  }

  function changeGridSize(event: ChangeEvent<HTMLInputElement>) {
    setGridSize(Number(event.currentTarget.value));
  }

  return (
    <>
      <section aria-label="Grid size">
        <form>
          <label htmlFor="size">Grid size: </label>
          <input
            min={2}
            max={maxGridSize}
            step={1}
            id="size"
            name="size"
            type="number"
            value={gridSize}
            onChange={changeGridSize}
          />
        </form>
      </section>
      <section aria-label="Grid">
        <Grid matrix={matrix} />
      </section>
      <section className={styles['info']} aria-label="Grid information">
        <div>
          Principal diagonal: <strong>{diagonalSums.principal}</strong>
        </div>
        <div>
          Secondary diagonal: <strong>{diagonalSums.secondary}</strong>
        </div>
        <div>
          Absolute difference: <strong className="double-underline">{diagonalSums.absoluteDifference}</strong>
        </div>
      </section>
    </>
  );
}

export default App;
