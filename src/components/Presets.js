import React, { useState } from "react";
import { Button, Switch } from "@material-ui/core";

const Presets = (props) => {
  const { isRunning, randomSeed, makeGlider, makePulsar, setLifeSpeed } = props;

  const [toggleState, setToggleState] = useState(true);
  const [speedIsDefault, setSpeedIsDefault] = useState(false);

  const toggleSpeed = () => {
    // console.log(speedIsDefault, toggleState);
    setSpeedIsDefault(!speedIsDefault);
    setToggleState(!toggleState);

    speedIsDefault ? setLifeSpeed(100) : setLifeSpeed(1000);
  };

  return (
    <div className="presets">
      <p>Choose a preset:</p>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        disabled={isRunning}
        onClick={() => randomSeed()}>
        Random Seed
      </Button>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        disabled={isRunning}
        onClick={() => makeGlider()}>
        Make Glider
      </Button>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        disabled={isRunning}
        onClick={() => makePulsar()}>
        Make Pulsar
      </Button>
      <p>Choose a speed:</p>
      <div>
        <span>Slow</span>
        <Switch checked={toggleState} onChange={toggleSpeed} color="primary" name="speedToggle" />
        <span>Fast</span>
      </div>
    </div>
  );
};

export default Presets;
