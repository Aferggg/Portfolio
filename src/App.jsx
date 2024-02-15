import React, { useState } from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from './components/portfolio/Portfolio';
// import Works from './components/works/Works';
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/Contact';
import "./app.scss";
import Menu from "./components/menu/Menu";
import Landing from './components/landing/landing';
import Modal from './components/modal/Modal'; 

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null); 

  const openModal = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Landing/>
       <Portfolio openModal={openModal}/> 
       {/* <Works/> */}
       <Testimonials/>
       <Contact/>
     </div>
     {isModalOpen && currentItem && <Modal item={currentItem} closeModal={closeModal} />}
    </div>
  );
}

export default App;