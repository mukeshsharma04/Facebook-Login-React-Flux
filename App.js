import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/components/Header.js';
import SocialLogin from './js/components/Main.js';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <SocialLogin/>
      </div>
    );
  }
}

export default App;
