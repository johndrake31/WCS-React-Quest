import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './components/Contact';


export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <div id="container">
        <Contact deleteAble={true} name="Emmanuel" email="emmanuel@email.com" phone="552312354" />
        <Contact deleteAble={true} name="Johana" email="johana@email.com" phone="92034902" />
        <Contact deleteAble={false} name="Lucas" email="lucas@email.com" phone="234983499" />
        <Contact deleteAble={true} name="Marie" email="marie@email.com" phone="238942384" />
        <Contact deleteAble={true} name="Pedro" email="pedro@email.com" phone="934584875" />
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
