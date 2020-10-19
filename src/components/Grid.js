import React, { useState, useEffect } from "react";

const Cell = (props) => {
  const { row, col, cellClass, selectCell } = props;

  return <div className={`cell ${cellClass}`} onClick={() => selectCell(row, col)}></div>;
};

const Grid02 = () => {
  const [numRows] = useState(20);
  const [numCols] = useState(numRows);
  const [gens, setGens] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const makeEmptyGrid = () => {
    return Array(numRows)
      .fill()
      .map(() => Array(numCols).fill(false));
  };

  const copyArray = (arr) => {
    const newArray = JSON.parse(JSON.stringify(arr));
    return newArray;
  };

  const [grid, setGrid] = useState(() => makeEmptyGrid());

  const gridLayout = () => {
    const layout = [];
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        let cellClass = grid[r][c] ? "alive" : "dead";
        layout.push(
          <Cell key={`${r}-${c}`} row={r} col={c} cellClass={cellClass} selectCell={selectCell} />
        );
      }
    }

    return layout;
  };

  const selectCell = (row, col) => {
    if (isRunning) {
      return;
    }
    const gridCopy = copyArray(grid);
    gridCopy[row][col] = !grid[row][col];
    console.log(`${row}-${col}`);
    setGrid(gridCopy);
  };

  const randomSeed = () => {
    if (isRunning) {
      return;
    }
    const randomGrid = makeEmptyGrid();
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        if (Math.floor(Math.random() * 4) === 1) {
          randomGrid[r][c] = true;
        }
      }
    }
    setGens(0);
    setGrid(randomGrid);
  };

  const makeGlider = () => {
    if (isRunning) {
      return;
    }
    const newGrid = makeEmptyGrid();
    newGrid[0][1] = true;
    newGrid[1][2] = true;
    newGrid[2][0] = true;
    newGrid[2][1] = true;
    newGrid[2][2] = true;

    setGens(0);
    setGrid(newGrid);
  };

  const clearGrid = () => {
    if (isRunning) {
      return;
    }
    setGens(0);
    setGrid(makeEmptyGrid());
  };

  const runGameOfLife = () => {
    console.log("life finds a way");
    let nextGrid = copyArray(grid);

    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < numCols; c++) {
        let neighbors = 0;
        // check to see if neighbors are alive or dead
        // N
        if (r > 0) if (grid[r - 1][c]) neighbors++;
        // NE
        if (r > 0 && c > 0) if (grid[r - 1][c - 1]) neighbors++;
        // NW
        if (r > 0 && c < numCols - 1) if (grid[r - 1][c + 1]) neighbors++;
        // E
        if (c < numCols - 1) if (grid[r][c + 1]) neighbors++;
        // W
        if (c > 0) if (grid[r][c - 1]) neighbors++;
        // S
        if (r < numRows - 1) if (grid[r + 1][c]) neighbors++;
        // SE
        if (r < numRows - 1 && c > 0) if (grid[r + 1][c - 1]) neighbors++;
        // SW
        if (r < numRows - 1 && c < numCols - 1) if (grid[r + 1][c + 1]) neighbors++;
        // decide if cell is 'alive' or 'dead'
        if (grid[r][c] && (neighbors < 2 || neighbors > 3)) {
          // console.log(`kill ${r}-${c}`);
          nextGrid[r][c] = false;
        }
        if (!grid[r][c] && neighbors === 3) {
          // console.log(`live ${r}-${c}`);
          nextGrid[r][c] = true;
        }

        // console.log("inside 2x loop");
      }
      // console.log("inside 1x loop");
    }

    // console.log("right before setGrid");
    // console.table(nextGrid);
    setGrid(nextGrid);
    setGens(gens + 1);
  };

  useEffect(
    () => {
      if (isRunning) {
        let id = setInterval(runGameOfLife, 100);
        return () => clearInterval(id);
      }
    },
    // eslint-disable-next-line
    [grid, isRunning]
  );

  return (
    <>
      <p>Generation: {gens}</p>
      <div>
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={() => clearGrid()}>Clear</button>
        <br />
        <button onClick={() => randomSeed()}>Random</button>
        <button onClick={() => makeGlider()}>Make Glider</button>
      </div>
      <div className="grid" style={{ width: numCols * 20 }}>
        {gridLayout()}
      </div>
    </>
  );
};

export default Grid02;
