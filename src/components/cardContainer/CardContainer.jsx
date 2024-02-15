import React, { useRef } from 'react';
import Card from '../card/Card'; 
import './CardContainer.scss';

function CardContainer({ items, openModal }) {
  const scrollContainer = useRef(null);
  const cardWidth = 395; 

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
  <button onClick={scrollLeft}></button>
  <div className="card-container-inner" ref={scrollContainer}>
    {items.map((item, index) => (
      <Card key={index} item={item} openModal={openModal} />
    ))}
  </div>
  <button onClick={scrollRight}></button>
</div>
  );
}

export default CardContainer;