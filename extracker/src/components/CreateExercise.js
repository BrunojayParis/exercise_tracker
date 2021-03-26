import React, { useState } from "react";

const CreateExercise = () => {
  //Hooks
  const [exercise, setExercise] = useState({
    userName: "",
    description: "",
    duration: 0,
    date: new Date(),
  });

  //Functions

  const addUsername = (e) => {
    setExercise({
      userName: e.target.value,
    });
  };
  const addDescription = (e) => {
    setExercise({
      description: e.target.value,
    });
  };
  const addDuration = (e) => {
    setExercise({
      duration: e.target.value,
    });
  };
  const addDate = (date) => {
    setExercise({
      date: date,
    });
  };

  return (
    <div className="flex flex-col m-5 justify-start">
        <h2 className="text-5xl py-8">create new exercise</h2>
      <form className="flex flex-col text-xl max-w-lg py-5">
        <label>username</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={addUsername} />
        <label>Description</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={addDescription} />
        <label>Duration</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" onChange={addDuration} />
      </form>
    </div>
  );
};

export default CreateExercise;
