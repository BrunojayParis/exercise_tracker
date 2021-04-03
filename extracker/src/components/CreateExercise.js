import React, { useState } from "react";

const CreateExercise = () => {
  //Hooks
  const [userName, setUser] = useState("");
  const [description, SetDescription] = useState("");
  const [duration, setDuration] = useState(0);

  //Functions

  const addUsername = (e) => {
    setUser(e.target.value);
  };
  const addDescription = (e) => {
    SetDescription(e.target.value);
  };
  const addDuration = (e) => {
    setDuration(e.target.value)
  };
  const submitButton = (e)=>{
    e.preventDefault();
    const exercise ={
      username: userName,
      description: description,
      duration: duration
    };
    console.log(exercise)

  }

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
      <input className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-black rounded shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-gray-400" type="button" value="submit" onClick={submitButton}/>
    </div>
  );
};

export default CreateExercise;
