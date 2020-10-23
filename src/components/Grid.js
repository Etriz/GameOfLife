import React, { useState, useEffect } from "react";
// import "../sass/grid.scss";

import { Button, ButtonGroup } from "@material-ui/core";
import Presets from "./Presets";

const Cell = (props) => {
  const { row, col, cellClass, selectCell } = props;

  return <div className={`cell ${cellClass}`} onClick={() => selectCell(row, col)}></div>;
};

const Grid02 = () => {
  const [numRows] = useState(25);
  const [numCols] = useState(25);
  const [gens, setGens] = useState(0);
  const [lifeSpeed, setLifeSpeed] = useState(100);
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

  const makePulsar = () => {
    if (isRunning) {
      return;
    }
    let pulsar = [
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    ];

    setGens(0);
    setGrid(pulsar);
  };

  const clearGrid = () => {
    if (isRunning) {
      return;
    }
    setGens(0);
    setGrid(makeEmptyGrid());
  };

  const runGameOfLife = () => {
    // console.log("life finds a way");
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
    }

    // console.table(nextGrid);
    if (JSON.stringify(nextGrid) === JSON.stringify(grid)) {
      alert("The game is in a stable state");
      setIsRunning(false);
      return;
    }
    setGens(gens + 1);
    setGrid(nextGrid);
  };

  const startGame = () => {
    if (JSON.stringify(grid) === JSON.stringify(makeEmptyGrid())) {
      alert("No Cells Selected");
      return;
    }
    setIsRunning(!isRunning);
  };

  useEffect(
    () => {
      if (isRunning) {
        let id = setInterval(runGameOfLife, lifeSpeed);
        return () => clearInterval(id);
      }
    },
    // eslint-disable-next-line
    [grid, isRunning]
  );

  return (
    <>
      <div className="gridArea">
        <p>Generation: {gens}</p>
        <div className="grid" style={{ width: numCols * 20 + 4 }}>
          {gridLayout()}
        </div>
        <ButtonGroup
          className="buttongroup"
          variant="contained"
          color="primary"
          orientation="horizontal"
          disableElevation>
          <Button onClick={() => startGame()}>{isRunning ? "Stop" : "Start"}</Button>
          <Button onClick={() => clearGrid()} disabled={isRunning}>
            Clear
          </Button>
        </ButtonGroup>
      </div>
      <Presets
        randomSeed={randomSeed}
        makeGlider={makeGlider}
        makePulsar={makePulsar}
        isRunning={isRunning}
        setLifeSpeed={setLifeSpeed}
      />
    </>
  );
};

export default Grid02;
