import React, { useState } from "react";

import Presets from "./Presets";

const Cell = (props) => {
  const { i, j, grid, setGrid } = props;
  const [alive, setAlive] = useState("");
  return (
    <div
      className={`cell ${alive}`}
      key={`${i}-${j}`}
      onClick={() => {
        console.log(`${i}-${j}, was ${grid[i][j]}`);
        const changeGrid = grid;

        changeGrid[i][j] = changeGrid[i][j] ? 0 : 1;
        changeGrid[i][j] ? setAlive("alive") : setAlive("");

        setGrid(changeGrid);
        console.log(`${i}-${j}, is now ${grid[i][j]}`);
      }}
    />
  );
};

const Grid = () => {
  const [rows, setRows] = useState(25);
  const [cols, setCols] = useState(rows);

  const makeGrid = () => {
    const layout = [];
    for (let i = 0; i < rows; i++) {
      layout.push(Array.from(Array(cols), () => 0));
    }

    return layout;
  };

  const [grid, setGrid] = useState(makeGrid);

  return (
    <>
      <div
        className="grid"
        style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 20px)` }}>
        {grid.map((rows, i) =>
          rows.map((cols, j) => {
            return <Cell i={i} j={j} grid={grid} setGrid={setGrid} />;
          })
        )}
      </div>
      <Presets />
    </>
  );
};

export default Grid;
