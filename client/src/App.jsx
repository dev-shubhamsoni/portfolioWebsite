import './App.scss'
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { Section1 } from './components/section1/section1.component';
import { LeftBar } from './components/left bar/leftBar.component';
import { BottomBar } from './components/bottom-bar/bottombar.component';

import { AboutDropDown } from './components/dropdowns/about/aboutDropDown.component';
import { ProjectDropDown } from './components/dropdowns/projects/projectDropDown.component';
import { Contact } from './components/dropdowns/contact/contact.component';


import { useState} from 'react';

function App() {


  //////////////////////////////////////////////
  // -----> Mouse Follower code START <----- //
  //////////////////////////////////////////////

  MouseFollower.registerGSAP(gsap);

  const cursor = new MouseFollower({
    container: document.body,
    speed: 0.8,
    skewingText: 2,
    // stickDelta: 0.10,
  });

  //////////////////////////////////////////////
  // -----> Mouse Follower code ENDS <----- //
  //////////////////////////////////////////////

  //////////////////////////////////////////////
  // -----> Dropdown Code Start <----- //
  //////////////////////////////////////////////

  // About Drop Down
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setContactIsOpen(false);
    setProjectIsOpen(false);
    setIsOpen(!isOpen);

  };

  // Project dropdown

  const [projectIsOpen, setProjectIsOpen] = useState(false);

  const projectHandleButtonClick = () => {
    setIsOpen(false);
    setContactIsOpen(false);
    setProjectIsOpen(!projectIsOpen);
  }

  // Contact dropdown

  const [contactIsOpen, setContactIsOpen] = useState(false);

  const contactHandleButtonClick = () => {
    setProjectIsOpen(false);
    setIsOpen(false);
    setContactIsOpen(!contactIsOpen);
  }


  //////////////////////////////////////////////
  // -----> Dropdown Code End <----- //
  //////////////////////////////////////////////

  return (
    <div className='wholeBody relative px-[1rem]'>

      {/* Left Bar */}
      <LeftBar
        handleButtonClick={handleButtonClick}
        projectHandleButtonClick={projectHandleButtonClick}
        contactHandleButtonClick={contactHandleButtonClick}
      />
      {/* Bottom bar */}
      <BottomBar />
        {/* Main Section */}
      <div className='  
        md:ml-[5%] md:pb-[5rem]
      '>
        <Section1 contactHandleButtonClick={contactHandleButtonClick} />
        {/* Dropdowns */}
        <AboutDropDown isOpen={isOpen} setIsOpen={setIsOpen} />
        <ProjectDropDown projectIsOpen={projectIsOpen} setProjectIsOpen={setProjectIsOpen} />
        <Contact contactIsOpen={contactIsOpen} setContactIsOpen={setContactIsOpen} />
      </div>
    </div>
  )
}

export default App
