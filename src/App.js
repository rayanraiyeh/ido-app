import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import LogIn from './conponents/log-in/log-in';
import Todo from './conponents/todo-list/todo/todo';

function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/todolist' element={<Todo />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
