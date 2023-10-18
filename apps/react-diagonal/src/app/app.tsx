// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import Grid from "./grid/grid";
import {ChangeEvent, useState} from "react";

export function App() {
  const [gridSize, setGridSize] = useState<number>(2);

  function changeSize(event: ChangeEvent<HTMLInputElement>) {
    setGridSize(Number(event.currentTarget.value));
  }

  return (
    <div>
      <form>
         <label htmlFor="size">Grid size</label>
         <input min={2} step={1} id="size" name="size" type="number" value={gridSize} onChange={changeSize} />
      </form>
      <p>Will draw grid {gridSize}x{gridSize}</p>
      <Grid rows={gridSize} columns={gridSize} />
    </div>
  );
}

export default App;
