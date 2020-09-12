import React from 'react';
import { faInfoCircle,faGem, faBook, faAddressBook, faBars, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SideBar from './components/Sidebar'
import About from './components/About'
import Skills from './components/Skills'
import Academics from './components/Academics'
import Contacts from './components/Contacts'


import './App.css';

const numbers = [{text:'About me', icon:faInfoCircle},
                { text: 'Skills', icon: faGem },
                { text: 'Academics', icon: faBook },  
                { text: 'Contacts', icon: faAddressBook }];

function App() {
  const [visible, setVisible] = React.useState(false);
  const [currentView, setCurrentView] = React.useState('About me');

  function getCurrentView(view){
    switch (view) {
      case 'Skills':
        return <Skills key='skills'/>
      case 'About me':
        return <About key='about' />
      case 'Academics':
        return <Academics key='academics' />
      case 'Contacts':
        return <Contacts key='contacts' />
      default:
        return <About key='about' />;
    }
  }

  return (
    <div className="App">
      <SideBar numbers={numbers} visibility={visible} onMouseLeave={() => setVisible(false)} viewSetting={setCurrentView} />
      <div className='Content'>
        <div className='Title'>
          <FontAwesomeIcon icon={faBars} className='Menu-icon' onMouseEnter={() => setVisible(true)}/>
          {currentView}
        </div>
        <header className="App-header" onMouseEnter={() => setVisible(false)}>

            {getCurrentView(currentView)}

          {/*<img src='https://veadoverde.pt/wp-content/uploads/2018/08/Landscape-logo-300x234.png' className="App-logo" alt="logo" />
          <p>
           Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="./Home"
            target="_blank"
           rel="noopener noreferrer"
         >
            Learn React
         </a>
         <button onClick={() => setVisible(!visible)}>Show/Hide</button>*/}
        </header>
      </div>
    </div>
  );
}

export default App;
