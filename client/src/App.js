import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import All from './views/All';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/pets/new"/>
        <Detail path="/pet/:id" />
        <Update path="/pet/:id/edit" />
        <All path="/"/>
      </Router>
    </div>
  );
}
export default App;



