import React from 'react';

//components
import CookingHeader from './components/header';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <CookingHeader />
        <h1>Привет мир!</h1>
      </div>
    );
  }
}

export default App;
