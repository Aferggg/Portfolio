import React, { useRef, useState, useEffect } from 'react';
import Card from '../card/Card'; 
import './CardContainer.scss';

function CardContainer({ items, openModal }) {
  const scrollContainer = useRef(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const cardWidth = 395; 

  const checkScrollPosition = () => {
    if (scrollContainer.current.scrollLeft > 0) {
      setShowLeftScroll(true);
    } else {
      setShowLeftScroll(false);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    scrollContainer.current.addEventListener('scroll', checkScrollPosition);
    return () => {
      scrollContainer.current.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scrollLeft = () => {
    scrollContainer.current.scrollTo({
      left: scrollContainer.current.scrollLeft - cardWidth * 3,
      behavior: 'smooth'
    });
  };
  
  const scrollRight = () => {
    scrollContainer.current.scrollTo({
      left: scrollContainer.current.scrollLeft + cardWidth * 3,
      behavior: 'smooth'
    });
  };

  return (
    <div className="card-container-outer">
      {showLeftScroll && <button onClick={scrollLeft}></button>}
      <div className="card-container-inner" ref={scrollContainer}>
        {items.map((item, index) => (
          <Card key={index} item={item} openModal={openModal} />
        ))}
      </div>
      {items.length > 3 && <button onClick={scrollRight}></button>}
    </div>
  );
}

export default CardContainer;