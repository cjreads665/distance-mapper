import React, { useState } from "react";
import axios from "axios";
import { geoCoding } from "../api/api";
import FormComponent from "../FormComponent";
import useStore from "../context/useStore";
const Origin = () => {
  let { from, setFrom, fromList, setFromList, fromCenter, setFromCenter } = useStore();
  return (
    <FormComponent
    label={'Origin'} input={from} setInput={setFrom}
     setList={setFromList} list={fromList} setAxis={setFromCenter} />
  );
};

export default Origin;
