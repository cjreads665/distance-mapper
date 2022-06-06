import React, { useState } from "react";
import FormComponent from "../FormComponent";
import useStore from "../context/useStore";
const Origin = () => {
    let [open,setOpen] = useState(false)
  let { from, setFrom, fromList, setFromList, fromCenter, setFromCenter } = useStore();
  return (
    <FormComponent
    label={'Origin'} input={from} setInput={setFrom} open={open} setOpen={setOpen}
     setList={setFromList} list={fromList} setAxis={setFromCenter} />
  );
};

export default Origin;
