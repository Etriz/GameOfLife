import React from "react";

const Rules = () => {
  return (
    <div className="rules">
      <p>The rules for the simulation are:</p>
      <p>
        The grid has an area of 25x25 squares.
        <br />
        All squares inside the grid can be in
        <br />
        either an 'alive' or 'dead' state and all
        <br />
        squares outside the grid are considered 'dead'.
      </p>
      <p>
        In each generation every square checks its 8<br />
        neighbors to see how it will behave next generation.
      </p>
      <p>
        Any live cell with fewer than two live
        <br />
        neighbours dies, as if by underpopulation.
      </p>
      <p>
        Any live cell with two or three live
        <br />
        neighbours lives on to the next generation.
      </p>
      <p>
        Any live cell with more than three
        <br />
        live neighbours dies, as if by overpopulation.
      </p>
      <p>
        Any dead cell with exactly three live
        <br />
        neighbours becomes a live cell, as if by reproduction.
      </p>
      <p>
        Click a preset button or any squares in the grid
        <br />
        to set the starting state.
      </p>
    </div>
  );
};

export default Rules;
