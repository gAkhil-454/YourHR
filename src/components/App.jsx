import React from 'react';
import Homepage from './Homepage';
import SingupPage from './SignupPage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/signupPage' element={<SingupPage />} />
      </Routes>
    </Router>
  );
}

export default App;