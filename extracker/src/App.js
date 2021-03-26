import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Navbar from "./components/Navbar.js";
import ExercisesList from "./components/ExercisesList";
import EditExercises from "./components/EditExercises";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div className="py-10">
        <Navbar />
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route path="/" exact component={ExercisesList}></Route>
          <Route path="/edit/:id" component={EditExercises}></Route>
          <Route path="/create" component={CreateExercise}></Route>
          <Route path="/users" component={CreateUser}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
